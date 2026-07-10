import Image from "next/image";
import { SITE } from "@/lib/data";
import { Reveal } from "./reveal";
import { IconDownload } from "./icons";

const FACTS = [
  { label: "Location", value: SITE.location },
  { label: "Experience", value: "4+ years" },
  { label: "Focus", value: "Web design & development" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          About
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A little about me
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[260px_1fr]">
        <Reveal delay={100}>
          <div className="aspect-square w-full max-w-[260px] rounded-3xl bg-gradient-to-br from-accent via-sky-400 to-accent-2 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-[calc(1.5rem-2px)] bg-background p-10">
              <Image
                src="/pius-blue.png"
                alt={SITE.name}
                width={1000}
                height={1000}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="space-y-6">
          <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
            I&apos;m a web design, development, and digital marketing
            professional with a keen eye for aesthetics and a deep
            understanding of user experience. I specialize in crafting
            visually engaging, intuitive websites — from custom React and
            Next.js applications to full WordPress and WooCommerce builds —
            that connect with the people using them.
          </p>
          <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
            My day-to-day toolkit spans React and Next.js on the frontend,
            Node.js and PostgreSQL on the backend, and the WordPress ecosystem
            for client sites, plus SEO know-how to help what I build actually
            get found. I&apos;m always learning, and I like staying close to
            the product decisions, not just the code.
          </p>

          <dl className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-4"
              >
                <dt className="text-xs uppercase tracking-wide text-foreground/45">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-foreground/30"
          >
            <IconDownload className="h-4 w-4" />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
