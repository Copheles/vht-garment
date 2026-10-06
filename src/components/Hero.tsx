import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiteHeader } from './SiteHeader'

const SLIDE_MS = 7000

const slides = [
  {
    src: '/hero.jpg',
    alt: 'Colorful fabric rolls on a garment factory floor',
  },
  {
    src: '/hero-2.jpg',
    alt: 'Industrial weaving loom with fabric on a roll',
  },
  {
    src: '/hero-3.jpg',
    alt: 'Stacked rolls of colorful patterned fabric',
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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

const ctaButtonClass =
  'inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let timer = 0
    const start = () => {
      window.clearInterval(timer)
      if (document.hidden) return
      timer = window.setInterval(() => {
        setIndex((current) => (current + 1) % slides.length)
      }, SLIDE_MS)
    }

    start()
    document.addEventListener('visibilitychange', start)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', start)
    }
  }, [index])

  return (
    <section
      id="top"
      className="relative min-h-svh w-full overflow-hidden bg-navy"
      aria-roledescription="carousel"
      aria-label="VHT Garment factory"
    >
      <div className="absolute inset-0">
        {slides.map((slide, slideIndex) => {
          const active = slideIndex === index
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1400 ease-in-out ${
                active ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={!active}
            >
              <img
                src={slide.src}
                alt={active ? slide.alt : ''}
                className={`size-full object-cover ${
                  active ? 'motion-safe:animate-kenburns' : 'scale-[1.08]'
                }`}
              />
            </div>
          )
        })}
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-stone to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-svh flex-col px-4 pt-5 pb-28 sm:px-6 lg:px-10 lg:pt-8">
        <SiteHeader activeLabel="Home" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center pt-10 lg:pt-16">
          <div className="max-w-3xl text-left motion-safe:animate-fade-up">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
              Established in 2017 · Bago, Myanmar
            </p>
            <h1 className="m-0 text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              World-Class Woven Manufacturing
              <span className="mt-1 block">& Outerwear Excellence</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Precision outerwear and woven garments for global retail brands, produced at our facility
              in Bago, Myanmar.
            </p>
            <Link to="/#metrics" className={`${ctaButtonClass} mt-8`}>
              Explore More
              <ArrowRight />
            </Link>
          </div>
        </div>

        <aside
          className="absolute top-1/2 right-0 hidden -translate-y-1/2 flex-col items-center gap-4 pr-4 lg:flex lg:pr-8"
          aria-label="Social media"
        >
          <span className="mb-2 h-16 w-px bg-white/40" aria-hidden="true" />
          <a
            href="#"
            className="flex size-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            className="flex size-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            aria-label="X"
          >
            <XIcon />
          </a>
          <a
            href="#"
            className="flex size-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <span className="mt-2 text-xs font-semibold tracking-[0.35em] text-white uppercase [writing-mode:vertical-rl]">
            Follow
          </span>
        </aside>

        <div
          className="absolute right-6 bottom-24 z-20 flex items-center gap-2 lg:right-10"
          role="tablist"
          aria-label="Factory photos"
        >
          {slides.map((slide, slideIndex) => {
            const active = slideIndex === index
            return (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Show photo ${slideIndex + 1} of ${slides.length}: ${slide.alt}`}
                onClick={() => setIndex(slideIndex)}
                className={`h-1.5 overflow-hidden rounded-full bg-white/35 transition-[width,background-color] duration-500 ${
                  active ? 'w-11' : 'w-2.5 hover:bg-white/60'
                }`}
              >
                {active ? (
                  <span
                    key={index}
                    className="block h-full w-full origin-left bg-white motion-safe:animate-slide-progress"
                  />
                ) : null}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
