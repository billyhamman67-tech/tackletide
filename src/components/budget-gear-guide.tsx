import { ExternalLink } from "lucide-react";

const gearItems = [
  {
    name: "Beachcaster rod",
    category: "Shore rod",
    search: "sea fishing beachcaster rod 12ft 13ft",
    looksFor: "For shore-ledgering, compare rod length, transport sections and the maker's casting-weight range. Match the rating to your lead and rig; a longer or heavier rod is not automatically better.",
    image: "beachRod",
  },
  {
    name: "Shore lure rod",
    category: "Lure rod",
    search: "saltwater shore lure fishing rod 9ft 10ft",
    looksFor: "Choose a rod whose stated lure-weight range covers the lures you will cast. Check its saltwater suitability, handle comfort and whether its length works for your marks.",
    image: "lureRod",
  },
  {
    name: "Fixed-spool beach reel",
    category: "Shore reel",
    search: "sea fishing fixed spool beach reel 6000 8000",
    looksFor: "Look for a spool and drag suited to your line and shore use, a smooth retrieve and corrosion-care guidance. Confirm that the reel balances with your chosen rod.",
    image: "beachReel",
  },
  {
    name: "Saltwater spinning reel",
    category: "Lure reel",
    search: "saltwater spinning reel 3000 4000",
    looksFor: "For lure fishing, compare reel balance with the rod, retrieve rate, drag and saltwater maintenance advice. Reel-size numbers differ between brands, so check the specifications.",
    image: "spinningReel",
  },
  {
    name: "Adjustable beach tripod",
    category: "Rod support",
    search: "beach fishing tripod adjustable rod rest",
    looksFor: "A stable, corrosion-resistant stand with adjustable legs and a rod cup. Check folded length and intended rod size.",
    image: "tripod",
  },
  {
    name: "Compact tackle box",
    category: "Storage",
    search: "small fishing tackle box adjustable compartments",
    looksFor: "A small box with movable dividers, secure catches and enough depth for your terminal tackle. Keep hooks covered.",
    image: "box",
  },
  {
    name: "Rechargeable head torch",
    category: "Visibility",
    search: "rechargeable head torch red light waterproof",
    looksFor: "A comfortable headband, a low setting, red-light option and a stated water-resistance rating. Carry spare power.",
    image: "torch",
  },
  {
    name: "Long-nose fishing pliers",
    category: "Hook removal",
    search: "long nose fishing pliers corrosion resistant",
    looksFor: "A grippy handle, a useful jaw length and a corrosion-resistant finish. Rinse and dry after saltwater use.",
    image: "pliers",
  },
  {
    name: "Fishing line scissors",
    category: "Line trimming",
    search: "fishing braid line scissors stainless",
    looksFor: "Compact scissors with a secure cover and blades suited to the line you use. Keep them safely stored.",
    image: "scissors",
  },
  {
    name: "Waterproof landing net",
    category: "Fish care",
    search: "shore fishing landing net telescopic rubber mesh",
    looksFor: "A strong handle and fish-friendly mesh that suit the places you can safely reach. A net does not make an unsafe landing safe.",
    image: "net",
  },
] as const;

