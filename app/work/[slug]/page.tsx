import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, getProject, categoryLabels } from '@/lib/projects'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return (
    <>
      <style>{`
        .back-link:hover { color: var(--accent) !important }
        .project-link-card:hover { border-color: var(--accent) !important; transform: translateY(-3px) }
      `}</style>

      <div className="container section">
        <Link
          href="/work"
          className="back-link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--font-d)',
            fontSize: '0.875rem',
            color: 'var(--muted)',
            marginBottom: 'var(--sp8)',
            transition: 'color 0.15s',
          }}
        >
          ← Back to Work
        </Link>

        {/* header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--sp4)',
            alignItems: 'flex-start',
            marginBottom: 'var(--sp8)',
          }}
        >
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp1)', marginBottom: 'var(--sp3)' }}>
              {project.categories.map((cat) => (
                <span key={cat} className="tag">
                  {categoryLabels[cat] ?? cat}
                </span>
              ))}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-d)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 600,
                color: 'var(--solid)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: 'var(--sp3)',
              }}
            >
              {project.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-b)', fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '60ch' }}>
              {project.tagline}
            </p>
          </div>

          {/* links */}
          <div style={{ display: 'flex', gap: 'var(--sp3)', flexWrap: 'wrap', paddingTop: 4 }}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub ↗
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        <hr className="divider" style={{ marginBottom: 'var(--sp8)' }} />

        {/* body */}
        <div style={{ display: 'grid', gap: 'var(--sp8)' }}>
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-d)',
                fontWeight: 600,
                fontSize: '1.15rem',
                color: 'var(--solid)',
                marginBottom: 'var(--sp4)',
              }}
            >
              Overview
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-b)',
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'var(--text)',
                maxWidth: '70ch',
              }}
            >
              {project.description}
            </p>
          </div>

          <div>
            <h2
              style={{
                fontFamily: 'var(--font-d)',
                fontWeight: 600,
                fontSize: '1.15rem',
                color: 'var(--solid)',
                marginBottom: 'var(--sp4)',
              }}
            >
              Technologies
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp2)' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-m)',
                    fontSize: '0.82rem',
                    color: 'var(--accent)',
                    background: 'var(--accent-light)',
                    padding: '5px 14px',
                    borderRadius: 999,
                    border: '1px solid rgba(25,93,73,0.2)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--sp2)',
              fontFamily: 'var(--font-m)',
              fontSize: '0.78rem',
              color: 'var(--muted)',
            }}
          >
            <span>Year:</span>
            <span style={{ color: 'var(--text)' }}>{project.year}</span>
          </div>
        </div>
      </div>
    </>
  )
}
