"use client";

import { useState } from "react";
import { fishingSpots } from "@/lib/data";
import type { TideTable } from "@/lib/providers/tides";

type TideTableResponse = TideTable | { error: string };

export function TideTableClient({ initialSpotSlug }: { initialSpotSlug?: string }) {
  const initialSpot = fishingSpots.find((spot) => spot.slug === initialSpotSlug);
  const [spotSlug, setSpotSlug] = useState(initialSpot?.slug ?? fishingSpots[0]?.slug ?? "");
  const [date, setDate] = useState("");
  const [table, setTable] = useState<TideTable | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const selectedSpot = fishingSpots.find((spot) => spot.slug === spotSlug);

  async function loadTides(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedSpot || !date) return;

    setLoading(true);
    setError("");
    setTable(null);
    try {
      const query = new URLSearchParams({
        spot: selectedSpot.slug,
        date,
      });
      const response = await fetch(`/api/tides?${query.toString()}`, { cache: "no-store" });
      const result = await response.json() as TideTableResponse;
      if (!response.ok || "error" in result) throw new Error("error" in result ? result.error : "Tide predictions could not be loaded.");
      setTable(result);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Tide predictions could not be loaded.");
    } finally {
      setLoading(false);
    }
  }

  return <div className="mt-6 grid gap-5 lg:grid-cols-[320px_1fr]">
    <form onSubmit={loadTides} className="rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5">
      <h2 className="display-font text-2xl">Choose a coastal mark</h2>
      <label className="mt-4 block text-xs font-semibold text-[#62736d]">Location<select required value={spotSlug} onChange={(event) => setSpotSlug(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-[#d9ded8] bg-white px-3 text-sm font-normal text-[#243c38]">{fishingSpots.map((spot) => <option key={spot.slug} value={spot.slug}>{spot.name} · {spot.region}</option>)}</select></label>
      <label className="mt-3 block text-xs font-semibold text-[#62736d]">Start date<input required type="date" value={date} onChange={(event) => setDate(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-[#d9ded8] bg-white px-3 text-sm font-normal text-[#243c38]" /></label>
      <p className="mt-3 text-xs leading-5 text-[#74817c]">Requests seven days of high and low predictions for the selected place. The pin is approximate, so the prediction point may not match a fishing peg or tide station.</p>
      <button disabled={loading || !date} className="mt-4 min-h-11 w-full rounded-lg bg-[#176b67] px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50">{loading ? "Loading predictions..." : "Load free-credit tide table"}</button>
      <p className="mt-3 text-[11px] leading-4 text-[#7d8984]">WorldTides offers 100 free credits for a new account. Continued use may require paid credits. One seven-day high/low request costs one credit under its current pricing.</p>
    </form>

    <section aria-live="polite" className="min-h-[310px] rounded-xl border border-[#d9ded8] bg-[#fffefa] p-5 md:p-6">
      {!table && !error && <div className="flex h-full min-h-[260px] flex-col justify-center"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#71817c]">Provider-backed predictions</p><h2 className="display-font mt-2 text-3xl">Highs and lows, by date</h2><p className="mt-3 max-w-lg text-sm leading-6 text-[#687972]">Enter a date and load a table. A WorldTides API key is required; this app never substitutes estimated or demo tide values.</p><a href="https://www.worldtides.info/register" target="_blank" rel="noreferrer" className="mt-4 text-sm font-semibold text-[#176b67] underline underline-offset-2">Get a free WorldTides API key</a></div>}
      {error && <div className="flex h-full min-h-[260px] flex-col justify-center"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#8a594a]">Tide data unavailable</p><h2 className="display-font mt-2 text-3xl">No predictions loaded</h2><p className="mt-3 max-w-lg text-sm leading-6 text-[#687972]">{error}</p>{error.includes("not configured") && <a href="https://www.worldtides.info/register" target="_blank" rel="noreferrer" className="mt-4 text-sm font-semibold text-[#176b67] underline underline-offset-2">Register for free starter credits</a>}</div>}
      {table && <><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase tracking-wider text-[#39766a]">{selectedSpot?.name} · {table.timezone}</p><h2 className="display-font mt-1 text-3xl">Seven-day tide table</h2></div><span className="rounded-md bg-[#dce9e2] px-2 py-1 text-xs font-semibold text-[#26635a]">{table.datum}</span></div>
        <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[460px] text-left text-sm"><thead><tr className="border-b border-[#d9ded8] text-xs text-[#74817c]"><th className="pb-3 pr-4 font-medium">Local time</th><th className="pb-3 pr-4 font-medium">Tide</th><th className="pb-3 font-medium">Height</th></tr></thead><tbody>{table.extremes.map((event, index) => <tr key={`${event.date}-${event.type}-${index}`} className="border-b border-[#edf0eb]"><td className="py-3 pr-4 text-[#425750]">{event.date}</td><td className="py-3 pr-4"><span className={`rounded-md px-2 py-1 text-xs font-semibold ${event.type === "High" ? "bg-[#dce9e2] text-[#26635a]" : "bg-[#f3eddd] text-[#806b42]"}`}>{event.type}</span></td><td className="py-3 font-mono text-[#263c3b]">{event.height.toFixed(2)} m</td></tr>)}</tbody></table></div>
        {table.extremes.length === 0 && <p className="mt-4 text-sm text-[#687972]">The provider returned no high/low events for this date and location.</p>}
        <div className="mt-4 border-t border-[#e5e8e3] pt-3 text-[11px] leading-5 text-[#77847f]"><p>Fetched {new Date(table.fetchedAt).toLocaleString()} · Datum: {table.datum}</p><p>{table.copyright} <a href="https://www.worldtides.info/copyright" target="_blank" rel="noreferrer" className="font-semibold text-[#176b67] underline underline-offset-2">Data copyright & terms</a></p></div>
      </>}
    </section>
  </div>;
}