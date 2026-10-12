import { type FormEvent, useState } from 'react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { siteConfig } from '../data/siteConfig'
import { getSupabaseClient } from '../lib/supabase'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const data = new FormData(form)
    const lead = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      company: String(data.get('company') ?? ''),
      message: String(data.get('message') ?? ''),
    }

    const supabase = getSupabaseClient()

    if (!supabase) {
      // Supabase isn't configured yet — fall back to opening a pre-filled email.
      const body = encodeURIComponent(
        `Name: ${lead.name}\nCompany: ${lead.company}\nPhone: ${lead.phone}\n\n${lead.message}`,
      )
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `New project inquiry from ${lead.name || 'website'}`,
      )}&body=${body}`
      setStatus('success')
      form.reset()
      return
    }

    const { error } = await supabase.from('leads').insert([lead])

    if (error) {
      setStatus('error')
      setErrorMessage("Something went wrong on our end — please try WhatsApp or email instead.")
      return
    }

    setStatus('success')
    form.reset()
  }

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your brand"
          description="Share a few details about your products and what you need — we read every message ourselves and reply personally."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-brand-900/10 bg-white p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" required placeholder="jane@brand.com" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Phone (optional)" name="phone" placeholder="+91 98765 43210" />
              <Field label="Brand / company" name="company" placeholder="Your brand name" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-brand-900/80">
                What do you need?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your products, the kind of visuals you're after, and any timelines."
                className="mt-2 w-full rounded-xl border border-brand-900/15 bg-cream-50 px-4 py-3 text-sm text-brand-950 placeholder:text-brand-900/35 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-800 px-6 py-3.5 text-sm font-medium text-cream-50 transition-all hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-brand-700">
                Thanks — your message is on its way. We'll get back to you soon.
              </p>
            )}
            {status === 'error' && <p className="text-sm text-red-600">{errorMessage}</p>}
          </form>

          <div className="space-y-5">
            <InfoCard
              title="Email us"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <InfoCard
              title="Call or WhatsApp"
              value={siteConfig.phone}
              href={`https://wa.me/${siteConfig.whatsapp}`}
            />
            <div className="rounded-2xl bg-brand-50 p-6">
              <h3 className="font-display text-lg text-brand-950">Response time</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                We personally read every inquiry and usually reply within one business day.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-brand-900/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-brand-900/15 bg-cream-50 px-4 py-3 text-sm text-brand-950 placeholder:text-brand-900/35 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  )
}

function InfoCard({ title, value, href }: { title: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="block rounded-2xl border border-brand-900/10 bg-white p-6 transition-colors hover:border-brand-800/30"
    >
      <h3 className="font-display text-lg text-brand-950">{title}</h3>
      <p className="mt-1 text-sm text-brand-700">{value}</p>
    </a>
  )
}
