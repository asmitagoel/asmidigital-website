// Central place for business facts shown across the site.
// Update these values with your real details — nothing else in the
// codebase needs to change when you do.
export const siteConfig = {
  name: 'ASMI',
  fullName: 'ASMI Studio',
  tagline: 'Visuals that make people stop scrolling.',
  description:
    'ASMI is a product photography and video studio for ecommerce brands — built to turn browsers into buyers, one scroll-stopping frame at a time.',

  // TODO: replace with your real contact details
  email: 'hello@asmidigital.com',
  phone: '+91 00000 00000',
  whatsapp: '910000000000', // digits only, with country code, used for wa.me links
  address: 'India',

  social: {
    instagram: 'https://instagram.com/asmi.studio',
    linkedin: 'https://linkedin.com/company/asmi-studio',
    youtube: '',
  },

  // Shown on the homepage "how we work" section
  process: [
    {
      title: 'Discover',
      description:
        "We start with a short call to understand your brand, your products, and what 'good' looks like for you.",
    },
    {
      title: 'Plan the shoot',
      description:
        'A shot list, mood board, and timeline — so there are no surprises before a single frame is captured.',
    },
    {
      title: 'Create',
      description:
        'Our team shoots and produces your images or videos, with quality checks at every stage.',
    },
    {
      title: 'Refine & deliver',
      description:
        'You review, we revise, and you get production-ready files in the formats your channels need.',
    },
  ],

  services: [
    {
      slug: 'product-photography',
      title: 'Product Photography',
      short: 'Clean, catalogue-ready shots that work across every listing and marketplace.',
      description:
        'White-background, lifestyle, and packshot photography built to marketplace and ad-platform specs — so your listings look consistent everywhere they appear.',
      bullets: ['White & colour background packshots', 'Lifestyle and in-use shots', 'Marketplace-ready sizing & specs', 'Consistent lighting across full catalogues'],
    },
    {
      slug: 'ecommerce-video',
      title: 'Ecommerce Video',
      short: 'Short-form product and ad videos built for feeds, listings, and marketplaces.',
      description:
        'From product demos to performance-driven ad creative, we produce video that is cut for how people actually shop today — fast, vertical-friendly, and sound-off safe.',
      bullets: ['Product demo & unboxing videos', 'Paid social / performance creative', 'Marketplace video listings', 'Reels, Shorts & vertical cuts'],
    },
    {
      slug: 'creative-direction',
      title: 'Creative Direction',
      short: 'A consistent visual identity across every shoot, platform, and product drop.',
      description:
        'We help brands build a repeatable visual language — mood boards, shot styles, and brand guidelines — so every new drop looks like it belongs to the same family.',
      bullets: ['Mood boards & shot styling', 'Brand visual guidelines', 'Seasonal / campaign concepts', 'Ongoing content calendars'],
    },
    {
      slug: 'retouching-post',
      title: 'Retouching & Post-Production',
      short: 'Colour grading, cleanup, and finishing that makes raw footage retail-ready.',
      description:
        'Editing, colour correction, background cleanup and compositing — the finishing work that turns a good shoot into a great final asset.',
      bullets: ['Colour grading & correction', 'Background removal / cleanup', 'Video editing & sound design', 'Format exports for every platform'],
    },
  ],

  stats: [
    { label: 'Focused on', value: 'Ecommerce brands' },
    { label: 'Turnaround', value: 'Days, not weeks' },
    { label: 'Revisions', value: 'Built into every project' },
    { label: 'Delivery', value: 'Ready for every channel' },
  ],
}

export type SiteConfig = typeof siteConfig
