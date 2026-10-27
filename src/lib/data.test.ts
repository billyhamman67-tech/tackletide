import { describe, expect, it } from "vitest";
import { baits, fishingSpots, rigs, species } from "./data";
import { isleOfWightTackleShops } from "./tackle-shops";
import { boatFishRecords, shoreFishRecords } from "./fish-records";

describe("curated MVP content", () => {
  it("has unique fishing mark slugs and valid approximate coordinates", () => {
    const slugs = fishingSpots.map((spot) => spot.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const spot of fishingSpots) {
      expect(spot.latitude).toBeGreaterThanOrEqual(-90);
      expect(spot.latitude).toBeLessThanOrEqual(90);
      expect(spot.longitude).toBeGreaterThanOrEqual(-180);
      expect(spot.longitude).toBeLessThanOrEqual(180);
      expect(new URL(spot.sourceUrl).hostname).toBe("www.openstreetmap.org");
    }
  });

  it("includes non-empty instructions and components for each rig", () => {
    expect(rigs.length).toBeGreaterThan(0);
    for (const rig of rigs) {
      expect(rig.components.length).toBeGreaterThan(0);
      expect(rig.steps.length).toBeGreaterThan(0);
    }
  });

  it("provides scientific names and practical descriptions for starter content", () => {
    expect(species.every((fish) => fish.scientific.length > 0 && fish.marks.length > 0)).toBe(true);
    expect(baits.every((bait) => bait.targets.length > 0 && bait.use.length > 0)).toBe(true);
    expect(species.map((fish) => fish.slug)).toEqual(expect.arrayContaining(["garfish", "ballan-wrasse", "conger-eel", "tub-gurnard"]));
    for (const fish of species.filter((item) => item.image)) {
      expect(fish.image?.src).toMatch(/^https:\/\//);
      expect(fish.image?.source).toContain("commons.wikimedia.org/wiki/File:");
      expect(fish.image?.credit.length).toBeGreaterThan(0);
      expect(fish.image?.license.length).toBeGreaterThan(0);
    }
    expect(species.map((fish) => fish.slug)).toEqual(expect.arrayContaining(["garfish", "ballan-wrasse", "conger-eel", "tub-gurnard"]));
    for (const fish of species.filter((item) => item.image)) {
      expect(fish.image?.src).toMatch(/^https:\/\//);
      expect(fish.image?.source).toContain("commons.wikimedia.org/wiki/File:");
      expect(fish.image?.credit.length).toBeGreaterThan(0);
      expect(fish.image?.license.length).toBeGreaterThan(0);
    }
  });

  it("gives each bait an attributed reference photo and hook-mounting steps", () => {
    expect(baits.some((bait) => bait.slug === "spider-crab")).toBe(true);
    expect(baits.map((bait) => bait.slug)).toEqual(expect.arrayContaining(["prawn", "cockle", "razor-clam", "sandeel"]));
    for (const bait of baits) {
      expect(bait.photo.src).toMatch(/^https:\/\//);
      expect(bait.photo.source).toContain("commons.wikimedia.org/wiki/File:");
      expect(bait.photo.credit.length).toBeGreaterThan(0);
      expect(bait.photo.license).toMatch(/CC BY|Public domain/);
      expect(bait.mountingSteps.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("has unique Isle of Wight tackle-shop entries with source links and address fields", () => {
    const slugs = isleOfWightTackleShops.map((shop) => shop.slug);
    expect(isleOfWightTackleShops.length).toBeGreaterThanOrEqual(6);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const shop of isleOfWightTackleShops) {
      expect(shop.town.length).toBeGreaterThan(0);
      expect(shop.postcode).toMatch(/^PO\d+\s?\d[A-Z]{2}$/i);
      expect(new URL(shop.sourceUrl).hostname).toBe("www.fish-uk.com");
    }
  });
});