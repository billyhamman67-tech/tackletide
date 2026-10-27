"use client";

import { useState } from "react";

export function RigChecklist({ components }: { components: string[] }) {
  const [checked, setChecked] = useState<string[]>([]);
  return <div className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5">
    <div className="flex items-center justify-between"><h2 className="display-font text-2xl">Build checklist</h2><span className="text-xs text-[#71817c]">{checked.length}/{components.length} ready</span></div>
    <p className="mt-1 text-sm text-[#66766f]">Tick components as you gather them.</p>
    <div className="mt-4 space-y-2">{components.map((component) => <label key={component} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg bg-[#f2f5f1] px-3 text-sm text-[#324b45]"><input type="checkbox" checked={checked.includes(component)} onChange={(event) => setChecked(event.target.checked ? [...checked, component] : checked.filter((item) => item !== component))} className="size-4 accent-[#176b67]" />{component}</label>)}</div>
    <button type="button" onClick={() => window.print()} className="mt-4 min-h-10 rounded-lg border border-[#d9ded8] px-3 text-sm font-semibold text-[#176b67]">Print rig recipe</button>
  </div>;
}