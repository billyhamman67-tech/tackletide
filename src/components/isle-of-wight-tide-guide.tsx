import Link from "next/link";

type TideSceneProps = {
  level: "Low" | "High";
};

function TideScene({ level }: TideSceneProps) {
  const isLow = level === "Low";
  const titleId = `iow-${level.toLowerCase()}-tide-title`;
  const descriptionId = `iow-${level.toLowerCase()}-tide-description`;

  return (
    <svg
      aria-labelledby={`${titleId} ${descriptionId}`}
      className="block h-auto w-full"
      role="img"
      viewBox="0 0 720 300"
    >
      <title id={titleId}>{`Illustration of an Isle of Wight beach at ${level.toLowerCase()} tide`}</title>
      <desc id={descriptionId}>
        {isLow
          ? "An illustrative sandy shore with the sea farther out, exposing beach contours and a shallow channel."
          : "An illustrative sandy shore with the sea higher on the beach and fish shown in the nearshore water."}
      </desc>
      <defs>
        <linearGradient id={`sky-${level.toLowerCase()}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e9f1ed" />
          <stop offset="100%" stopColor="#fffefa" />
        </linearGradient>
        <pattern id={`sand-${level.toLowerCase()}`} height="12" patternTransform="rotate(18)" patternUnits="userSpaceOnUse" width="12">
          <circle cx="2" cy="3" fill="#c6a978" r="1" />
        </pattern>
      </defs>
      <rect fill={`url(#sky-${level.toLowerCase()})`} height="300" width="720" />
      <circle cx="615" cy="57" fill="#e2c77f" opacity=".8" r="22" />
      <path d="M0 50 85 61 168 91 250 133 340 177 430 203 520 215 720 220 720 300 0 300Z" fill="#e7d7b9" />
      <path d="M0 50 85 61 168 91 250 133 340 177 430 203 520 215 720 220 720 300 0 300Z" fill={`url(#sand-${level.toLowerCase()})`} opacity=".55" />
      {!isLow && <path d="M300 156 340 177 430 203 520 215 720 220 720 300 300 300Z" fill="#8fb9b4" />}
      <path
        d={isLow ? "M560 217 720 220 720 300 560 300Z" : "M300 156 340 177 430 203 520 215 720 220 720 300 300 300Z"}
        fill="#78aaa7"
      />
      <path
        d={isLow ? "M560 217 Q635 212 720 220" : "M300 156 Q370 158 430 203 T720 220"}
        fill="none"
        stroke="#f7fcf8"
        strokeDasharray="7 6"
        strokeWidth="3"
      />
      <path d="M420 211 Q460 200 500 213" fill="none" stroke="#a9814b" strokeWidth="3" />
      <path d="M438 218 Q469 211 497 219" fill="none" stroke="#a9814b" strokeWidth="2" />
      {!isLow && (
        <g fill="#183a3b">
          <path d="M438 246q12-10 24 0-12 10-24 0m-4 0-8-6v12Z" />
          <path d="M500 266q10-8 20 0-10 8-20 0m-4 0-7-5v10Z" />
          <path d="M581 245q9-7 18 0-9 7-18 0m-4 0-6-4v8Z" />
        </g>
      )}
      <g fill="#425750" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="600">
        <text x="24" y="33">LAND</text>
        <text x="625" y="284">SEA</text>
      </g>
      <g fill="none" stroke="#425750" strokeWidth="1.5">
        <path d={isLow ? "M394 246 455 222" : "M392 231 453 247"} />
        <path d={isLow ? "M497 260 548 235" : "M523 233 548 226"} />
      </g>
      <g fill="#183a3b" fontFamily="Arial, sans-serif" fontSize="12">
        <text x="305" y={isLow ? "261" : "227"}>{isLow ? "Exposed beach" : "Nearshore water"}</text>
        <text x={isLow ? "500" : "551"} y={isLow ? "253" : "226"}>{isLow ? "Shallow gutter" : "Moving water"}</text>
      </g>
      <rect fill="#fffefa" fillOpacity=".9" height="27" rx="8" width="92" x="16" y="258" />
      <text fill="#176b67" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" x="29" y="276">
        {level.toUpperCase()} TIDE
      </text>
    </svg>
  );
}

export function IsleOfWightTideGuide() {
  return (
    <section aria-labelledby="iow-tide-guide-heading" className="mt-7">
      <div className="mb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Isle of Wight · shoreline guide</p>
        <h2 className="display-font mt-1 text-3xl" id="iow-tide-guide-heading">Read the beach at different tides</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[#63736e]">
          These original diagrams show a general sandy-shore profile, not photographs or verified fishing pegs. Sandown Seafront is a broad, approximate map reference; check local access, conditions and rules before fishing.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]">
          <TideScene level="Low" />
          <div className="border-t border-[#e5e8e3] p-4">
            <h3 className="display-font text-xl">Low tide: read the exposed ground</h3>
            <p className="mt-2 text-sm leading-6 text-[#61716b]">
              The retreating water may reveal gutters and changes in the sand. Use them as general features to observe from a safe, permitted viewpoint, not as guaranteed fish-holding spots.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]">
          <TideScene level="High" />
          <div className="border-t border-[#e5e8e3] p-4">
            <h3 className="display-font text-xl">High tide: check the nearshore</h3>
            <p className="mt-2 text-sm leading-6 text-[#61716b]">
              The water reaches farther up the beach and fish may move closer in. Keep clear of other beach users and never let a rising tide cut off your route back.
            </p>
          </div>
        </article>
      </div>
      <Link
        className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-[#176b67] px-4 text-sm font-semibold text-white hover:bg-[#1d7b75]"
        href="/tides?spot=sandown-seafront"
      >
        Check Sandown tide predictions
      </Link>
    </section>
  );
}
