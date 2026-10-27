import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { TideTableClient } from "@/components/tide-table";
import { IsleOfWightTideGuide } from "@/components/isle-of-wight-tide-guide";

export default async function TidesPage({ searchParams }: { searchParams: Promise<{ spot?: string }> }) {
  const { spot } = await searchParams;

  return <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Tide tables & sea conditions</p><h1 className="display-font mt-1 text-4xl">Plan around the water</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[#63736e]">Load provider-backed high and low tide predictions for a selected coastal mark. No estimated or demo tide values are shown.</p>
    <IsleOfWightTideGuide />
    <TideTableClient initialSpotSlug={spot} />
    <div className="mt-4 grid gap-4 md:grid-cols-2"><section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><h2 className="display-font text-2xl">Free starter access</h2><p className="mt-3 text-sm leading-6 text-[#61716b]">WorldTides currently grants 100 free credits to new accounts. Seven-day high/low predictions cost one credit per request; usage beyond starter credits may require paid credits. Check current terms before launch.</p><a href="https://www.worldtides.info/developer" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#176b67] underline underline-offset-2">WorldTides pricing & credits <ExternalLink size={14} /></a></section><section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><h2 className="display-font text-2xl">Safety check</h2><p className="mt-3 text-sm leading-6 text-[#61716b]">Predictions are not guaranteed and do not replace local knowledge or official advice. Check tide cut-offs, access routes, weather warnings and sea state for the exact mark.</p><a href="https://www.metoffice.gov.uk/weather/specialist-forecasts/coast-and-sea" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#176b67] underline underline-offset-2">Met Office coast & sea forecast <ExternalLink size={14} /></a></section></div>
    <Link href="/map" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#176b67]">Return to map <ExternalLink size={14} /></Link>
  </div>;
}