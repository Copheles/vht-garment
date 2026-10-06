import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contentMaxClass, sectionPadClass } from '../lib/layout'
import {
  contactNavItem,
  primaryNav,
  type MainNavLabel,
  type PrimaryNavLabel,
} from '../lib/nav'

export const ctaButtonClass =
  'inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-navy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy'

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

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Logo({ className }: { className: string }) {
  return (
    <span className={`relative block overflow-hidden ${className}`}>
      <img
        src="/logo.jpg"
        alt=""
        className="absolute top-1/2 left-1/2 h-[280%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center"
      />
    </span>
  )
}

type SiteHeaderProps = {
  activeLabel?: MainNavLabel
}

function isNavActive(pathname: string, to: string, label: PrimaryNavLabel, activeLabel?: MainNavLabel) {
  if (activeLabel) return label === activeLabel
  if (to === '/about') return pathname === '/about'
  if (to === '/products') return pathname === '/products'
  if (to === '/factory') return pathname === '/factory'
  if (to === '/quality') return pathname === '/quality'
  if (to === '/') return pathname === '/'
  return false
}

/** Align menu sheet below mobile pill + page top padding */
const MOBILE_MENU_TOP = 'top-[4.25rem]'
const MOBILE_MENU_GAP_CLASS = 'pt-6'

const mobileMenuPanelClass =
  'overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-pill'
const mobileMenuInsetClass = 'px-4'

export function SiteHeader({ activeLabel }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  const navLinkClass =
    'text-[11px] font-semibold tracking-wide text-neutral-800 uppercase transition-colors duration-300 hover:text-navy lg:text-xs xl:text-sm'

  const contactTo = contactNavItem.to

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMobileOpen(false))
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header className={`relative z-[120] ${contentMaxClass}`}>
        <div className="hidden items-center justify-between gap-4 rounded-full bg-white px-4 py-2.5 shadow-pill md:flex lg:px-6 lg:py-3">
          <Link to="/" className="flex shrink-0 items-center" aria-label="VHT Garment home">
            <Logo className="h-11 w-36 lg:h-12 lg:w-40" />
          </Link>

          <nav className="flex flex-1 items-center justify-center gap-4 xl:gap-7" aria-label="Main">
            {primaryNav.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                aria-current={isNavActive(pathname, to, label, activeLabel) ? 'page' : undefined}
                className={navLinkClass}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link to={contactTo} className={`${ctaButtonClass} shrink-0`}>
            Contact Us
            <ArrowRight />
          </Link>
        </div>

        <div
          className="flex items-center justify-between overflow-hidden rounded-full bg-white px-4 py-2.5 shadow-pill md:hidden"
        >
          <Link to="/" className="flex shrink-0 items-center" aria-label="VHT Garment home">
            <Logo className="h-10 w-32" />
          </Link>
          <button
            type="button"
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-neutral-800 transition-colors hover:bg-neutral-100"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[110] md:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <button
            type="button"
            className="absolute inset-0 bg-navy/50 motion-safe:animate-fade-in"
            aria-label="Close menu"
            onClick={closeMobile}
          />

          <nav
            id="mobile-nav"
            className={`absolute inset-x-0 ${MOBILE_MENU_TOP} z-10 max-h-[calc(100dvh-4.25rem)] overflow-y-auto motion-safe:animate-fade-up`}
            aria-label="Mobile"
          >
            <div
              className={`${sectionPadClass} pb-[max(1rem,env(safe-area-inset-bottom))] ${MOBILE_MENU_GAP_CLASS}`}
            >
              <div className={contentMaxClass}>
                <div className={mobileMenuPanelClass}>
                  <ul className="m-0 list-none p-0">
                    {primaryNav.map(({ label, to }, index) => {
                      const active = isNavActive(pathname, to, label, activeLabel)
                      return (
                        <li
                          key={label}
                          className={index > 0 ? 'border-t border-neutral-200' : undefined}
                        >
                          <Link
                            to={to}
                            aria-current={active ? 'page' : undefined}
                            className={`flex items-center border-l-[3px] py-3.5 text-sm font-semibold tracking-[0.14em] uppercase transition-colors ${mobileMenuInsetClass} ${
                              active
                                ? 'border-l-navy bg-stone text-navy'
                                : 'border-l-transparent text-neutral-800 hover:border-l-navy/30 hover:text-navy'
                            }`}
                            onClick={closeMobile}
                          >
                            {label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  <div className={`border-t border-neutral-200 ${mobileMenuInsetClass} py-4`}>
                    <Link
                      to={contactTo}
                      className={`${ctaButtonClass} w-full justify-center py-3.5`}
                      onClick={closeMobile}
                    >
                      Contact Us
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  )
}
