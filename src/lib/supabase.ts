import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let client: SupabaseClient | null = null

if (url && anonKey) {
  client = createClient(url, anonKey)
}

// Returns null when Supabase env vars aren't configured yet — callers
// should fall back to a mailto/WhatsApp link in that case.
export function getSupabaseClient() {
  return client
}

export type ContactLead = {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}
