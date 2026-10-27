"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";

export function ShopSearch() {
  const [query, setQuery] = useState("");
  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!query.trim()) return;
    window.open(`https://www.openstreetmap.org/search?query=${encodeURIComponent(`fishing tackle shop ${query}`)}`, "_blank", "noopener,noreferrer");
  }
  return <form onSubmit={search} className="mt-5 flex flex-col gap-2 rounded-xl border border-[#d9ded8] bg-[#fffefa] p-3 sm:flex-row"><label className="flex min-h-12 flex-1 items-center gap-2 px-2 text-[#71817c]"><MapPin size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} required aria-label="Town or postcode" placeholder="Enter a town or postcode" className="w-full bg-transparent text-sm text-[#243c38] outline-none" /></label><button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#176b67] px-4 text-sm font-semibold text-white"><Search size={16} />Search OpenStreetMap</button></form>;
}