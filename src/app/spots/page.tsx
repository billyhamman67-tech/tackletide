import { SpotExplorer } from "@/components/spot-explorer";

export const instant = false;

export default async function SpotsPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  return <SpotExplorer initialQuery={q} />;
}