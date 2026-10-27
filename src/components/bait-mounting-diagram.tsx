type BaitMountingDiagramProps = {
  slug: string;
  name: string;
};

export function BaitMountingDiagram({ slug, name }: BaitMountingDiagramProps) {
  return <div className="overflow-hidden rounded-lg border border-[#d9ded8] bg-[#edf3ef] p-3">
    <svg viewBox="0 0 640 220" role="img" aria-label={`${name} mounted along a sea-fishing hook shank, with the hook point exposed`} className="h-auto w-full">
      <path d="M320 28 L320 137 C320 175 353 188 376 169 C391 157 389 136 371 127 L354 119" fill="none" stroke="#314f49" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M354 119 L381 108" fill="none" stroke="#314f49" strokeWidth="6" strokeLinecap="round" />
      {slug === "lugworm" || slug === "ragworm" ? <path d="M301 50 C286 58 337 68 303 78 C278 88 340 97 305 108 C286 117 332 123 313 134" fill="none" stroke={slug === "lugworm" ? "#c7765c" : "#d57f63"} strokeWidth="17" strokeLinecap="round" /> : null}
      {slug === "squid" ? <path d="M300 46 L340 47 L334 92 L348 126 L318 133 L308 94 Z" fill="#d8b7a0" stroke="#a8755b" strokeWidth="3" /> : null}
      {slug === "mackerel-strip" ? <path d="M300 48 Q330 59 308 79 Q338 91 311 108 Q331 119 317 136 L298 130 Q314 115 294 106 Q320 92 292 78 Q316 62 300 48Z" fill="#7b9e9b" stroke="#4d7774" strokeWidth="3" /> : null}
      {slug === "peeler-crab" ? <g fill="none" stroke="#c17b59" strokeWidth="7" strokeLinecap="round"><ellipse cx="319" cy="89" rx="28" ry="32" fill="#d69a74" stroke="#a86e50" strokeWidth="4" /><path d="M296 72 L277 60 M292 86 L270 83 M294 103 L276 113 M342 72 L361 60 M346 86 L368 83 M344 103 L362 113" /></g> : null}
      {slug === "mussel" ? <g transform="rotate(-19 319 89)"><path d="M306 50 Q352 72 330 116 Q308 141 289 112 Q275 77 306 50Z" fill="#567b76" stroke="#345750" strokeWidth="4" /><path d="M302 62 Q326 80 307 116 M315 58 Q337 83 317 121" fill="none" stroke="#b6c9bd" strokeWidth="3" /></g> : null}
      {slug === "prawn" ? <g fill="none" stroke="#d87c5b" strokeLinecap="round" strokeWidth="13"><path d="M301 57 Q329 47 341 69 Q352 89 334 104 Q316 119 306 134" /><path d="M304 78 290 68 M311 102 294 95 M326 119 314 138" strokeWidth="3" /></g> : null}
      {slug === "cockle" ? <g><path d="M298 65 Q319 43 340 65 Q347 94 320 119 Q293 94 298 65Z" fill="#d7bd93" stroke="#a78b63" strokeWidth="4" /><path d="M320 58v53M306 61l14 50M334 61l-14 50M299 75l21 36M341 75l-21 36" fill="none" stroke="#aa926d" strokeWidth="3" /></g> : null}
      {slug === "razor-clam" ? <g transform="rotate(-13 320 89)"><path d="M303 46 Q324 41 337 56 L337 127 Q320 139 303 126Z" fill="#d6b989" stroke="#9e7f54" strokeWidth="4" /><path d="M310 51v75M318 48v81M326 50v77" stroke="#b0966e" strokeWidth="2" /></g> : null}
      {slug === "sandeel" ? <g><path d="M299 90 Q316 67 345 86 L359 77 356 94 359 109 344 101 Q317 120 299 90Z" fill="#91aca0" stroke="#567b70" strokeWidth="3" /><circle cx="310" cy="87" r="2.5" fill="#183a3b" /></g> : null}
      <circle cx="320" cy="28" r="15" fill="#176b67" /><text x="320" y="33" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">1</text>
      <circle cx="305" cy="110" r="15" fill="#176b67" /><text x="305" y="115" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">2</text>
      <circle cx="382" cy="108" r="15" fill="#176b67" /><text x="382" y="113" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">3</text>
      <path d="M52 171 H588" stroke="#cfdbd5" strokeWidth="2" />
      <text x="52" y="198" fontSize="14" fontWeight="600" fill="#38534c">1 Feed onto shank</text>
      <text x="254" y="198" fontSize="14" fontWeight="600" fill="#38534c">2 Anchor bait</text>
      <text x="430" y="198" fontSize="14" fontWeight="600" fill="#38534c">3 Leave point clear</text>
    </svg>
    <p className="mt-1 text-[11px] leading-4 text-[#6b7a76]">General presentation illustration. Bait shape and hook placement vary with hook size and bait condition.</p>
  </div>;
}