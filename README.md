# Pius Nyika — Portfolio

Personal portfolio site for [Pius Nyika](https://piusnyika.co.zw), a Zimbabwe-based web developer specializing in React, Next.js, and WordPress. Built with the Next.js App Router and Tailwind CSS.

## Features

- Animated hero with a typing "code window", floating tech tags, and magnetic CTA buttons
- Auto-counting stats section (projects, years of experience, reviews)
- "Live client work" — a draggable, autoplaying carousel of real production websites
- Git-log-styled work experience timeline
- Live GitHub stats widget (public repos, followers) pulled from the GitHub API
- Contact form (opens a pre-filled email) plus a floating WhatsApp chat widget
- Full SEO setup: Open Graph image generation, JSON-LD structured data, `robots.txt`, `sitemap.xml`
- Custom 404 page, skip-to-content link, and `prefers-reduced-motion` support throughout
- Fully static — every route pre-renders at build time

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Editing Content

Nearly all site content lives in one place: [`lib/data.ts`](lib/data.ts). This includes:

- `SITE` — name, role, email, location
- `SOCIAL_LINKS` — GitHub, LinkedIn, Instagram, Facebook, Dribbble, WhatsApp
- `ROLES` — titles that cycle in the hero
- `SKILLS` — skill categories and tags
- `WEBSITES` — real client sites shown in the carousel (add a `screenshot` path pointing to an image in `public/` to replace the placeholder preview)
- `EXPERIENCE` — work history

To add your resume, drop a PDF at `public/resume.pdf` — the "Download Resume" button in the About section already links there.

## Project Structure

```
app/            Routes, layout, metadata, SEO files (robots, sitemap, OG image)
components/     UI components, one per section/feature
lib/            Site content (data.ts) and shared hooks
public/         Static assets — images, favicon, logo
```

## Deployment

Since every page is statically generated, this site can be deployed as a static export to any standard web host, or deployed with zero config to [Vercel](https://vercel.com).
