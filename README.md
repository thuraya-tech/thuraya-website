# thuraya-website

Thuraya Tech company umbrella site at [thuraya.tech](https://thuraya.tech).

## Tech

- [Astro 4](https://astro.build) (SSG)
- [Tailwind CSS 3](https://tailwindcss.com) via `@astrojs/tailwind`
- Bilingual AR / EN — route-based (`/` Arabic default, `/en/...` English)
- Fonts: Tajawal (AR), Plus Jakarta Sans (EN)

## Quickstart

```bash
npm install
npm run dev
```

Site runs at <http://localhost:4321>.

```bash
npm run build      # static build to ./dist
npm run preview    # preview built output
```

## Deploy — Cloudflare Pages

- Framework preset: **Astro**
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`
- Custom domain: `thuraya.tech`

The `dist/` folder is fully static. `sitemap-index.xml` and `robots.txt` are generated/included automatically.

## Structure

```
src/
  components/        shared UI (Header, Footer, Pleiades, TrustBar)
  components/pages/  page-body partials reused across AR + EN routes
  i18n/              ar.ts, en.ts, helpers
  layouts/           BaseLayout.astro
  pages/             AR routes (default locale, no prefix)
  pages/en/          English mirrors
public/              logo, favicon, robots.txt
```

Part of [Thuraya Tech](https://github.com/thuraya-tech).
