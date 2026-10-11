# AGENTS.md — Development Guide

## Project Overview

**GY Roadside Solutions LLC** is a static, bilingual (English/Spanish) website built with **Astro** and **Tailwind CSS**. It targets commercial truck drivers across the USA and provides roadside assistance services.

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Astro 4.x (static output) |
| Styling | Tailwind CSS 3.x |
| Language | TypeScript (strict) |
| Forms | Web3Forms (no backend required) |
| i18n | Custom locale files (`src/i18n/`) |
| Deployments | Netlify / Vercel / Cloudflare Pages |

## Project Structure

```
src/
├── components/      # Reusable Astro components (UI)
├── config/          # Site config (site.ts), contact form (contact.ts)
├── data/            # Content data — business.ts, services.ts, reviews.ts, serviceAreas.ts
├── i18n/            # Translations — en.ts, es.ts, index.ts
├── layouts/         # BaseLayout.astro (the one master template)
├── pages/           # Astro pages — en/ and es/ subdirs (static generation)
│   ├── en/          # 6 pages + [slug].astro dynamic route
│   └── es/          # 6 pages + [slug].astro dynamic route
└── styles/          # global.css (Tailwind entry point)
public/              # Static assets — images, favicon, robots.txt, sitemap
```

## Common Tasks

### Add/Edit a Service
1. Edit `src/data/services.ts`
2. Add or modify an entry in the array (see type `Service`)
3. Add the image to `public/images/services/{slug}.webp`
4. `active: false` = placeholder, no page generated

### Update Business Info
All contact info lives in `src/data/business.ts` — phone, email, hours, address, social links, SEO text.

### Add a Page Translation
1. Edit `src/i18n/en.ts` and `src/i18n/es.ts` — keys must stay in sync
2. Use `t(lang)` in components to access translation keys

### Configure Contact Form
1. Sign up at https://web3forms.com (free tier)
2. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/config/contact.ts`
3. Test with `npm run dev` before deploying

### Deploy
- **Netlify**: Connect GitHub repo → build command `npm run build` → publish `dist`
- **Vercel**: Connect repo or run `vercel --prod`
- **Cloudflare Pages**: Connect repo → build command `npm run build` → output `dist`

## Color Tokens (Tailwind)

| Name | Hex | Usage |
|------|-----|-------|
| `primary` | `#0D1B2E` | Header, hero, footer background |
| `primary.light` | `#1A2F4A` | Hover states on primary |
| `secondary` | `#C8102E` | Logo accent / alerts |
| `secondary.light` | `#E8253F` | Hover states on secondary |
| `accent` | `#F5C518` | CTAs, highlights, focus rings |
| `accent.light` | `#FFD740` | Hover states on accent |
| `dark` | `#1F2937` | Body text — high contrast on light backgrounds |
| `light` | `#F8FAFC` | Page background |
| `muted` | `#94A3B8` | Secondary text |
| `border` | `#E2E8F0` | Form inputs, card borders |

## Accessibility Notes

- Body text uses `text-dark` (`#1F2937`) on `bg-light` (`#F8FAFC`) — contrast ratio **12.5:1** (WCAG AAA)
- All interactive elements have `min-h-[44px] min-w-[44px]` for touch accessibility
- `skip-link` component for keyboard navigation
- Language switcher preserves URL path across locales
- Form has client-side validation + error display with `aria-invalid`
- All images have `alt` attributes; decorative images use `alt=""`
- Focus styles use `outline: 2px solid #F5C518` with 3px offset

## Build & Dev Commands

```bash
npm install          # install deps
npm run dev          # dev server at http://localhost:4321
npm run build        # static output to /dist
npm run preview      # serve /dist locally
npx astro check      # Run type checking
```

## Key Files to Modify

- `src/data/business.ts` — all business info and SEO text
- `src/config/contact.ts` — Web3Forms access key
- `src/config/site.ts` — site URL, analytics IDs, theme color
- `tailwind.config.mjs` — color palette and Tailwind theme
- `src/styles/global.css` — global CSS, button/card/form styles
- `src/i18n/en.ts` & `src/i18n/es.ts` — all translatable strings

## Gotchas

- Astro uses `@` as an alias for `src/` (configured in `tsconfig.json`)
- Images default to `loading="lazy"` except hero images use `fetchpriority="high"`
- The root `src/pages/index.astro` is a redirect-only page to `/en/`
- `.env.example` documents all available env variables
- Never commit `.env` to version control