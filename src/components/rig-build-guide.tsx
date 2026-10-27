type RigBuildGuideProps = {
  slug: string;
  name: string;
  steps: string[];
};

function Swivel({ x, y }: { x: number; y: number }) {
  return (
    <g fill="#fffefa" stroke="#176b67" strokeWidth="2.5">
      <circle cx={x} cy={y} r="5" />
      <circle cx={x} cy={y + 10} r="3" />
    </g>
  );
}

function Hook({ x, y }: { x: number; y: number }) {
  return <path d={`M${x} ${y}v10c0 8 12 8 12 0v-3m0 0 5-5`} fill="none" stroke="#294d47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />;
}

function Lead({ x, y }: { x: number; y: number }) {
  return <path d={`M${x - 8} ${y}h16l-8 13Z`} fill="#ad8051" stroke="#806b42" strokeWidth="1.5" />;
}

function StepDrawing({ slug, step }: { slug: string; step: number }) {
  const opacity = (addedInStep: number) => step >= addedInStep ? 1 : 0.15;

  if (slug === "float-rig") {
    return (
      <>
        <path d="M120 8v105" stroke="#395d56" strokeWidth="3" />
        <g opacity={opacity(1)} stroke="#ad8051" strokeLinecap="round" strokeWidth="3">
          <path d="M110 19h20M112 24h16" />
        </g>
        <g opacity={opacity(2)}>
          <path d="M120 29v8" stroke="#395d56" strokeWidth="3" />
          <path d="M120 37c-20 1-20 27 0 29 20-2 20-28 0-29Z" fill="#d5e6dc" stroke="#176b67" strokeWidth="3" />
          <path d="M120 66v7" stroke="#395d56" strokeWidth="3" />
          <circle cx="120" cy="73" r="4" fill="#fffefa" stroke="#ad8051" strokeWidth="2" />
        </g>
        <g opacity={opacity(3)}><Swivel x={120} y={80} /><path d="M120 90v13" stroke="#547a70" strokeWidth="2.5" /></g>
        <g opacity={opacity(4)}><Hook x={120} y={101} /><circle cx="139" cy="108" r="5" fill="#c87855" /></g>
        <text fill="#526660" fontSize="10" x="146" y="23">Stop</text>
        <text fill="#526660" fontSize="10" x="146" y="53">Float</text>
        <text fill="#526660" fontSize="10" x="146" y="86">Swivel</text>
        <text fill="#526660" fontSize="10" x="146" y="108">Hook</text>
      </>
    );
  }

  if (slug === "two-hook-flapper") {
    return (
      <>
        <path d="M120 13v96" stroke="#395d56" strokeWidth="3" />
        <g opacity={opacity(1)}><Swivel x={120} y={12} /></g>
        <g opacity={opacity(2)} fill="none" stroke="#176b67" strokeWidth="2.5">
          <path d="M120 44H83v10M120 72h37v10" />
          <circle cx="120" cy="44" r="4" fill="#fffefa" />
          <circle cx="120" cy="72" r="4" fill="#fffefa" />
        </g>
        <g opacity={opacity(3)}>
          <path d="M83 54v17M157 82v12" fill="none" stroke="#547a70" strokeWidth="2" />
          <Hook x={83} y={70} />
          <Hook x={157} y={93} />
        </g>
        <g opacity={opacity(4)}><Lead x={120} y={106} /></g>
        <text fill="#526660" fontSize="10" x="25" y="43">Snood 1</text>
        <text fill="#526660" fontSize="10" x="164" y="75">Snood 2</text>
        <text fill="#526660" fontSize="10" x="139" y="119">Lead link</text>
      </>
    );
  }

  return (
    <>
      <path d="M120 8v105" stroke="#395d56" strokeWidth="3" />
      <g opacity={opacity(1)}>
        <path d="M120 33h24v10" fill="none" stroke="#547a70" strokeWidth="2.5" />
        <ellipse cx="120" cy="34" rx="8" ry="5" fill="#fffefa" stroke="#176b67" strokeWidth="2.5" />
        <Lead x={144} y={51} />
      </g>
      <g opacity={opacity(2)}><Swivel x={120} y={72} /></g>
      <g opacity={opacity(3)}>
        <path d="M120 82v15" stroke="#547a70" strokeWidth="2.5" />
        <Hook x={120} y={95} />
      </g>
      <g opacity={opacity(4)}><circle cx="139" cy="106" r="5" fill="#c87855" /></g>
      <text fill="#526660" fontSize="10" x="154" y="42">Running link + lead</text>
      <text fill="#526660" fontSize="10" x="145" y="77">Swivel</text>
      <text fill="#526660" fontSize="10" x="145" y="101">Hooklength</text>
    </>
  );
}

export function RigBuildGuide({ slug, name, steps }: RigBuildGuideProps) {
  if (!["running-ledger", "float-rig", "two-hook-flapper"].includes(slug)) return null;

  return (
    <section aria-labelledby="rig-picture-steps" className="mt-5 rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5">
      <h2 className="display-font text-2xl" id="rig-picture-steps">Build it step by step</h2>
      <p className="mt-1 text-sm leading-5 text-[#66766f]">
        Follow the connections in order. Faded parts are added in later steps; the drawings are illustrative and not to scale.
      </p>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2">
        {steps.map((stepText, index) => (
          <li key={stepText} className="overflow-hidden rounded-lg border border-[#e5e8e3] bg-[#f7f8f4]">
            <svg
              aria-label={`${name}, step ${index + 1}: ${stepText}`}
              className="mx-auto block h-36 w-full"
              role="img"
              viewBox="0 0 240 130"
            >
              <rect fill="#f2f5f1" height="130" width="240" />
              <path d="M30 116h180" stroke="#d9ded8" strokeWidth="1.5" />
              <StepDrawing slug={slug} step={index + 1} />
              <circle cx="20" cy="20" r="13" fill="#dce9e2" />
              <text dominantBaseline="middle" fill="#26635a" fontSize="12" fontWeight="700" textAnchor="middle" x="20" y="20">{index + 1}</text>
            </svg>
            <p className="border-t border-[#e5e8e3] px-3 py-3 text-sm leading-5 text-[#53665f]">{stepText}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
