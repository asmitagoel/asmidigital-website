# ASMI website — project brief

This is the marketing site for **ASMI**, an image & video production studio for ecommerce
brands (secondary clients: other companies/associations). It's a React SPA, deployed on
Cloudflare Pages, with GitHub as the source of truth.

## Status (as of this writing)

- **Repo:** [asmitagoel/asmidigital-website](https://github.com/asmitagoel/asmidigital-website), branch `main`. Pushed and live.
- **Hosting:** Cloudflare Pages project `asmidigital-website`, connected to this GitHub repo — every push to `main` auto-deploys.
- **Domain:** `asmidigital.in` and `www.asmidigital.in` are connected via CNAME to `asmidigital-website.pages.dev` (DNS already configured on the same Cloudflare account — should be active).
- **Database:** not yet wired up. The contact form works today by falling back to a `mailto:` link; see "Supabase" below to switch it to actually storing leads.
- Note: there's an unrelated existing Cloudflare Pages project (`asmi-ai-catalogue-platform`, served at `studio.asmidigital.in`) on the same Cloudflare account — separate project, not part of this repo, don't touch its DNS record.

## Tech stack

Vite + React 19 + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite`) + React Router 7.
No test suite or CI configured yet.

## Structure

```
src/
  components/   Navbar, Footer, Button, Layout, MediaFrame (placeholder visual tiles), etc.
  pages/        Home, About, Services, Portfolio, Contact, NotFound
  data/siteConfig.ts   ALL editable business copy: contact info, services, process steps, stats
  lib/supabase.ts      Supabase client — no-ops gracefully if env vars aren't set
public/
  logo.png, logo-social.png   the ASMI logo (lotus mark)
  _redirects                  SPA fallback routing for Cloudflare Pages
supabase/schema.sql    SQL to create the `leads` table (RLS: public insert-only)
```

## What's real vs. placeholder

- **Placeholder:** all portfolio/hero imagery is a generated gradient tile (`MediaFrame.tsx`), not real photos/video. Swap these for actual shoot assets when available — probably worth converting `MediaFrame` usages to `<img>`/`<video>` once real files exist.
- **Placeholder:** contact email/phone/WhatsApp number and social links in `siteConfig.ts` are made up — **must be replaced with real values** before this is truly "live" to customers.
- **Intentionally omitted:** no fabricated testimonials, client logos, or stats (e.g. "500+ brands") — avoided inventing unverifiable claims. Add real ones once you have them (there's a natural slot for testimonials on the Home/About pages if you want to add a component later).

## Common next steps

1. Replace placeholder contact details in `src/data/siteConfig.ts`.
2. Add real portfolio photography/video, replacing `MediaFrame` placeholders.
3. (Optional) Set up Supabase: run `supabase/schema.sql`, then add `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` to both `.env.local` (local dev) and Cloudflare Pages → Settings → Environment variables (production) — see `README.md`.
4. Confirm `asmidigital.in` / `www.asmidigital.in` show "Active" in Cloudflare Pages → Custom domains.
5. Consider adding a testimonials section once real client feedback exists.

## Working conventions from this project so far

- Keep all editable business copy centralized in `siteConfig.ts` rather than scattered in components.
- Don't fabricate business facts (stats, testimonials, client names) — use honest, qualitative
  copy or clearly-labeled placeholders instead.
- Build (`npm run build`) and lint (`npm run lint`) clean before considering a change done.
