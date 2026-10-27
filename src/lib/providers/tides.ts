import "server-only";

export type TideExtreme = {
  date: string;
  height: number;
  type: "High" | "Low";
};

export type TideTable = {
  provider: "WorldTides";
  timezone: string;
  datum: string;
  fetchedAt: string;
  copyright: string;
  extremes: TideExtreme[];
};

type WorldTidesResponse = {
  status?: number;
  error?: string;
  timezone?: string;
  responseDatum?: string;
  copyright?: string;
  extremes?: Array<{
    date?: string;
    height?: number;
    type?: string;
  }>;
};

export async function getTideTable(input: { latitude: number; longitude: number; date: string }): Promise<TideTable> {
  const apiKey = process.env.WORLDTIDES_API_KEY;
  if (!apiKey) throw new Error("Tide predictions are not configured. Add a WorldTides API key to the server environment.");

  const url = new URL("https://www.worldtides.info/api/v3");
  url.searchParams.set("extremes", "");
  url.searchParams.set("date", input.date);
  url.searchParams.set("days", "7");
  url.searchParams.set("lat", String(input.latitude));
  url.searchParams.set("lon", String(input.longitude));
  url.searchParams.set("localtime", "");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(12_000) });
  if (!response.ok) throw new Error(`Tide provider returned HTTP ${response.status}.`);

  const payload = await response.json() as WorldTidesResponse;
  if (payload.status !== 200 || !Array.isArray(payload.extremes)) {
    throw new Error(payload.error || "Tide provider returned an invalid response.");
  }

  const extremes = payload.extremes.flatMap((event): TideExtreme[] => {
    if (!event.date || typeof event.height !== "number" || (event.type !== "High" && event.type !== "Low")) return [];
    return [{ date: event.date, height: event.height, type: event.type }];
  });

  return {
    provider: "WorldTides",
    timezone: payload.timezone || "Local timezone unavailable",
    datum: payload.responseDatum || "Provider datum not supplied",
    fetchedAt: new Date().toISOString(),
    copyright: payload.copyright || "Tidal data retrieved from WorldTides.",
    extremes,
  };
}