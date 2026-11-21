import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journey',
  description: 'Education, experience, and milestones in Fabio Mughilan\'s engineering journey.',
}

const timeline = [
  {
    type: 'experience',
    year: 'Feb 2026 – Oct 2026',
    title: 'Full Stack Intern',
    org: 'Ernst & Young (EY) — Pune, India',
    detail:
      'Contributed to enterprise client projects including Digimetal, Motor Insurance, and Mutual Funds delivering end-to-end full-stack solutions. Built reusable UI components in Storybook, integrated them into Next.js apps in TypeScript, and developed backend services using Spring Boot with reactive programming in Kotlin. Supported production deployments and Hypercare, resolving critical issues for stable client delivery.',
  },
  {
    type: 'experience',
    year: 'Sept 2025 – Dec 2025',
    title: 'SDE Intern',
    org: 'My DevConnect (PCX Pay) — Remote',
    detail:
      'Developed frontend and backend integrations using React.js and Python, implementing REST-based application workflows. Architected and deployed scalable microservices using AWS and LocalStack, focusing on reliable backend services and cloud-native development.',
  },
  {
    type: 'award',
    year: '2024',
    title: '1st Prize — ETHGlobal Bangkok',
    org: 'Push Protocol · $2,000',
    detail:
      'Won first prize and $2,000 from Push Protocol at ETHGlobal Bangkok for Workverse — a scalable 2D virtual office with real-time collaboration, WebRTC voice/video, and event-driven notifications via Push Protocol SDK.',
  },
  {
    type: 'award',
    year: '2024',
    title: '1st Prize — Infosys Springboard Ideathon',
    org: 'Infosys',
    detail: 'Won first place at the Infosys Springboard Ideathon.',
  },
  {
    type: 'education',
    year: 'Sept 2022 – May 2026',
    title: 'B.Tech — Computer Science and Engineering',
    org: 'Vel Tech Dr.RR & Dr.SR Technical University, Chennai',
    detail: 'CGPA 8.4 / 10',
  },
  {
    type: 'education',
    year: 'June 2021 – Mar 2022',
    title: 'XII (HSC)',
    org: 'The Oxford School, Trivandrum',
    detail: '73.66%',
  },
  {
    type: 'education',
    year: 'June 2019 – Mar 2020',
    title: 'X (SSC)',
    org: 'The Oxford School, Trivandrum',
    detail: '84%',
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
        <p style={{ fontFamily: 'var(--font-b)', fontSize: '1rem', color: 'var(--muted)', maxWidth: '55ch' }}>
          Education, experience, and milestones that shaped who I am as an engineer.
        </p>
      </div>

      <div style={{ position: 'relative', paddingLeft: 'var(--sp8)', maxWidth: 700 }}>
        {/* vertical line */}
        <div
          style={{
            position: 'absolute',
            left: 7, top: 6, bottom: 6,
            width: 2,
            background: 'var(--line)',
            borderRadius: 2,
          }}
        />

        {timeline.map((item, i) => (
          <div
            key={i}
            style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? 'var(--sp10)' : 0 }}
          >
            {/* dot */}
            <div
              style={{
                position: 'absolute',
                left: 'calc(-1 * var(--sp8) + 2px)',
                top: 6,
                width: 12, height: 12,
                borderRadius: '50%',
                background: typeColors[item.type] ?? 'var(--accent)',
                border: '2px solid var(--bg)',
                boxShadow: `0 0 0 2px ${typeColors[item.type] ?? 'var(--accent)'}`,
              }}
            />

            {/* meta */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp2)', alignItems: 'center', marginBottom: 'var(--sp2)' }}>
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
              <span style={{ fontFamily: 'var(--font-m)', fontSize: '0.78rem', color: 'var(--muted)' }}>
                {item.year}
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-d)', fontWeight: 600, fontSize: '1.05rem',
                color: 'var(--solid)', marginBottom: 'var(--sp1)',
              }}
            >
              {item.title}
            </h2>
            <div
              style={{
                fontFamily: 'var(--font-d)', fontSize: '0.875rem', fontWeight: 500,
                color: 'var(--accent)', marginBottom: 'var(--sp2)',
              }}
            >
              {item.org}
            </div>
            <p style={{ fontFamily: 'var(--font-b)', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.65, maxWidth: '58ch' }}>
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
