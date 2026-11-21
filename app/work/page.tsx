import { Metadata } from 'next'
import WorkGrid from '@/components/WorkGrid'

export const metadata: Metadata = {
  title: 'Work',
  description: 'All projects by Fabio Mughilan — Web3, AI, Full-Stack, Mobile, Systems.',
}

interface Props {
  searchParams: { cat?: string }
}

export default function WorkPage({ searchParams }: Props) {
  const cat = searchParams.cat || ''

  return (
    <div className="container section">
      <div style={{ marginBottom: 'var(--sp8)' }}>
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
          All Work
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-b)',
            fontSize: '1rem',
            color: 'var(--muted)',
            maxWidth: '55ch',
          }}
        >
          A collection of projects spanning Web3 protocols, AI pipelines, full-stack apps, mobile
          experiences, and systems programming.
        </p>
      </div>
      <WorkGrid initialCat={cat} />
    </div>
  )
}
