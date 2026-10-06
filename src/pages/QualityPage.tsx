import { Link } from 'react-router-dom'
import { QualityStageChapter } from '../components/QualityStageChapter'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader, ctaButtonClass } from '../components/SiteHeader'
import { programFocus, qualityPhilosophy, qualityStages } from '../data/quality'

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7H13M13 7L8 2M13 7L8 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function QualityPage() {
  return (
    <>
      <section className="border-b border-neutral-200/80 bg-stone px-4 pt-5 pb-16 sm:px-6 lg:px-10 lg:pb-24 lg:pt-8">
        <SiteHeader activeLabel="Quality" />
        <Reveal className="mx-auto mt-12 max-w-6xl lg:mt-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-navy uppercase">Quality</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            In-line checks at every stage
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Woven and outerwear programs at our Bago facility — aligned with buyer specifications,
            measurement tolerances, and the presentation standards retail partners expect.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Approach"
            title={qualityPhilosophy.title}
            description={qualityPhilosophy.paragraphs[0]}
          />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            {qualityPhilosophy.paragraphs[1]}
          </p>
        </Reveal>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Process"
              title="Cutting, sewing, and finishing."
              description="Three stages where in-line discipline keeps programs stable from first panel to final carton."
            />
          </Reveal>
          <ul className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {qualityStages.map((stage, index) => (
              <li key={stage.slug}>
                <QualityStageChapter stage={stage} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-neutral-200/80 bg-navy">
        <div className="relative min-h-56 sm:min-h-64 lg:min-h-72">
          <img
            src="/hero.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />
          <Reveal className="relative mx-auto flex max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
            <p className="max-w-2xl text-xl font-semibold leading-snug text-white sm:text-2xl">
              Same quality bar on every shipment — from first panel to final carton.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Programs"
              title="How checks align with what we make."
              description="Outerwear and woven runs share one floor rhythm; the emphasis shifts with program complexity."
            />
          </Reveal>
          <ul className="mt-12 grid gap-10 border-t border-neutral-200 pt-12 sm:grid-cols-2 sm:gap-12">
            {programFocus.map((item) => (
              <li key={item.title} className="border-t border-navy/20 pt-5 sm:border-t-0 sm:pt-0">
                <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-neutral-600">
            Compliance and audits for international retail programs are covered on our{' '}
            <Link to="/factory" className="font-semibold text-navy hover:underline">
              Factory
            </Link>{' '}
            page.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Related"
              title="See capacity and product scope."
              description="Quality sits alongside line capacity and the styles we run every day."
            />
          </Reveal>
          <ul className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            <li>
              <Link
                to="/factory"
                className="flex flex-col gap-2 py-8 transition-colors hover:bg-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-2 sm:py-10"
              >
                <span className="text-lg font-semibold text-navy">Factory</span>
                <span className="text-sm text-neutral-600">
                  Nineteen lines, CMP, and active audits in Bago
                </span>
                <span className="text-sm font-semibold text-navy uppercase" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="flex flex-col gap-2 py-8 transition-colors hover:bg-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-2 sm:py-10"
              >
                <span className="text-lg font-semibold text-navy">Products</span>
                <span className="text-sm text-neutral-600">
                  Woven jackets, coats, and apparel programs
                </span>
                <span className="text-sm font-semibold text-navy uppercase" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Next steps"
            title="Discuss specs or schedule a line walk."
            description="Share tech packs, tolerances, and audit timing — we will align production and in-line checks with your calendar."
          />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/contact" className={ctaButtonClass}>
              Contact us
              <ArrowRight />
            </Link>
            <Link
              to="/factory"
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-semibold tracking-wide text-navy uppercase transition-colors hover:border-navy/50"
            >
              View factory
              <ArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
