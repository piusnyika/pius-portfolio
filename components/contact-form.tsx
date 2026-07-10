"use client";

import { useState, type FormEvent } from "react";
import { SOCIAL_LINKS } from "@/lib/data";
import { IconArrowUpRight, IconCheck } from "./icons";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    );
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-foreground/10 bg-background/40 p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <IconCheck className="h-5 w-5" />
        </span>
        <p className="text-base font-semibold text-foreground">
          Your email client should be opening now
        </p>
        <p className="text-sm text-foreground/60">
          If nothing happened, email me directly at{" "}
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-accent hover:underline"
          >
            {SOCIAL_LINKS.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-medium text-foreground/60 underline underline-offset-4 transition hover:text-foreground"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-background/40 p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            Name
          </span>
          <input
            required
            type="text"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            placeholder="Jane Doe"
            className="rounded-lg border border-foreground/10 bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-foreground/30 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            Email
          </span>
          <input
            required
            type="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            placeholder="jane@company.com"
            className="rounded-lg border border-foreground/10 bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-foreground/30 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-foreground/50">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          placeholder="Tell me a bit about your project..."
          className="resize-none rounded-lg border border-foreground/10 bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-foreground/30 focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
        />
      </label>

      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
      >
        Send message
        <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </form>
  );
}
