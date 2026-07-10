"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const LINES = [
  "$ initializing portfolio...",
  "$ loading components... done",
  "$ welcome, Pius Nyika",
];

export function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [linesShown, setLinesShown] = useState(0);
  const [hiding, setHiding] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) return;
    sessionStorage.setItem("intro-seen", "1");
    if (reduceMotion) return;
    const id = setTimeout(() => setVisible(true), 0);
    return () => clearTimeout(id);
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) return;

    if (linesShown < LINES.length) {
      const id = setTimeout(() => setLinesShown((n) => n + 1), 450);
      return () => clearTimeout(id);
    }

    const hideId = setTimeout(() => setHiding(true), 500);
    const removeId = setTimeout(() => setVisible(false), 900);
    return () => {
      clearTimeout(hideId);
      clearTimeout(removeId);
    };
  }, [visible, linesShown]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        hiding ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md px-6 font-mono text-sm">
        {LINES.slice(0, linesShown).map((line, i) => (
          <p
            key={line}
            className={i === LINES.length - 1 ? "text-accent" : "text-foreground/70"}
          >
            {line}
          </p>
        ))}
        <span className="mt-1 inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
      </div>
    </div>
  );
}
