"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const slotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

export function AdSenseSlot() {
  useEffect(() => {
    if (!clientId || !slotId) return;

    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  if (!clientId || !slotId) return null;

  return (
    <aside aria-label="Advertisement" className="mx-auto my-6 w-full max-w-[970px] px-4 md:px-8">
      <p className="mb-1 text-[10px] uppercase tracking-wider text-[#73817c]">Advertisement</p>
      <ins
        className="adsbygoogle block min-h-[100px] w-full"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
