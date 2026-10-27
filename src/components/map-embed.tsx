"use client";

import dynamic from "next/dynamic";
import type { FishingSpot } from "@/lib/data";

const MapView = dynamic(() => import("@/components/map-view"), {
  ssr: false,
  loading: () => <div className="grid h-full min-h-[260px] place-items-center bg-[#dce9e2] text-sm text-[#52716a]">Loading coastal map…</div>,
});

export function MapEmbed({ compact = false, spots }: { compact?: boolean; spots?: FishingSpot[] }) {
  return <MapView compact={compact} spots={spots} />;
}