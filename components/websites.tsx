import { WEBSITES } from "@/lib/data";
import { Reveal } from "./reveal";
import { WebsitesCarousel } from "./websites-carousel";

export function Websites() {
  return (
    <section id="websites" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Websites
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Live client work
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/60">
          Real, production websites I&apos;ve designed and built end to end.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <WebsitesCarousel sites={WEBSITES} />
      </Reveal>
    </section>
  );
}
