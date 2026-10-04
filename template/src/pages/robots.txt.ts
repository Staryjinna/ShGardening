import type { APIRoute } from 'astro';

// Generated so the sitemap URL always matches the site address in site.config.ts.
export const GET: APIRoute = ({ site }) => {
  const base = site!.toString().replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
