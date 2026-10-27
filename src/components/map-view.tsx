"use client";

import Link from "next/link";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { fishingSpots, type FishingSpot } from "@/lib/data";

export default function MapView({ compact = false, spots = fishingSpots }: { compact?: boolean; spots?: FishingSpot[] }) {
  return <MapContainer center={[54.2, -3.4]} zoom={5} scrollWheelZoom={!compact} zoomControl={!compact} dragging={!compact} doubleClickZoom={!compact} touchZoom={!compact} className="h-full min-h-[260px] w-full" aria-label="Map of UK coastal fishing locations">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {spots.map((spot) => <CircleMarker key={spot.slug} center={[spot.latitude, spot.longitude]} radius={compact ? 5 : 7} pathOptions={{ color: "#fffefa", weight: 2, fillColor: "#176b67", fillOpacity: 0.95 }}>
      <Popup><div className="min-w-[160px]"><p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#176b67]">{spot.region}</p><Link className="font-semibold text-[#102d33]" href={`/spots/${spot.slug}`}>{spot.name}</Link><p className="mt-1 text-xs text-[#6b7a76]">Approximate map pin · verify access</p></div></Popup>
    </CircleMarker>)}
  </MapContainer>;
}