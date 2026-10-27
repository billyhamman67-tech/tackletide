import { FishIdentifyTool } from "@/components/fish-identify-tool";

export default function IdentifyPage() {
  return <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12"><p className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#74837e]">Fish identification</p><h1 className="display-font mt-1 text-4xl">What did you catch?</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[#63736e]">Use a manual feature guide to find possible matches. Photo recognition is not configured, and no image is uploaded.</p><div className="mt-6"><FishIdentifyTool /></div></div>;
}