import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Education, experience, and milestones in Fabio Mughilan\'s engineering journey.',
}

const timeline = [
  {
    type: 'education',
    year: '2022 – 2026',
    title: 'B.E. Computer Engineering',
    org: 'Vidyavardhini\'s College of Engineering & Technology, Mumbai',
    detail: 'CGPA 7.3 / 10 — graduating 2026.',
  },
  {
    type: 'education',
    year: '2022',
    title: 'HSC (XII)',
    org: 'Maharashtra Board',
    detail: '73.66%',
  },
  {
    type: 'experience',
    year: '2024 – Present',
    title: 'Technology Consulting Intern',
    org: 'Ernst & Young (EY)',
    detail:
      'Supported digital transformation engagements, contributed to cloud migration assessments, and built internal tooling for client data analytics using Python and AWS.',
  },
  {
    type: 'experience',
    year: '2024',
    title: 'Full-Stack Developer',
    org: 'MyDevConnect',
    detail:
      'Led backend architecture for a developer social platform; implemented real-time collaboration with Socket.io, designed PostgreSQL schemas, and deployed containerised services on AWS ECS.',
  },
  {
    type: 'award',
    year: '2023',
    title: 'Infosys Springboard',
    org: 'Infosys',
    detail: 'Completed advanced full-stack development program.',
  },
]

const typeColors: Record<string, string> = {
  education:  'var(--accent)',
  experience: '#2d7a60',
  award:      '#8b7a3a',
}

const typeLabels: Record<string, string> = {
  education:  'Education',
  experience: 'Experience',
  award:      'Award',
}

export default function JourneyPage() {
  return (
    <div className="container section">
      <div style={{ marginBottom: 'var(--sp10)' }}>
        <h1
          style={{
            fontFamily: 'var(--font-d)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 600,
            color: 'var(--solid)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: 'var(--sp3)',
          }}
        >
          Journey
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-b)',
            fontSize: '1rem',
            color: 'var(--muted)',
            maxWidth: '55ch',
          }}
        >
          Education, experience, and milestones that shaped who I am as an engineer.
        </p>
      </div>

      {/* timeline */}
      <div
        style={{
          position: 'relative',
          paddingLeft: 'var(--sp8)',
          maxWidth: 680,
        }}
      >
        {/* vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 7,
            top: 6,
            bottom: 6,
            width: 2,
            background: 'var(--line)',
            borderRadius: 2,
          }}
        />

        {timeline.map((item, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              marginBottom: i < timeline.length - 1 ? 'var(--sp10)' : 0,
            }}
          >
            {/* dot */}
            <div
              style={{
                position: 'absolute',
                left: 'calc(-1 * var(--sp8) + 2px)',
                top: 6,
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: typeColors[item.type] ?? 'var(--accent)',
                border: '2px solid var(--bg)',
                boxShadow: `0 0 0 2px ${typeColors[item.type] ?? 'var(--accent)'}`,
              }}
            />

            {/* meta */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--sp2)',
                alignItems: 'center',
                marginBottom: 'var(--sp2)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-m)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: typeColors[item.type] ?? 'var(--accent)',
                  background: `${typeColors[item.type] ?? 'var(--accent)'}18`,
                  padding: '2px 8px',
                  borderRadius: 4,
                }}
              >
                {typeLabels[item.type]}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-m)',
                  fontSize: '0.78rem',
                  color: 'var(--muted)',
                }}
              >
                {item.year}
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-d)',
                fontWeight: 600,
                fontSize: '1.05rem',
                color: 'var(--solid)',
                marginBottom: 'var(--sp1)',
              }}
            >
              {item.title}
            </h2>
            <div
              style={{
                fontFamily: 'var(--font-d)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--accent)',
                marginBottom: 'var(--sp2)',
              }}
            >
              {item.org}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-b)',
                fontSize: '0.9rem',
                color: 'var(--muted)',
                lineHeight: 1.65,
                maxWidth: '58ch',
              }}
            >
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
