import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        paddingBlock: 'var(--sp20)',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-m)',
          fontSize: '0.78rem',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 'var(--sp4)',
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-d)',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 600,
          color: 'var(--solid)',
          marginBottom: 'var(--sp4)',
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-b)',
          color: 'var(--muted)',
          marginBottom: 'var(--sp8)',
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn btn-primary">
        Back home
      </Link>
    </div>
  )
}
