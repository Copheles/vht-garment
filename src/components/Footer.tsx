import { Link } from 'react-router-dom'
import { office, representatives } from '../data/contact'
import { contentMaxClass, sectionPadClass } from '../lib/layout'
import { contactNavItem, primaryNav } from '../lib/nav'
import { Reveal } from './Reveal'

const productLinks = [
  { label: 'Woven jackets', to: '/products' },
  { label: 'Trench coats', to: '/products' },
  { label: 'Woven apparel', to: '/products' },
] as const

const certifications = ['CMP', 'BSCI', 'GRS', 'LCW'] as const

const highlights = [
  { value: '200K', label: 'Pieces / month' },
  { value: '19', label: 'Sewing lines' },
  { value: '1,200', label: 'Employees' },
] as const

const footerNavLabels: Record<string, string> = {
  Home: 'Home',
  About: 'About us',
  Products: 'Products',
  Factory: 'Factory',
  Quality: 'Quality',
}

function FooterHeading({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">{children}</p>
  )
}

function FooterLink({ to, children }: { to: string; children: string }) {
  return (
    <Link
      to={to}
      className="text-sm text-white/80 transition-[color,transform] duration-300 hover:translate-x-0.5 hover:text-white"
    >
      {children}
    </Link>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-white/50" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-white/50" fill="none" aria-hidden="true">
      <path
        d="M4 7h16v10H4V7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-white/50" fill="none" aria-hidden="true">
      <path
        d="M8.5 5.5h2l1.2 3-1.8 1.2a11 11 0 0 0 4.6 4.6L15.5 12l3 1.2v2a1.5 1.5 0 0 1-1.5 1.5C9.8 16.7 7.3 14.2 5.5 9A1.5 1.5 0 0 1 7 7.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FooterBrand() {
  return (
    <div className="lg:pr-4">
      <Link
        to="/"
        aria-label="VHT Garment Company Limited — home"
        className="group inline-flex max-w-md items-center gap-4"
      >
        <span className="relative shrink-0">
          <img
            src="/favicon.svg"
            alt=""
            className="size-13 rounded-2xl shadow-[0_8px_24px_rgb(0_0_0_0.25)] ring-1 ring-white/20 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <span
            className="pointer-events-none absolute -inset-1 rounded-[18px] ring-1 ring-white/10"
            aria-hidden="true"
          />
        </span>
        <span className="min-w-0 text-left">
          <span className="block font-serif text-[1.65rem] leading-none tracking-[0.06em] text-white">
            VHT
          </span>
          <span className="mt-1.5 block text-[11px] font-semibold tracking-[0.28em] text-white/70 uppercase">
            Garment Company Limited
          </span>
          <span className="mt-2 inline-flex items-center gap-2 text-xs text-white/45">
            <span className="size-1 rounded-full bg-white/50" aria-hidden="true" />
            Established 2017 · Bago, Myanmar
          </span>
        </span>
      </Link>

      <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/72">
        Woven and outerwear manufacturing for global retail — CMP production, active audits, and
        capacity you can plan against.
      </p>

      <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
        {highlights.map((item) => (
          <div key={item.label}>
            <dt className="text-base font-semibold tabular-nums text-white sm:text-lg">{item.value}</dt>
            <dd className="mt-1 text-[10px] leading-tight tracking-[0.14em] text-white/50 uppercase">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  const rep = representatives[0]

  return (
    <footer className="bg-navy text-white">
      <div className={sectionPadClass}>
        <div className={`${contentMaxClass} py-14 lg:py-16`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <FooterBrand />
          </Reveal>

          <Reveal delay={80} className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            <div>
              <FooterHeading>Navigate</FooterHeading>
              <ul className="mt-4 space-y-2.5">
                {primaryNav.map((link) => (
                  <li key={link.label}>
                    <FooterLink to={link.to}>{footerNavLabels[link.label] ?? link.label}</FooterLink>
                  </li>
                ))}
                <li>
                  <FooterLink to={contactNavItem.to}>Contact</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <FooterHeading>Products</FooterHeading>
              <ul className="mt-4 space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                Compliance
              </p>
              <p className="mt-3 text-sm text-white/75">{certifications.join(' · ')}</p>
            </div>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPinIcon />
                <address className="leading-relaxed not-italic">
                  {office.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href={`mailto:${office.email}`} className="hover:text-white">
                  {office.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href={`tel:${office.phone}`} className="hover:text-white">
                  {office.phone}
                </a>
              </li>
            </ul>
            {rep ? (
              <>
                <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                  Representatives
                </p>
                <ul className="mt-4 space-y-4 text-sm">
                  <li>
                    <p className="font-medium text-white">{rep.name}</p>
                    <p className="mt-1 text-white/65">
                      WeChat {rep.wechat} · {rep.phone}
                    </p>
                  </li>
                </ul>
              </>
            ) : null}
          </Reveal>
          </div>
        </div>
      </div>

      <Reveal delay={200} y={12} className="border-t border-white/10">
        <div className={sectionPadClass}>
          <div
            className={`${contentMaxClass} flex flex-col items-start justify-between gap-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center`}
          >
          <p>© {year} VHT Garment Company Limited. All rights reserved.</p>
          <p className="tracking-wide text-white/45">
            Precision outerwear & woven garment manufacturing · Bago, Myanmar
          </p>
          </div>
        </div>
      </Reveal>
    </footer>
  )
}
