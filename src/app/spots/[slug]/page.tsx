import Link from "next/link";
import { ArrowLeft, ExternalLink, MapPin, ShieldAlert } from "lucide-react";
import { notFound } from "next/navigation";
import { SaveMarkButton } from "@/components/save-mark-button";
import { fishingSpots } from "@/lib/data";

export const instant = false;

export function generateStaticParams() {
  return fishingSpots.map((spot) => ({ slug: spot.slug }));
}

export default async function SpotDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const spot = fishingSpots.find((item) => item.slug === slug);
  if (!spot) notFound();

  return <div className="mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-10">
    <Link href="/spots" className="inline-flex items-center gap-2 text-sm font-semibold text-[#176b67]"><ArrowLeft size={16} />All marks</Link>
    <div className="mt-6 rounded-2xl bg-[#102d33] p-6 text-white md:p-9"><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#bed0ba]">{spot.region} · {spot.kind}</p><h1 className="display-font mt-3 text-4xl md:text-5xl">{spot.name}</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-[#d2dfd9]">{spot.summary}</p><div className="mt-6 flex flex-wrap gap-3"><SaveMarkButton slug={spot.slug} /><a href={spot.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/25 px-3 text-sm font-semibold text-white"><MapPin size={16} />Open map source <ExternalLink size={13} /></a></div></div>
    <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_.9fr]">
      <section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><div className="flex items-center justify-between"><h2 className="display-font text-2xl">Mark notes</h2><span className="rounded-md bg-[#f3eddd] px-2 py-1 text-[10px] font-semibold text-[#806b42]">Needs verification</span></div><p className="mt-3 text-sm leading-6 text-[#5d6e68]">This record points to the named coastal place, not a confirmed fishing peg. Confirm public access, local restrictions, tide cut-offs, safe footing and current conditions with authoritative local sources before fishing.</p><dl className="mt-5 grid grid-cols-2 gap-3 text-sm"><div className="rounded-lg bg-[#f3f5f1] p-3"><dt className="text-xs text-[#77847f]">Ground</dt><dd className="mt-1 font-semibold">{spot.ground.join(", ")}</dd></div><div className="rounded-lg bg-[#f3f5f1] p-3"><dt className="text-xs text-[#77847f]">Access status</dt><dd className="mt-1 font-semibold">Unverified</dd></div><div className="rounded-lg bg-[#f3f5f1] p-3"><dt className="text-xs text-[#77847f]">Coordinates</dt><dd className="mt-1 font-mono text-xs">{spot.latitude.toFixed(4)}, {spot.longitude.toFixed(4)}</dd></div><div className="rounded-lg bg-[#f3f5f1] p-3"><dt className="text-xs text-[#77847f]">Depth</dt><dd className="mt-1 font-semibold">Depth information unavailable</dd></div></dl></section>
      <section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><h2 className="display-font text-2xl">General possibilities</h2><p className="mt-2 text-xs leading-5 text-[#71817c]">General angling context only, not verified local catch data.</p><div className="mt-4 flex flex-wrap gap-2">{spot.species.map((name) => <span key={name} className="rounded-md bg-[#dce9e2] px-2.5 py-1.5 text-xs font-semibold text-[#26635a]">{name}</span>)}</div><p className="mt-4 text-sm leading-6 text-[#5d6e68]">Possible ground labels are broad geographic context only. Seabed sections, productive tide stages, depth and underwater features have not been verified for this record.</p></section>
    </div>
    <div className="mt-4 flex gap-3 rounded-xl border border-[#d4c9ac] bg-[#f3eddd] p-4"><ShieldAlert size={18} className="mt-0.5 shrink-0 text-[#826c3f]" /><p className="text-sm leading-5 text-[#655f49]">{spot.access}. Do not fish from piers, harbours or managed structures unless access and permission are confirmed.</p></div>
  </div>;
}