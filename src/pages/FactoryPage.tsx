import { Link } from 'react-router-dom'
import { FactoryMetricsGrid } from '../components/FactoryMetricsGrid'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader, ctaButtonClass } from '../components/SiteHeader'
import {
  capacityPoints,
  cmpPoints,
  facilityFacts,
  factoryAudits,
  floorStages,
} from '../data/factory'

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

export function FactoryPage() {
  return (
    <>
      <section className="border-b border-neutral-200/80 bg-stone px-4 pt-5 pb-16 sm:px-6 lg:px-10 lg:pb-24 lg:pt-8">
        <SiteHeader activeLabel="Factory" />
        <Reveal className="mx-auto mt-12 max-w-6xl lg:mt-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-navy uppercase">Factory</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            CMP manufacturing at our Bago facility
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Mae Khone Village, Bago — a <span className="font-medium text-navy">5.16-acre</span> site
            built for woven and outerwear programs since{' '}
            <span className="font-medium text-navy">2017</span>. Nineteen sewing lines today, with
            expansion underway and audits international retail programs expect.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <figure className="relative min-h-80 lg:min-h-[440px]">
              <img
                src="/hero.jpg"
                alt="Fabric rolls on the VHT production floor in Bago"
                className="size-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={80} className="flex flex-col justify-center lg:col-span-6">
            <SectionIntro
              eyebrow="Facility"
              title="Built for scale and retail programs."
              description="VHT Garment Company Limited operates from Mae Khone Village (West), Bago. The floor is set up for CMP outerwear and woven work — predictable capacity, compliance buyers can verify on site, and finishing that matches brand standards."
            />
            <dl className="mt-10 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
              {facilityFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] font-semibold tracking-[0.16em] text-brand-gray uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-medium text-navy">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone py-14 lg:py-16">
        <Reveal>
          <FactoryMetricsGrid title="Capacity at a glance" layout="full" />
        </Reveal>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Production model"
              title="Cut · Make · Pack"
              description="We manufacture on customer-supplied materials — aligning line setup, in-line checks, and packing with your program requirements."
            />
          </Reveal>
          <ul className="mt-10 space-y-4 border-t border-neutral-200 pt-10">
            {cmpPoints.map((point) => (
              <li key={point} className="flex gap-4 text-base leading-relaxed text-neutral-600">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Lines & output"
              title="Nineteen lines — expansion underway."
              description="Capacity is planned against style mix: complex outerwear and high-volume woven programs both run on disciplined lines with the same quality bar."
            />
          </Reveal>
          <ul className="mt-10 grid gap-8 border-t border-neutral-200 pt-10 sm:grid-cols-3">
            {capacityPoints.map((point, index) => (
              <li key={point} className="border-t border-navy/20 pt-5 sm:border-t-0 sm:pt-0">
                <span className="font-serif text-3xl leading-none text-navy">{index + 1}</span>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-neutral-200/80 bg-navy">
        <div className="relative min-h-56 sm:min-h-64 lg:min-h-72">
          <img
            src="/hero-2.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />
          <Reveal className="relative mx-auto flex max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
            <p className="max-w-2xl text-xl font-semibold leading-snug text-white sm:text-2xl">
              Nineteen lines today — room to grow — with the same quality bar on every shipment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Compliance"
              title="CMP production with active audits."
              description="Certifications and retail audits are maintained for the international programs we support."
            />
          </Reveal>
          <ul className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
            {factoryAudits.map((audit, index) => (
              <li key={audit.code}>
                <Reveal delay={index * 60}>
                  <article className="grid gap-4 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-10">
                    <p className="text-2xl font-semibold tracking-wide text-navy sm:col-span-2">
                      {audit.code}
                    </p>
                    <div className="sm:col-span-10">
                      <h3 className="text-lg font-semibold text-neutral-900">{audit.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                        {audit.detail}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <SectionIntro
                eyebrow="On the floor"
                title="In-line work at every stage."
                description="Quality is part of the line — not only a final gate. See the full process on our Quality page."
              />
              <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
                {floorStages.map((stage, index) => (
                  <li key={stage.title} className="border-t border-navy/20 pt-5">
                    <span className="font-serif text-3xl leading-none text-navy">{index + 1}</span>
                    <h3 className="mt-4 font-semibold text-navy">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{stage.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Link
            to="/quality"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase transition-colors hover:text-navy-dark"
          >
            Quality process
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Visits"
            title="Factory visits and line walks."
            description="For programs, audits, or production planning, reach the Bago office or connect with our representative on WeChat."
          />
          <address className="mt-8 text-base leading-relaxed text-neutral-600 not-italic">
            Oo Paing No. (38), Block No. (620/A)
            <br />
            Mae Khone Village (West)
            <br />
            Bago, Myanmar
          </address>
          <p className="mt-6 text-sm text-neutral-600">
            <span className="font-medium text-neutral-900">Mr. Wu Song</span> — WeChat wusong1352 ·
            095558808
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/contact" className={ctaButtonClass}>
              Contact us
              <ArrowRight />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-semibold tracking-wide text-navy uppercase transition-colors hover:border-navy/50"
            >
              View products
              <ArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
