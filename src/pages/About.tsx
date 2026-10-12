import Container from '../components/Container'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import MediaFrame from '../components/MediaFrame'

const principles = [
  {
    title: 'Your brand, understood',
    description:
      "We take the time to learn your products, your customers, and your competitors before we ever pick up a camera.",
  },
  {
    title: 'Honest communication',
    description:
      'Clear timelines, clear pricing, and a real person to talk to — no jargon, no disappearing between milestones.',
  },
  {
    title: 'Craft over shortcuts',
    description:
      'Every image and video is checked for lighting, composition, and consistency before it ever reaches you.',
  },
  {
    title: 'Built to perform',
    description:
      "Beautiful is the baseline. We shoot with conversion, platform specs, and your audience in mind.",
  },
]

export default function About() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              About ASMI
            </p>
            <h1 className="font-display mt-3 text-4xl font-medium text-brand-950 sm:text-5xl">
              A studio built for brands that sell online
            </h1>
            <p className="mt-6 text-base leading-relaxed text-brand-900/70">
              ASMI exists because ecommerce brands deserve visuals as good as their products.
              We started as a small team of photographers, editors, and producers who kept
              noticing the same gap — great products let down by rushed, inconsistent imagery.
              So we built a studio around doing it properly: thoughtful planning, careful
              production, and a team that treats your catalogue like it's our own.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-900/70">
              Today we work primarily with ecommerce brands, and also take on projects for
              companies, associations, and teams who simply want their story told well in
              images and video.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MediaFrame title="On set" category="Behind the scenes" seed={2} aspect="aspect-[3/4]" />
            <MediaFrame title="Review session" category="Process" seed={4} aspect="aspect-[3/4] mt-8" />
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-900/10 bg-brand-50/60 py-24">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="A few things we won't compromise on"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <h3 className="font-display text-lg text-brand-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/65">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <MediaFrame title="Full catalogue shoot" category="Our process" seed={1} aspect="aspect-[4/3]" />
          <div>
            <SectionHeading
              eyebrow="Why brands trust us"
              title="We treat your project like a partnership, not a transaction"
              description="From the first brief to final delivery, you'll have a clear point of contact, agreed timelines, and a say in every creative decision. We handle your products and assets with the same care we'd want for our own."
            />
            <ul className="mt-6 space-y-3 text-sm text-brand-900/75">
              <li className="flex gap-3">
                <span className="text-brand-600">—</span>
                Written scope and timeline before any shoot begins
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600">—</span>
                Dedicated point of contact for every project
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600">—</span>
                Secure handling and return of product samples
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600">—</span>
                Structured revision rounds, not endless back-and-forth
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 px-8 py-14 text-center text-cream-50 sm:px-16">
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              Curious if we're the right fit for your brand?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-cream-100/70">
              Reach out and tell us about your products — we'll be honest if we're not the right
              match.
            </p>
            <div className="mt-7">
              <Button to="/contact" variant="secondary" className="!border-cream-50 !text-cream-50 hover:!bg-cream-50 hover:!text-brand-900">
                Say hello
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
