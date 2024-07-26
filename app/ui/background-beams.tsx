// Add this component in a new file: app/ui/background-beams.tsx
"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { useMousePosition } from "@/lib/mouse";

export const BackgroundBeams = () => {
  const { x, y } = useMousePosition();
  const beams = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beams.current) return;
    beams.current.style.setProperty("--x", `${x}px`);
    beams.current.style.setProperty("--y", `${y}px`);
  }, [x, y]);

  return (
    <div
      ref={beams}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at var(--x, 100px) var(--y, 100px), rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};