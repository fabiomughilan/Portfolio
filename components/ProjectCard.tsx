'use client'

import Link from 'next/link'
import { Project } from '@/lib/types'
import { categoryLabels } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="pc-hover"
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--card-bg)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r3)',
        textDecoration: 'none',
        overflow: 'hidden',
        transition: 'border-color 0.18s var(--ease), transform 0.18s var(--ease)',
      }}
    >
      {/* accent bar */}
      <div style={{ height: 2, background: project.color, flexShrink: 0 }} />

      <div style={{ padding: 'var(--sp5)', display: 'flex', flexDirection: 'column', gap: 'var(--sp3)', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp1)' }}>
            {project.categories.map((cat) => (
              <span key={cat} className="tag" style={{ fontSize: '0.65rem' }}>
                {categoryLabels[cat] ?? cat}
              </span>
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-m)', fontSize: '0.68rem', color: 'var(--muted)' }}>
            {project.year}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-d)', fontWeight: 600, fontSize: '1.05rem',
          color: 'var(--solid)', lineHeight: 1.25,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontFamily: 'var(--font-b)', fontSize: '0.85rem',
          color: 'var(--muted)', lineHeight: 1.6, flex: 1,
        }}>
          {project.tagline}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp1)' }}>
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} style={{
              fontFamily: 'var(--font-m)', fontSize: '0.68rem', color: 'var(--muted)',
              background: 'var(--surface)', padding: '2px 7px', borderRadius: 4,
              border: '1px solid var(--line)',
            }}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span style={{ fontFamily: 'var(--font-m)', fontSize: '0.68rem', color: 'var(--muted)' }}>
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      <style>{`
        .pc-hover:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>
    </Link>
  )
}
