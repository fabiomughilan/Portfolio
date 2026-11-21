'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/journey', label: 'Journey' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(243,240,232,0.92)' : 'var(--bg)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-d)',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--solid)',
            letterSpacing: '-0.01em',
          }}
        >
          Fabio<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        {/* desktop nav */}
        <nav
          style={{ display: 'flex', gap: 'var(--sp6)', alignItems: 'center' }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-d)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: pathname === link.href ? 'var(--accent)' : 'var(--muted)',
                transition: 'color 0.15s ease',
                position: 'relative',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/fabiomughilan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '7px 16px' }}
          >
            GitHub ↗
          </a>
        </nav>

        {/* mobile hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: 'var(--solid)',
                borderRadius: 2,
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform:
                  menuOpen && i === 0
                    ? 'translateY(7px) rotate(45deg)'
                    : menuOpen && i === 2
                    ? 'translateY(-7px) rotate(-45deg)'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* mobile nav */}
      {menuOpen && (
        <nav
          style={{
            borderTop: '1px solid var(--line)',
            padding: 'var(--sp4)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--sp3)',
            background: 'var(--bg)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-d)',
                fontSize: '1rem',
                fontWeight: 500,
                color: pathname === link.href ? 'var(--accent)' : 'var(--solid)',
                padding: 'var(--sp2) 0',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/fabiomughilan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-d)', fontWeight: 500 }}
          >
            GitHub ↗
          </a>
        </nav>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important }
          .mobile-menu-btn { display: flex !important }
        }
      `}</style>
    </header>
  )
}
