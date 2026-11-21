'use client'

import { useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: React.CSSProperties
  className?: string
}

export default function TiltCard({ children, style, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width   - 0.5   // -0.5 … 0.5
    const y = (e.clientY - top)  / height  - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale3d(1.02,1.02,1.02)`
    // inner glare
    const glare = el.querySelector<HTMLDivElement>('.tilt-glare')
    if (glare) {
      glare.style.opacity = '1'
      glare.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
    }
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    const glare = el.querySelector<HTMLDivElement>('.tilt-glare')
    if (glare) glare.style.opacity = '0'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease, border-color 0.2s ease',
        willChange: 'transform',
        position: 'relative',
      }}
    >
      {/* glare overlay */}
      <div
        className="tilt-glare"
        style={{
          position: 'absolute', inset: 0,
          borderRadius: 'inherit',
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.2s ease',
          zIndex: 2,
        }}
      />
      {children}
    </div>
  )
}
