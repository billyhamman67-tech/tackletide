import { BudgetGearGuide } from "@/components/budget-gear-guide";

export default function GearPage() {
  return <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
    <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Tackle & gear</p>
    <h1 className="display-font mt-1 text-4xl">Sea fishing rods, reels & essentials</h1>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#63736e]">Compare shore and lure rod-and-reel categories alongside useful starter accessories. Search Amazon UK or Angling Direct, and check that each item suits your fishing style, local conditions and budget.</p>
    <BudgetGearGuide />
    <section className="mt-6 rounded-xl bg-[#dce9e2] p-5">
      <h2 className="display-font text-2xl">Choose gear for the conditions</h2>
      <p className="mt-2 text-sm leading-6 text-[#4d6760]">For sea fishing, rinse saltwater gear with fresh water after use and check its condition before each trip. A low price is not a substitute for suitable, reliable safety equipment; follow manufacturer ratings and local advice.</p>
    </section>
  </div>;
}