'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { featuredProjects, categoryLabels } from '@/lib/projects'
import { gsap, ScrollTrigger, registerGSAP } from '@/lib/gsap'

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    registerGSAP()
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.featured-heading',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.featured-heading', start: 'top 88%' } }
      )
      gsap.fromTo('.featured-card',
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.featured-cards', start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="featured-heading" style={{
          display: 'flex', alignItems: 'baseline',
          justifyContent: 'space-between', marginBottom: 'var(--sp8)',
          flexWrap: 'wrap', gap: 'var(--sp3)',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-d)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600, color: 'var(--solid)',
            }}>Featured Work</h2>
            <p style={{ fontFamily: 'var(--font-b)', fontSize: '0.875rem', color: 'var(--muted)', marginTop: 4 }}>
              Real projects, real code
            </p>
          </div>
          <Link href="/work" style={{
            fontFamily: 'var(--font-d)', fontSize: '0.875rem',
            fontWeight: 500, color: 'var(--accent)',
          }}>
            All projects →
          </Link>
        </div>

        <div className="featured-cards" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--sp5)',
        }}>
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="featured-card fc-hover"
              style={{
                display: 'flex', flexDirection: 'column',
                background: 'var(--card-bg)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r4)',
                textDecoration: 'none',
                overflow: 'hidden',
                transition: 'border-color 0.2s var(--ease), transform 0.2s var(--ease)',
              }}
            >
              {/* accent bar */}
              <div style={{ height: 3, background: project.color, flexShrink: 0 }} />

              <div style={{ padding: 'var(--sp6)', display: 'flex', flexDirection: 'column', gap: 'var(--sp4)', flex: 1 }}>
                {/* year + categories */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp1)' }}>
                    {project.categories.map((cat) => (
                      <span key={cat} className="tag">{categoryLabels[cat] ?? cat}</span>
                    ))}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-m)', fontSize: '0.72rem', color: 'var(--muted)',
                  }}>{project.year}</span>
                </div>

                {/* title + tagline */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-d)', fontWeight: 600, fontSize: '1.2rem',
                    color: 'var(--solid)', marginBottom: 'var(--sp2)', lineHeight: 1.2,
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-b)', fontSize: '0.875rem',
                    color: 'var(--muted)', lineHeight: 1.65,
                  }}>
                    {project.tagline}
                  </p>
                </div>

                {/* tech chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp1)', marginTop: 'auto' }}>
                  {project.tech.slice(0, 5).map((t) => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-m)', fontSize: '0.7rem', color: 'var(--muted)',
                      background: 'var(--surface)', padding: '3px 8px', borderRadius: 4,
                      border: '1px solid var(--line)',
                    }}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span style={{ fontFamily: 'var(--font-m)', fontSize: '0.7rem', color: 'var(--muted)' }}>
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* view link */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  paddingTop: 'var(--sp3)', borderTop: '1px solid var(--line)',
                  marginTop: 'var(--sp2)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-d)', fontSize: '0.82rem',
                    fontWeight: 500, color: 'var(--accent)',
                  }}>
                    View project →
                  </span>
                  {project.links.github && (
                    <span style={{ fontFamily: 'var(--font-m)', fontSize: '0.68rem', color: 'var(--muted)' }}>
                      GitHub ↗
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .fc-hover:hover {
          border-color: var(--accent) !important;
          transform: translateY(-3px) !important;
        }
      `}</style>
    </section>
  )
}
