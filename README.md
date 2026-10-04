# Sreehari Gardens website

Static marketing site for Sreehari Gardens (SG Garden), built with Astro + Tailwind CSS. No backend, no database.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs ./dist
npm run preview    # serve the production build
```

## Deploy (free)

Build command `npm run build`, publish directory `dist`. Works on Netlify, Vercel and Cloudflare Pages.
Set the environment variable `SITE_URL` (for example `https://www.yourdomain.in`) so canonical URLs, the sitemap and social cards use the real domain, and update the `Sitemap:` line in `public/robots.txt`.

## Where to edit content

| What | File |
|---|---|
| Phone numbers, WhatsApp number, Instagram, address, map | `src/data/contact.ts` |
| Services (prices are hidden; set `showPrices = true` to show them) | `src/data/services.ts` |
| Portfolio photos and categories | `src/data/projects.ts` |
| Instagram reels | `src/data/reels.ts` |
| FAQ | `src/data/faq.ts` |

Add new photos to `src/assets/photos/`, then add an entry to `src/data/projects.ts`. Images are converted to AVIF/WebP at build time.

## Adding Instagram reels

Open the reel on Instagram, tap Share > Copy link, and paste it into the `reels` array in `src/data/reels.ts` (tracking parameters are stripped automatically). The page uses Instagram's official embed, loaded only when the section scrolls into view. Empty array = photo grid fallback.

## Regenerating icons / social card

`node scripts/make-icons.mjs` rebuilds the favicons and `public/og.jpg` from the logo and hero photo.

## Owner TODOs

Search the code for `TODO`. In short: confirm price units; confirm whether +91 85212 96589 is valid; add business address, map embed and geo; add Srihari's photo and own words in About; confirm FAQ answers (service area, timelines, maintenance plans); review the grass descriptions; set the real domain in `SITE_URL` and `robots.txt`.
