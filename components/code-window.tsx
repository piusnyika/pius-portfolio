"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const TOKENS: { t: string; c: string }[] = [
  { t: "const ", c: "text-sky-400" },
  { t: "developer", c: "text-foreground" },
  { t: " = {\n  ", c: "text-foreground/50" },
  { t: "name", c: "text-cyan-300" },
  { t: ": ", c: "text-foreground/50" },
  { t: '"Pius Nyika"', c: "text-emerald-400" },
  { t: ",\n  ", c: "text-foreground/50" },
  { t: "role", c: "text-cyan-300" },
  { t: ": ", c: "text-foreground/50" },
  { t: '"Full-Stack Developer"', c: "text-emerald-400" },
  { t: ",\n  ", c: "text-foreground/50" },
  { t: "stack", c: "text-cyan-300" },
  { t: ": [", c: "text-foreground/50" },
  { t: '"Next.js"', c: "text-emerald-400" },
  { t: ", ", c: "text-foreground/50" },
  { t: '"TypeScript"', c: "text-emerald-400" },
  { t: ", ", c: "text-foreground/50" },
  { t: '"Node.js"', c: "text-emerald-400" },
  { t: "],\n  ", c: "text-foreground/50" },
  { t: "loveForCode", c: "text-cyan-300" },
  { t: ": ", c: "text-foreground/50" },
  { t: "true", c: "text-amber-400" },
  { t: ",\n};", c: "text-foreground/50" },
];

const TOKENS_WITH_OFFSETS = TOKENS.reduce<
  { t: string; c: string; start: number }[]
>((acc, tok) => {
  const start = acc.length ? acc[acc.length - 1].start + acc[acc.length - 1].t.length : 0;
  acc.push({ ...tok, start });
  return acc;
}, []);

const FULL_LENGTH = TOKENS.reduce((sum, tok) => sum + tok.t.length, 0);

export function CodeWindow() {
  const reduceMotion = usePrefersReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduceMotion || count >= FULL_LENGTH) return;
    const id = setTimeout(() => setCount((c) => c + 1), 28);
    return () => clearTimeout(id);
  }, [count, reduceMotion]);

  const displayCount = reduceMotion ? FULL_LENGTH : count;

  return (
    <div className="w-[380px] overflow-hidden rounded-2xl border border-foreground/10 bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-foreground/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-xs text-foreground/40">developer.ts</span>
      </div>
      <pre className="min-h-[210px] whitespace-pre-wrap p-5 font-mono text-[13px] leading-relaxed">
        {TOKENS_WITH_OFFSETS.map((tok, i) => {
          const charsAvailable = displayCount - tok.start;
          const show = Math.max(0, Math.min(tok.t.length, charsAvailable));
          return (
            <span key={i} className={tok.c}>
              {tok.t.slice(0, show)}
            </span>
          );
        })}
        {displayCount < FULL_LENGTH && (
          <span className="text-accent animate-pulse">▍</span>
        )}
      </pre>
    </div>
  );
}
