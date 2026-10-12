-- Run this in the Supabase SQL editor to set up the contact form table.
-- Dashboard: Project > SQL Editor > New query > paste this > Run.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null
);

alter table public.leads enable row level security;

-- Allow the public (anon) key used by the website to insert new leads,
-- but never to read, update, or delete them. View your leads from the
-- Supabase Table Editor (or with your service role key) instead.
create policy "Public can submit leads"
  on public.leads
  for insert
  to anon
  with check (true);
