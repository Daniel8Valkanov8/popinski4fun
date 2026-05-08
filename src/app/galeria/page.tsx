import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Галерия – Снимки от Детски Партита с Мечката и Стич',
  description:
    'Разгледайте снимки от реални детски партита с аниматори Мечката и Стич. Вижте магическите моменти, усмивките и незабравимите спомени!',
  alternates: {
    canonical: 'https://popinski4fun.com/galeria',
  },
}

const photos = [
  { src: '/images/mecho-gym.jpg',        alt: 'Мечката с деца в гимнастическа зала',       category: 'Мечката'  },
  { src: '/images/panda-stitch-party.jpg', alt: 'Панда и Стич на рожден ден с деца',         category: 'И двата'  },
  { src: '/images/mecho-stadium-1.jpg',   alt: 'Мечката на стадион с млади спортисти',       category: 'Мечката'  },
  { src: '/images/stitch-outdoor.jpg',    alt: 'Стич танцува с дете на открито',             category: 'Стич'     },
  { src: '/images/mecho-stadium-2.jpg',   alt: 'Мечката раздава медали на спортно събитие',  category: 'Мечката'  },
]

export default function GaleriaPage() {
  return (
    <>
      <Header />
      <main className="bg-brand-dark min-h-screen pt-20">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,#2d1b69_0%,transparent_70%)] opacity-30 pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-cyan mb-3">
              ✦ Галерия ✦
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              <span className="gradient-text-gold">Магически</span>{' '}
              <span className="text-white">Моменти</span>
            </h1>
            <p className="text-brand-light/65 text-lg max-w-2xl mx-auto">
              Реални снимки от партита с Мечката и Стич. Всяка усмивка е истинска,
              всеки спомен – завинаги.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl group break-inside-avoid"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={600}
                  height={800}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-black px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* TikTok CTA */}
          <div className="mt-12 text-center">
            <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-5 rounded-2xl px-8 py-6">
              <div className="text-left">
                <p className="text-white font-black text-lg">Искаш да видиш повече?</p>
                <p className="text-brand-light/60 text-sm">Следи ни в TikTok и Instagram за нови клипове!</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.tiktok.com/@popinski.4fun?_r=1&_t=ZN-96CC5iTgMMg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/popinski.4fun?igsh=MTdxbGRqbnJpeGRmeQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-4">
            Искаш и ти такива снимки?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+359884665348" className="btn-phone">
              📞 Позвъни: +359 884 665 348
            </a>
            <Link href="/rezervacia" className="btn-primary">
              🎉 Запази Час Онлайн
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
