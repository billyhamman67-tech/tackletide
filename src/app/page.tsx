import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, Compass, Fish, MapPin, ShieldAlert, Waves, Wind, Wrench } from "lucide-react";
import { MapEmbed } from "@/components/map-embed";
import { fishingSpots, species } from "@/lib/data";
import { SpeciesArtwork } from "@/components/species-artwork";

export default function Home() {
  return <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-8 md:py-9">
    <section className="fade-in relative flex min-h-[470px] items-center overflow-hidden rounded-2xl bg-[#102d33] px-6 py-8 text-white md:min-h-[510px] md:px-10 md:py-11">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/0/09/Dungeness%2C_anglers_at_the_shore_-_geograph.org.uk_-_4549753.jpg" alt="Shore anglers fishing on the open shingle coast at Dungeness" fill priority sizes="(max-width: 768px) 100vw, 1400px" className="object-cover object-[center_68%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#102d33]/90 via-[#102d33]/55 to-[#102d33]/5" />
      <div className="relative max-w-[760px]">
        <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#bcd0b4]"><span className="size-1.5 rounded-full bg-[#c8d89e]" />UK coastal field notes</div>
        <h1 className="display-font max-w-[620px] text-5xl leading-[.99] md:text-7xl">Go where the<br className="hidden md:block" /> water moves.</h1>
        <p className="mt-5 max-w-[490px] text-sm leading-6 text-[#cfdbd7] md:text-base">Find a coastal mark, understand the ground, and build a better plan for your next session.</p>
        <form action="/spots" className="mt-7 flex max-w-[600px] flex-col gap-2 rounded-xl bg-[#fffefa] p-2 sm:flex-row">
          <label className="flex min-h-12 flex-1 items-center gap-3 px-3 text-[#63807b]"><MapPin size={18} /><input name="q" placeholder="Town, coastline or fishing mark" aria-label="Find a fishing mark" className="w-full bg-transparent text-sm text-[#183a3b] outline-none placeholder:text-[#879692]" /></label>
          <button className="min-h-12 rounded-lg bg-[#176b67] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d7b75]">Find a mark <ArrowRight size={16} className="ml-2 inline" /></button>
        </form>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#d0dfd8]"><span>Browse the UK coast</span><span>·</span><span>Check access before you go</span><span>·</span><span>No catch guarantees</span></div>
        <a href="https://commons.wikimedia.org/wiki/File:Dungeness,_anglers_at_the_shore_-_geograph.org.uk_-_4549753.jpg" target="_blank" rel="noreferrer" className="mt-5 inline-block text-[10px] text-[#d0dfd8] underline decoration-white/40 underline-offset-2">Dungeness shore anglers · Chris Downer / Geograph · CC BY-SA 2.0</a>
      </div>
    </section>

    <div className="mt-6 grid gap-5 xl:grid-cols-[1.45fr_.8fr]">
      <section className="overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]">
        <div className="flex items-center justify-between px-5 py-4 md:px-6"><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#74837e]">Explore the coast</p><h2 className="display-font mt-1 text-2xl">Marks around the UK</h2></div><Link href="/map" className="inline-flex items-center gap-1 text-sm font-semibold text-[#176b67]">Open map <ArrowRight size={15} /></Link></div>
        <div className="h-[300px] border-y border-[#d9ded8] md:h-[360px]"><MapEmbed compact /></div>
        <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-xs text-[#6b7a76] md:px-6"><span>Approximate place-centre pins · all locations need local verification</span><span>Map data © OpenStreetMap contributors</span></div>
      </section>

      <section className="flex flex-col gap-5">
        <div className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5 md:p-6">
          <div className="flex items-center justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#74837e]">Session conditions</p><h2 className="display-font mt-1 text-2xl">Before you head out</h2></div><Waves size={21} className="text-[#176b67]" /></div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-[#f2f5f1] p-3"><div className="flex items-center gap-2 text-xs text-[#6b7a76]"><Waves size={15} />Tide predictions</div><p className="mt-2 text-sm font-semibold text-[#263c3b]">Not connected</p><p className="mt-1 text-[11px] leading-4 text-[#73827d]">No live data shown</p></div>
            <div className="rounded-lg bg-[#f2f5f1] p-3"><div className="flex items-center gap-2 text-xs text-[#6b7a76]"><Wind size={15} />Marine forecast</div><p className="mt-2 text-sm font-semibold text-[#263c3b]">Check official source</p><a href="https://www.metoffice.gov.uk/weather/specialist-forecasts/coast-and-sea" target="_blank" rel="noreferrer" className="mt-1 inline-block text-[11px] text-[#176b67] underline underline-offset-2">Met Office coast & sea</a></div>
          </div>
          <Link href="/tides" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#176b67]">Tide information & provider status <ArrowRight size={15} /></Link>
        </div>
        <div className="flex gap-3 rounded-xl border border-[#d4c9ac] bg-[#f3eddd] p-4 md:p-5"><ShieldAlert size={19} className="mt-0.5 shrink-0 text-[#826c3f]" /><div><p className="text-sm font-semibold text-[#4d482f]">Sea safety comes first</p><p className="mt-1 text-xs leading-5 text-[#69624a]">Check official marine warnings, tide cut-offs, access and escape routes. Never fish a mark if conditions make it unsafe.</p></div></div>
        <div className="rounded-xl border border-[#b9cec1] bg-[#e6eee6] p-4 md:p-5"><p className="text-sm font-semibold text-[#31554d]">Leave only footprints</p><p className="mt-1 text-xs leading-5 text-[#4d6760]">Take all rubbish, discarded line and bait packaging home with you.</p></div>
      </section>
    </div>

    <section className="mt-8">
      <div className="mb-4 flex items-end justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#74837e]">UK coastal field guide</p><h2 className="display-font mt-1 text-3xl">Meet the shore species</h2></div><Link href="/species" className="inline-flex items-center gap-1 text-sm font-semibold text-[#176b67]">All species <ArrowRight size={15} /></Link></div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{species.slice(0, 4).map((fish) => <Link key={fish.slug} href={`/species/${fish.slug}`} className="group overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa] transition-transform hover:-translate-y-0.5 hover:border-[#9ab9aa]"><SpeciesArtwork fish={fish} className="h-44 w-full object-cover transition-transform group-hover:scale-[1.02]" /><div className="p-4"><h3 className="display-font text-xl">{fish.name}</h3><p className="mt-1 text-xs italic text-[#798680]">{fish.scientific}</p><p className="mt-3 line-clamp-2 text-sm leading-5 text-[#586963]">{fish.marks}</p></div></Link>)}</div>
    </section>

    <section className="mt-8">
      <div className="mb-4 flex items-end justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#74837e]">Start with a real place</p><h2 className="display-font mt-1 text-3xl">Coastal marks</h2></div><Link href="/spots" className="hidden items-center gap-1 text-sm font-semibold text-[#176b67] sm:flex">All marks <ArrowRight size={15} /></Link></div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{fishingSpots.slice(0, 4).map((spot, index) => <Link key={spot.slug} href={`/spots/${spot.slug}`} className="group rounded-xl border border-[#d9ded8] bg-[#fffefa] p-4 transition-transform hover:-translate-y-0.5 hover:border-[#9ab9aa]">
        <div className="flex items-start justify-between"><span className="rounded-md bg-[#dce9e2] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#26635a]">{spot.region}</span><span className="text-xs text-[#87928e]">0{index + 1}</span></div><h3 className="display-font mt-4 text-[21px]">{spot.name}</h3><p className="mt-1 text-xs text-[#73817c]">{spot.kind} · {spot.ground.join(" / ")}</p><p className="mt-3 line-clamp-2 text-sm leading-5 text-[#586963]">{spot.summary}</p><div className="mt-4 flex items-center justify-between border-t border-[#e5e8e3] pt-3"><span className="text-[10px] font-semibold text-[#8a7043]">Needs verification</span><ArrowDownRight size={16} className="text-[#176b67] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></div>
      </Link>)}</div>
    </section>

    <section className="mt-8 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
      <div className="rounded-xl bg-[#dce9e2] p-5 md:p-7"><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#39766a]">Learn the essentials</p><h2 className="display-font mt-2 text-3xl">Bait, rigs & species</h2><p className="mt-3 max-w-md text-sm leading-6 text-[#4d6760]">Practical starting points for common UK shore fishing. Match the setup to ground, target and conditions.</p><div className="mt-5 flex flex-wrap gap-2"><Link href="/bait" className="inline-flex items-center gap-2 rounded-lg bg-[#fffefa] px-3 py-2 text-sm font-semibold text-[#234541]"><Fish size={16} />Bait library</Link><Link href="/rigs" className="inline-flex items-center gap-2 rounded-lg bg-[#fffefa] px-3 py-2 text-sm font-semibold text-[#234541]"><Wrench size={16} />Rig guide</Link><Link href="/species" className="inline-flex items-center gap-2 rounded-lg bg-[#fffefa] px-3 py-2 text-sm font-semibold text-[#234541]"><Compass size={16} />Species</Link></div></div>
      <div className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5 md:p-7"><div className="flex items-center justify-between"><div><p className="text-[11px] font-semibold uppercase tracking-[.13em] text-[#74837e]">Identification field guide</p><h2 className="display-font mt-1 text-2xl">Common coastal species</h2></div><Link href="/species" aria-label="View all species" className="grid size-9 place-items-center rounded-lg border border-[#d9ded8] text-[#176b67]"><ArrowRight size={17} /></Link></div><div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3">{species.slice(0, 6).map((fish) => <Link key={fish.slug} href={`/species/${fish.slug}`} className="group border-b border-[#e8ebe6] pb-3"><span className="text-[10px] font-semibold uppercase tracking-wider text-[#7f8b87]">{fish.shape}</span><p className="mt-1 text-sm font-semibold text-[#263c3b] group-hover:text-[#176b67]">{fish.name}</p><p className="mt-1 line-clamp-1 text-[11px] text-[#82908b]">{fish.marks}</p></Link>)}</div></div>
    </section>
    <footer className="mt-9 flex flex-col gap-2 border-t border-[#d9ded8] py-5 text-xs text-[#77837f] sm:flex-row sm:items-center sm:justify-between"><span>Educational guidance, not verified local advice. Check current access, safety and regulations.</span><Link href="/profile" className="font-semibold text-[#176b67]">Data & privacy notes</Link></footer>
  </div>;
}
