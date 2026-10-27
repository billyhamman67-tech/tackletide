import { NextRequest, NextResponse } from "next/server";
import { getTideTable } from "@/lib/providers/tides";
import { fishingSpots } from "@/lib/data";

const requestWindows = new Map<string, { startedAt: number; count: number }>();
const rateWindowMs = 60_000;
const maxRequestsPerWindow = 6;

function getRequester(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function isValidDate(value: string | null): value is string {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const spot = fishingSpots.find((item) => item.slug === searchParams.get("spot"));
  const date = searchParams.get("date");

  if (!spot || !isValidDate(date)) {
    return NextResponse.json({ error: "Choose a valid date and location." }, { status: 400 });
  }

  const requester = getRequester(request);
  const now = Date.now();
  const windowState = requestWindows.get(requester);
  if (!windowState || now - windowState.startedAt >= rateWindowMs) {
    requestWindows.set(requester, { startedAt: now, count: 1 });
  } else if (windowState.count >= maxRequestsPerWindow) {
    return NextResponse.json({ error: "Tide request limit reached. Try again in a minute." }, { status: 429, headers: { "Retry-After": "60" } });
  } else {
    windowState.count += 1;
  }

  try {
    const table = await getTideTable({ latitude: spot.latitude, longitude: spot.longitude, date });
    return NextResponse.json(table, { headers: { "Cache-Control": "private, no-store" } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Tide predictions are temporarily unavailable.";
    const status = message.includes("not configured") ? 503 : 502;
    return NextResponse.json({ error: message }, { status, headers: { "Cache-Control": "private, no-store" } });
  }
}