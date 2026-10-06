import { useEffect, useState, type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

const iconClass = 'size-5 text-navy'

function PiecesIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
      <path
        d="M8.1 6.6 12 4.1l3.9 2.5 3.1-1.5v4.3L16.7 11v8.1H7.3V11L5 9.4V5.1l3.1 1.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 7.4a2.2 2.2 0 0 0 4.4 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LinesIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
      <path
        d="M14.2 3.8 19.4 9l-8.1 8.1a2.8 2.8 0 0 1-4-4L14.2 3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m12.8 5.2 5.2 5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4.5 19.5h6.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.2" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.4 19.2c.5-2.7 2.3-4.1 4.6-4.1s4.1 1.4 4.6 4.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.2 15.4c.7-.6 1.6-1 2.8-1 1.7 0 3 .9 3.6 3.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function FacilityIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
      <path
        d="M3.5 20V9.8L9.5 6l6 3.8V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 20V8.8l5 2.6V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const factoryMetrics: {
  value: number
  decimals: number
  label: string
  note?: string
  icon: () => ReactNode
}[] = [
  { value: 200000, decimals: 0, label: 'Pieces each month', icon: PiecesIcon },
  { value: 19, decimals: 0, label: 'Active sewing lines', note: '+6 lines soon', icon: LinesIcon },
  { value: 1200, decimals: 0, label: 'Skilled employees', icon: PeopleIcon },
  { value: 5.16, decimals: 2, label: 'Acre facility in Bago', icon: FacilityIcon },
]

function CountUp({
  value,
  decimals,
  active,
}: {
  value: number
  decimals: number
  active: boolean
}) {
  const [current, setCurrent] = useState(0)

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (!active || reduceMotion) return

    let frame = 0
    const start = performance.now()
    const duration = 1400

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - progress) ** 3
      setCurrent(value * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, reduceMotion, value])

  const amount = !active ? 0 : reduceMotion ? value : current
  const formatted =
    decimals > 0 ? amount.toFixed(decimals) : Math.round(amount).toLocaleString('en-US')

  return <span className="tabular-nums">{formatted}</span>
}

type FactoryMetricsGridProps = {
  title?: string
  showTitle?: boolean
  className?: string
  /** Edge-to-edge metric strip (title stays in horizontal padding). */
  layout?: 'contained' | 'full'
}

function MetricCells({
  inView,
  spacious,
}: {
  inView: boolean
  spacious: boolean
}) {
  return (
    <>
      {factoryMetrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <div
            key={metric.label}
            className={`text-center transition-opacity duration-700 ${
              spacious ? 'px-6 py-12 sm:px-8 sm:py-14 lg:py-16' : 'px-4 py-8 sm:px-6 sm:py-10'
            } ${
              index % 2 === 0 ? 'max-lg:border-r max-lg:border-neutral-200/90' : ''
            } ${index < 2 ? 'max-lg:border-b max-lg:border-neutral-200/90' : ''} ${
              index > 0 ? 'lg:border-l lg:border-neutral-200/90' : ''
            } ${inView ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${100 + index * 80}ms` }}
          >
            <span className={`mx-auto inline-flex ${spacious ? 'mb-5' : 'mb-4'}`}>
              <Icon />
            </span>
            <dt
              className={`font-semibold tracking-tight text-navy ${
                spacious ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
              }`}
            >
              <CountUp value={metric.value} decimals={metric.decimals} active={inView} />
            </dt>
            <dd className={`mt-2 text-neutral-600 ${spacious ? 'text-sm sm:text-base' : 'text-sm'}`}>
              {metric.label}
            </dd>
            {metric.note ? (
              <dd className="mt-2 text-[11px] font-medium tracking-wide text-brand-gray uppercase">
                {metric.note}
              </dd>
            ) : null}
          </div>
        )
      })}
    </>
  )
}

export function FactoryMetricsGrid({
  title = 'Key factory metrics',
  showTitle = true,
  className = '',
  layout = 'contained',
}: FactoryMetricsGridProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 })
  const full = layout === 'full'

  if (full) {
    return (
      <div ref={ref} className={`w-full ${className}`}>
        {showTitle ? (
          <p className="px-4 text-center text-xs font-semibold tracking-[0.28em] text-navy uppercase sm:px-6 lg:px-10">
            {title}
          </p>
        ) : null}
        <dl
          data-reveal=""
          data-visible={inView ? '' : undefined}
          className={`grid w-full grid-cols-2 border-y border-neutral-200/90 bg-white lg:grid-cols-4 ${
            showTitle ? 'mt-8 lg:mt-10' : ''
          }`}
        >
          <MetricCells inView={inView} spacious />
        </dl>
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      {showTitle ? (
        <p className="text-center text-xs font-semibold tracking-[0.28em] text-navy uppercase">{title}</p>
      ) : null}
      <dl
        data-reveal=""
        data-visible={inView ? '' : undefined}
        className={`grid grid-cols-2 border-y border-neutral-200 ${showTitle ? 'mt-10' : ''} lg:grid-cols-4`}
      >
        <MetricCells inView={inView} spacious={false} />
      </dl>
    </div>
  )
}
