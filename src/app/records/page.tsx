import { FishRecordsBrowser } from "@/components/fish-records-browser";

export default function RecordsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">British sea-fish records</p>
      <h1 className="display-font mt-1 text-4xl">Big catches from shore and boat</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#63736e]">
        Browse notable UK rod-caught sea-fish records by where they were caught. Each entry links to its source; older entries are clearly identified as reference-list snapshots, not confirmed current records.
      </p>
      <FishRecordsBrowser />
    </div>
  );
}
