# Garden / landscaping website template

Static marketing site (Astro + Tailwind CSS). No backend, no database. One config file controls everything that differs between clients.

## New client in 5 steps

1. Create a new repo from this template (GitHub: **Use this template**).
2. Edit **`site.config.ts`**: brand name, owner, region, phones, WhatsApp, Instagram, address, map, domain, SEO text.
3. Replace **`src/assets/brand/logo.jpg`** with the client's square logo, then run `npm run icons` (rebuilds favicons and the social card).
4. Replace photos / services / FAQ if needed (table below).
5. Deploy.

## What lives where

| What | File |
|---|---|
| **Brand, owner, region, phones, WhatsApp, Instagram, address, map, domain, SEO titles** | **`site.config.ts`** |
| Logo | `src/assets/brand/logo.jpg` |
| Services and prices (hidden by default; `showPrices = true` to show) | `src/data/services.ts` |
| Portfolio photos and categories | `src/data/projects.ts` + `src/assets/photos/` |
| Instagram reels (empty = photo grid fallback) | `src/data/reels.ts` |
| FAQ | `src/data/faq.ts` |

Leave `instagram.url` empty in the config to hide the Instagram section and footer link. Leave `address` / `mapEmbedUrl` empty to hide them.

> The included photos and service list are sample content from the original site. Replace them for each client.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs ./dist
npm run preview
```

## Deploy (free)

Build command `npm run build`, publish directory `dist`. Works on Netlify, Vercel and Cloudflare Pages. The site address comes from `siteUrl` in `site.config.ts` (the `SITE_URL` environment variable overrides it). `robots.txt` and the sitemap are generated from it.

## Adding Instagram reels

Instagram > reel > Share > Copy link, paste into `src/data/reels.ts`. Tracking parameters are stripped automatically.
