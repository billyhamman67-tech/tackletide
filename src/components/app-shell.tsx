"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, BookOpen, Bookmark, Camera, Compass, Fish, FishSymbol, Home, Map, MapPin, Menu, Search, ShoppingBag, Store, Trophy, UserRound, Waves, Wrench } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/data";
import { AdSenseSlot } from "@/components/adsense-slot";

const iconMap = {
  home: Home,
  map: Map,
  pin: MapPin,
  wave: Waves,
  bait: FishSymbol,
  rig: Wrench,
  fish: Fish,
  records: Trophy,
  camera: Camera,
  saved: Bookmark,
  book: BookOpen,
  gear: ShoppingBag,
  shop: Store,
  log: Compass,
  profile: UserRound,
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen lg:flex">
      <aside className="hidden w-[250px] shrink-0 flex-col bg-[#102d33] text-white lg:flex">
        <Link href="/" className="flex items-center gap-3 px-6 py-7">
          <span className="grid size-10 place-items-center rounded-xl bg-[#d9e4d6] text-[#102d33]"><Anchor size={21} /></span>
          <span><span className="display-font block text-[19px] leading-5">Ace Fishing Guide</span><span className="mt-1 block text-[10px] uppercase tracking-[.15em] text-[#a7c2bb]">UK coastal companion</span></span>
        </Link>
        <nav aria-label="Main navigation" className="flex-1 space-y-1 px-3 pb-5">
          {navigation.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={`flex min-h-11 items-center gap-3 rounded-lg px-3 text-[13px] transition-colors ${active ? "bg-[#28504f] text-white" : "text-[#c3d2ce] hover:bg-white/10 hover:text-white"}`}>
              <Icon size={17} strokeWidth={1.8} /><span>{item.label}</span>{active && <span className="ml-auto size-1.5 rounded-full bg-[#c4d99d]" />}
            </Link>;
          })}
        </nav>
        <div className="mx-4 mb-4 rounded-xl border border-white/10 bg-white/[.05] p-4">
          <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.12em] text-[#b8d4c7]"><Waves size={14} />Sea safety</div>
          <p className="text-xs leading-5 text-[#d0ddda]">Always check official forecasts, access and escape routes before fishing.</p>
          <a className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#d5e5bc] underline underline-offset-4" href="https://www.metoffice.gov.uk/weather/specialist-forecasts/coast-and-sea" target="_blank" rel="noreferrer">Coast & sea forecast</a>
        </div>
      </aside>

      <div className="min-w-0 flex-1 pb-[74px] lg:pb-0">
        <header className="sticky top-0 z-[900] flex h-[68px] items-center justify-between border-b border-[#d9ded8] bg-[#f8f8f4]/95 px-4 backdrop-blur md:px-8">
          <Link href="/" className="flex items-center gap-2 lg:hidden"><span className="grid size-8 place-items-center rounded-lg bg-[#102d33] text-white"><Anchor size={17} /></span><span className="display-font text-lg">Ace Fishing Guide</span></Link>
          <div className="hidden items-center gap-2 text-sm text-[#677a75] lg:flex"><span className="size-2 rounded-full bg-[#5c9273]" />A coastal companion for your next session</div>
          <form action="/spots" className="hidden w-full max-w-[340px] items-center rounded-lg border border-[#d9ded8] bg-white px-3 lg:flex">
            <Search size={16} className="text-[#7b8a85]" />
            <input name="q" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search fishing marks" placeholder="Search marks, towns, species..." className="h-10 min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-[#96a19d]" />
            <button type="submit" className="text-xs font-semibold text-[#176b67]">Search</button>
          </form>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open navigation menu" className="grid size-10 place-items-center rounded-lg border border-[#d9ded8] bg-white text-[#183a3b] lg:hidden"><Menu size={19} /></button>
        </header>
        {menuOpen && <nav aria-label="Mobile navigation" className="fixed inset-x-0 top-[68px] z-[1000] max-h-[70vh] overflow-y-auto border-b border-[#d9ded8] bg-[#f8f8f4] p-3 shadow-lg lg:hidden">
          {navigation.map((item) => <Link onClick={() => setMenuOpen(false)} key={item.href} href={item.href} className={`flex min-h-11 items-center gap-3 rounded-md px-3 text-sm ${pathname === item.href ? "bg-[#dce9e2] font-semibold text-[#102d33]" : "text-[#334c48]"}`}><span>{item.label}</span></Link>)}
        </nav>}
        <main>{children}</main>
        <AdSenseSlot />
        <nav aria-label="Quick navigation" className="fixed inset-x-0 bottom-0 z-[900] grid h-[68px] grid-cols-5 border-t border-[#d9ded8] bg-[#fffefa] px-1 pb-[env(safe-area-inset-bottom)] lg:hidden">
          {[navigation[0], navigation[1], navigation[2], navigation[3], navigation[5]].map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={`flex flex-col items-center justify-center gap-1 text-[10px] ${active ? "text-[#176b67]" : "text-[#71817c]"}`}><Icon size={19} /><span>{item.label === "Fishing spots" ? "Spots" : item.label === "Tides & weather" ? "Tides" : item.label === "Rigs" ? "Rigs" : item.label === "Fishing map" ? "Map" : "Home"}</span></Link>;
          })}
        </nav>
      </div>
    </div>
  );
}