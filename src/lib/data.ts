export type FishingSpot = {
  slug: string;
  name: string;
  region: string;
  kind: string;
  latitude: number;
  longitude: number;
  ground: string[];
  species: string[];
  access: string;
  summary: string;
  sourceUrl: string;
};

export const fishingSpots: FishingSpot[] = [
  {
    slug: "barry-island", name: "Barry Island", region: "South Wales", kind: "Beach & promenade",
    latitude: 51.3934, longitude: -3.2737, ground: ["Sand", "Mixed"], species: ["Bass", "Flounder", "Whiting"],
    access: "Public seafront; check local restrictions and seasonal notices",
    summary: "A well-known Vale of Glamorgan seaside location. Conditions and fishing access vary around the bay and should be checked locally.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Barry%20Island%20Wales",
  },
  {
    slug: "clevedon-pier", name: "Clevedon Pier", region: "Bristol Channel", kind: "Pier",
    latitude: 51.4385, longitude: -2.8554, ground: ["Mud", "Mixed"], species: ["Bass", "Conger eel", "Flatfish"],
    access: "Pier operator rules apply; check current fishing access and tide conditions",
    summary: "A landmark pier on the Bristol Channel. Very large tidal ranges and local pier rules make a current safety and access check essential.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Clevedon%20Pier",
  },
  {
    slug: "llandudno-pier", name: "Llandudno Pier", region: "North Wales", kind: "Pier",
    latitude: 53.3263, longitude: -3.8292, ground: ["Mixed", "Rock"], species: ["Mackerel", "Pollack", "Dogfish"],
    access: "Pier access and fishing rules are managed locally; verify before visiting",
    summary: "A prominent Victorian pier on the North Wales coast. Fishing permission, opening times and available sections must be confirmed with the operator.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Llandudno%20Pier",
  },
  {
    slug: "st-ives-harbour", name: "St Ives Harbour", region: "Cornwall", kind: "Harbour",
    latitude: 50.211, longitude: -5.4808, ground: ["Rock", "Mixed"], species: ["Mackerel", "Pollack", "Wrasse"],
    access: "Busy working and visitor harbour; observe signs and harbour authority rules",
    summary: "A sheltered harbour setting surrounded by rocky coastline. Access and fishing restrictions can change with harbour activity.",
    sourceUrl: "https://www.openstreetmap.org/search?query=St%20Ives%20Harbour%20Cornwall",
  },
  {
    slug: "mount-batten", name: "Mount Batten", region: "Devon", kind: "Headland & harbour area",
    latitude: 50.3577, longitude: -4.1188, ground: ["Rock", "Mixed"], species: ["Bass", "Pollack", "Wrasse"],
    access: "Access and fishing restrictions vary by section; check local notices and conditions",
    summary: "A coastal area at the mouth of Plymouth Sound. This broad place reference is not a confirmed fishing position or access recommendation.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Mount%20Batten%20Plymouth",
  },
  {
    slug: "brighton-palace-pier", name: "Brighton Palace Pier", region: "South Coast", kind: "Pier & shingle coast",
    latitude: 50.8154, longitude: -0.1373, ground: ["Shingle", "Mixed"], species: ["Bass", "Mackerel", "Flatfish"],
    access: "Pier operator rules apply; verify fishing access before travelling",
    summary: "A central Brighton landmark on a shingle coast. The pier is a managed attraction, so access for fishing should never be assumed.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Brighton%20Palace%20Pier",
  },
  {
    slug: "sandown-seafront", name: "Sandown Seafront", region: "Isle of Wight", kind: "Beach & seafront",
    latitude: 50.6568, longitude: -1.1482, ground: ["Sand"], species: ["Bass", "Flatfish"],
    access: "Check local beach access, seasonal restrictions and current conditions",
    summary: "A broad reference to Sandown's seafront on the Isle of Wight. This approximate pin is not a confirmed fishing position; local access and fishing details need verification.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Sandown%20Beach%20Isle%20of%20Wight",
  },
  {
    slug: "cromer-pier", name: "Cromer Pier", region: "East England", kind: "Pier",
    latitude: 52.9321, longitude: 1.3007, ground: ["Shingle", "Mixed"], species: ["Bass", "Mackerel", "Flatfish"],
    access: "Check pier status, fishing rules and tide conditions locally",
    summary: "A North Norfolk pier extending from the town seafront. Access, conditions and any restrictions require a current local check.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Cromer%20Pier",
  },
  {
    slug: "portrush-harbour", name: "Portrush Harbour", region: "Northern Ireland", kind: "Harbour",
    latitude: 55.2032, longitude: -6.6566, ground: ["Rock", "Mixed"], species: ["Mackerel", "Pollack", "Wrasse"],
    access: "Working harbour; follow harbour rules and verify permitted access",
    summary: "A real coastal harbour on the north Antrim coast. Currents, harbour traffic and local restrictions make a fresh conditions check important.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Portrush%20Harbour",
  },
  {
    slug: "blackpool-north-pier", name: "Blackpool North Pier", region: "North West England", kind: "Pier",
    latitude: 53.8284, longitude: -3.0555, ground: ["Sand", "Mixed"], species: ["Bass", "Whiting", "Flatfish"],
    access: "Pier operator rules apply; check current access before planning a session",
    summary: "A landmark on the Fylde coast. Fishing access is subject to the pier operator and current conditions; exact mark details need local confirmation.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Blackpool%20North%20Pier",
  },
  {
    slug: "troon-harbour", name: "Troon Harbour", region: "Scotland", kind: "Harbour",
    latitude: 55.5416, longitude: -4.6668, ground: ["Mixed", "Sand"], species: ["Mackerel", "Cod", "Flatfish"],
    access: "Working harbour; check restrictions, safety notices and permitted areas",
    summary: "A commercial harbour on the Ayrshire coast. It is a geographic reference, not a guarantee that fishing is permitted from harbour structures.",
    sourceUrl: "https://www.openstreetmap.org/search?query=Troon%20Harbour",
  },
];

