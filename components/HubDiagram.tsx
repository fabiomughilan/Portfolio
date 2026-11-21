'use client'

import { useRouter } from 'next/navigation'

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

  return (
    <svg
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
          cx={0}
          cy={0}
          r={r}
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
          <g
            key={spoke.id}
            onClick={() => router.push(`/work?cat=${spoke.id}`)}
            style={{ cursor: 'pointer' }}
            role="button"
            aria-label={`Filter by ${spoke.label}`}
          >
            {/* spoke line */}
            <line
              x1={inner.x} y1={inner.y}
              x2={outer.x} y2={outer.y}
              stroke="var(--line)"
              strokeWidth={1}
            />

            {/* node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={18}
              fill="var(--accent-light)"
              stroke="var(--accent)"
              strokeWidth={1.5}
            />

            {/* pill label */}
            <rect
              x={label.x - 38}
              y={label.y - 11}
              width={76}
              height={22}
              rx={11}
              fill="var(--bg)"
              stroke="var(--line)"
              strokeWidth={1}
            />
            <text
              x={label.x}
              y={label.y + 4}
              textAnchor="middle"
              fill="var(--accent)"
              fontFamily="var(--font-m)"
              fontSize="10"
              fontWeight="500"
            >
              {spoke.label}
            </text>
          </g>
        )
      })}

      {/* center */}
      <circle cx={0} cy={0} r={52} fill="var(--bg2)" stroke="var(--accent)" strokeWidth={1.5} />
      <text
        x={0} y={-6}
        textAnchor="middle"
        fill="var(--solid)"
        fontFamily="var(--font-d)"
        fontSize="13"
        fontWeight="600"
      >
        Fabio
      </text>
      <text
        x={0} y={10}
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-m)"
        fontSize="9"
      >
        Mughilan
      </text>
    </svg>
  )
}
