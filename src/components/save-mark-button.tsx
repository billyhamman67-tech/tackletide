"use client";

import { Bookmark } from "lucide-react";
import { useSyncExternalStore } from "react";

const storageKey = "tide-tackle-saved";
const changedEvent = "saved-marks-changed";

function readSaved(): string[] {
  try {
    return JSON.parse(localStorage.getItem(storageKey) ?? "[]") as string[];
  } catch {
    return [];
  }
}

export function SaveMarkButton({ slug }: { slug: string }) {
  const saved = useSyncExternalStore(
    (onChange) => {
      window.addEventListener(changedEvent, onChange);
      window.addEventListener("storage", onChange);
      return () => {
        window.removeEventListener(changedEvent, onChange);
        window.removeEventListener("storage", onChange);
      };
    },
    () => readSaved().includes(slug),
    () => false,
  );

  function toggle() {
    const current = readSaved();
    const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
    localStorage.setItem(storageKey, JSON.stringify(next));
    window.dispatchEvent(new Event(changedEvent));
  }

  return <button type="button" onClick={toggle} aria-pressed={saved} className={`inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition-colors ${saved ? "border-[#176b67] bg-[#dce9e2] text-[#176b67]" : "border-[#d9ded8] bg-white text-[#38504a] hover:border-[#87a99a]"}`}>
    <Bookmark size={16} fill={saved ? "currentColor" : "none"} />{saved ? "Saved" : "Save mark"}
  </button>;
}