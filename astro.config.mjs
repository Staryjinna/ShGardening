import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: set SITE_URL (e.g. https://www.yourdomain.in) in the host's environment
// variables once the final domain is known. It drives canonical URLs, the sitemap and social cards.
const site = process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  image: { layout: undefined },
  build: { inlineStylesheets: 'auto' },
});
