"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE, SOCIAL_LINKS } from "@/lib/data";
import { IconArrowUpRight, IconClose, IconWhatsapp } from "./icons";

const DEFAULT_MESSAGE =
  "Hi Pius, I found your portfolio and I'd like to chat about a project.";

export function WhatsappButton() {
  const [open, setOpen] = useState(false);

  const chatHref = `https://wa.me/${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <>
      <div
        className={`fixed bottom-24 right-6 z-40 w-[300px] origin-bottom-right transition-all duration-300 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-90 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[1.75rem] border-4 border-[#111b21] bg-[#0b141a] shadow-2xl shadow-black/50">
          <div className="flex justify-center bg-[#111b21] pt-2">
            <span className="h-1 w-16 rounded-full bg-white/20" />
          </div>

          <div className="flex items-center gap-3 bg-[#075e54] px-4 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1.5">
              <Image
                src="/pius-blue.png"
                alt={SITE.name}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {SITE.name}
              </p>
              <p className="text-xs text-white/70">
                Typically replies within an hour
              </p>
            </div>
          </div>

          <div
            className="space-y-3 px-4 py-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.03) 0, transparent 40%)",
            }}
          >
            <div className="max-w-[85%] rounded-lg rounded-tl-none bg-[#202c33] px-3 py-2 text-sm leading-relaxed text-white/90">
              👋 Hi there! Thanks for stopping by my portfolio — how can I help
              you today?
              <span className="mt-1 block text-right text-[10px] text-white/40">
                Now
              </span>
            </div>
          </div>

          <div className="bg-[#0b141a] p-4 pt-0">
            <a
              href={chatHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-[#0b141a] transition hover:brightness-110"
            >
              <IconWhatsapp className="h-4 w-4" />
              Start Chat on WhatsApp
              <IconArrowUpRight className="h-4 w-4" />
            </a>
            <div className="mt-3 flex justify-center">
              <span className="h-1 w-24 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105"
      >
        {!open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25d366] opacity-40" />
        )}
        {open ? (
          <IconClose className="relative h-6 w-6" />
        ) : (
          <IconWhatsapp className="relative h-7 w-7" />
        )}
      </button>
    </>
  );
}
