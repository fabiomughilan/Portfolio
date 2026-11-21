import HeroSplit from '@/components/HeroSplit'
import FeaturedWork from '@/components/FeaturedWork'

const techStack = [
  { area: 'Languages',           items: ['Python', 'TypeScript', 'Java', 'Kotlin', 'JavaScript'] },
  { area: 'Frameworks',          items: ['Node.js', 'Express.js', 'React.js', 'Next.js', 'Spring Boot', 'FastAPI'] },
  { area: 'AI Tools',            items: ['RAG', 'LangChain', 'LangGraph', 'CrewAI', 'AI Agents', 'Vector Databases'] },
  { area: 'Software Engineering', items: ['System Design', 'Microservices', 'REST APIs', 'WebSockets', 'WebRTC', 'CI/CD'] },
  { area: 'Cloud & Infra',       items: ['AWS', 'LocalStack', 'Docker', 'Git', 'Vercel', 'Production Deployment'] },
  { area: 'Databases',           items: ['PostgreSQL', 'MongoDB', 'Redis'] },
]

export default function HomePage() {
  return (
    <>
      {/* hero — full bleed, no container */}
      <div style={{ paddingInline: 'var(--sp4)' }}>
        <HeroSplit />
      </div>

      <hr className="divider" />

      {/* featured projects */}
      <FeaturedWork />

      <hr className="divider" />

      {/* tech stack */}
      <section className="section">
        <div className="container">
          <h2
            style={{
              fontFamily: 'var(--font-d)',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600,
              color: 'var(--solid)',
              marginBottom: 'var(--sp8)',
            }}
          >
            Tech Stack
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 'var(--sp4)',
            }}
          >
            {techStack.map((group) => (
              <div
                key={group.area}
                style={{
                  padding: 'var(--sp5)',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r3)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-m)',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--accent)',
                    marginBottom: 'var(--sp3)',
                  }}
                >
                  {group.area}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp1)' }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontFamily: 'var(--font-b)',
                        fontSize: '0.82rem',
                        color: 'var(--text)',
                        background: 'rgba(19,32,26,0.06)',
                        padding: '3px 10px',
                        borderRadius: 4,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
