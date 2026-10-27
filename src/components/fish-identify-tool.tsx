"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { species } from "@/lib/data";

const features = ["All features", "wavy dark bars", "orange-red spots", "both eyes on one side", "lower jaw projects", "chin barbel", "long beak-like jaws", "thick lips", "eel-shaped body", "free finger-like rays"];

export function FishIdentifyTool() {
  const [shape, setShape] = useState("Any shape");
  const [feature, setFeature] = useState("All features");
  const candidates = useMemo(() => species.filter((fish) =>
    (shape === "Any shape" || fish.shape === shape) &&
    (feature === "All features" || fish.marks.toLowerCase().includes(feature.toLowerCase()))
  ), [shape, feature]);

  return <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
    <section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5">
      <h2 className="display-font text-2xl">Describe what you can see</h2>
      <p className="mt-2 text-sm leading-5 text-[#687972]">Choose visible features rather than relying on a single colour or body shape.</p>
      <label className="mt-5 block text-xs font-semibold text-[#62736d]">Body shape<select value={shape} onChange={(event) => setShape(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-[#d9ded8] bg-white px-3 text-sm font-normal text-[#243c38]"><option>Any shape</option>{Array.from(new Set(species.map((fish) => fish.shape))).map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="mt-4 block text-xs font-semibold text-[#62736d]">Distinctive feature<select value={feature} onChange={(event) => setFeature(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-[#d9ded8] bg-white px-3 text-sm font-normal text-[#243c38]">{features.map((item) => <option key={item}>{item}</option>)}</select></label>
      <p className="mt-4 text-xs leading-5 text-[#77847f]">This manual guide filters a small starter library. It does not analyse photos or confirm an identification.</p>
    </section>
    <section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><div className="flex items-end justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase tracking-wider text-[#74837e]">Possible matches</p><h2 className="display-font mt-1 text-2xl">Compare features</h2></div><span className="text-xs text-[#71817c]">{candidates.length} matches</span></div>
      {candidates.length ? <div className="mt-4 space-y-2">{candidates.map((fish) => <Link key={fish.slug} href={`/species/${fish.slug}`} className="block rounded-lg bg-[#f2f5f1] p-3 hover:bg-[#e9f0e9]"><div className="flex items-baseline justify-between gap-2"><span className="font-semibold text-[#29443e]">{fish.name}</span><span className="text-[10px] uppercase tracking-wide text-[#6d8179]">{fish.shape}</span></div><p className="mt-1 text-sm leading-5 text-[#64756e]">{fish.marks}</p></Link>)}</div> : <p className="mt-5 rounded-lg bg-[#f2f5f1] p-4 text-sm text-[#687972]">No exact match in the starter guide. Clear one of the filters and compare similar species.</p>}
      <p className="mt-4 rounded-lg bg-[#f3eddd] p-3 text-xs leading-5 text-[#655f49]">Do not use an app match to decide whether a fish is legal to retain. Verify the species, measure it correctly and check current local rules.</p>
    </section>
  </div>;
}