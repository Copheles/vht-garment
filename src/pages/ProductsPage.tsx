import { Link } from 'react-router-dom'
import { ProductChapter } from '../components/ProductChapter'
import { Reveal } from '../components/Reveal'
import { SectionIntro } from '../components/SectionIntro'
import { SiteHeader, ctaButtonClass } from '../components/SiteHeader'
import { productFamilies } from '../data/products'

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

export function ProductsPage() {
  return (
    <>
      <section className="border-b border-neutral-200/80 bg-stone px-4 pt-5 pb-16 sm:px-6 lg:px-10 lg:pb-24 lg:pt-8">
        <SiteHeader activeLabel="Products" />
        <Reveal className="mx-auto mt-12 max-w-6xl lg:mt-16">
          <p className="text-xs font-semibold tracking-[0.28em] text-navy uppercase">Products</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Outerwear and woven programs for global retail
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Three product families share the same floor discipline — clear buyer specifications, stable
            sewing lines, and finishing that matches the brand standard. CMP production on
            customer-supplied materials.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-neutral-200/80 bg-white px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Product families"
              title="What we run every day on the floor."
              description="Photos below are production and material references from our Bago facility until style-specific samples are published."
            />
          </Reveal>

          <ul className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {productFamilies.map((product, index) => (
              <li key={product.slug}>
                <ProductChapter product={product} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-neutral-200/80 bg-navy">
        <div className="relative min-h-56 sm:min-h-64 lg:min-h-72">
          <img
            src="/hero-3.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />
          <Reveal className="relative mx-auto flex max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
            <p className="max-w-2xl text-xl font-semibold leading-snug text-white sm:text-2xl">
              Complex outerwear and woven apparel — one facility, consistent quality bar on every
              shipment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-stone px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Next steps"
            title="Discuss a program or visit the line."
            description="Share tech packs, target volumes, and audit requirements — our team will align capacity and compliance with your retail calendar."
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
