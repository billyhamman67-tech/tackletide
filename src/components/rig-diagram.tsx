type RigDiagramProps = {
  slug: string;
  name: string;
  compact?: boolean;
};

function Hook({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return <path d="M0 0 C0 20 16 25 24 15 C29 8 25 1 18 -1 M18 -1 L30 -8" transform={`translate(${x} ${y}) scale(${flip ? -1 : 1} 1)`} fill="none" stroke="#294d47" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />;
}

function DiagramContent({ slug }: { slug: string }) {
  if (slug === "two-hook-flapper") return <>
    <path d="M320 24 V215" stroke="#395d56" strokeWidth="4" />
    <path d="M320 88 H205 V150" stroke="#547a70" strokeWidth="3" fill="none" />
    <path d="M320 133 H435 V190" stroke="#547a70" strokeWidth="3" fill="none" />
    <circle cx="320" cy="88" r="7" fill="#176b67" /><circle cx="320" cy="133" r="7" fill="#176b67" />
    <Hook x={205} y={150} /><Hook x={435} y={190} flip />
    <path d="M306 216 L320 238 L334 216 Z" fill="#ad8051" />
    <text x="190" y="79" className="rig-label">Snood 1</text><text x="440" y="123" className="rig-label">Snood 2</text><text x="345" y="232" className="rig-label">Lead</text>
  </>;

  if (slug === "pulley-rig") return <>
    <path d="M320 22 V68" stroke="#395d56" strokeWidth="4" />
    <circle cx="320" cy="76" r="11" fill="#fffefa" stroke="#176b67" strokeWidth="4" />
    <path d="M320 87 V185 M320 87 C354 95 381 111 405 133 V169" stroke="#547a70" strokeWidth="3" fill="none" />
    <circle cx="320" cy="185" r="7" fill="#176b67" />
    <path d="M306 213 L320 238 L334 213 Z" fill="#ad8051" />
    <Hook x={405} y={169} flip />
    <text x="342" y="69" className="rig-label">Pulley swivel</text><text x="418" y="201" className="rig-label">Hook</text><text x="342" y="230" className="rig-label">Lead</text>
  </>;

  if (slug === "float-rig") return <>
    <path d="M320 22 V216" stroke="#395d56" strokeWidth="4" />
    <path d="M320 57 H344 M320 65 H340" stroke="#ad8051" strokeWidth="4" strokeLinecap="round" />
    <path d="M320 74 C286 76 286 119 320 122 C354 119 354 76 320 74 Z" fill="#d5e6dc" stroke="#176b67" strokeWidth="4" />
    <circle cx="320" cy="142" r="7" fill="#176b67" />
    <Hook x={320} y={209} />
    <text x="358" y="102" className="rig-label">Float</text><text x="352" y="147" className="rig-label">Swivel</text><text x="358" y="213" className="rig-label">Hook</text>
  </>;

  return <>
    <path d="M320 22 V58" stroke="#395d56" strokeWidth="4" />
    <path d="M300 64 L320 52 L340 64 L320 76 Z" fill="#d5e6dc" stroke="#176b67" strokeWidth="3" />
    <path d="M320 76 V121" stroke="#395d56" strokeWidth="4" />
    <path d="M299 103 L320 122 L341 103" fill="none" stroke="#ad8051" strokeWidth="5" strokeLinejoin="round" />
    <circle cx="320" cy="132" r="8" fill="#fffefa" stroke="#176b67" strokeWidth="4" />
    <path d="M320 140 V205" stroke="#547a70" strokeWidth="3" />
    <Hook x={320} y={202} />
    <text x="355" y="69" className="rig-label">Running link</text><text x="355" y="110" className="rig-label">Lead</text><text x="352" y="139" className="rig-label">Swivel</text><text x="352" y="193" className="rig-label">Hooklength</text>
  </>;
}

export function RigDiagram({ slug, name, compact = false }: RigDiagramProps) {
  return <div className="overflow-hidden rounded-lg border border-[#d9ded8] bg-[#edf3ef] p-3">
    <svg viewBox="0 0 640 260" role="img" aria-label={`${name} rig component diagram`} className={`h-auto w-full ${compact ? "max-h-36" : "max-h-64"}`}>
      <style>{`.rig-label{font:600 14px sans-serif;fill:#4b665f}`}</style>
      <path d="M32 242 H608" stroke="#d2ddd7" strokeWidth="2" />
      <DiagramContent slug={slug} />
    </svg>
    <p className="mt-1 text-[11px] leading-4 text-[#6b7a76]">Illustrative layout only; component proportions are not to scale.</p>
  </div>;
}