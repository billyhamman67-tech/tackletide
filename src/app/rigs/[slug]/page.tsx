import Link from "next/link";
import { notFound } from "next/navigation";
import { RigChecklist } from "@/components/rig-checklist";
import { RigDiagram } from "@/components/rig-diagram";
import { RigBuildGuide } from "@/components/rig-build-guide";
import { rigs } from "@/lib/data";

export const instant = false;

export function generateStaticParams() {
  return rigs.map((rig) => ({ slug: rig.slug }));
}

export default async function RigDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rig = rigs.find((item) => item.slug === slug);
  if (!rig) notFound();
  return <div className="mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12"><Link href="/rigs" className="text-sm font-semibold text-[#176b67]">← All rigs</Link><div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_.9fr]"><div><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">{rig.style} · {rig.level}</p><h1 className="display-font mt-2 text-4xl">{rig.name}</h1><p className="mt-4 text-base leading-7 text-[#5d6e68]">{rig.description}</p><div className="mt-5"><RigDiagram slug={rig.slug} name={rig.name} /></div>{rig.level === "Beginner" ? <RigBuildGuide slug={rig.slug} name={rig.name} steps={rig.steps} /> : <div className="mt-5 rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><h2 className="display-font text-2xl">Assembly steps</h2><ol className="mt-4 space-y-3">{rig.steps.map((step, index) => <li key={step} className="flex gap-3 text-sm leading-5 text-[#53665f]"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#dce9e2] text-xs font-semibold text-[#26635a]">{index + 1}</span>{step}</li>)}</ol></div>}<div className="mt-4 rounded-xl bg-[#dce9e2] p-4"><p className="text-sm font-semibold text-[#31554d]">Rig profile</p><p className="mt-2 text-sm text-[#4d6760]">Suitable ground: {rig.ground.join(", ")}</p><p className="mt-1 text-sm text-[#4d6760]">Example targets: {rig.targets.join(", ")}</p></div></div><RigChecklist components={rig.components} /></div><p className="mt-5 text-xs leading-5 text-[#74817c]">Use appropriately rated components, check knots and connections before use, and never cast a rig unless the area behind and beside you is clear.</p></div>;
}