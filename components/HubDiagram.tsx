'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from '@/lib/gsap'

const spokes = [
  {
    id:    'fullstack',
    label: 'Full-Stack',
    angle: -90,
    desc:  'React · Next.js · Node · Microservices',
  },
  {
    id:    'ai',
    label: 'AI / ML',
    angle:  30,
    desc:  'LangChain · CrewAI · LangGraph · RAG',
  },
  {
    id:    'systems',
    label: 'Systems',
    angle: 150,
    desc:  'WebSockets · WebRTC · AWS · Docker',
  },
]

function toXY(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r }
}

export default function HubDiagram() {
  const router = useRouter()
  const svgRef = useRef<SVGSVGElement>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current) return
    const svg = svgRef.current

    const rings  = svg.querySelectorAll('.hub-ring')
    const lines  = svg.querySelectorAll('.hub-line')
    const nodes  = svg.querySelectorAll('.hub-node-g')
    const center = svg.querySelector('.hub-center')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(rings,
        { scale: 0, transformOrigin: '50% 50%' },
        { scale: 1, duration: 0.65, ease: 'back.out(1.4)', stagger: 0.1 }
      )
      tl.fromTo(center,
        { opacity: 0, scale: 0.5, transformOrigin: '50% 50%' },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' },
        '-=0.3'
      )
      tl.fromTo(lines,
        { strokeDasharray: '300', strokeDashoffset: '300' },
        { strokeDashoffset: '0', duration: 0.55, ease: 'power2.out', stagger: 0.1 },
        '-=0.25'
      )
      tl.fromTo(nodes,
        { opacity: 0, scale: 0, transformOrigin: 'center center' },
        { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(2)', stagger: 0.1 },
        '-=0.3'
      )
    }, svg)

    return () => ctx.revert()
  }, [])

  return (
    <svg
      ref={svgRef}
      width="460"
      height="460"
      viewBox="-230 -230 460 460"
      style={{ maxWidth: '100%', overflow: 'visible' }}
      aria-label="Skill categories hub"
    >
      {/* rings */}
      {[70, 140, 210].map((r) => (
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
        const inner  = toXY(spoke.angle, 50)
        const outer  = toXY(spoke.angle, 195)
        const node   = toXY(spoke.angle, 140)
        const label  = toXY(spoke.angle, 212)
        const isHov  = hovered === spoke.id

        return (
          <g key={spoke.id}>
            {/* spoke line */}
            <line
              className="hub-line"
              x1={inner.x} y1={inner.y}
              x2={outer.x} y2={outer.y}
              stroke={isHov ? 'var(--accent)' : 'var(--line)'}
              strokeWidth={isHov ? 1.5 : 1}
              style={{ transition: 'stroke 0.2s, stroke-width 0.2s' }}
            />

            {/* node group */}
            <g
              className="hub-node-g"
              onClick={() => router.push('/work')}
              onMouseEnter={() => setHovered(spoke.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer' }}
              role="button"
              aria-label={`View ${spoke.label} projects`}
            >
              {/* node circle */}
              <circle
                cx={node.x} cy={node.y} r={22}
                fill={isHov ? 'var(--accent)' : 'var(--accent-light)'}
                stroke="var(--accent)"
                strokeWidth={1.5}
                style={{ transition: 'fill 0.2s' }}
              />

              {/* label pill */}
              <rect
                x={label.x - 42} y={label.y - 13}
                width={84} height={26} rx={13}
                fill={isHov ? 'var(--accent)' : 'var(--bg)'}
                stroke="var(--accent)"
                strokeWidth={1}
                style={{ transition: 'fill 0.2s' }}
              />
              <text
                x={label.x} y={label.y + 5}
                textAnchor="middle"
                fill={isHov ? '#fff' : 'var(--accent)'}
                fontFamily="var(--font-m)"
                fontSize="10"
                fontWeight="500"
                style={{ transition: 'fill 0.2s' }}
              >
                {spoke.label}
              </text>

              {/* hover tooltip */}
              {isHov && (
                <text
                  x={node.x} y={node.y + 36}
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontFamily="var(--font-m)"
                  fontSize="8"
                >
                  {spoke.desc}
                </text>
              )}
            </g>
          </g>
        )
      })}

      {/* center hub */}
      <g className="hub-center">
        <circle cx={0} cy={0} r={50}
          fill="var(--surface)"
          stroke="var(--accent)"
          strokeWidth={1.5}
        />
        <circle cx={0} cy={0} r={42}
          fill="none"
          stroke="var(--line)"
          strokeWidth={1}
        />
        <text x={0} y={-5} textAnchor="middle" fill="var(--solid)"
          fontFamily="var(--font-d)" fontSize="13" fontWeight="600">
          Fabio
        </text>
        <text x={0} y={11} textAnchor="middle" fill="var(--accent)"
          fontFamily="var(--font-m)" fontSize="8.5" letterSpacing="0.08em">
          MUGHILAN
        </text>
      </g>
    </svg>
  )
}
