import { Link } from 'react-router-dom'
import { factoryAudits } from '../data/factory'
import { productFamilies } from '../data/products'
import { office, representatives } from '../data/contact'
import { qualityStageTeasers } from '../data/quality'
import { ProductIcon } from './productIcons'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

const aboutFacts = [
  { label: 'Founded', value: '24 Nov 2017' },
  { label: 'Specialization', value: 'Woven & outerwear' },
  { label: 'Facility', value: '5.16 acres · Bago' },
] as const

export function HomeBrief() {
  return (
    <>
      <section
        id="about"
        className="scroll-mt-24 border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative min-h-80 overflow-hidden lg:col-span-5 lg:min-h-[480px]">
            <img
              src="/hero-2.jpg"
              alt="Industrial weaving equipment inside the factory"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">Since</p>
              <p className="mt-1 font-serif text-4xl leading-none">2017</p>
              <p className="mt-1 text-sm text-white/85">Bago, Myanmar</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col justify-center lg:col-span-7">
            <SectionIntro
              eyebrow="About us"
              title="Premier woven manufacturing for global retail."
              description="VHT Garment Company Limited opened on 24 November 2017 in Mae Khone Village. The team focuses on woven garments and complex outerwear — reliable capacity, consistent quality, and compliance that stands up when buyers visit."
            />
            <dl className="mt-10 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3">
              {aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] font-semibold tracking-[0.16em] text-brand-gray uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-medium text-navy">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase transition-colors hover:text-navy-dark"
            >
              Read our story
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section
        id="products"
        className="scroll-mt-24 border-t border-neutral-200/80 bg-stone px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Products"
              title="Outerwear and woven work we run every day."
              description="Three product families share the same floor discipline — clear specs, stable lines, and finishing that matches the brand standard."
            />
          </Reveal>

          <ul className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
            {productFamilies.map((product, index) => (
              <li key={product.slug}>
                <Reveal delay={index * 80}>
                  <article className="grid gap-8 py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-12">
                    <div className="aspect-4/3 overflow-hidden md:col-span-5 lg:col-span-4">
                      <img
                        src={product.heroImage}
                        alt={product.heroAlt}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:col-span-7 lg:col-span-8">
                      <span className="inline-flex items-center gap-2 text-navy">
                        <ProductIcon index={index} />
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold text-navy">{product.title}</h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600">
                        {product.summary}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <Link
            to="/products"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase transition-colors hover:text-navy-dark"
          >
            View all products
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section id="factory" className="scroll-mt-24 bg-navy text-white">
        <Reveal className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="relative min-h-72 lg:min-h-[420px]">
            <img
              src="/hero.jpg"
              alt="Fabric rolls on the production floor"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/40 lg:bg-linear-to-r lg:from-transparent lg:to-navy" />
          </div>
          <div className="px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <SectionIntro
              light
              eyebrow="Factory"
              title="CMP production with active audits."
              description="Nineteen sewing lines today, with expansion underway. Cut, make, and pack runs alongside the certifications international programs ask for."
            />
            <ul className="mt-10 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
              {factoryAudits.map((audit) => (
                <li key={audit.code} className="border-t border-white/10 pt-4 sm:border-t-0 sm:pt-0">
                  <p className="text-lg font-semibold tracking-wide">{audit.code}</p>
                  <p className="mt-1 text-sm font-medium text-white/90">{audit.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{audit.detail}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/factory"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:text-white/85"
            >
              Explore our factory
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section
        id="quality"
        className="scroll-mt-24 border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <Reveal className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionIntro
              eyebrow="Quality"
              title="In-line checks at every stage."
              description="Quality is part of the line — not a final gate at the end of the day."
            />
            <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
              {qualityStageTeasers.map((check, index) => (
                <li key={check.title} className="border-t border-navy/20 pt-5">
                  <span className="font-serif text-3xl leading-none text-navy">{index + 1}</span>
                  <h3 className="mt-4 font-semibold text-navy">{check.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{check.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <Link
            to="/quality"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase transition-colors hover:text-navy-dark"
          >
            Full quality process
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-neutral-200/80 bg-stone px-4 py-20 sm:px-6 lg:px-10 lg:pb-24 lg:pt-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Contact"
              title="Visit or reach the Bago facility."
              description="For programs, audits, or production inquiries, contact the office or speak directly with our representatives below."
            />
          </Reveal>

          <div className="mt-12 grid gap-12 border-t border-neutral-200 pt-12 lg:grid-cols-12 lg:gap-16">
            <Reveal delay={80} className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-navy uppercase">Office</p>
              <h3 className="mt-3 text-2xl font-semibold text-neutral-900">{office.placeName}</h3>
              <address className="mt-4 text-sm leading-relaxed text-neutral-600 not-italic sm:text-base">
                {office.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={`mailto:${office.email}`}
                  className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-navy-dark"
                >
                  {office.email}
                </a>
                <a
                  href={`tel:${office.phone}`}
                  className="inline-flex items-center justify-center rounded-full border border-navy/25 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy/50"
                >
                  {office.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-gray uppercase">
                Representatives
              </p>
              <ul className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
                {representatives.map((person) => (
                  <li key={person.name} className="py-6 first:pt-6">
                    <h3 className="text-lg font-semibold text-navy">{person.name}</h3>
                    <dl className="mt-3 space-y-1 text-sm text-neutral-600">
                      <div className="flex justify-between gap-4">
                        <dt>WeChat</dt>
                        <dd className="font-medium text-neutral-800">{person.wechat}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Phone</dt>
                        <dd>
                          <a href={`tel:${person.phone}`} className="font-medium text-navy hover:underline">
                            {person.phone}
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase transition-colors hover:text-navy-dark"
          >
            All contact details & map
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
