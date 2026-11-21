'use client'

import { useState } from 'react'
import { projects, categoryLabels } from '@/lib/projects'
import { Category } from '@/lib/types'
import ProjectCard from './ProjectCard'

const ALL = 'all'

const filters: { id: string; label: string }[] = [
  { id: ALL, label: 'All' },
  ...Object.entries(categoryLabels).map(([id, label]) => ({ id, label })),
]

interface Props {
  initialCat?: string
}

export default function WorkGrid({ initialCat }: Props) {
  const [active, setActive] = useState<string>(initialCat || ALL)

  const filtered =
    active === ALL
      ? projects
      : projects.filter((p) => p.categories.includes(active as Category))

  return (
    <div>
      {/* filter bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--sp2)',
          marginBottom: 'var(--sp8)',
        }}
      >
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            style={{
              fontFamily: 'var(--font-d)',
              fontSize: '0.82rem',
              fontWeight: 500,
              padding: '6px 16px',
              borderRadius: 999,
              border: '1px solid',
              borderColor: active === f.id ? 'var(--accent)' : 'var(--line)',
              background: active === f.id ? 'var(--accent)' : 'transparent',
              color: active === f.id ? '#fff' : 'var(--muted)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--sp4)',
        }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-b)', marginTop: 'var(--sp8)' }}>
          No projects in this category yet.
        </p>
      )}
    </div>
  )
}
