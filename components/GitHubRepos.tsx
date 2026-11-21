import { getGitHubRepos, languageColors } from '@/lib/github'

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  )
}

export default async function GitHubRepos() {
  const { owned } = await getGitHubRepos('fabiomughilan')

  if (owned.length === 0) return null

  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 'var(--sp8)', flexWrap: 'wrap', gap: 'var(--sp3)',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-d)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600, color: 'var(--solid)', marginBottom: 'var(--sp1)',
            }}>
              On GitHub
            </h2>
            <p style={{ fontFamily: 'var(--font-b)', fontSize: '0.875rem', color: 'var(--muted)' }}>
              Live from{' '}
              <a href="https://github.com/fabiomughilan" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--accent)', fontWeight: 500 }}>
                github.com/fabiomughilan
              </a>
              {' '}· updates hourly
            </p>
          </div>
          <a href="https://github.com/fabiomughilan?tab=repositories" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-d)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent)' }}>
            All repos ↗
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--sp4)',
        }}>
          {owned.slice(0, 12).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-card"
              style={{
                display: 'flex', flexDirection: 'column', gap: 'var(--sp3)',
                padding: 'var(--sp5)',
                background: 'var(--card-bg)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r3)',
                textDecoration: 'none',
                transition: 'border-color 0.18s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <span style={{
                  fontFamily: 'var(--font-d)', fontWeight: 600, fontSize: '0.95rem',
                  color: 'var(--accent)', lineHeight: 1.3, wordBreak: 'break-word',
                }}>
                  {repo.name}
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="var(--muted)" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
                </svg>
              </div>

              {repo.description && (
                <p style={{
                  fontFamily: 'var(--font-b)', fontSize: '0.825rem',
                  color: 'var(--muted)', lineHeight: 1.55, flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                } as React.CSSProperties}>
                  {repo.description}
                </p>
              )}

              {repo.topics && repo.topics.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {repo.topics.slice(0, 4).map((topic) => (
                    <span key={topic} style={{
                      fontFamily: 'var(--font-m)', fontSize: '0.65rem',
                      color: 'var(--accent)', background: 'var(--accent-light)',
                      padding: '2px 7px', borderRadius: 999,
                      border: '1px solid var(--line)',
                    }}>
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp4)', marginTop: 'auto' }}>
                {repo.language && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{
                      width: 10, height: 10, borderRadius: '50%',
                      background: languageColors[repo.language] ?? 'var(--muted)',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontFamily: 'var(--font-m)', fontSize: '0.72rem', color: 'var(--muted)' }}>
                      {repo.language}
                    </span>
                  </div>
                )}
                {repo.stargazers_count > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--muted)' }}>
                    <StarIcon />
                    <span style={{ fontFamily: 'var(--font-m)', fontSize: '0.72rem' }}>{repo.stargazers_count}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .gh-card:hover { border-color: var(--accent) !important }
      `}</style>
    </section>
  )
}
