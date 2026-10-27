"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { fishingSpots } from "@/lib/data";
import { SaveMarkButton } from "@/components/save-mark-button";

const emptySlugs: string[] = [];
let previousStorageValue: string | null | undefined;
let cachedSlugs: string[] = emptySlugs;

function getSavedSlugs(): string[] {
  const raw = localStorage.getItem("tide-tackle-saved");
  if (raw === previousStorageValue) return cachedSlugs;
  previousStorageValue = raw;
  try {
    cachedSlugs = JSON.parse(raw ?? "[]") as string[];
  } catch {
    cachedSlugs = emptySlugs;
  }
  return cachedSlugs;
}

export function SavedMarksList() {
  const slugs = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("saved-marks-changed", onChange);
      window.addEventListener("storage", onChange);
      return () => {
        window.removeEventListener("saved-marks-changed", onChange);
        window.removeEventListener("storage", onChange);
      };
    },
    getSavedSlugs,
    () => emptySlugs,
  );

  const saved = fishingSpots.filter((spot) => slugs.includes(spot.slug));
  return <div className="mt-5 grid gap-3 sm:grid-cols-2">{saved.map((spot) => <article key={spot.slug} className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-4"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{spot.region}</p><h2 className="display-font mt-2 text-2xl"><Link href={`/spots/${spot.slug}`}>{spot.name}</Link></h2><p className="mt-2 text-sm text-[#687972]">Saved in this browser only.</p><div className="mt-4"><SaveMarkButton slug={spot.slug} /></div></article>)}{saved.length === 0 && <div className="rounded-xl border border-dashed border-[#bdc9c3] bg-white p-8 text-sm text-[#71817c] sm:col-span-2">No saved marks yet. Save one from its detail page or the spots list.</div>}</div>;
}