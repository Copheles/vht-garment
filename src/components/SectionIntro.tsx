export function SectionIntro({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold tracking-[0.28em] uppercase ${
          light ? 'text-white/70' : 'text-navy'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-neutral-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
