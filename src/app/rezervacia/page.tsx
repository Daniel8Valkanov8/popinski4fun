'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const reviews = [
  {
    name: 'Мария Т.',
    role: 'Майка на 6-годишна Ива',
    text: 'Децата бяха очаровани! Мечката танцуваше с тях и се снима с всяко дете. Препоръчвам 100%!',
    stars: 5,
  },
  {
    name: 'Иван П.',
    role: 'Баща на 5-годишна Ели',
    text: 'Стич изненада дъщеря ми и тя плака от радост! Костюмът беше невероятен, аниматорът – перфектен!',
    stars: 5,
  },
  {
    name: 'Стефания К.',
    role: 'Майка на 7-годишен Никита',
    text: 'Парти с Мечката – фантастично! Децата не искаха да тръгват. Ще ги наемем пак!',
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function RezervaciaPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]         = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', notes: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const data = new FormData(e.currentTarget)
      const body = new URLSearchParams()
      data.forEach((value, key) => body.append(key, value.toString()))
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">

      {/* ── Minimal Header (no nav – conversion focus) ──────────────────── */}
      <header className="flex items-center justify-between px-5 py-4 border-b border-brand-violet/20 glass-card-dark">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.jpg" alt="Popinski.4fun" width={44} height={44} className="rounded-full ring-2 ring-brand-yellow/40" />
          <span className="text-lg font-black">
            <span className="gradient-text-gold">Popinski.</span>
            <span className="gradient-text-cyan">4fun</span>
          </span>
        </Link>
        <a
          href="tel:+359884665348"
          className="flex items-center gap-2 text-green-400 font-bold text-sm sm:text-base"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
          </svg>
          +359 884 665 348
        </a>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-5 text-red-400 text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            Остават малко свободни часове за месеца!
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Запази{' '}
            <span className="gradient-text-gold">Незабравимо Парти</span>
            <br />
            <span className="gradient-text-cyan">в рамките на 2 минути!</span>
          </h1>

          <p className="text-brand-light/70 text-lg mb-2">
            Твоето дете заслужава магически ден с{' '}
            <strong className="text-white">Мечката или Стич</strong>.
          </p>
          <p className="text-brand-light/50 text-sm">
            Обади се сега или попълни формата по-долу и ние ще се свържем с теб.
          </p>
        </div>

        {/* ── BIG PHONE BUTTON ─────────────────────────────────────────── */}
        <div className="mb-8">
          <a
            href="tel:+359884665348"
            className="btn-phone w-full !text-xl !py-6 !rounded-2xl flex-col sm:flex-row justify-center"
          >
            <div className="flex items-center gap-3 justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs font-semibold opacity-80 leading-none mb-1">ПОЗВЪНИ СЕГА ЗА КОНСУЛТАЦИЯ</div>
                <div className="text-2xl sm:text-3xl font-black tracking-wide">+359 884 665 348</div>
              </div>
            </div>
          </a>
          <p className="text-center text-brand-light/40 text-xs mt-3">
            📱 Работим всеки ден · Отговаряме веднага
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-brand-violet/25" />
          <span className="text-brand-light/40 text-sm font-medium">или попълни формата</span>
          <div className="flex-1 h-px bg-brand-violet/25" />
        </div>

        {/* ── Contact Form ─────────────────────────────────────────────── */}
        {error && (
          <div className="glass-card rounded-2xl p-5 mb-5 border border-red-500/40 text-center">
            <p className="text-red-400 font-bold mb-1">Грешка при изпращане</p>
            <p className="text-brand-light/60 text-sm">
              Моля обади се директно на{' '}
              <a href="tel:+359884665348" className="text-green-400 font-bold">+359 884 665 348</a>
            </p>
          </div>
        )}
        {submitted ? (
          <div className="glass-card rounded-2xl p-10 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-black text-white mb-3">
              Заявката е изпратена!
            </h2>
            <p className="text-brand-light/70 mb-6">
              Ще се свържем с теб в рамките на часове. Очаквай ни!
            </p>
            <a href="tel:+359884665348" className="btn-phone inline-flex">
              📞 Или позвъни директно
            </a>
          </div>
        ) : (
          <form
            name="rezervacia"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <input type="hidden" name="form-name" value="rezervacia" />
            <h2 className="text-xl font-black text-white mb-2">
              🎂 Запазване на Час
            </h2>

            <div>
              <label className="block text-sm font-bold text-brand-light/80 mb-2" htmlFor="name">
                Вашето Име *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Напр. Мария Иванова"
                className="w-full bg-brand-dark/60 border border-brand-violet/40 focus:border-brand-yellow text-white placeholder-brand-light/30 rounded-xl px-4 py-3 outline-none transition-colors font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-light/80 mb-2" htmlFor="phone">
                Телефон за Връзка *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="+359 8XX XXX XXX"
                className="w-full bg-brand-dark/60 border border-brand-violet/40 focus:border-brand-yellow text-white placeholder-brand-light/30 rounded-xl px-4 py-3 outline-none transition-colors font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-light/80 mb-2" htmlFor="date">
                Желана Дата на Партито
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-brand-dark/60 border border-brand-violet/40 focus:border-brand-yellow text-white placeholder-brand-light/30 rounded-xl px-4 py-3 outline-none transition-colors font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-light/80 mb-2" htmlFor="notes">
                Допълнителна Информация
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={form.notes}
                onChange={handleChange}
                placeholder="Напр. Искаме Стич, деца на 4-8г., парти на открито..."
                className="w-full bg-brand-dark/60 border border-brand-violet/40 focus:border-brand-yellow text-white placeholder-brand-light/30 rounded-xl px-4 py-3 outline-none transition-colors font-medium resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full !text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Изпращане...
                </>
              ) : (
                <>🎉 ЗАПАЗИ ЧАС БЕЗПЛАТНО</>
              )}
            </button>

            <p className="text-center text-brand-light/30 text-xs">
              🔒 Данните ви са в безопасност. Не изпращаме спам.
            </p>
          </form>
        )}

        {/* ── Gallery strip ────────────────────────────────────────────── */}
        <div className="mt-12">
          <p className="text-center text-brand-light/50 text-sm font-semibold mb-5">
            📸 Реални моменти от наши партита
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: '/images/mecho-gym.jpg',    alt: 'Мечката с деца в зала' },
              { src: '/images/stitch-outdoor.jpg', alt: 'Стич на открито' },
              { src: '/images/panda-stitch-party.jpg', alt: 'Панда и Стич на парти' },
              { src: '/images/mecho-stadium-2.jpg', alt: 'Мечката на стадион' },
            ].map((p) => (
              <div key={p.src} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Reviews ──────────────────────────────────────────────────── */}
        <div className="mt-12 space-y-4">
          <p className="text-center text-brand-light/50 text-sm font-semibold mb-5">
            💬 Какво казват родителите
          </p>
          {reviews.map((r) => (
            <blockquote key={r.name} className="glass-card rounded-2xl p-5">
              <Stars count={r.stars} />
              <p className="text-brand-light/75 text-sm mt-3 mb-3 italic leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </p>
              <footer className="text-xs text-brand-light/45 font-semibold">
                — {r.name}, {r.role}
              </footer>
            </blockquote>
          ))}
        </div>

        {/* ── Final phone repeat ───────────────────────────────────────── */}
        <div className="mt-10 text-center">
          <a href="tel:+359884665348" className="btn-phone inline-flex">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
            </svg>
            Позвъни сега – +359 884 665 348
          </a>
        </div>
      </main>
    </div>
  )
}
