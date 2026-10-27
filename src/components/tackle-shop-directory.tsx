"use client";

import { useMemo, useState } from "react";
import { ExternalLink, MapPin, Search } from "lucide-react";
import { isleOfWightTackleShops } from "@/lib/tackle-shops";

export function TackleShopDirectory() {
  const [query, setQuery] = useState("");
  const shops = useMemo(() => isleOfWightTackleShops.filter((shop) =>
    `${shop.name} ${shop.street} ${shop.town} ${shop.postcode}`.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return <>
    <label className="mt-5 flex min-h-11 items-center gap-2 rounded-lg border border-[#d9ded8] bg-[#fffefa] px-3 text-[#74837e]"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search Isle of Wight tackle shops" placeholder="Search by business, town or postcode" className="w-full bg-transparent text-sm text-[#243c38] outline-none" /></label>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {shops.map((shop) => {
        const address = `${shop.name}, ${shop.street}, ${shop.town}, Isle of Wight, ${shop.postcode}`;
        const directionsUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(address)}`;
        return <article key={shop.slug} className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5">
          <div className="flex items-start justify-between gap-2"><div><p className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{shop.town}</p><h2 className="display-font mt-2 text-2xl">{shop.name}</h2></div><MapPin size={18} className="mt-1 shrink-0 text-[#176b67]" /></div>
          <address className="mt-3 text-sm not-italic leading-5 text-[#5d6e68]">{shop.street}<br />{shop.town}, Isle of Wight<br />{shop.postcode}</address>
          <span className="mt-4 inline-block rounded-md bg-[#f3eddd] px-2 py-1 text-[10px] font-semibold text-[#806b42]">Directory listing · verify before visiting</span>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#e5e8e3] pt-3 text-xs font-semibold"><a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#176b67] underline underline-offset-2">Find directions <ExternalLink size={12} /></a><a href={shop.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#176b67] underline underline-offset-2">Source listing <ExternalLink size={12} /></a></div>
        </article>;
      })}
    </div>
    {shops.length === 0 && <p className="mt-4 rounded-xl border border-dashed border-[#bdc9c3] bg-white p-8 text-sm text-[#71817c]">No directory entries match that search.</p>}
  </>;
}