export type SpeciesReferenceImage = {
  src: string;
  alt: string;
  credit: string;
  license: string;
  source: string;
  kind: "Photograph" | "Historical illustration";
};

export type Species = {
  slug: string;
  name: string;
  scientific: string;
  shape: string;
  marks: string;
  habitat: string;
  note: string;
  image?: SpeciesReferenceImage;
};

export const species: Species[] = [
  { slug: "bass", name: "European seabass", scientific: "Dicentrarchus labrax", shape: "Streamlined", marks: "Dark back, silver sides, pronounced gill cover", habitat: "Estuaries, surf beaches and rocky ground", note: "Check current regional rules and measure fish independently before retaining." },
  { slug: "mackerel", name: "Atlantic mackerel", scientific: "Scomber scombrus", shape: "Streamlined", marks: "Wavy dark bars along a blue-green back", habitat: "Open water and coastal shoals", note: "Handle gently and check current local guidance." },
  { slug: "flounder", name: "European flounder", scientific: "Platichthys flesus", shape: "Flatfish", marks: "Both eyes on one side; often rough bumps near the head", habitat: "Estuaries, sandy and muddy shallows", note: "Can be confused with other flatfish; use several features to identify." },
  { slug: "pollack", name: "Pollack", scientific: "Pollachius pollachius", shape: "Deep-bodied", marks: "Lower jaw projects; curved lateral line", habitat: "Rocky ground and kelp edges", note: "Similar species occur; verify identification and current rules." },
  { slug: "whiting", name: "Whiting", scientific: "Merlangius merlangus", shape: "Elongated", marks: "Small chin barbel and dark mark at pectoral base", habitat: "Coastal waters over mixed ground", note: "Use a clear side view and check local minimum-size rules." },
  { slug: "plaice", name: "European plaice", scientific: "Pleuronectes platessa", shape: "Flatfish", marks: "Orange-red spots and a smooth body edge", habitat: "Sandy and mixed seabeds", note: "Orange spots help distinguish it, but confirm other features too." },
  {
    slug: "garfish", name: "Garfish", scientific: "Belone belone", shape: "Elongated",
    marks: "Very long, narrow beak-like jaws, slim body and green-tinted bones",
    habitat: "Near-surface coastal water, especially around bays and headlands in warmer months",
    note: "Handle carefully around the long jaws. Verify current local rules and release unwanted fish promptly.",
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Belone_belone.jpg", alt: "Garfish (Belone belone), shown side-on as a species reference", credit: "Public domain", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Belone_belone.jpg", kind: "Photograph" },
  },
  {
    slug: "ballan-wrasse", name: "Ballan wrasse", scientific: "Labrus bergylta", shape: "Deep-bodied",
    marks: "Deep, robust body, thick lips and large scales; colour varies from green and brown to orange",
    habitat: "Rocky shores, reefs and kelp-rich ground",
    note: "Wrasse are easily damaged by rough handling. Use wet hands, support the fish and follow current local rules.",
    image: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Maragota_%28Labrus_bergylta%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-21%2C_DD_20.jpg/960px-Maragota_%28Labrus_bergylta%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-21%2C_DD_20.jpg", alt: "Ballan wrasse (Labrus bergylta), a reference photograph taken in Portugal", credit: "Diego Delso", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Maragota_(Labrus_bergylta),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2020-07-21,_DD_20.jpg", kind: "Photograph" },
  },
  {
    slug: "conger-eel", name: "European conger", scientific: "Conger conger", shape: "Elongated",
    marks: "Long, muscular eel-shaped body, large mouth and no pelvic fins",
    habitat: "Rocky ground, deep coastal water, wrecks and harbour structures",
    note: "A powerful fish with a strong bite. Keep hands away from the mouth and use suitable tools and experienced help for unhooking.",
    image: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Conger_eel%2C_Paignton_Sands_-_geograph.org.uk_-_7654656.jpg/960px-Conger_eel%2C_Paignton_Sands_-_geograph.org.uk_-_7654656.jpg", alt: "European conger (Conger conger) photographed at Paignton Sands", credit: "Derek Harper", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Conger_eel,_Paignton_Sands_-_geograph.org.uk_-_7654656.jpg", kind: "Photograph" },
  },
  {
    slug: "tub-gurnard", name: "Tub gurnard", scientific: "Chelidonichthys lucerna", shape: "Deep-bodied",
    marks: "Large bony head, broad pectoral fins and three free finger-like rays below each pectoral fin",
    habitat: "Sandy and mixed seabeds in coastal water",
    note: "The spiny head and fins can prick. Handle carefully and check current rules before deciding whether to retain a catch.",
    image: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/FMIB_46127_Elleck.jpeg/960px-FMIB_46127_Elleck.jpeg", alt: "Historical illustration of a tub gurnard, not a photograph", credit: "Jonathan Couch", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:FMIB_46127_Elleck.jpeg", kind: "Historical illustration" },
  },
];

