import Link from "next/link";
import { notFound } from "next/navigation";
import { species } from "@/lib/data";
import { SpeciesArtwork } from "@/components/species-artwork";

export const instant = false;

export function generateStaticParams() {
  return species.map((fish) => ({ slug: fish.slug }));
}

export default async function SpeciesDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fish = species.find((item) => item.slug === slug);
  if (!fish) notFound();
  return <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12"><Link href="/species" className="text-sm font-semibold text-[#176b67]">← Species guide</Link><p className="mt-7 text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Identification field guide · {fish.shape}</p><h1 className="display-font mt-2 text-4xl">{fish.name}</h1><p className="mt-2 text-sm italic text-[#788780]">{fish.scientific}</p><figure className="mt-6 overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]"><SpeciesArtwork fish={fish} className="max-h-[480px] w-full object-cover" />{fish.image ? <figcaption className="p-3 text-[11px] leading-5 text-[#77847f]">{fish.image.kind} by <a href={fish.image.source} target="_blank" rel="noreferrer" className="font-semibold text-[#176b67] underline underline-offset-2">{fish.image.credit}</a> · {fish.image.license}.</figcaption> : <figcaption className="p-3 text-[11px] leading-5 text-[#77847f]">Original field-guide illustration · not to scale.</figcaption>}</figure><div className="mt-6 grid gap-4 md:grid-cols-2"><section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><h2 className="display-font text-2xl">Visible features</h2><p className="mt-3 text-sm leading-6 text-[#5d6e68]">{fish.marks}</p><p className="mt-4 text-sm"><strong>Typical habitat:</strong> {fish.habitat}</p></section><section className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5"><h2 className="display-font text-2xl">Handling & rules</h2><p className="mt-3 text-sm leading-6 text-[#5d6e68]">{fish.note}</p><p className="mt-3 text-sm leading-6 text-[#5d6e68]">This guide is not a legal determination. Verify species, measurement method, current local regulations and any seasonal restrictions with the relevant authority before retaining a catch.</p></section></div><div className="mt-4 rounded-xl bg-[#f3eddd] p-4 text-sm leading-5 text-[#655f49]">Identification from a single feature or photograph is uncertain. Compare several features and seek expert confirmation where needed.</div></div>;
}