'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from '@/lib/gsap'

const spokes = [
  { id: 'web3',      label: 'Web3',       angle: -90 },
  { id: 'ai',        label: 'AI / ML',    angle: -18 },
  { id: 'fullstack', label: 'Full-Stack', angle:  54 },
  { id: 'mobile',    label: 'Mobile',     angle: 126 },
  { id: 'systems',   label: 'Systems',    angle: 198 },
]

function toXY(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r }
}

export default function HubDiagram() {
  const router = useRouter()
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return
    const svg = svgRef.current

    const rings   = svg.querySelectorAll('.hub-ring')
    const lines   = svg.querySelectorAll('.hub-line')
    const nodes   = svg.querySelectorAll('.hub-node-g')
    const center  = svg.querySelector('.hub-center')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 })

      // 1. rings scale in from center
      tl.fromTo(rings,
        { scale: 0, transformOrigin: '50% 50%' },
        { scale: 1, duration: 0.6, ease: 'back.out(1.4)', stagger: 0.08 }
      )

      // 2. center fades in
      tl.fromTo(center,
        { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' },
        { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(2)' },
        '-=0.3'
      )

      // 3. spoke lines draw out
      tl.fromTo(lines,
        { strokeDasharray: '240', strokeDashoffset: '240' },
        { strokeDashoffset: '0', duration: 0.5, ease: 'power2.out', stagger: 0.07 },
        '-=0.2'
      )

      // 4. nodes + labels pop in
      tl.fromTo(nodes,
        { opacity: 0, scale: 0, transformOrigin: 'center center' },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)', stagger: 0.07 },
        '-=0.3'
      )
    }, svg)

    return () => ctx.revert()
  }, [])

  return (
    <svg
      ref={svgRef}
      width="540"
      height="540"
      viewBox="-270 -270 540 540"
      style={{ maxWidth: '100%', overflow: 'visible' }}
      aria-label="Skill categories hub diagram"
    >
      {/* rings */}
      {[85, 165, 240].map((r) => (
        <circle
          key={r}
          className="hub-ring"
          cx={0} cy={0} r={r}
          fill="none"
          stroke="var(--line)"
          strokeWidth={1}
        />
      ))}

      {/* spokes & nodes */}
      {spokes.map((spoke) => {
        const inner = toXY(spoke.angle, 52)
        const outer = toXY(spoke.angle, 228)
        const node  = toXY(spoke.angle, 165)
        const label = toXY(spoke.angle, 255)

        return (
          <g key={spoke.id}>
            {/* spoke line */}
            <line
              className="hub-line"
              x1={inner.x} y1={inner.y}
              x2={outer.x} y2={outer.y}
              stroke="var(--line)"
              strokeWidth={1}
            />

            {/* node group — clickable */}
            <g
              className="hub-node-g"
              onClick={() => router.push(`/work?cat=${spoke.id}`)}
              style={{ cursor: 'pointer' }}
              role="button"
              aria-label={`Filter by ${spoke.label}`}
            >
              <circle
                cx={node.x} cy={node.y} r={18}
                fill="var(--accent-light)"
                stroke="var(--accent)"
                strokeWidth={1.5}
              />
              <rect
                x={label.x - 38} y={label.y - 11}
                width={76} height={22} rx={11}
                fill="var(--bg)"
                stroke="var(--line)"
                strokeWidth={1}
              />
              <text
                x={label.x} y={label.y + 4}
                textAnchor="middle"
                fill="var(--accent)"
                fontFamily="var(--font-m)"
                fontSize="10"
                fontWeight="500"
              >
                {spoke.label}
              </text>
            </g>
          </g>
        )
      })}

      {/* center */}
      <g className="hub-center">
        <circle cx={0} cy={0} r={52} fill="var(--bg2)" stroke="var(--accent)" strokeWidth={1.5} />
        <text x={0} y={-6} textAnchor="middle" fill="var(--solid)" fontFamily="var(--font-d)" fontSize="13" fontWeight="600">
          Fabio
        </text>
        <text x={0} y={10} textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-m)" fontSize="9">
          Mughilan
        </text>
      </g>
    </svg>
  )
}
