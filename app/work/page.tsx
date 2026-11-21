import { getGitHubRepos, languageColors } from '@/lib/github'

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  )
}

function ForkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
    </svg>
  )
}

export default async function WorkPage() {
  const repos = await getGitHubRepos('fabiomughilan')

  return (
    <div className="container" style={{ paddingBlock: 'var(--sp16)' }}>
      {/* header */}
      <div style={{ marginBottom: 'var(--sp12)' }}>
        <h1 style={{
          fontFamily: 'var(--font-d)',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 600,
          color: 'var(--solid)',
          letterSpacing: '-0.02em',
          marginBottom: 'var(--sp3)',
        }}>
          All Projects
        </h1>
        <p style={{
          fontFamily: 'var(--font-b)',
          fontSize: '1rem',
          color: 'var(--muted)',
          maxWidth: '55ch',
          lineHeight: 1.65,
        }}>
          Every repo from{' '}
          <a href="https://github.com/fabiomughilan" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--accent)', fontWeight: 500 }}>
            github.com/fabiomughilan
          </a>
          {' '}— live from the API, updates hourly.
        </p>
      </div>

      {repos.length === 0 ? (
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-b)' }}>
          Could not load repos right now. Check back soon.
        </p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--sp4)',
        }}>
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
              style={{
                display: 'flex', flexDirection: 'column', gap: 'var(--sp3)',
                padding: 'var(--sp5)',
                background: 'var(--card-bg)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r3)',
                textDecoration: 'none',
                transition: 'border-color 0.18s ease, transform 0.18s ease',
              }}
            >
              {/* name + link icon */}
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

              {/* description */}
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

              {/* topics */}
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

              {/* footer */}
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
                {repo.forks_count > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--muted)' }}>
                    <ForkIcon />
                    <span style={{ fontFamily: 'var(--font-m)', fontSize: '0.72rem' }}>{repo.forks_count}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      )}

      <style>{`
        .repo-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>
    </div>
  )
}
