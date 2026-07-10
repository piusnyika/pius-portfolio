"use client";

import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const TAGS = [
  { label: "React", style: { top: "-6%", left: "-12%", animationDelay: "0s", animationDuration: "7s" } },
  { label: "WordPress", style: { top: "10%", right: "-16%", animationDelay: "1.1s", animationDuration: "8s" } },
  { label: "Next.js", style: { bottom: "14%", left: "-16%", animationDelay: "0.5s", animationDuration: "6.5s" } },
  { label: "TypeScript", style: { bottom: "-6%", right: "10%", animationDelay: "1.8s", animationDuration: "7.8s" } },
  { label: "WooCommerce", style: { top: "42%", right: "-20%", animationDelay: "2.4s", animationDuration: "9s" } },
];

export function FloatingTags() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <>
      {TAGS.map((tag) => (
        <span
          key={tag.label}
          className={`pointer-events-none absolute rounded-full border border-accent/30 bg-surface/80 px-3 py-1.5 font-mono text-xs font-medium text-accent shadow-lg shadow-black/20 backdrop-blur ${
            reduceMotion ? "" : "animate-float"
          }`}
          style={tag.style}
        >
          {tag.label}
        </span>
      ))}
    </>
  );
}