export const baits = [
  {
    slug: "lugworm", name: "Lugworm", type: "Worm", targets: ["Bass", "Flatfish", "Whiting"], ground: ["Sand", "Mud", "Mixed"],
    use: "A versatile natural bait for many bottom-feeding species. Presentation and freshness matter.",
    photo: { src: "https://upload.wikimedia.org/wikipedia/commons/8/86/Lugworm_Casts_-_geograph.org.uk_-_1460195.jpg", alt: "Lugworm casts on wet beach sediment, showing habitat rather than the worm itself", credit: "Anne Burgess", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Lugworm_Casts_-_geograph.org.uk_-_1460195.jpg" },
    mountingSteps: ["If using a baiting needle, pass it gently through the worm from head end to tail.", "Slide the worm onto the hooklength and over the hook shank.", "Pierce the worm near its end to anchor it, then leave the hook point clear.", "Use fine bait elastic sparingly if the worm is soft or casting would otherwise strip it."],
  },
  {
    slug: "ragworm", name: "Ragworm", type: "Worm", targets: ["Bass", "Wrasse", "Flatfish"], ground: ["Sand", "Rock", "Mixed"],
    use: "A lively bait often presented singly or in bunches; handle gently and keep cool.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Alitta_virens_%28head%29.jpg/960px-Alitta_virens_%28head%29.jpg", alt: "Close-up photograph of a ragworm head", credit: "Hans Hillewaert", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Alitta_virens_(head).jpg" },
    mountingSteps: ["Choose a worm or section that suits the hook and intended bait size.", "Pass the hook through the tougher head end first, avoiding repeated punctures.", "Thread a short section over the shank and leave the tail free to move.", "Keep the hook point exposed; several small worms can be added without covering it."],
  },
  {
    slug: "squid", name: "Squid", type: "Cephalopod", targets: ["Bass", "Pollack", "Whiting"], ground: ["Rock", "Sand", "Mixed"],
    use: "Tough strips stay on the hook well and can be combined with other baits.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Loligo_vulgaris.jpg/960px-Loligo_vulgaris.jpg", alt: "Common squid specimen photographed for species reference", credit: "Hans Hillewaert", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Loligo_vulgaris.jpg" },
    mountingSteps: ["Cut a narrow strip from the mantle, keeping some skin attached for toughness.", "Pass the hook through the narrow end of the strip.", "Fold the strip and pass the hook through again to hold it straight.", "Leave the point clear and add a few loose turns of bait elastic if needed."],
  },
  {
    slug: "mackerel-strip", name: "Mackerel strip", type: "Fish bait", targets: ["Bass", "Pollack", "Dogfish"], ground: ["Rock", "Mixed"],
    use: "Oily fish flesh can be cut into strips for ledger and pulley-style presentations.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Atlantic_mackerel_%28Scomber_scombrus%29.jpg/960px-Atlantic_mackerel_%28Scomber_scombrus%29.jpg", alt: "Atlantic mackerel, the source fish for mackerel-strip bait", credit: "Petar Milošević", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Atlantic_mackerel_(Scomber_scombrus).jpg" },
    mountingSteps: ["Cut a tapered strip with the skin left on as a firm backing.", "Pass the hook through the narrow end, skin side toward the hook shank.", "Take the hook through the strip again to anchor it and keep it straight.", "Keep the point exposed and secure with bait elastic for a firm cast."],
  },
  {
    slug: "peeler-crab", name: "Peeler crab", type: "Crustacean", targets: ["Bass", "Smooth-hound"], ground: ["Sand", "Mixed"],
    use: "A seasonal, soft-shell bait; availability and lawful collection vary locally.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Carcinus_maenas.jpg/960px-Carcinus_maenas.jpg", alt: "Common shore crab; reference image, not specifically a peeling soft-shell crab", credit: "Hans Hillewaert", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Carcinus_maenas.jpg" },
    mountingSteps: ["Use a fresh, legally obtained soft-shell crab and remove loose legs if needed.", "Pass the hook through a leg socket or firm underside tissue.", "Bring the hook point out through the body so it remains unobstructed.", "Bind the soft bait gently with bait elastic without crushing the body."],
  },
  {
    slug: "spider-crab", name: "Spider crab", type: "Crustacean", targets: ["Bass", "Smooth-hound", "Wrasse"], ground: ["Sand", "Mixed", "Rock"],
    use: "A locally available crab bait that can be presented in sections. Suitability depends on the target species, mark and season; this is general guidance, not a catch guarantee.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Maja_squinado_underside.jpg/960px-Maja_squinado_underside.jpg", alt: "Spiny spider crab (Maja brachydactyla), underside view", credit: "Júlio Reis", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Maja_squinado_underside.jpg" },
    mountingSteps: ["Use only a legally obtained crab and check current local collection rules and seasonal restrictions.", "For a manageable bait, select a firm leg or body section and expose some flesh by cracking the shell.", "Pass the hook through the exposed firm meat and bring it back through to secure the section.", "Bind loosely with bait elastic if needed; leave the hook point and barb clear."],
  },
  {
    slug: "mussel", name: "Mussel", type: "Shellfish", targets: ["Wrasse", "Flatfish", "Whiting"], ground: ["Rock", "Mixed"],
    use: "Secure soft flesh with bait elastic. Check local collection rules and closures.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Mytilus_edulis_%2816133150058%29.jpg/960px-Mytilus_edulis_%2816133150058%29.jpg", alt: "Blue mussels, shown as bait-source reference", credit: "Andrew C", license: "CC BY 2.0", source: "https://commons.wikimedia.org/wiki/File:Mytilus_edulis_(16133150058).jpg" },
    mountingSteps: ["Open the shell and remove the mussel meat, keeping it intact where possible.", "Pass the hook through the firmer part of the flesh.", "Fold the flesh around the shank and pass the hook through once more.", "Wrap bait elastic around the mussel to hold it together, leaving the hook point clear."],
  },
  {
    slug: "prawn", name: "Prawn", type: "Crustacean", targets: ["Bass", "Wrasse", "Flatfish"], ground: ["Sand", "Rock", "Mixed"],
    use: "A versatile, soft-bodied bait that can be presented whole or in sections to suit hook size. Keep chilled and use fresh or properly thawed bait.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Common_Prawn_%2848204048766%29.jpg/960px-Common_Prawn_%2848204048766%29.jpg", alt: "Common prawn, shown as a reference for prawn bait", credit: "Mike Prince", license: "CC BY 2.0", source: "https://commons.wikimedia.org/wiki/File:Common_Prawn_(48204048766).jpg" },
    mountingSteps: ["Choose a prawn size that suits the hook; peel it if a softer presentation is wanted.", "Pass the hook through the tail end and gently thread the prawn onto the shank.", "Bring the hook point out near the head end so the bait sits straight.", "Use a few loose turns of bait elastic if needed, leaving the hook point clear."],
  },
  {
    slug: "cockle", name: "Cockle", type: "Shellfish", targets: ["Bass", "Flatfish", "Whiting"], ground: ["Sand", "Mud", "Mixed"],
    use: "Cockle meat is a soft, compact shellfish bait often used for bottom-feeding species. Buy it from a reliable source and check shellfish safety notices before eating or gathering.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Cerastoderma_edule%2C_1807281919%2C_ako.jpg/960px-Cerastoderma_edule%2C_1807281919%2C_ako.jpg", alt: "Common cockle in its shell, a reference image for cockle bait", credit: "Ansgar Koreng", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Cerastoderma_edule,_1807281919,_ako.jpg" },
    mountingSteps: ["Open the shell and remove the meat, keeping the firmer foot intact if possible.", "Pass the hook through the firmest part of the meat.", "Fold the soft flesh once around the hook shank and pass the hook through again.", "Bind gently with bait elastic and leave the hook point exposed."],
  },
  {
    slug: "razor-clam", name: "Razor clam", type: "Shellfish", targets: ["Bass", "Flatfish", "Whiting"], ground: ["Sand", "Mixed"],
    use: "The long, firm flesh can be cut into a strip for a neat bottom-fishing bait. Availability and collection rules vary; check local notices and only use legally sourced shellfish.",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Ensis_siliqua_%28giant_razor_clam%29.jpg/960px-Ensis_siliqua_%28giant_razor_clam%29.jpg", alt: "Giant razor clam (Ensis siliqua), shown as a razor-clam bait reference", credit: "James St. John", license: "CC BY 2.0", source: "https://commons.wikimedia.org/wiki/File:Ensis_siliqua_(giant_razor_clam).jpg" },
    mountingSteps: ["Rinse the flesh and cut a narrow strip suited to the hook.", "Pass the hook through one end of the strip, keeping the flesh aligned with the shank.", "Fold the strip and hook through it again to secure the bait.", "Use bait elastic for a firmer hold if needed, keeping the hook point clear."],
  },
  {
    slug: "sandeel", name: "Sandeel", type: "Fish bait", targets: ["Bass", "Pollack", "Flatfish"], ground: ["Sand", "Mixed"],
    use: "A slim fish bait that can be presented whole or as a strip. Frozen bait is delicate after thawing, so handle gently and keep it cool.",
    photo: { src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Large_sandeel.jpg", alt: "Large sandeel, shown as a reference image for sandeel bait", credit: "Peter van der Sluijs", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Large_sandeel.jpg" },
    mountingSteps: ["Select a bait size that matches the hook and intended presentation.", "For a whole sandeel, gently thread the hook through the mouth and along the body.", "Bring the hook point out through the side so the bait lies straight.", "Secure delicate bait with a few loose turns of bait elastic, leaving the point exposed."],
  },
];

