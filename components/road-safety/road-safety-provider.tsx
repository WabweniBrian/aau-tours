"use client";

import type { ReactNode } from "react";
import RoadSafetyModal from "./road-safety-modal";

interface RoadSafetyProviderProps {
  children: ReactNode;
  delayMs?: number;
}

export default function RoadSafetyProvider({
  children,
  delayMs = 10000,
}: RoadSafetyProviderProps) {
  return (
    <>
      {children}
      <RoadSafetyModal delayMs={delayMs} />
    </>
  );
}
