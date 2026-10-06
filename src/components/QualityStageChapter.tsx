import type { QualityStage } from '../data/quality'
import { Reveal } from './Reveal'

type QualityStageChapterProps = {
  stage: QualityStage
  index: number
}

export function QualityStageChapter({ stage, index }: QualityStageChapterProps) {
  const imageFirst = index % 2 === 0
  const hasImage = Boolean(stage.image)

  return (
    <article className="py-10 md:py-14 lg:py-16">
      <Reveal delay={index * 60}>
        <div
          className={`grid gap-8 md:items-center md:gap-10 lg:gap-14 ${
            hasImage ? 'md:grid-cols-12' : ''
          }`}
        >
          {hasImage && stage.image ? (
            <div
              className={`aspect-4/3 overflow-hidden md:col-span-5 ${
                imageFirst ? '' : 'md:order-2'
              }`}
            >
              <img
                src={stage.image.src}
                alt={stage.image.alt}
                className="size-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ) : null}
          <div className={hasImage ? `md:col-span-7 ${imageFirst ? '' : 'md:order-1'}` : ''}>
            <span className="font-serif text-4xl leading-none text-navy">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-navy sm:text-3xl">{stage.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600">{stage.detail}</p>
            <ul className="mt-6 space-y-2 border-t border-neutral-200 pt-6">
              {stage.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </article>
  )
}
