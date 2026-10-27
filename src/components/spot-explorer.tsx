"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { List, Map as MapIcon, MapPin, Search } from "lucide-react";
import { fishingSpots } from "@/lib/data";
import { MapEmbed } from "@/components/map-embed";
import { SaveMarkButton } from "@/components/save-mark-button";

export function SpotExplorer({ initialView = "list", initialQuery = "" }: { initialView?: "list" | "map"; initialQuery?: string }) {
  const [view, setView] = useState(initialView);
  const [query, setQuery] = useState(initialQuery);
  const [region, setRegion] = useState("All regions");
  const [ground, setGround] = useState("All ground");
  const regions = ["All regions", ...Array.from(new Set(fishingSpots.map((spot) => spot.region))).sort()];
  const filtered = useMemo(() => fishingSpots.filter((spot) => {
    const queryMatch = `${spot.name} ${spot.region} ${spot.kind} ${spot.species.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    return queryMatch && (region === "All regions" || spot.region === region) && (ground === "All ground" || spot.ground.includes(ground));
  }), [query, region, ground]);

  return <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-8 md:py-9">
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Discover the coast</p><h1 className="display-font mt-1 text-4xl">Fishing marks</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[#63736e]">Place-centre map pins only. Ground, fishing access, species and restrictions are not verified local records.</p></div><div className="flex rounded-lg border border-[#d9ded8] bg-white p-1" aria-label="View mode">
      <button onClick={() => setView("map")} aria-pressed={view === "map"} className={`inline-flex min-h-9 items-center gap-2 rounded-md px-3 text-sm ${view === "map" ? "bg-[#102d33] text-white" : "text-[#50635d]"}`}><MapIcon size={15} />Map</button><button onClick={() => setView("list")} aria-pressed={view === "list"} className={`inline-flex min-h-9 items-center gap-2 rounded-md px-3 text-sm ${view === "list" ? "bg-[#102d33] text-white" : "text-[#50635d]"}`}><List size={15} />List</button>
    </div></div>
    <section className="mb-5 grid gap-3 rounded-xl border border-[#d9ded8] bg-[#fffefa] p-3 md:grid-cols-[1fr_220px_190px] md:p-4">
      <label className="flex min-h-11 items-center gap-2 rounded-lg border border-[#d9ded8] px-3 text-[#74837e]"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search fishing marks" placeholder="Search mark, region or species" className="w-full bg-transparent text-sm text-[#243c38] outline-none" /></label>
      <label className="flex min-h-11 items-center gap-2 rounded-lg border border-[#d9ded8] px-3 text-xs text-[#74837e]">Region<select value={region} onChange={(event) => setRegion(event.target.value)} className="ml-auto max-w-[130px] bg-transparent text-sm text-[#243c38] outline-none">{regions.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="flex min-h-11 items-center gap-2 rounded-lg border border-[#d9ded8] px-3 text-xs text-[#74837e]">Ground<select value={ground} onChange={(event) => setGround(event.target.value)} className="ml-auto max-w-[120px] bg-transparent text-sm text-[#243c38] outline-none">{["All ground", "Sand", "Shingle", "Rock", "Mixed"].map((item) => <option key={item}>{item}</option>)}</select></label>
    </section>
    <p className="mb-3 text-xs text-[#71817c]">{filtered.length} {filtered.length === 1 ? "location" : "locations"} · all require verification</p>
    {view === "map" ? <div className="overflow-hidden rounded-xl border border-[#d9ded8] bg-white"><div className="h-[60vh] min-h-[420px]"><MapEmbed spots={filtered} /></div><p className="border-t border-[#d9ded8] px-4 py-2 text-[11px] text-[#73817c]">© OpenStreetMap contributors. Pins indicate approximate place centres, not safe or permitted fishing positions.</p></div> : <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{filtered.map((spot) => <article key={spot.slug} className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-4"><div className="flex items-start justify-between gap-3"><div><span className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{spot.region} · {spot.kind}</span><h2 className="display-font mt-2 text-2xl"><Link href={`/spots/${spot.slug}`}>{spot.name}</Link></h2></div><MapPin size={17} className="mt-1 shrink-0 text-[#176b67]" /></div><p className="mt-3 text-sm leading-5 text-[#5f706a]">{spot.summary}</p><div className="mt-4 flex flex-wrap gap-1.5">{spot.ground.map((item) => <span key={item} className="rounded-md bg-[#edf2ed] px-2 py-1 text-[10px] text-[#526660]">{item}</span>)}</div><div className="mt-4 flex items-center justify-between border-t border-[#e5e8e3] pt-3"><a href={spot.sourceUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#176b67] underline underline-offset-2">Check map source</a><SaveMarkButton slug={spot.slug} /></div></article>)}</div>}
    {filtered.length === 0 && <div className="rounded-xl border border-dashed border-[#bdc9c3] bg-white p-10 text-center"><p className="font-semibold">No matching marks</p><p className="mt-1 text-sm text-[#71817c]">Try a different search term or filter.</p></div>}
  </div>;
}