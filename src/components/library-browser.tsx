"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { baits, rigs, species } from "@/lib/data";
import { RigDiagram } from "@/components/rig-diagram";
import { SpeciesArtwork } from "@/components/species-artwork";

type LibraryMode = "bait" | "rigs" | "species";

const headings = {
  bait: { eyebrow: "Bait library", title: "Choose a bait", description: "General UK sea-angling bait notes. Availability, collection rules and suitability vary by location and season." },
  rigs: { eyebrow: "Rig library", title: "Build a considered setup", description: "Browse practical rig patterns by style, ground and target. Match tackle to conditions and your casting ability." },
  species: { eyebrow: "Field guide", title: "Know your fish", description: "Use several visible features to narrow a match. Similar species can be difficult to distinguish from one image." },
};

export function LibraryBrowser({ mode }: { mode: LibraryMode }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filterOptions = mode === "bait"
    ? ["All", ...Array.from(new Set(baits.map((item) => item.type)))]
    : mode === "rigs"
      ? ["All", ...Array.from(new Set(rigs.map((item) => item.style)))]
      : ["All", ...Array.from(new Set(species.map((item) => item.shape)))];
  const filteredSlugs = useMemo(() => {
    if (mode === "bait") return baits.filter((item) => `${item.name} ${item.type} ${item.targets.join(" ")} ${item.ground.join(" ")}`.toLowerCase().includes(query.toLowerCase()) && (filter === "All" || item.type === filter)).map((item) => item.slug);
    if (mode === "rigs") return rigs.filter((item) => `${item.name} ${item.style} ${item.targets.join(" ")} ${item.ground.join(" ")}`.toLowerCase().includes(query.toLowerCase()) && (filter === "All" || item.style === filter)).map((item) => item.slug);
    return species.filter((item) => `${item.name} ${item.scientific} ${item.marks} ${item.habitat}`.toLowerCase().includes(query.toLowerCase()) && (filter === "All" || item.shape === filter)).map((item) => item.slug);
  }, [filter, mode, query]);
  const heading = headings[mode];

  return <div className="mx-auto max-w-[1280px] px-4 py-6 md:px-8 md:py-10">
    <div className="mb-6"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">{heading.eyebrow}</p><h1 className="display-font mt-1 text-4xl">{heading.title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[#63736e]">{heading.description}</p></div>
    <div className="mb-5 flex flex-col gap-3 rounded-xl border border-[#d9ded8] bg-[#fffefa] p-3 sm:flex-row">
      <label className="flex min-h-11 flex-1 items-center gap-2 rounded-lg border border-[#d9ded8] px-3 text-[#74837e]"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label={`Search ${mode}`} placeholder={`Search ${mode}...`} className="w-full bg-transparent text-sm text-[#243c38] outline-none" /></label>
      <label className="flex min-h-11 items-center gap-3 rounded-lg border border-[#d9ded8] px-3 text-xs text-[#74837e]">{mode === "bait" ? "Bait type" : mode === "rigs" ? "Rig style" : "Body shape"}<select value={filter} onChange={(event) => setFilter(event.target.value)} className="min-w-28 bg-transparent text-sm text-[#243c38] outline-none">{filterOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
    </div>
    <p className="mb-3 text-xs text-[#71817c]">{filteredSlugs.length} results</p>
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {mode === "bait" && baits.filter((item) => filteredSlugs.includes(item.slug)).map((item, index) => <article key={item.slug} className="overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]"><Link href={`/bait/${item.slug}`} className="block"><Image src={item.photo.src} alt={item.photo.alt} width={640} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" loading={index < 3 ? "eager" : "lazy"} className="h-44 w-full object-cover" /></Link><div className="p-5"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{item.type}</p><h2 className="display-font mt-2 text-2xl"><Link href={`/bait/${item.slug}`}>{item.name}</Link></h2><p className="mt-3 text-sm leading-5 text-[#5f706a]">{item.use}</p><p className="mt-3 text-[10px] leading-4 text-[#78857f]">Photo: <a href={item.photo.source} target="_blank" rel="noreferrer" className="underline underline-offset-2">{item.photo.credit}</a> · {item.photo.license}</p><p className="mt-4 text-xs text-[#77847f]">Targets: {item.targets.join(", ")}</p><div className="mt-3 flex flex-wrap gap-1.5">{item.ground.map((ground) => <span key={ground} className="rounded-md bg-[#edf2ed] px-2 py-1 text-[10px] text-[#526660]">{ground}</span>)}</div></div></article>)}
      {mode === "rigs" && rigs.filter((item) => filteredSlugs.includes(item.slug)).map((item) => <article key={item.slug} className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{item.style}</p><span className="rounded-md bg-[#f3eddd] px-2 py-1 text-[10px] text-[#806b42]">{item.level}</span></div><h2 className="display-font mt-2 text-2xl"><Link href={`/rigs/${item.slug}`}>{item.name}</Link></h2><div className="mt-3"><RigDiagram slug={item.slug} name={item.name} compact /></div><p className="mt-3 text-sm leading-5 text-[#5f706a]">{item.description}</p><p className="mt-4 text-xs text-[#77847f]">Targets: {item.targets.join(", ")}</p><div className="mt-3 flex flex-wrap gap-1.5">{item.ground.map((ground) => <span key={ground} className="rounded-md bg-[#edf2ed] px-2 py-1 text-[10px] text-[#526660]">{ground}</span>)}</div></article>)}
      {mode === "species" && species.filter((item) => filteredSlugs.includes(item.slug)).map((item) => <article key={item.slug} className="overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]"><Link href={`/species/${item.slug}`} className="block"><SpeciesArtwork fish={item} className="h-44 w-full object-cover" /></Link><div className="p-5"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{item.shape}</p><h2 className="display-font mt-2 text-2xl"><Link href={`/species/${item.slug}`}>{item.name}</Link></h2><p className="mt-1 text-xs italic text-[#798680]">{item.scientific}</p><p className="mt-4 text-sm leading-5 text-[#5f706a]">{item.marks}</p><p className="mt-2 text-xs text-[#77847f]">Habitat: {item.habitat}</p>{item.image && <p className="mt-3 text-[10px] leading-4 text-[#78857f]">{item.image.kind}: <a href={item.image.source} target="_blank" rel="noreferrer" className="underline underline-offset-2">{item.image.credit}</a> · {item.image.license}</p>}</div></article>)}
    </div>
    {filteredSlugs.length === 0 && <p className="rounded-xl border border-dashed border-[#bdc9c3] bg-white p-10 text-center text-sm text-[#71817c]">No matches. Try another search or filter.</p>}
  </div>;
}