'use client'

import Link from 'next/link'
import { featuredProjects, categoryLabels } from '@/lib/projects'

export default function FeaturedWork() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 'var(--sp8)',
            flexWrap: 'wrap',
            gap: 'var(--sp3)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-d)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600,
              color: 'var(--solid)',
            }}
          >
            Featured Work
          </h2>
          <Link
            href="/work"
            style={{
              fontFamily: 'var(--font-d)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--accent)',
            }}
          >
            All projects →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--sp4)',
          }}
        >
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--sp4)',
                padding: 'var(--sp6)',
                background: 'var(--card-bg)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r4)',
                transition: 'border-color 0.18s ease, transform 0.18s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--accent)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--line)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div
                style={{
                  height: 6,
                  borderRadius: 3,
                  background: project.color,
                  opacity: 0.7,
                  width: '40%',
                }}
              />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp1)' }}>
                {project.categories.map((cat) => (
                  <span key={cat} className="tag">
                    {categoryLabels[cat] ?? cat}
                  </span>
                ))}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-d)',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    color: 'var(--solid)',
                    marginBottom: 'var(--sp2)',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-b)',
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--sp1)',
                  marginTop: 'auto',
                }}
              >
                {project.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-m)',
                      fontSize: '0.72rem',
                      color: 'var(--muted)',
                      background: 'rgba(19,32,26,0.06)',
                      padding: '3px 8px',
                      borderRadius: 4,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
