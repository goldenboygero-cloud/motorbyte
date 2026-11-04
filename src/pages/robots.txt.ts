import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error('Configure the production site URL in astro.config.mjs before building robots.txt.');
  }

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
