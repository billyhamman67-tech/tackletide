"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getCatchPhoto } from "@/lib/local-catch-photos";

export function CatchPhoto({ id, alt }: { id: string; alt: string }) {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    let disposed = false;
    let objectUrl: string | null = null;
    void getCatchPhoto(id).then((photo) => {
      if (!photo || disposed) return;
      objectUrl = URL.createObjectURL(photo);
      setSource(objectUrl);
    }).catch(() => undefined);
    return () => {
      disposed = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [id]);

  if (!source) return null;
  return <Image src={source} alt={alt} width={720} height={480} unoptimized className="mt-3 max-h-64 w-full rounded-lg object-cover" />;
}