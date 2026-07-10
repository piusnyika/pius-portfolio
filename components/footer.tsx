import { SITE } from "@/lib/data";
import { IconArrowUp } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-foreground/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {SITE.name}.  All Rights Reserved with ❤️.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 transition hover:text-foreground"
        >
          Back to top
          <IconArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
