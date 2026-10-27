"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const guides = [
  { title: "Choose a first beach setup", level: "Beginner", topic: "Tackle", steps: ["Start with a rod and reel appropriate to the venue and your experience.", "Use a simple running ledger or flapper rig on clear ground.", "Wear eye protection when casting and keep the area behind you clear."] },
  { title: "Read a beach before casting", level: "Beginner", topic: "Location", steps: ["Observe the beach at low water where safe and lawful.", "Look for changes in colour, wave breaks and channels, but treat these as clues rather than proof.", "Recheck the water as the tide rises and preserve an escape route."] },
  { title: "Bait a hook with worm", level: "Beginner", topic: "Bait", steps: ["Use a baiting needle where appropriate and handle bait gently.", "Pass the worm onto the hooklength without tearing it excessively.", "Secure soft bait with fine bait elastic if needed."] },
  { title: "Cast with a clear safety zone", level: "Beginner", topic: "Safety", steps: ["Inspect the space behind and beside you before every cast.", "Keep people well clear of the rod, lead and casting arc.", "Use a casting style suited to your training and tackle; do not attempt distance casting without instruction."] },
  { title: "Handle and release a fish", level: "Intermediate", topic: "Conservation", steps: ["Prepare unhooking tools before fishing and keep the fish wet.", "Minimise handling and time out of water.", "Support the fish gently during release and follow current species guidance."] },
  { title: "Fish safely around rock marks", level: "Intermediate", topic: "Safety", steps: ["Check tide, swell, forecast and access before arrival.", "Wear suitable footwear and a properly fitted buoyancy aid where appropriate.", "Do not fish alone on exposed rocks; leave immediately if conditions worsen."] },
];

export function LearnBrowser() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => guides.filter((guide) => `${guide.title} ${guide.level} ${guide.topic} ${guide.steps.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <>
    <label className="flex min-h-11 items-center gap-2 rounded-lg border border-[#d9ded8] bg-[#fffefa] px-3 text-[#74837e]"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search tutorials" placeholder="Search written guides" className="w-full bg-transparent text-sm text-[#243c38] outline-none" /></label>
    <div className="mt-4 grid gap-3 md:grid-cols-2">{filtered.map((guide) => <details key={guide.title} className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-4"><summary className="cursor-pointer list-none"><div className="flex items-center justify-between gap-2"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{guide.level} · {guide.topic}</span><span className="text-xs text-[#82908b]">Read guide</span></div><h2 className="display-font mt-2 text-2xl">{guide.title}</h2></summary><ol className="mt-4 space-y-3 border-t border-[#e5e8e3] pt-4">{guide.steps.map((step, index) => <li key={step} className="flex gap-3 text-sm leading-5 text-[#5d6e68]"><span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#dce9e2] text-[10px] font-semibold text-[#26635a]">{index + 1}</span>{step}</li>)}</ol></details>)}</div>
    {filtered.length === 0 && <p className="mt-4 rounded-xl border border-dashed border-[#bdc9c3] bg-white p-8 text-center text-sm text-[#71817c]">No guides match that search.</p>}
    <p className="mt-4 text-xs leading-5 text-[#77847f]">Written starter material only. No third-party videos are embedded or represented as verified.</p>
  </>;
}