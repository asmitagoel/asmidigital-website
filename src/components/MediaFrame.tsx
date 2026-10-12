const gradients = [
  'from-brand-700 via-brand-500 to-brand-300',
  'from-brand-900 via-brand-700 to-brand-400',
  'from-brand-800 via-brand-600 to-brand-200',
  'from-brand-600 via-brand-400 to-cream-200',
  'from-brand-950 via-brand-700 to-brand-300',
]

export default function MediaFrame({
  title,
  category,
  kind = 'image',
  seed = 0,
  aspect = 'aspect-[4/5]',
}: {
  title: string
  category: string
  kind?: 'image' | 'video'
  seed?: number
  aspect?: string
}) {
  const gradient = gradients[seed % gradients.length]

  return (
    <div
      className={`group relative ${aspect} w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} shadow-sm`}
    >
      <svg
        className="absolute -bottom-8 -right-8 h-40 w-40 text-cream-50/10 transition-transform duration-500 group-hover:scale-110"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 10 C 60 25, 65 35, 50 55 C 35 35, 40 25, 50 10 Z M20 35 C 32 30, 42 35, 46 48 C 33 50, 23 46, 20 35 Z M80 35 C 68 30, 58 35, 54 48 C 67 50, 77 46, 80 35 Z M15 55 C 28 50, 42 54, 50 60 C 42 68, 26 68, 15 55 Z M85 55 C 72 50, 58 54, 50 60 C 58 68, 74 68, 85 55 Z"
          fill="currentColor"
        />
      </svg>

      {kind === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-50/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-brand-800">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/80 to-transparent p-5 pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cream-100/80">
          {category}
        </p>
        <p className="font-display mt-1 text-lg text-cream-50">{title}</p>
      </div>
    </div>
  )
}
