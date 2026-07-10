import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-32 text-center">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-foreground/10 bg-surface/90 text-left shadow-2xl shadow-black/40">
        <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-foreground/[0.03] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs text-foreground/40">error.log</span>
        </div>
        <pre className="whitespace-pre-wrap p-6 font-mono text-sm leading-relaxed">
          <span className="text-red-400">Error:</span>{" "}
          <span className="text-foreground/80">404 — Page not found</span>
          {"\n"}
          <span className="text-foreground/50">{"  at "}</span>
          <span className="text-cyan-300">router</span>
          <span className="text-foreground/50">.resolve(</span>
          <span className="text-emerald-400">&quot;this route&quot;</span>
          <span className="text-foreground/50">)</span>
        </pre>
      </div>

      <h1 className="text-2xl font-bold text-foreground">
        Looks like this page wandered off.
      </h1>
      <p className="max-w-sm text-sm text-foreground/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Back to home
      </Link>
    </main>
  );
}
