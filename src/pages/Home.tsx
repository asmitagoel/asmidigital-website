import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import MediaFrame from '../components/MediaFrame'
import { siteConfig } from '../data/siteConfig'

const values = [
  {
    title: 'We actually reply',
    description:
      "No ticket queues, no bouncing between account managers. You get a real person who knows your brand and answers quickly.",
  },
  {
    title: 'Built for ecommerce',
    description:
      'We think in listings, feeds, and conversion — not just pretty pictures. Every shoot is planned around where it will live.',
  },
  {
    title: 'Collaborative by default',
    description:
      'Mood boards, shot lists, and check-ins before anything is final. You shape the direction at every step, not just at review.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="pointer-events-none absolute top-40 left-[-15%] h-80 w-80 rounded-full bg-brand-300/30 blur-3xl" />

        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-800/20 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
                Image &amp; video studio for ecommerce
              </p>
              <h1 className="font-display mt-6 text-4xl font-medium leading-[1.1] text-brand-950 sm:text-5xl lg:text-6xl">
                Visuals that make people{' '}
                <span className="italic text-brand-600">stop scrolling.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-900/70">
                {siteConfig.description} We work hand-in-hand with you, so every shoot feels like
                it was made by someone who actually gets your brand.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button to="/contact">Start a project</Button>
                <Button to="/portfolio" variant="secondary">
                  See our work
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-8 space-y-4">
                  <MediaFrame title="Skincare drop" category="Packshots" seed={0} aspect="aspect-[3/4]" />
                  <MediaFrame title="Studio session" category="Behind the scenes" seed={3} aspect="aspect-square" />
                </div>
                <div className="space-y-4">
                  <MediaFrame title="Launch teaser" category="Video" kind="video" seed={1} aspect="aspect-square" />
                  <MediaFrame title="Lifestyle set" category="Lifestyle" seed={2} aspect="aspect-[3/4]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="border-y border-brand-900/10 bg-brand-50/60">
        <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-xl text-brand-900 sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-brand-900/50">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      {/* Services preview */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Photography and video, tailored to how you sell online"
            description="From single product shots to full campaign video, every service is built around how ecommerce brands actually work."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.services.map((service) => (
              <Link
                key={service.slug}
                to="/services"
                className="group flex flex-col rounded-2xl border border-brand-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-800/30 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <h3 className="font-display text-xl text-brand-950">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-900/65">
                  {service.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why ASMI */}
      <section className="bg-brand-950 py-24 text-cream-50">
        <Container>
          <SectionHeading
            eyebrow="Why brands come to us"
            title="Working with us should feel easy"
            description="We built ASMI to feel like an extension of your team — warm, responsive, and genuinely invested in how your brand looks."
            align="center"
          />

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {values.map((value, i) => (
              <div key={value.title} className="text-center sm:text-left">
                <span className="font-display text-sm text-brand-300">0{i + 1}</span>
                <h3 className="font-display mt-2 text-xl text-cream-50">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/65">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A simple process, from first hello to final delivery"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.process.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl bg-brand-50/60 p-6">
                <span className="font-display text-3xl text-brand-300">0{i + 1}</span>
                <h3 className="font-display mt-3 text-lg text-brand-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 px-8 py-16 text-center text-cream-50 sm:px-16">
            <div className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
            <h2 className="font-display mx-auto max-w-xl text-3xl font-medium sm:text-4xl">
              Let's make your products look as good as they perform.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-cream-100/70">
              Tell us about your brand and what you need — we'll get back to you personally,
              usually within a day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="secondary" className="!border-cream-50 !text-cream-50 hover:!bg-cream-50 hover:!text-brand-900">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
