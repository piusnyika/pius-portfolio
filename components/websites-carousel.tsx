"use client";

import { useEffect, useRef, useState } from "react";
import type { Website } from "@/lib/data";
import { WebsiteCard } from "./website-card";
import { IconChevronLeft, IconChevronRight } from "./icons";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const AUTOPLAY_MS = 5000;
const DRAG_THRESHOLD_PERCENT = 15;
const TRANSITION = "transform 700ms cubic-bezier(0.65,0,0.35,1)";

function useItemsPerView() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqSm = window.matchMedia("(min-width: 640px)");

    function update() {
      setCount(mqLg.matches ? 3 : mqSm.matches ? 2 : 1);
    }

    update();
    mqLg.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  return count;
}

export function WebsitesCarousel({ sites }: { sites: Website[] }) {
  const itemsPerView = useItemsPerView();
  const pageCount = Math.ceil(sites.length / itemsPerView);
  const [rawPage, setPage] = useState(0);
  const page = Math.min(rawPage, pageCount - 1);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPercent, setDragPercent] = useState(0);
  const dragStartX = useRef(0);
  const trackWidth = useRef(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (paused || pageCount <= 1 || reduceMotion) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, pageCount, reduceMotion]);

  function goTo(next: number) {
    setPage(((next % pageCount) + pageCount) % pageCount);
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragStartX.current = e.clientX;
    trackWidth.current = trackRef.current?.getBoundingClientRect().width ?? 1;
    setIsDragging(true);
    setPaused(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    setDragPercent((deltaX / trackWidth.current) * 100);
  }

  function endDrag() {
    if (!isDragging) return;
    if (dragPercent > DRAG_THRESHOLD_PERCENT) goTo(page - 1);
    else if (dragPercent < -DRAG_THRESHOLD_PERCENT) goTo(page + 1);
    setIsDragging(false);
    setDragPercent(0);
    setPaused(false);
  }

  const pages = Array.from({ length: pageCount }, (_, i) =>
    sites.slice(i * itemsPerView, i * itemsPerView + itemsPerView)
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        endDrag();
      }}
    >
      <div className="overflow-hidden" style={{ touchAction: "pan-y" }}>
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          className="flex cursor-grab select-none active:cursor-grabbing"
          style={{
            transform: `translateX(calc(-${page * 100}% + ${dragPercent}%))`,
            transition: isDragging ? "none" : TRANSITION,
          }}
        >
          {pages.map((group, i) => (
            <div
              key={i}
              className="grid w-full shrink-0 grid-cols-1 gap-6 px-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {group.map((site) => (
                <WebsiteCard key={site.name} site={site} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(page - 1)}
        aria-label="Previous websites"
        className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground/70 backdrop-blur transition hover:border-accent/40 hover:text-accent sm:flex"
      >
        <IconChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(page + 1)}
        aria-label="Next websites"
        className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground/70 backdrop-blur transition hover:border-accent/40 hover:text-accent sm:flex"
      >
        <IconChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {pages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to page ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === page ? "w-6 bg-accent" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