export const rigs = [
  { slug: "running-ledger", name: "Running ledger", style: "Ledger", level: "Beginner", ground: ["Sand", "Mixed"], targets: ["Bass", "Flatfish"], components: ["Main line", "Running link or slider", "Lead link", "Swivel", "Hooklength", "Hook"], steps: ["Thread a running link onto the main line.", "Tie the main line to a strong swivel.", "Attach a hooklength to the other swivel eye.", "Add a suitable lead through the link and bait the hook."], description: "A simple fish-finder presentation that lets a fish take line with less resistance. Choose lead weight for conditions and casting ability." },
  { slug: "two-hook-flapper", name: "Two-hook flapper", style: "Multi-hook", level: "Beginner", ground: ["Sand", "Shingle"], targets: ["Whiting", "Flatfish", "Mackerel"], components: ["Main line", "Lead link", "Swivel", "Two snoods", "Two hooks"], steps: ["Tie the rig body between swivels.", "Add two snood attachments spaced along the body.", "Tie short snoods and hooks to the attachments.", "Attach the lead link and bait both hooks."], description: "A straightforward multi-hook rig for presenting small baits at different heights. Avoid snaggy ground and follow local hook rules." },
  { slug: "pulley-rig", name: "Pulley rig", style: "Ledger", level: "Intermediate", ground: ["Mixed", "Rock"], targets: ["Bass", "Dogfish", "Pollack"], components: ["Shockleader", "Rig body", "Pulley swivel", "Lead link", "Hooklength", "Hook"], steps: ["Build the rig body with a lead link and pulley swivel.", "Connect the hooklength so the hook can pull the lead upward during retrieval.", "Check all knots and crimps under load.", "Bait the hook and cast only if competent with the tackle."], description: "Designed to help lift the lead clear during retrieval. Rig construction and casting safety are important; it does not eliminate snags." },
  { slug: "float-rig", name: "Float rig", style: "Float", level: "Beginner", ground: ["Rock", "Mixed"], targets: ["Mackerel", "Pollack", "Wrasse"], components: ["Main line", "Float", "Bead or stop", "Swivel", "Hooklength", "Hook"], steps: ["Set the float stop for the intended fishing depth.", "Thread on the float and a protective bead.", "Tie on a swivel and suitable hooklength.", "Add bait and adjust depth while keeping clear of hazards."], description: "Keeps bait suspended above the seabed. Use only where local access and conditions are safe." },
];

export const navigation = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/map", label: "Fishing map", icon: "map" },
  { href: "/spots", label: "Fishing spots", icon: "pin" },
  { href: "/tides", label: "Tides & weather", icon: "wave" },
  { href: "/bait", label: "Bait library", icon: "bait" },
  { href: "/rigs", label: "Rigs", icon: "rig" },
  { href: "/species", label: "Species guide", icon: "fish" },
  { href: "/records", label: "UK catch records", icon: "records" },
  { href: "/identify", label: "Identify a fish", icon: "camera" },
  { href: "/saved", label: "Saved marks", icon: "saved" },
  { href: "/learn", label: "Learn", icon: "book" },
  { href: "/gear", label: "Tackle & gear", icon: "gear" },
  { href: "/tackle-shops", label: "Tackle shops", icon: "shop" },
  { href: "/logbook", label: "Fishing log", icon: "log" },
  { href: "/profile", label: "Profile & settings", icon: "profile" },
];