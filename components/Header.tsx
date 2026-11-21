'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/work',     label: 'Work' },
  { href: '/journey',  label: 'Journey' },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  )
}

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [isDark,    setIsDark]    = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved === 'dark'
    setIsDark(dark)
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.dataset.theme = next ? 'dark' : 'light'
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'color-mix(in srgb, var(--bg) 88%, transparent)' : 'var(--bg)',
      backdropFilter: scrolled ? 'blur(16px) saturate(1.4)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      transition: 'all 0.22s var(--ease)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 60, gap: 'var(--sp4)' }}>

        {/* wordmark */}
        <Link href="/" style={{
          fontFamily: 'var(--font-d)', fontWeight: 700, fontSize: '1rem',
          color: 'var(--solid)', letterSpacing: '-0.03em', marginRight: 'auto',
        }}>
          fm<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        {/* desktop nav */}
        <nav className="desk-nav" style={{ display: 'flex', gap: 'var(--sp5)', alignItems: 'center' }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-d)', fontSize: '0.875rem', fontWeight: 500,
              color: pathname === l.href ? 'var(--accent)' : 'var(--muted)',
              transition: 'color 0.15s ease',
              position: 'relative',
            }}>
              {l.label}
              {pathname === l.href && (
                <span style={{
                  position: 'absolute', bottom: -4, left: 0, right: 0,
                  height: 1.5, background: 'var(--accent)', borderRadius: 1,
                }} />
              )}
            </Link>
          ))}
        </nav>

        {/* theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, borderRadius: '50%',
            border: '1px solid var(--line-strong)',
            background: 'var(--surface)',
            color: 'var(--muted)',
            transition: 'all 0.18s var(--ease)',
            flexShrink: 0,
          }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* CTA */}
        <a
          href="https://github.com/fabiomughilan"
          target="_blank" rel="noopener noreferrer"
          className="btn btn-outline desk-nav"
          style={{ padding: '7px 16px' }}
        >
          GitHub ↗
        </a>

        {/* hamburger */}
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="mob-btn"
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}
        >
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2,
              background: 'var(--solid)', borderRadius: 2,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
              transform: menuOpen && i===0 ? 'translateY(7px) rotate(45deg)'
                       : menuOpen && i===2 ? 'translateY(-7px) rotate(-45deg)' : 'none',
              opacity: menuOpen && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      {/* mobile nav */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid var(--line)', padding: 'var(--sp4)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp3)',
          background: 'var(--bg)',
        }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-d)', fontSize: '1rem', fontWeight: 500,
              color: pathname === l.href ? 'var(--accent)' : 'var(--solid)',
              padding: 'var(--sp2) 0',
            }}>{l.label}</Link>
          ))}
          <a href="https://github.com/fabiomughilan" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-d)', fontWeight: 500 }}>
            GitHub ↗
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desk-nav { display: none !important }
          .mob-btn  { display: flex !important }
        }
      `}</style>
    </header>
  )
}
