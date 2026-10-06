export function JacketIcon({ className = 'size-5 text-navy' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 5.5 12 3l4 2.5V11l-2 1.5V20H10v-7.5L8 11V5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CoatIcon({ className = 'size-5 text-navy' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M7.5 4.5 12 3l4.5 1.5V20H7.5V4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 3v17" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function ShirtIcon({ className = 'size-5 text-navy' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M9 4.5 12 6l3-1.5 3 2.5-2 2v11H8V8.5L6 6.5l3-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const iconsByIndex = [JacketIcon, CoatIcon, ShirtIcon] as const

export function ProductIcon({ index }: { index: number }) {
  const Icon = iconsByIndex[index] ?? JacketIcon
  return <Icon />
}
