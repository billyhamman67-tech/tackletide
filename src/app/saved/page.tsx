import { SavedMarksList } from "@/components/saved-marks-list";

export default function SavedPage() {
  return <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Your saved places</p><h1 className="display-font mt-1 text-4xl">Saved marks</h1><p className="mt-3 text-sm text-[#63736e]">Guest favourites are stored locally in this browser. They are not synced to an account.</p><SavedMarksList /></div>;
}