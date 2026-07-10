"use client";

import { useState } from "react";
import { IconCheck, IconCopy, IconMail } from "./icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard access denied; nothing to do
    }
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background">
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 text-sm font-semibold"
      >
        <IconMail className="h-4 w-4" />
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="rounded-full p-1 transition hover:bg-background/10"
      >
        {copied ? (
          <IconCheck className="h-4 w-4" />
        ) : (
          <IconCopy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
