"use client";

import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/data";
import { IconGithub } from "./icons";

type GithubUser = {
  public_repos: number;
  followers: number;
  created_at: string;
};

export function GithubStats() {
  const [stats, setStats] = useState<GithubUser | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const username = SOCIAL_LINKS.github
      .replace(/^https?:\/\/github\.com\//, "")
      .replace(/\/$/, "");

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed");
        return res.json();
      })
      .then((data: GithubUser) => setStats(data))
      .catch(() => setFailed(true));
  }, []);

  if (failed) return null;

  const memberSince = stats ? new Date(stats.created_at).getFullYear() : null;

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-foreground/10 bg-surface p-6">
      <div className="flex items-center gap-3">
        <IconGithub className="h-6 w-6 text-foreground/70" />
        <div>
          <p className="text-sm font-semibold text-foreground">Live from GitHub</p>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground/50 transition hover:text-accent"
          >
            @piusnyika
          </a>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">
            {stats ? stats.public_repos : "—"}
          </p>
          <p className="text-xs text-foreground/50">Public Repos</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">
            {stats ? stats.followers : "—"}
          </p>
          <p className="text-xs text-foreground/50">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground">
            {memberSince ?? "—"}
          </p>
          <p className="text-xs text-foreground/50">Member Since</p>
        </div>
      </div>
    </div>
  );
}
