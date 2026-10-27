"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Download, ImagePlus, Plus, Trash2 } from "lucide-react";
import { baits, rigs, species } from "@/lib/data";
import { CatchPhoto } from "@/components/catch-photo";
import { deleteCatchPhoto, saveCatchPhoto } from "@/lib/local-catch-photos";

type Session = { id: string; date: string; location: string; tripType: "shore" | "boat"; boatName?: string; launchPlace?: string; target: string; bait: string; rig: string; notes: string; photoId?: string };
const storageKey = "tide-tackle-logbook";
const changedEvent = "fishing-logbook-changed";
const emptySessions: Session[] = [];
let previousStorageValue: string | null | undefined;
let cachedSessions: Session[] = emptySessions;

function getSessionsSnapshot(): Session[] {
  const raw = localStorage.getItem(storageKey);
  if (raw === previousStorageValue) return cachedSessions;
  previousStorageValue = raw;
  try {
    cachedSessions = JSON.parse(raw ?? "[]") as Session[];
  } catch {
    cachedSessions = emptySessions;
  }
  return cachedSessions;
}

function subscribeToSessions(onChange: () => void) {
  window.addEventListener(changedEvent, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(changedEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function Logbook() {
  const sessions = useSyncExternalStore(subscribeToSessions, getSessionsSnapshot, () => emptySessions);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [tripType, setTripType] = useState<"shore" | "boat">("shore");
  const [boatName, setBoatName] = useState("");
  const [launchPlace, setLaunchPlace] = useState("");
  const [target, setTarget] = useState("");
  const [bait, setBait] = useState("");
  const [rig, setRig] = useState("");
  const [notes, setNotes] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => () => {
    if (photoPreview) URL.revokeObjectURL(photoPreview);
  }, [photoPreview]);

  function persist(next: Session[]) {
    localStorage.setItem(storageKey, JSON.stringify(next));
    window.dispatchEvent(new Event(changedEvent));
  }

  async function addSession(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = crypto.randomUUID();
    setSaving(true);
    setPhotoError("");
    let photoSaved = false;
    try {
      if (photo) {
        await saveCatchPhoto(id, photo);
        photoSaved = true;
      }
      persist([{ id, date, location, tripType, boatName: tripType === "boat" ? boatName : "", launchPlace: tripType === "boat" ? launchPlace : "", target, bait, rig, notes, photoId: photo ? id : undefined }, ...sessions]);
      setLocation("");
      setBoatName("");
      setLaunchPlace("");
      setNotes("");
      setPhoto(null);
      setPhotoPreview(null);
    } catch (error) {
      if (photoSaved) await deleteCatchPhoto(id).catch(() => undefined);
      setPhotoError(error instanceof Error ? error.message : "Could not save this fishing record.");
    } finally {
      setSaving(false);
    }
  }

  async function selectPhoto(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    event.currentTarget.value = "";
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setPhotoError("Choose a JPEG, PNG or WebP image.");
      setPhoto(null);
      setPhotoPreview(null);
      event.target.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setPhotoError("Choose an image smaller than 5 MB.");
      setPhoto(null);
      setPhotoPreview(null);
      event.target.value = "";
      return;
    }
    try {
      const bitmap = await createImageBitmap(file);
      bitmap.close();
    } catch {
      setPhotoError("That file could not be decoded as an image.");
      setPhoto(null);
      setPhotoPreview(null);
      event.target.value = "";
      return;
    }
    setPhotoError("");
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function removeSession(session: Session) {
    persist(sessions.filter((item) => item.id !== session.id));
    if (session.photoId) await deleteCatchPhoto(session.photoId).catch(() => undefined);
  }

  function exportLog() {
    const exportRecords = sessions.map(({ photoId, ...session }) => ({ ...session, hasCatchPhoto: Boolean(photoId) }));
    const file = new Blob([JSON.stringify(exportRecords, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(file);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "ace-fishing-guide-logbook.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
    <form onSubmit={addSession} className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5">
      <h2 className="display-font text-2xl">Log a fishing trip</h2><p className="mt-1 text-sm text-[#687972]">Shore and boat trips stay private in this browser.</p>
      <fieldset className="mt-4"><legend className="text-xs font-semibold text-[#62736d]">Trip type</legend><div className="mt-2 grid grid-cols-2 gap-2"><label className={`flex min-h-10 cursor-pointer items-center justify-center rounded-lg border text-sm font-semibold ${tripType === "shore" ? "border-[#176b67] bg-[#dce9e2] text-[#26635a]" : "border-[#d9ded8] text-[#62736d]"}`}><input type="radio" name="trip-type" value="shore" checked={tripType === "shore"} onChange={() => setTripType("shore")} className="sr-only" />Shore / sea</label><label className={`flex min-h-10 cursor-pointer items-center justify-center rounded-lg border text-sm font-semibold ${tripType === "boat" ? "border-[#176b67] bg-[#dce9e2] text-[#26635a]" : "border-[#d9ded8] text-[#62736d]"}`}><input type="radio" name="trip-type" value="boat" checked={tripType === "boat"} onChange={() => setTripType("boat")} className="sr-only" />Boat trip</label></div></fieldset>
      <label className="mt-4 block text-xs font-semibold text-[#62736d]">Date<input type="date" required value={date} onChange={(event) => setDate(event.target.value)} className="mt-1 h-10 w-full rounded-lg border border-[#d9ded8] bg-white px-3 text-sm font-normal" /></label>
      <label className="mt-3 block text-xs font-semibold text-[#62736d]">Location<input value={location} onChange={(event) => setLocation(event.target.value)} required placeholder="Place or private mark name" className="mt-1 h-10 w-full rounded-lg border border-[#d9ded8] bg-white px-3 text-sm font-normal" /></label>
      {tripType === "boat" && <div className="mt-3 grid grid-cols-2 gap-3"><label className="text-xs font-semibold text-[#62736d]">Boat / charter<input value={boatName} onChange={(event) => setBoatName(event.target.value)} className="mt-1 h-10 w-full rounded-lg border border-[#d9ded8] bg-white px-2 text-sm font-normal" placeholder="Optional" /></label><label className="text-xs font-semibold text-[#62736d]">Port / launch point<input value={launchPlace} onChange={(event) => setLaunchPlace(event.target.value)} className="mt-1 h-10 w-full rounded-lg border border-[#d9ded8] bg-white px-2 text-sm font-normal" placeholder="Optional" /></label></div>}
      <label className="mt-3 block text-xs font-semibold text-[#62736d]">Species<select value={target} onChange={(event) => setTarget(event.target.value)} className="mt-1 h-10 w-full rounded-lg border border-[#d9ded8] bg-white px-3 text-sm font-normal"><option value="">Not recorded</option>{species.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label>
      <div className="mt-3 grid grid-cols-2 gap-3"><label className="text-xs font-semibold text-[#62736d]">Bait<select value={bait} onChange={(event) => setBait(event.target.value)} className="mt-1 h-10 w-full rounded-lg border border-[#d9ded8] bg-white px-2 text-sm font-normal"><option value="">Not recorded</option>{baits.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label><label className="text-xs font-semibold text-[#62736d]">Rig<select value={rig} onChange={(event) => setRig(event.target.value)} className="mt-1 h-10 w-full rounded-lg border border-[#d9ded8] bg-white px-2 text-sm font-normal"><option value="">Not recorded</option>{rigs.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label></div>
      <label className="mt-3 block text-xs font-semibold text-[#62736d]">Notes<textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-[#d9ded8] bg-white p-3 text-sm font-normal" placeholder="Conditions, tackle, marks and what worked" /></label>
      <label className="mt-4 block text-xs font-semibold text-[#62736d]">Catch photo <span className="font-normal text-[#77847f]">(optional, up to 5 MB)</span><span className="mt-2 flex min-h-11 items-center gap-2 rounded-lg border border-dashed border-[#b8c8bf] bg-[#f5f7f3] px-3 text-sm text-[#176b67]"><ImagePlus size={16} /><span>{photo?.name ?? "Choose a photo"}</span><input type="file" accept="image/jpeg,image/png,image/webp" onChange={selectPhoto} className="sr-only" /></span></label>
      {photoPreview && <Image src={photoPreview} alt="Preview of the catch photo" width={640} height={420} unoptimized className="mt-3 max-h-48 w-full rounded-lg object-cover" />}
      {photoError && <p role="alert" className="mt-2 text-xs text-[#9a4f3e]">{photoError}</p>}
      <button disabled={saving} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#176b67] px-4 text-sm font-semibold text-white disabled:opacity-50"><Plus size={16} />{saving ? "Saving trip..." : "Save trip"}</button>
    </form>
    <section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><div className="flex items-center justify-between gap-3"><div><h2 className="display-font text-2xl">Trip log</h2><p className="mt-1 text-sm text-[#687972]">{sessions.length} trips recorded</p></div><button type="button" onClick={exportLog} disabled={sessions.length === 0} className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#d9ded8] px-3 text-sm font-semibold text-[#176b67] disabled:opacity-40"><Download size={15} />Export JSON</button></div>
      <div className="mt-4 space-y-2">{sessions.map((session) => <article key={session.id} className="rounded-lg bg-[#f2f5f1] p-3"><div className="flex items-start justify-between gap-3"><div className="min-w-0 flex-1"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#6c8077]">{session.tripType === "boat" ? "Boat trip" : "Shore / sea trip"} · {session.date}</p><h3 className="mt-1 font-semibold text-[#29443e]">{session.location}</h3>{session.tripType === "boat" && (session.boatName || session.launchPlace) && <p className="mt-1 text-xs text-[#66766f]">{[session.boatName, session.launchPlace].filter(Boolean).join(" · ")}</p>}<p className="mt-1 text-xs text-[#66766f]">{[session.target, session.bait, session.rig].filter(Boolean).join(" · ") || "No catch details recorded"}</p>{session.notes && <p className="mt-2 text-sm leading-5 text-[#5d6e68]">{session.notes}</p>}{session.photoId && <CatchPhoto id={session.photoId} alt={`Catch from ${session.location}`} />}</div><button type="button" onClick={() => void removeSession(session)} aria-label={`Delete trip at ${session.location}`} className="grid size-9 shrink-0 place-items-center rounded-md text-[#8b625a] hover:bg-white"><Trash2 size={15} /></button></div></article>)}{sessions.length === 0 && <p className="rounded-lg border border-dashed border-[#bdc9c3] p-8 text-sm text-[#71817c]">No trips logged yet. Add your first shore or boat outing.</p>}</div>
      <p className="mt-4 text-xs leading-5 text-[#77847f]">Trip details and photos stay in this browser. JSON export includes record details and photo-presence flags, not image files. Avoid shared devices for private marks.</p>
    </section>
  </div>;
}