function GearIllustration({ type }: { type: (typeof gearItems)[number]["image"] }) {
  return (
    <svg aria-hidden="true" className="h-36 w-full" viewBox="0 0 280 150">
      <rect fill="#edf3ef" height="150" rx="12" width="280" />
      <path d="M22 124h236" stroke="#d3dfd8" strokeWidth="2" />
      {type === "beachRod" && (
        <g fill="none" stroke="#315951" strokeLinecap="round" strokeLinejoin="round">
          <path d="m67 113 146-77" strokeWidth="8" />
          <path d="m72 110 8-4m23-8 7-4m24-8 8-4m24-8 8-4m23-8 7-4" stroke="#a8c7b8" strokeWidth="3" />
          <path d="M113 88c-1 16 17 20 24 6" stroke="#ad8051" strokeWidth="5" />
          <circle cx="130" cy="96" r="7" stroke="#ad8051" strokeWidth="3" />
          <path d="M210 37q12-7 19 1m-45 22q10-6 17 0m-45 24q9-5 15 0m-42 23q8-5 13 0" stroke="#6b9182" strokeWidth="2" />
        </g>
      )}
      {type === "lureRod" && (
        <g fill="none" stroke="#315951" strokeLinecap="round" strokeLinejoin="round">
          <path d="m68 113 141-74" strokeWidth="6" />
          <path d="m83 105 3-2m24-11 4-2m24-11 4-2m25-11 4-2m24-11 4-2" stroke="#a8c7b8" strokeWidth="2" />
          <path d="M112 89c0 12 13 15 20 5m-8 2 7 11" stroke="#ad8051" strokeWidth="4" />
          <path d="M208 39q14-7 21 3m-46 17q11-5 17 1m-45 22q8-5 14 0m-42 22q7-4 12 0" stroke="#6b9182" strokeWidth="2" />
          <path d="M231 42v14l-5 7-5-7V42Z" fill="#d87c5b" stroke="#a85c45" strokeWidth="2" />
        </g>
      )}
      {type === "beachReel" && (
        <g fill="none" stroke="#315951" strokeLinejoin="round" strokeWidth="4">
          <path d="M113 43h49v49h-49z" fill="#a8c7b8" />
          <path d="M106 53h64v31h-64z" fill="#d5e6dc" />
          <path d="M121 49v37m33-37v37M162 66h27m0 0 11-12m-11 12 11 12m-89 0H82" />
          <path d="M109 92c-6 14 7 27 26 27h13c18 0 30-12 25-27" fill="#dce9e2" />
          <circle cx="137" cy="105" fill="#ad8051" r="7" />
          <path d="M174 70h10" strokeLinecap="round" />
        </g>
      )}
      {type === "spinningReel" && (
        <g fill="none" stroke="#315951" strokeLinejoin="round" strokeWidth="4">
          <path d="M115 47h45v40h-45z" fill="#a8c7b8" />
          <path d="M108 54h59v24h-59z" fill="#d5e6dc" />
          <path d="M122 50v35m30-35v35m15-19h24l10 12m-10-12 10-12m-74 26H93" />
          <path d="M120 88c-9 10-2 26 13 29h11c16-3 20-19 10-29" fill="#dce9e2" />
          <circle cx="138" cy="104" fill="#ad8051" r="6" />
        </g>
      )}
      {type === "tripod" && (
        <g fill="none" stroke="#315951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6">
          <path d="M134 52v70m0-14-35 16m35-16 36 16m-36-16-3 19m-20-85 59-15m-59 15 59 16m-59-16 59-15" />
          <path d="m187 24 11 2-3 9-11-2Z" fill="#ad8051" strokeWidth="3" />
        </g>
      )}
      {type === "box" && (
        <g stroke="#315951" strokeLinejoin="round" strokeWidth="4">
          <path d="M69 62h142l-8 57H77Z" fill="#d5e6dc" />
          <path d="M79 55h123l6 10H73Z" fill="#a8c7b8" />
          <path d="M104 66v47m33-47v47m34-47v47" fill="none" stroke="#6b9182" strokeWidth="2" />
          <path d="M120 54v-9h40v9" fill="none" />
        </g>
      )}
      {type === "torch" && (
        <g transform="rotate(-20 140 76)" stroke="#315951" strokeLinejoin="round" strokeWidth="4">
          <rect fill="#315951" height="37" rx="12" width="122" x="77" y="58" />
          <path d="M197 63h19l13 13-13 13h-19Z" fill="#e2c77f" />
          <path d="M88 61v31m16-34v37" stroke="#85a89a" strokeWidth="2" />
          <circle cx="181" cy="76" fill="#dce9e2" r="5" stroke="none" />
        </g>
      )}
      {type === "pliers" && (
        <g fill="none" stroke="#315951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7">
          <path d="m140 72-36-38-11-3 5 13 34 39m8-11 38-36 11-2-5 12-36 34" />
          <path d="M132 78c-18 17-28 33-25 43 2 9 15 8 24-4l11-18 10 18c8 13 21 13 24 4 3-11-8-27-25-43" />
          <circle cx="140" cy="69" fill="#ad8051" r="7" strokeWidth="3" />
        </g>
      )}
      {type === "scissors" && (
        <g fill="none" stroke="#315951" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
          <path d="m138 73 60-47m-57 52 65 43M135 78 77 39m61 39-66 59" />
          <circle cx="125" cy="65" r="17" />
          <circle cx="125" cy="91" r="17" />
          <circle cx="125" cy="78" fill="#ad8051" r="4" strokeWidth="2" />
        </g>
      )}
      {type === "net" && (
        <g fill="none" stroke="#315951" strokeLinecap="round" strokeLinejoin="round">
          <path d="m115 67 34 29 60-63" strokeWidth="7" />
          <path d="M118 36c29-17 63-4 82 18l-37 47c-25-2-48-20-45-48Z" stroke="#176b67" strokeWidth="5" />
          <path d="m135 34 10 61m18-61 7 50m18-36-42 30m-20-18 49-30" stroke="#9ab9aa" strokeWidth="2" />
        </g>
      )}
      <text fill="#71817c" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle" x="140" y="140">
        ILLUSTRATIVE CATEGORY GUIDE
      </text>
    </svg>
  );
}

export function BudgetGearGuide() {
  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {gearItems.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]">
            <GearIllustration type={item.image} />
            <div className="p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{item.category}</p>
              <h2 className="display-font mt-1 text-2xl">{item.name}</h2>
              <p className="mt-3 text-sm leading-5 text-[#5d6e68]">{item.looksFor}</p>
              <a
                className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#176b67] px-3 text-sm font-semibold text-white hover:bg-[#1d7b75]"
                href={`https://www.amazon.co.uk/s?k=${encodeURIComponent(item.search)}`}
                target="_blank"
                rel="noreferrer"
              >
                Search Amazon UK <ExternalLink size={14} />
              </a>
              <a
                className="mt-2 inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#d9ded8] px-3 text-sm font-semibold text-[#176b67] hover:bg-[#f2f5f1]"
                href={`https://www.google.com/search?q=${encodeURIComponent(`site:anglingdirect.co.uk ${item.search}`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Search Angling Direct <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-[#77847f]">
        These are category suggestions, not specific product endorsements. Retailer search results, prices, delivery, quality and availability change; compare current listings and reviews before buying. Images are original illustrations, not photos of products for sale. Angling Direct results open a web search limited to its site. This site does not currently use affiliate links.
      </p>
    </>
  );
}
