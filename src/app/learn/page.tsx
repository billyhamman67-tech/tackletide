import { LearnBrowser } from "@/components/learn-browser";

export default function LearnPage() {
  return <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Learning centre</p><h1 className="display-font mt-1 text-4xl">Learn to fish the coast</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[#63736e]">Search short written guides for safer, more considered sessions.</p><div className="mt-6"><LearnBrowser /></div></div>;
}