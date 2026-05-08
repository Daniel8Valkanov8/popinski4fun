import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/',            label: 'Начало' },
  { href: '/hero/mecho',  label: '🐻 Мечката' },
  { href: '/hero/stitch', label: '💙 Стич' },
  { href: '/galeria',     label: 'Галерия' },
  { href: '/kontakti',    label: 'Контакти' },
  { href: '/rezervacia',  label: '⭐ Запази Час' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-violet/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.jpg"
                alt="Popinski.4fun"
                width={60}
                height={60}
                className="rounded-full ring-2 ring-brand-yellow/40"
              />
              <span className="text-2xl font-black">
                <span className="gradient-text-gold">Popinski.</span>
                <span className="gradient-text-cyan">4fun</span>
              </span>
            </Link>
            <p className="text-brand-light/60 text-sm leading-relaxed max-w-xs mb-6">
              Създаваме незабравими детски рождени дни с магически аниматори в
              костюми на Бялата Мечка, Панда и Стич. Вашият ден ще блести като
              звезда! ⭐
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/popinski.4fun?igsh=MTdxbGRqbnJpeGRmeQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram на Popinski.4fun"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@popinski.4fun?_r=1&_t=ZN-96CC5iTgMMg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok на Popinski.4fun"
                className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
                </svg>
              </a>
              <a
                href="tel:+359884665348"
                aria-label="Телефон"
                className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-brand-yellow font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-light/60 hover:text-brand-yellow transition-colors text-sm font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-yellow font-bold text-lg mb-4">Контакти</h3>
            <div className="space-y-4">
              <a href="tel:+359884665348" className="flex items-start gap-3 group">
                <span className="text-xl mt-0.5">📞</span>
                <div>
                  <p className="text-xs text-brand-light/40 font-semibold uppercase tracking-wider">Телефон</p>
                  <p className="text-brand-light group-hover:text-green-400 font-bold text-sm transition-colors">
                    +359 884 665 348
                  </p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/popinski.4fun?igsh=MTdxbGRqbnJpeGRmeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="text-xl mt-0.5">📸</span>
                <div>
                  <p className="text-xs text-brand-light/40 font-semibold uppercase tracking-wider">Instagram</p>
                  <p className="text-brand-light group-hover:text-pink-400 font-bold text-sm transition-colors">
                    @popinski.4fun
                  </p>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@popinski.4fun?_r=1&_t=ZN-96CC5iTgMMg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="text-xl mt-0.5">🎵</span>
                <div>
                  <p className="text-xs text-brand-light/40 font-semibold uppercase tracking-wider">TikTok</p>
                  <p className="text-brand-light group-hover:text-brand-cyan font-bold text-sm transition-colors">
                    @popinski.4fun
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-violet/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-brand-light/30 text-sm text-center">
            © {new Date().getFullYear()} Popinski.4fun. Всички права запазени.
          </p>
          <p className="text-brand-light/20 text-xs text-center">
            Правим детските мечти реалност ⭐✨
          </p>
        </div>
      </div>
    </footer>
  )
}
