import { Link } from 'react-router-dom'
import { FactoryMetricsGrid } from '../components/FactoryMetricsGrid'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader, ctaButtonClass } from '../components/SiteHeader'

const focusAreas = [
  {
    title: 'Woven garments',
    detail: 'Stable woven production with clear buyer specifications, from casual pieces to structured apparel.',
  },
  {
    title: 'Complex outerwear',
    detail: 'Jackets, coats, and technical outerwear where construction, lining, and fit must hold up in retail.',
  },
  {
    title: 'Retail programs',
    detail: 'Reliable capacity, consistent quality, and audit-ready compliance for international brand partners.',
  },
] as const

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

export function AboutPage() {
  return (
    <>
      <section className="border-b border-neutral-200/80 bg-stone px-4 pt-5 pb-16 sm:px-6 lg:px-10 lg:pb-24 lg:pt-8">
        <SiteHeader activeLabel="About" />
        <Reveal className="mx-auto mt-12 max-w-6xl lg:mt-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-navy uppercase">About us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Premier woven & outerwear manufacturing in Bago
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Founded <span className="font-medium text-navy">24 November 2017</span> on a{' '}
            <span className="font-medium text-navy">5.16-acre</span> site in Mae Khone Village — serving
            global retail with woven garments and complex outerwear.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col justify-center lg:col-span-6">
            <SectionIntro
              eyebrow="Our story"
              title="Built for brands that need scale and consistency."
              description="VHT Garment Company Limited opened in Bago with a clear focus: woven production and outerwear programs that meet international retail standards. Today the facility runs nineteen sewing lines with expansion underway, supporting partners who need predictable capacity and compliance they can verify on site."
            />
            <p className="mt-6 text-base leading-relaxed text-neutral-600">
              The team works closely with buyers on CMP programs — cut, make, and pack — while maintaining
              active certifications and in-line quality discipline across cutting, sewing, and finishing.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6">
            <figure>
              <img
                src="/hero-2.jpg"
                alt="Industrial weaving equipment inside the VHT factory"
                className="aspect-4/3 w-full object-cover"
              />
              <figcaption className="mt-3 text-sm text-neutral-500">Production floor, Bago</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone py-14 lg:py-16">
        <Reveal>
          <FactoryMetricsGrid title="At a glance" layout="full" />
        </Reveal>
      </section>

      <section className="relative border-t border-neutral-200/80 bg-navy">
        <div className="relative min-h-56 sm:min-h-64 lg:min-h-72">
          <img
            src="/hero.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-navy/55" aria-hidden="true" />
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
              eyebrow="What we focus on"
              title="Three pillars of our production floor."
              description="Product detail lives on the Products page — here is how we organize capability for retail partners."
            />
          </Reveal>
          <ol className="mt-12 grid gap-10 border-t border-neutral-200 pt-12 sm:grid-cols-3 sm:gap-8">
            {focusAreas.map((area, index) => (
              <li key={area.title} className="border-t border-navy/20 pt-5 sm:border-t-0 sm:pt-0">
                <Reveal delay={index * 80}>
                  <span className="font-serif text-3xl leading-none text-navy">{index + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-navy">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{area.detail}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Location"
            title="Mae Khone Village, Bago"
            description="Visit for audits, line walks, or program discussions. Reach the office by email or phone — or connect with our representative on WeChat."
          />
          <address className="mt-8 text-base leading-relaxed text-neutral-600 not-italic">
            Oo Paing No. (38), Block No. (620/A)
            <br />
            Mae Khone Village (West)
            <br />
            Bago, Myanmar
          </address>
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
