import { EXPERIENCE, SITE } from "@/lib/data";
import { Reveal } from "./reveal";

function shortHash(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(7, "0").slice(0, 7);
}

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-y border-foreground/10 bg-foreground/[0.015] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-12 overflow-hidden rounded-2xl border border-foreground/10 bg-surface/90 shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-foreground/[0.03] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-xs text-foreground/40">
              git log --stat career
            </span>
          </div>

          <div className="divide-y divide-foreground/10">
            {EXPERIENCE.map((job, i) => {
              const hash = shortHash(job.role + job.company);
              return (
                <div key={hash} className="p-6 font-mono text-sm leading-relaxed">
                  <p>
                    <span className="text-amber-400">commit {hash}</span>
                    {i === 0 && (
                      <span className="text-accent"> (HEAD -&gt; main)</span>
                    )}
                  </p>
                  <p className="text-foreground/50">
                    Author:{" "}
                    <span className="text-cyan-300">{SITE.name}</span>{" "}
                    &lt;{SITE.email}&gt;
                  </p>
                  <p className="text-foreground/50">Date:   {job.period}</p>
                  <p className="mt-3 text-foreground">
                    feat(career): {job.role} @ {job.company}
                  </p>
                  <p className="mt-2 text-foreground/60">{job.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
