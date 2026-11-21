export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        paddingBlock: 'var(--sp8)',
        marginTop: 'var(--sp16)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--sp4)',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-m)',
            fontSize: '0.78rem',
            color: 'var(--muted)',
          }}
        >
          © {new Date().getFullYear()} Fabio Mughilan
        </span>
        <div style={{ display: 'flex', gap: 'var(--sp6)', alignItems: 'center' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/fabiomughilan' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/fabiomughilan' },
            { label: 'Email', href: 'mailto:fabiomughilan22@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-d)',
                fontSize: '0.82rem',
                fontWeight: 500,
                color: 'var(--muted)',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--accent)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--muted)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
