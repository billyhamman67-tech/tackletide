import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { baits } from "@/lib/data";
import { BaitMountingDiagram } from "@/components/bait-mounting-diagram";

export const instant = false;

export function generateStaticParams() {
  return baits.map((bait) => ({ slug: bait.slug }));
}

export default async function BaitDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bait = baits.find((item) => item.slug === slug);
  if (!bait) notFound();
  return <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
    <Link href="/bait" className="text-sm font-semibold text-[#176b67]">← All baits</Link>
    <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_.9fr]">
      <section><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">{bait.type} · general guidance</p><h1 className="display-font mt-2 text-4xl">{bait.name}</h1><p className="mt-4 max-w-2xl text-base leading-7 text-[#5d6e68]">{bait.use}</p><div className="mt-5 overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]"><Image src={bait.photo.src} alt={bait.photo.alt} width={960} height={640} priority className="max-h-[380px] w-full object-cover" /><p className="p-3 text-[11px] leading-5 text-[#77847f]">{bait.photo.alt}. Photo by <a href={bait.photo.source} target="_blank" rel="noreferrer" className="font-semibold text-[#176b67] underline underline-offset-2">{bait.photo.credit}</a>, licensed {bait.photo.license}.</p></div></section>
      <div className="space-y-4"><section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><h2 className="display-font text-2xl">Where it may suit</h2><p className="mt-3 text-sm text-[#60716b]">General contexts, not a local recommendation or catch guarantee.</p><p className="mt-3 text-sm"><strong>Target species:</strong> {bait.targets.join(", ")}</p><p className="mt-2 text-sm"><strong>Ground:</strong> {bait.ground.join(", ")}</p></section><section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><h2 className="display-font text-2xl">Handling & collection</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-5 text-[#60716b]"><li>Keep bait cool and follow supplier storage advice.</li><li>Check local harvesting restrictions, permits and protected areas before collection.</li><li>Use only what you need and avoid damaging habitat.</li></ul></section></div>
    </div>
    <section className="mt-7"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Hook presentation</p><h2 className="display-font mt-1 text-3xl">Mount {bait.name.toLowerCase()}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-[#63736e]">A starting method for common shore-fishing presentations. Hook size, bait condition and casting force affect how it should be mounted.</p><div className="mt-4 grid gap-4 lg:grid-cols-[1fr_.9fr]"><BaitMountingDiagram slug={bait.slug} name={bait.name} /><ol className="space-y-2">{bait.mountingSteps.map((step, index) => <li key={step} className="flex gap-3 rounded-lg border border-[#d9ded8] bg-[#fffefa] p-3 text-sm leading-5 text-[#53665f]"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#dce9e2] text-xs font-semibold text-[#26635a]">{index + 1}</span>{step}</li>)}</ol></div><p className="mt-3 text-xs leading-5 text-[#77847f]">Keep the hook point and barb clear. If you need to cast hard, use a suitable bait elastic and inspect the bait after casting; no presentation guarantees a catch.</p></section>
  </div>;
}