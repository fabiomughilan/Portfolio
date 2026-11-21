import HubDiagram from './HubDiagram'

export default function HeroSplit() {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'stretch',
        minHeight: 'calc(100vh - 60px)',
        margin: '0 calc(-1 * var(--sp4))',
      }}
    >
      {/* left */}
      <div
        style={{
          flex: '0 0 50%',
          padding: 'var(--sp16) var(--sp8) var(--sp12) var(--sp8)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 'var(--sp6)',
        }}
      >
        <span
          className="tag"
          style={{ width: 'fit-content' }}
        >
          Available for hire
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-d)',
            fontSize: 'clamp(2rem, 4vw, 3.4rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--solid)',
          }}
        >
          Fabio Mughilan
          <br />
          <span style={{ color: 'var(--accent)' }}>Software Engineer</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-b)',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: 'var(--muted)',
            maxWidth: '48ch',
          }}
        >
          Building at the intersection of{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
            Web3, AI & distributed systems
          </strong>
          . B.E. Computer Engineering at VCET, Mumbai.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--sp3)',
            alignItems: 'center',
          }}
        >
          <a href="/work" className="btn btn-primary">
            View Work →
          </a>
          <a
            href="https://github.com/fabiomughilan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub ↗
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--sp4)',
            marginTop: 'var(--sp2)',
          }}
        >
          {[
            { label: 'Technologies', value: '15+' },
            { label: 'Projects', value: '9' },
            { label: 'GPA CGPA', value: '7.3' },
          ].map((stat) => (
            <div key={stat.label} style={{ minWidth: 80 }}>
              <div
                style={{
                  fontFamily: 'var(--font-d)',
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  color: 'var(--accent)',
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-m)',
                  fontSize: '0.72rem',
                  color: 'var(--muted)',
                  marginTop: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* right */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'radial-gradient(circle, var(--dot) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          borderLeft: '1px solid var(--line)',
        }}
      >
        {/* gradient fade top/bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            background:
              'linear-gradient(to bottom, var(--bg) 0%, transparent 18%, transparent 82%, var(--bg) 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <HubDiagram />
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          section { flex-direction: column !important; min-height: auto !important; margin: 0 !important }
          section > div:first-child {
            flex: none !important;
            padding: var(--sp12) var(--sp4) var(--sp8) var(--sp4) !important;
          }
          section > div:last-child {
            min-height: 400px;
            border-left: none !important;
            border-top: 1px solid var(--line);
          }
        }
      `}</style>
    </section>
  )
}
