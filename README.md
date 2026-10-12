# ASMI — Website

A single-page React application for ASMI, an image & video production studio for ecommerce
brands. Built with React, TypeScript, Vite, Tailwind CSS, and React Router; deployed as a static
site on Cloudflare Pages, with an optional Supabase-backed contact form.

## Tech stack

- **Vite + React + TypeScript** — app shell and build tooling
- **Tailwind CSS v4** — styling (theme tokens in [`src/index.css`](src/index.css))
- **React Router** — client-side routing between pages
- **Supabase** (optional) — stores contact form submissions

## Project structure

```
src/
  components/   Navbar, Footer, buttons, reusable UI
  pages/        Home, About, Services, Portfolio, Contact, NotFound
  data/         siteConfig.ts — all editable business copy & facts
  lib/          supabase.ts — Supabase client (no-ops if unconfigured)
public/
  logo.png      Site logo / favicon
  _redirects    Cloudflare Pages SPA fallback routing
supabase/
  schema.sql    SQL to create the `leads` table for the contact form
```

### Editing content

Almost all business-specific copy (contact details, services, process steps, stats) lives in
[`src/data/siteConfig.ts`](src/data/siteConfig.ts). Update that file and the whole site updates —
you shouldn't need to touch component code for text changes.

The portfolio and a few hero images currently use generated placeholder tiles
(`src/components/MediaFrame.tsx`) labelled by category. Swap in real photography/video by
replacing those components with `<img>`/`<video>` tags once you have final assets.

## Local development

```bash
npm install
npm run dev
```

Visit the printed `localhost` URL. Hot reload is on by default.

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Contact form & Supabase (optional)

The contact form works out of the box — if Supabase isn't configured, submitting it opens a
pre-filled email instead. To store submissions in a database:

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase SQL Editor, run [`supabase/schema.sql`](supabase/schema.sql) to create the
   `leads` table (with row-level security that only allows public *inserts*, never reads).
3. Copy `.env.example` to `.env.local` and fill in your project's URL and anon key
   (Supabase dashboard → Project Settings → API).
4. Add the same two variables in Cloudflare Pages → your project → Settings → Environment
   variables, then redeploy, so the live site can use them too.
5. View submitted leads any time from the Supabase Table Editor.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub (or GitLab).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, and
   select this repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add the Supabase environment variables (see above) if you want the contact form to save to
   a database.
5. Deploy. Cloudflare will give you a `*.pages.dev` URL immediately — then follow the custom
   domain steps your team shared separately to point your own domain at it.

`public/_redirects` is already set up so client-side routes (`/about`, `/portfolio`, etc.) work
correctly on refresh and direct navigation.
