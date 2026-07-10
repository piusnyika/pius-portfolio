import Image from "next/image";
import { IconArrowUpRight, IconGlobe } from "./icons";
import { TiltCard } from "./tilt-card";
import type { Website } from "@/lib/data";

export function WebsiteCard({ site }: { site: Website }) {
  const hostname = new URL(site.url).hostname;

  return (
    <TiltCard className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-surface">
      <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-foreground/[0.03] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 flex-1 truncate rounded-full bg-foreground/5 px-3 py-1 text-center text-xs text-foreground/50">
          {hostname}
        </span>
      </div>

      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-accent/20 via-surface to-accent-2/10">
        {site.screenshot ? (
          <Image
            src={site.screenshot}
            alt={`${site.name} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-foreground/30">
            <IconGlobe className="h-10 w-10" />
            <span className="text-xs">Preview coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground transition group-hover:text-accent">
            {site.name}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/10 px-2.5 py-1 text-xs font-medium text-foreground/60">
            <span className="relative flex h-1.5 w-1.5">
              {site.status === "live" && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              )}
              <span
                className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                  site.status === "live" ? "bg-emerald-500" : "bg-amber-500"
                }`}
              />
            </span>
            {site.status === "live" ? "Live" : "In progress"}
          </span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
          {site.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {site.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs font-medium text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 border-t border-foreground/10 pt-4 text-sm font-medium text-foreground/70 transition hover:text-foreground"
        >
          Visit site
          <IconArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </TiltCard>
  );
}
