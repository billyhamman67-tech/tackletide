"use client";

import Image from "next/image";
import type { Species } from "@/lib/data";

type SpeciesArtworkProps = {
  fish: Species;
  className: string;
};

function FishDetails({ slug }: { slug: string }) {
  if (slug === "mackerel") {
    return <g fill="none" stroke="#315951" strokeWidth="5"><path d="M142 66q25 22 3 49m22-56q24 22 2 50m23-51q22 22 2 50m23-44q18 19 1 43" /><path d="M123 128q64 28 127 1" stroke="#dce9e2" strokeWidth="3" /></g>;
  }
  if (slug === "plaice") {
    return <g fill="#cf805b" opacity=".92"><circle cx="142" cy="93" r="5" /><circle cx="176" cy="79" r="4" /><circle cx="205" cy="94" r="5" /><circle cx="238" cy="83" r="4" /><circle cx="265" cy="104" r="5" /><circle cx="153" cy="130" r="4" /><circle cx="189" cy="139" r="5" /><circle cx="226" cy="126" r="4" /><circle cx="259" cy="137" r="4" /></g>;
  }
  if (slug === "flounder") {
    return <g fill="#596e55" opacity=".75"><circle cx="149" cy="91" r="3" /><circle cx="172" cy="132" r="3" /><circle cx="198" cy="83" r="3" /><circle cx="226" cy="138" r="3" /><circle cx="254" cy="99" r="3" /><circle cx="274" cy="122" r="3" /><circle cx="126" cy="117" r="3" /></g>;
  }
  if (slug === "whiting") {
    return <g fill="none" stroke="#edf3ef" strokeWidth="3"><path d="M177 85q9 21 0 43m14-47q8 20 1 44m14-46q7 19 1 43" /></g>;
  }
  if (slug === "pollack") {
    return <path d="M103 118q85-26 184-4" fill="none" stroke="#d6c48f" strokeWidth="4" />;
  }
  return <path d="M96 124q89 18 178-2" fill="none" stroke="#dce9e2" strokeWidth="4" />;
}

function FishShape({ slug }: { slug: string }) {
  if (slug === "plaice" || slug === "flounder") {
    return <path d="M75 112c42-54 142-68 222-31l38 31-38 31c-80 36-180 23-222-31Z" fill="#b9a477" stroke="#52685c" strokeWidth="4" />;
  }
  if (slug === "mackerel") {
    return <path d="M70 111c56-39 153-48 228-14l38-25-13 39 13 39-38-25c-75 34-172 25-228-14Z" fill="#668c8d" stroke="#315951" strokeWidth="4" />;
  }
  if (slug === "pollack") {
    return <path d="M67 112c51-55 151-71 231-29l38-22-13 49 13 49-38-22c-80 42-180 26-231-25Z" fill="#78928b" stroke="#315951" strokeWidth="4" />;
  }
  if (slug === "whiting") {
    return <path d="M65 112c58-41 159-48 233-15l38-25-13 40 13 40-38-25c-74 33-175 26-233-15Z" fill="#9aaea4" stroke="#52685c" strokeWidth="4" />;
  }
  return <path d="M65 111c52-53 151-69 228-27l42-25-16 51 16 51-42-25c-77 42-176 26-228-25Z" fill="#829a91" stroke="#315951" strokeWidth="4" />;
}

export function SpeciesArtwork({ fish, className }: SpeciesArtworkProps) {
  if (fish.image) {
    return (
      <Image
        src={fish.image.src}
        alt={fish.image.alt}
        width={960}
        height={600}
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className={className}
      />
    );
  }

  const isFlatfish = fish.shape === "Flatfish";

  return (
    <svg
      aria-label={`Original illustration of a ${fish.name}; not to scale`}
      className={className}
      role="img"
      viewBox="0 0 400 220"
    >
      <defs>
        <linearGradient id={`sea-${fish.slug}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#dce9e2" />
          <stop offset="100%" stopColor="#b6d0c8" />
        </linearGradient>
        <linearGradient id={`body-${fish.slug}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#547a70" />
          <stop offset="42%" stopColor={fish.slug === "plaice" || fish.slug === "flounder" ? "#d4c398" : "#86a69a"} />
          <stop offset="100%" stopColor="#e9eee5" />
        </linearGradient>
      </defs>
      <rect fill={`url(#sea-${fish.slug})`} height="220" width="400" />
      <path d="M0 178q60-22 120 0t120 0 160 0v42H0Z" fill="#f3eddd" opacity=".82" />
      <path d="M0 34q45-13 90 0t90 0 90 0 130 0" fill="none" stroke="#fffefa" strokeOpacity=".7" strokeWidth="3" />
      <path d="M19 54q32-8 64 0m233 15q25-7 50 0" fill="none" stroke="#fffefa" strokeOpacity=".5" strokeWidth="2" />
      {isFlatfish && <path d="M93 112c-16-3-24-11-34-18 4 14 4 23 0 37 10-8 18-15 34-19Z" fill="#78958a" stroke="#52685c" strokeWidth="3" />}
      {!isFlatfish && <path d="M297 110 354 75l-18 38 18 37-57-30Z" fill="#78958a" stroke="#315951" strokeWidth="4" />}
      <FishShape slug={fish.slug} />
      {!isFlatfish && <path d="M161 72q25-27 53-23l-16 25m-9 68q26 26 49 18l-17-24" fill="#66877b" stroke="#315951" strokeLinejoin="round" strokeWidth="3" />}
      <path d="M82 112q16 0 30 1m13-27q12 23 1 49" fill="none" stroke="#52685c" strokeWidth="3" />
      <circle cx="94" cy="101" fill="#fffefa" r="8" />
      <circle cx="94" cy="101" fill="#183a3b" r="4" />
      {isFlatfish && <>
        <circle cx="108" cy="99" fill="#183a3b" r="3" />
        <circle cx="108" cy="106" fill="#183a3b" r="3" />
      </>}
      <FishDetails slug={fish.slug} />
      {fish.slug === "whiting" && <path d="M75 117q-8 10-12 17" fill="none" stroke="#52685c" strokeWidth="2" />}
      <rect fill="#fffefa" fillOpacity=".8" height="23" rx="8" width="124" x="14" y="12" />
      <text fill="#315951" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" x="25" y="28">FIELD GUIDE ART</text>
      <text fill="#315951" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" textAnchor="end" x="386" y="203">Illustration · not to scale</text>
    </svg>
  );
}
