"use client";

import { useState } from "react";
import { ExternalLink, Ship, Waves } from "lucide-react";
import { boatFishRecords, shoreFishRecords } from "@/lib/fish-records";

type RecordType = "shore" | "boat";

export function FishRecordsBrowser() {
  const [recordType, setRecordType] = useState<RecordType>("shore");
  const records = recordType === "shore" ? shoreFishRecords : boatFishRecords;

  function selectRecordType(type: RecordType) {
    setRecordType(type);
  }

  return (
    <section className="mt-6">
      <div aria-label="Fishing method" className="inline-flex rounded-xl border border-[#d9ded8] bg-[#fffefa] p-1" role="tablist">
        <button
          aria-controls="fish-record-panel"
          aria-selected={recordType === "shore"}
          className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-semibold ${recordType === "shore" ? "bg-[#176b67] text-white" : "text-[#526660] hover:bg-[#f2f5f1]"}`}
          id="shore-records-tab"
          onClick={() => selectRecordType("shore")}
          role="tab"
          type="button"
        >
          <Waves size={16} /> Shore
        </button>
        <button
          aria-controls="fish-record-panel"
          aria-selected={recordType === "boat"}
          className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-semibold ${recordType === "boat" ? "bg-[#176b67] text-white" : "text-[#526660] hover:bg-[#f2f5f1]"}`}
          id="boat-records-tab"
          onClick={() => selectRecordType("boat")}
          role="tab"
          type="button"
        >
          <Ship size={16} /> Boat
        </button>
      </div>
      <div
        aria-labelledby={recordType === "shore" ? "shore-records-tab" : "boat-records-tab"}
        className="mt-4 overflow-hidden rounded-xl border border-[#d9ded8] bg-[#fffefa]"
        id="fish-record-panel"
        role="tabpanel"
      >
        <div className="border-b border-[#e5e8e3] px-4 py-4 md:px-5">
          <h2 className="display-font text-2xl">{recordType === "shore" ? "Shore-caught sea-fish records" : "Boat-caught sea-fish records"}</h2>
          <p className="mt-1 text-xs leading-5 text-[#74817c]">
            {recordType === "shore" ? "Fish caught from the shore." : "Fish caught from a boat."} Older entries are reference-list snapshots; check the official committee register before treating any as a current record.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[690px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#e5e8e3] text-[11px] uppercase tracking-wide text-[#74817c]">
                <th className="px-4 py-3 font-semibold md:px-5">Species</th>
                <th className="px-4 py-3 font-semibold">Weight</th>
                <th className="px-4 py-3 font-semibold">Year</th>
                <th className="px-4 py-3 font-semibold">Location</th>
                <th className="px-4 py-3 font-semibold">Source</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr className="border-b border-[#edf0eb] last:border-0" key={`${record.species}-${record.year}`}>
                  <th className="px-4 py-3 text-left font-semibold text-[#29443e] md:px-5" scope="row">{record.species}</th>
                  <td className="px-4 py-3 font-mono text-[#263c3b]">{record.weight}</td>
                  <td className="px-4 py-3 text-[#425750]">{record.year}</td>
                  <td className="px-4 py-3 text-[#425750]">{record.location}</td>
                  <td className="px-4 py-3">
                    <a className="inline-flex items-center gap-1 text-xs font-semibold text-[#176b67] underline underline-offset-2" href={record.source} rel="noreferrer" target="_blank">
                      {record.status === "Official ratification" ? "Official ratification" : "Reference list"} <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-[#d4c9ac] bg-[#f3eddd] p-4 text-xs leading-5 text-[#655f49]">
        Record lists can change as new claims are ratified. Several historical entries are transcribed from Fish-UK, an independently maintained reference, and are not represented as a live official list. For current status and claim rules, use the{" "}
        <a className="font-semibold underline underline-offset-2" href="https://anglingtrust.net/get-involved/record-fish/" rel="noreferrer" target="_blank">British Record (rod-caught) Fish Committee information</a>.
      </div>
    </section>
  );
}
