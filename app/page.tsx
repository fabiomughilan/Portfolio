import HeroSplit from '@/components/HeroSplit'
import FeaturedWork from '@/components/FeaturedWork'

const techStack = [
  { area: 'Languages',  items: ['TypeScript', 'Python', 'Rust', 'Solidity', 'Go'] },
  { area: 'Frontend',   items: ['Next.js', 'React', 'React Native', 'Tailwind'] },
  { area: 'Backend',    items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'] },
  { area: 'Web3',       items: ['Solana', 'Anchor', 'Ethereum', 'Ethers.js', 'Hardhat'] },
  { area: 'AI / ML',   items: ['PyTorch', 'TensorFlow', 'Claude API', 'MLflow', 'AWS SageMaker'] },
  { area: 'Infra',      items: ['AWS', 'Vercel', 'Terraform', 'GitHub Actions', 'Linux'] },
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
