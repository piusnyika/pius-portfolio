import { Reveal } from "./reveal";
import { Counter } from "./counter";

const STATS = [
  { value: 49, suffix: "+", label: "Projects Completed" },
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 280, suffix: "+", label: "Google Reviews" },
];

export function Stats() {
  return (
    <section className="border-y border-foreground/10 bg-foreground/[0.015]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="text-center">
            <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <Counter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-foreground/50">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
