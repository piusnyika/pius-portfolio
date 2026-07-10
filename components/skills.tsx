import { SKILLS } from "@/lib/data";
import { Reveal } from "./reveal";
import { GithubStats } from "./github-stats";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-y border-foreground/10 bg-foreground/[0.015] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Skills
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tools I build with
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {SKILLS.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 100}
              className="rounded-2xl border border-foreground/10 bg-surface p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground/50">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-sm text-foreground/80 transition hover:border-accent/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <GithubStats />
        </Reveal>
      </div>
    </section>
  );
}
