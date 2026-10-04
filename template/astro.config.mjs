import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './site.config.ts';

// The live address comes from site.config.ts; SITE_URL (host env var) overrides it.
const site = (process.env.SITE_URL || siteConfig.siteUrl).replace(/\/$/, '');

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  image: { layout: undefined },
  build: { inlineStylesheets: 'auto' },
});
