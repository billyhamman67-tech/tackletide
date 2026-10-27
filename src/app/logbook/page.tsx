import { Logbook } from "@/components/logbook";

export default function LogbookPage() {
  return <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Your private trip book</p><h1 className="display-font mt-1 text-4xl">Fishing log</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[#63736e]">Log shore sessions and boat trips, note your bait and rig, and keep a catch photo beside the details. Records stay on this device; they are not synced to an account.</p><div className="mt-6"><Logbook /></div></div>;
}