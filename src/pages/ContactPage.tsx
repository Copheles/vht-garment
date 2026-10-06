import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader } from '../components/SiteHeader'
import {
  googleMapsEmbedUrl,
  googleMapsOpenUrl,
  office,
  representatives,
} from '../data/contact'

const relatedLinks = [
  {
    to: '/factory',
    title: 'Factory',
    detail: 'Lines, CMP, and audits in Bago',
  },
  {
    to: '/products',
    title: 'Products',
    detail: 'Woven jackets, coats, and apparel programs',
  },
  {
    to: '/quality',
    title: 'Quality',
    detail: 'In-line checks at every stage',
  },
] as const

export function ContactPage() {
  const embedSrc = googleMapsEmbedUrl()
  const mapsHref = googleMapsOpenUrl()

  return (
    <>
      <section className="border-b border-neutral-200/80 bg-stone px-4 pt-5 pb-16 sm:px-6 lg:px-10 lg:pb-24 lg:pt-8">
        <SiteHeader activeLabel="Contact" />
        <Reveal className="mx-auto mt-12 max-w-6xl lg:mt-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-navy uppercase">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Visit or reach our Bago facility
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            For programs, audits, or production planning, contact the office or speak directly with
            our representative below. Factory visits and line walks are welcome by appointment.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 border-t border-neutral-200 pt-12 lg:grid-cols-12 lg:gap-16">
            <Reveal delay={80} className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-navy uppercase">Office</p>
              <h2 className="mt-3 text-2xl font-semibold text-neutral-900">{office.placeName}</h2>
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
                          <a
                            href={`tel:${person.phone}`}
                            className="font-medium text-navy hover:underline"
                          >
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
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col gap-8 border-t border-neutral-200 pt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <SectionIntro
                eyebrow="Location"
                title="Find us in Bago"
                description="The map shows the Mae Khone Village area. For the exact gate or appointment, contact the office before you travel."
              />
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold tracking-wide text-navy uppercase transition-colors hover:text-navy-dark lg:pb-1"
              >
                Open in Google Maps
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={80} className="mt-10 lg:mt-12">
            <div className="overflow-hidden border border-neutral-200/90 bg-white">
              <iframe
                title="VHT Garment factory location on Google Maps"
                src={embedSrc}
                className="block h-[min(50vh,26rem)] w-full border-0 sm:h-[30rem] lg:h-[32rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Explore"
              title="Learn more about our facility."
              description="Programs, capacity, and quality run from the same Bago site."
            />
          </Reveal>
          <ul className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {relatedLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex flex-col gap-2 py-8 transition-colors hover:bg-stone/50 sm:flex-row sm:items-center sm:justify-between sm:px-2 sm:py-10"
                >
                  <span className="text-lg font-semibold text-navy">{item.title}</span>
                  <span className="text-sm text-neutral-600">{item.detail}</span>
                  <span className="text-sm font-semibold text-navy uppercase" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
