import { useMemo, useState } from 'react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import MediaFrame from '../components/MediaFrame'
import Button from '../components/Button'

const categories = ['All', 'Packshots', 'Lifestyle', 'Video', 'Beauty & Skincare', 'Fashion'] as const

const items: {
  title: string
  category: (typeof categories)[number]
  kind: 'image' | 'video'
  aspect: string
}[] = [
  { title: 'Minimal packshot series', category: 'Packshots', kind: 'image', aspect: 'aspect-[4/5]' },
  { title: 'Studio lifestyle set', category: 'Lifestyle', kind: 'image', aspect: 'aspect-square' },
  { title: 'Launch day teaser', category: 'Video', kind: 'video', aspect: 'aspect-[4/5]' },
  { title: 'Skincare hero shots', category: 'Beauty & Skincare', kind: 'image', aspect: 'aspect-square' },
  { title: 'Lookbook editorial', category: 'Fashion', kind: 'image', aspect: 'aspect-[4/5]' },
  { title: 'Product demo reel', category: 'Video', kind: 'video', aspect: 'aspect-square' },
  { title: 'Flat lay collection', category: 'Packshots', kind: 'image', aspect: 'aspect-[4/5]' },
  { title: 'In-use lifestyle shots', category: 'Lifestyle', kind: 'image', aspect: 'aspect-[4/5]' },
  { title: 'Texture & ingredients', category: 'Beauty & Skincare', kind: 'image', aspect: 'aspect-square' },
]

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const filtered = useMemo(
    () => (active === 'All' ? items : items.filter((item) => item.category === active)),
    [active],
  )

  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="A sense of how we see your products"
            description="This page shows the range of styles we shoot — your actual gallery of finished work will replace these as projects wrap. Ask us for full case studies any time."
          />

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === category
                    ? 'border-brand-800 bg-brand-800 text-cream-50'
                    : 'border-brand-900/15 text-brand-900/70 hover:border-brand-800/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <MediaFrame
                key={item.title}
                title={item.title}
                category={item.category}
                kind={item.kind}
                seed={i}
                aspect={item.aspect}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-3xl bg-brand-950 px-8 py-14 text-center text-cream-50 sm:px-16">
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              Want to see full projects, not just samples?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-cream-100/70">
              We're happy to walk you through recent work relevant to your category over a quick
              call.
            </p>
            <div className="mt-7">
              <Button to="/contact" variant="secondary" className="!border-cream-50 !text-cream-50 hover:!bg-cream-50 hover:!text-brand-900">
                Request a portfolio walkthrough
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
