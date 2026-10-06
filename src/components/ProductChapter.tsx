import type { ProductFamily } from '../data/products'
import { Reveal } from './Reveal'
import { ProductIcon } from './productIcons'

type ProductChapterProps = {
  product: ProductFamily
  index: number
  showGallery?: boolean
}

export function ProductChapter({ product, index, showGallery = true }: ProductChapterProps) {
  const imageFirst = index % 2 === 0

  return (
    <article className="py-10 md:py-14 lg:py-16">
      <Reveal delay={index * 60}>
        <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10 lg:gap-14">
          <div
            className={`aspect-4/3 overflow-hidden md:col-span-5 lg:col-span-5 ${
              imageFirst ? '' : 'md:order-2'
            }`}
          >
            <img
              src={product.heroImage}
              alt={product.heroAlt}
              className="size-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
          <div
            className={`md:col-span-7 lg:col-span-7 ${imageFirst ? '' : 'md:order-1'}`}
          >
            <span className="inline-flex items-center gap-2 text-navy">
              <ProductIcon index={index} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-navy sm:text-3xl">{product.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600">{product.detail}</p>
            <ul className="mt-6 space-y-2 border-t border-neutral-200 pt-6">
              {product.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-600">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-navy" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {showGallery && product.gallery.length > 0 ? (
        <Reveal delay={120 + index * 60} className="mt-10 md:mt-12">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-gray uppercase">
            Production reference
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
            {product.gallery.map((image) => (
              <li key={image.src + image.alt} className="aspect-4/3 overflow-hidden bg-neutral-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      ) : null}
    </article>
  )
}
