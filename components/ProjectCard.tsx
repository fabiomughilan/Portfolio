'use client'

import Link from 'next/link'
import { Project } from '@/lib/types'
import { categoryLabels } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp3)',
        padding: 'var(--sp6)',
        background: 'var(--card-bg)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r3)',
        transition: 'border-color 0.18s ease, transform 0.18s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--accent)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--line)'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp1)' }}>
        {project.categories.map((cat) => (
          <span key={cat} className="tag" style={{ fontSize: '0.68rem' }}>
            {categoryLabels[cat] ?? cat}
          </span>
        ))}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-d)',
          fontWeight: 600,
          fontSize: '1.1rem',
          color: 'var(--solid)',
          lineHeight: 1.25,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-b)',
          fontSize: '0.875rem',
          color: 'var(--muted)',
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {project.tagline}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--sp1)',
          marginTop: 'var(--sp1)',
        }}
      >
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            style={{
              fontFamily: 'var(--font-m)',
              fontSize: '0.7rem',
              color: 'var(--muted)',
              background: 'rgba(19,32,26,0.06)',
              padding: '2px 8px',
              borderRadius: 4,
            }}
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span
            style={{
              fontFamily: 'var(--font-m)',
              fontSize: '0.7rem',
              color: 'var(--muted)',
            }}
          >
            +{project.tech.length - 4}
          </span>
        )}
      </div>
    </Link>
  )
}
