import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className = '', delay = 0, y = 20 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-y': `${y}px`,
  } as CSSProperties

  return (
    <div
      ref={ref}
      data-reveal=""
      data-visible={inView ? '' : undefined}
      className={className}
      style={style}
    >
      {children}
    </div>
  )
}
