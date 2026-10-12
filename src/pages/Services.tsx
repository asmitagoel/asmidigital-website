import Container from '../components/Container'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import MediaFrame from '../components/MediaFrame'
import { siteConfig } from '../data/siteConfig'

export default function Services() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Everything your products need to look their best online"
            description="Whether it's one hero shot or an ongoing content pipeline, we scope every project around your catalogue, your channels, and your timeline."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="space-y-20">
          {siteConfig.services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <MediaFrame
                title={service.title}
                category="Sample layout"
                kind={service.slug === 'ecommerce-video' ? 'video' : 'image'}
                seed={i}
                aspect="aspect-[16/11]"
              />
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                  0{i + 1}
                </span>
                <h2 className="font-display mt-2 text-2xl font-medium text-brand-950 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-brand-900/70">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-brand-900/75">
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.42L8.5 12.085l6.79-6.794a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-3xl bg-brand-50 px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-2xl font-medium text-brand-950 sm:text-3xl">
              Not sure which service fits your brand?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-brand-900/65">
              Tell us what you're selling and we'll recommend a package — no obligation, no
              pressure.
            </p>
            <div className="mt-7">
              <Button to="/contact">Let's talk it through</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
