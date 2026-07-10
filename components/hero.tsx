"use client";

import { useRef } from "react";
import { ROLES, SITE } from "@/lib/data";
import { RoleCycler } from "./role-cycler";
import { CodeWindow } from "./code-window";
import { Magnetic } from "./magnetic";
import { FloatingTags } from "./floating-tags";
import { IconChevronDown } from "./icons";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const node = sectionRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 40%), rgba(6,135,255,0.16), transparent 60%)",
        }}
      />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-accent-2/15 blur-3xl animate-blob [animation-delay:2s]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_auto]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs font-medium text-foreground/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance &amp; full-time work
          </div>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent via-sky-400 to-accent-2 bg-clip-text text-transparent">
              {SITE.name}
            </span>
          </h1>

          <p className="mt-4 h-9 text-xl font-medium text-foreground/70 sm:text-2xl">
            <RoleCycler roles={ROLES} />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg">
            I&apos;m a Zimbabwe-based web developer specializing in React,
            Next.js, and WordPress — building fast, accessible websites and
            e-commerce stores for businesses across Zimbabwe.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#websites"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-shadow duration-200 hover:shadow-lg"
              >
                View My Work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-foreground/30"
              >
                Get in Touch
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <FloatingTags />
          <div className={reduceMotion ? "" : "animate-float"}>
            <CodeWindow />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 transition hover:text-foreground/70"
      >
        <IconChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
