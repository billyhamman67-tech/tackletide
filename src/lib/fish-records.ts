export type FishRecord = {
  species: string;
  weight: string;
  year: string;
  location: string;
  source: string;
  sourceLabel: string;
  status: "Official ratification" | "Reference list entry";
};

const referenceList = "https://www.fish-uk.com/uk_sea_fish_records.htm";

export const shoreFishRecords: FishRecord[] = [
  {
    species: "Tope",
    weight: "86 lb 13 oz",
    year: "2025",
    location: "Stackpole Quay, Pembrokeshire",
    source: "https://anglingtrust.net/2025/07/09/three-british-record-fish-claims-ratified/",
    sourceLabel: "Angling Trust / BRFC ratification",
    status: "Official ratification",
  },
  { species: "Bass", weight: "19 lb 12 oz", year: "2012", location: "Portsmouth Dockyard, Hampshire", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Cod", weight: "44 lb 8 oz", year: "1966", location: "Toms Point, Barry, Glamorgan", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Conger eel", weight: "68 lb 8 oz", year: "1992", location: "Devils Point, Plymouth, Devon", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Garfish", weight: "3 lb 9 oz 8 dr", year: "2017", location: "Slapton Sands, Devon", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Mackerel", weight: "5 lb 11 oz 14 dr", year: "1982", location: "Berry Head Quarry, Brixham", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Plaice", weight: "8 lb 6 oz 14 dr", year: "1989", location: "Southbourne Beach, Bournemouth", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
];

export const boatFishRecords: FishRecord[] = [
  { species: "Cod", weight: "58 lb 6 oz", year: "1992", location: "North Sea, off Whitby", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Conger eel", weight: "133 lb 4 oz", year: "1995", location: "Wreck off Berry Head, Torquay", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Pollack", weight: "29 lb 4 oz", year: "1987", location: "Dungeness, Kent", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Bass", weight: "19 lb 9 oz 2 dr", year: "1987", location: "Off Reculvers, Herne Bay, Kent", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Mackerel", weight: "6 lb 2 oz 7 dr", year: "1984", location: "Off Penberth Cove, Cornwall", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
  { species: "Brill", weight: "16 lb", year: "1950", location: "Derby Haven, Isle of Man", source: referenceList, sourceLabel: "Fish-UK record list", status: "Reference list entry" },
];
