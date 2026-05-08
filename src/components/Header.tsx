'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',            label: 'Начало' },
  { href: '/galeria',     label: 'Галерия' },
  { href: '/kontakti',    label: 'Контакти' },
]

const serviceLinks = [
  { href: '/hero/mecho',  label: '🐻 Мечката',  color: 'hover:text-brand-yellow' },
  { href: '/hero/stitch', label: '💙 Стич',      color: 'hover:text-brand-cyan'   },
]

export default function Header() {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled,     setScrolled]     = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-card shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ────────────────────────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Popinski.4fun лого"
                width={52}
                height={52}
                className="rounded-full ring-2 ring-brand-yellow/50 shadow-lg"
                priority
              />
              <span className="text-xl font-black leading-none tracking-tight hidden sm:block">
                <span className="gradient-text-gold">Popinski.</span>
                <span className="gradient-text-cyan">4fun</span>
              </span>
            </Link>

            {/* ── Desktop Nav ──────────────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-semibold transition-colors ${
                    pathname === l.href
                      ? 'text-brand-yellow'
                      : 'text-brand-light hover:text-brand-yellow'
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="font-semibold text-brand-light hover:text-brand-yellow transition-colors flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Услуги
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 glass-card rounded-2xl shadow-2xl shadow-black/40 py-2 z-20">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`block px-5 py-3 text-brand-light ${s.color} font-semibold rounded-xl mx-1 transition-colors hover:bg-brand-purple/40`}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ── Desktop CTA ──────────────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+359884665348"
                className="text-green-400 hover:text-green-300 font-bold text-sm flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
                </svg>
                +359 884 665 348
              </a>
              <Link href="/rezervacia" className="btn-primary !py-2.5 !px-6 !text-sm">
                🎉 Запази Час
              </Link>
            </div>

            {/* ── Mobile Hamburger ─────────────────────────────────────────── */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="lg:hidden text-brand-light p-2 rounded-xl hover:bg-brand-purple/30 transition-colors"
              aria-label={menuOpen ? 'Затвори меню' : 'Отвори меню'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Fullscreen Overlay ───────────────────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-dark flex flex-col lg:hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 h-16 flex-shrink-0 border-b border-brand-violet/20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Popinski.4fun лого"
                width={44}
                height={44}
                className="rounded-full ring-2 ring-brand-yellow/50 shadow-lg"
              />
              <span className="text-lg font-black leading-none tracking-tight">
                <span className="gradient-text-gold">Popinski.</span>
                <span className="gradient-text-cyan">4fun</span>
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-brand-light p-2 rounded-xl hover:bg-brand-purple/30 transition-colors"
              aria-label="Затвори меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable links */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-3 font-semibold text-brand-light hover:text-brand-yellow hover:bg-brand-purple/30 rounded-xl transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="px-4 pt-3 pb-1">
                <p className="text-xs text-brand-light/40 font-semibold uppercase tracking-wider mb-1">Услуги</p>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`block px-3 py-2.5 font-semibold text-brand-light ${s.color} hover:bg-brand-purple/30 rounded-xl transition-colors`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 px-4 flex flex-col gap-3">
                <a
                  href="tel:+359884665348"
                  className="flex items-center gap-2 text-green-400 font-bold py-1"
                >
                  📞 +359 884 665 348
                </a>
                <Link href="/rezervacia" className="btn-primary !w-full">
                  🎉 Запази Час Сега
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
