import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getHeroPageSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Аниматор Стич – Disney Стич за Детско Парти | Лило и Стич',
  description:
    'Наемете аниматор в костюм на Стич от „Лило и Стич" за детски рожден ден! Синьо Disney извънземно, пълно с енергия и смях. Танци, игри, магия. ☎ +359884665348',
  keywords: [
    'аниматор Стич',
    'Стич детско парти',
    'аниматор Лило и Стич',
    'рожден ден с Ститч',
    'Disney аниматор детско парти',
    'наем Стич аниматор',
  ],
  alternates: {
    canonical: 'https://popinski4fun.com/hero/stitch',
  },
  openGraph: {
    title: 'Аниматор Стич – Popinski.4fun',
    description: 'Disney Стич за незабравим детски рожден ден!',
    images: ['/images/stitch-outdoor.jpg'],
  },
}

const heroSchema  = getHeroPageSchema({
  heroName:    'Стич',
  description: 'Аниматор в костюм на Стич от Disney „Лило и Стич" за детски партита и рождени дни. Disney магия, интерактивни игри и незабравими спомени.',
  path:        '/hero/stitch',
  imagePath:   '/images/stitch-outdoor.jpg',
})
const breadSchema = getBreadcrumbSchema([
  { name: 'Начало',          url: 'https://popinski4fun.com' },
  { name: 'Аниматор Стич',   url: 'https://popinski4fun.com/hero/stitch' },
])

const features = [
  { icon: '🎵', title: 'Disney Музика',    desc: 'Любимите песни от „Лило и Стич" и Disney хитове в жива атмосфера.' },
  { icon: '🛸', title: 'Извънземна Магия', desc: 'Стич носи уникалната Disney магия директно на вашето парти.' },
  { icon: '🤣', title: 'Смях и Закачки',   desc: 'Стич е известен с палавщините си – децата ще се смеят от сърце!' },
  { icon: '📸', title: 'Снимки за Памет',  desc: 'Незабравими снимки с любимия Disney персонаж.' },
]

export default function StitchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadSchema) }}
      />
      <Header />

      <main className="bg-brand-dark">
        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src="/images/stitch-outdoor.jpg"
              alt="Аниматор в костюм на Стич от Disney"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/55 to-brand-dark/15" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
            <nav className="text-sm text-brand-light/40 mb-4 font-medium" aria-label="Навигация">
              <Link href="/" className="hover:text-brand-yellow transition-colors">Начало</Link>
              <span className="mx-2">/</span>
              <span className="text-brand-cyan">Стич</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-4 text-cyan-300 text-sm font-bold">
              💙 Disney – Лило и Стич
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              <span className="gradient-text-cyan">Аниматор Стич</span>
              <br />
              <span className="text-xl sm:text-2xl font-semibold text-brand-light/70">
                Disney Стич за Детски Партита и Рождени Дни
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+359884665348" className="btn-phone w-full sm:w-auto">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
                </svg>
                Запази Стич
              </a>
              <Link href="/rezervacia" className="btn-primary w-full sm:w-auto">
                🎂 Онлайн Резервация
              </Link>
            </div>
          </div>
        </section>

        {/* ── Description ────────────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
                Запознай се с{' '}
                <span className="gradient-text-cyan">Стич!</span>
              </h2>
              <div className="space-y-4 text-brand-light/70 leading-relaxed">
                <p>
                  <strong className="text-white">Стич от Disney</strong> – най-известното синьо
                  извънземно от анимацията „Лило и Стич"! Той е весел, палав и
                  изпълнен с Disney магия, която децата обожават.
                </p>
                <p>
                  Нашият детайлен костюм на Стич е с перфектни пропорции и
                  характерните сини уши и голямо мило лице. Веднага след като
                  влезе в стаята, всяко дете ще изпищи от радост!
                </p>
                <p>
                  Идеален за{' '}
                  <strong className="text-white">Disney тематични рождени дни</strong>,
                  детски партита, изненади и специални поводи. Стич обича да
                  танцува, да играе и да прегръща всяко дете.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/stitch-outdoor.jpg"
                  alt="Стич с дете на парти"
                  fill
                  className="object-cover object-top"
                  sizes="50vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 border border-cyan-500/30">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">💙</div>
                  <div>
                    <p className="text-white font-black text-sm">Disney Оригинал</p>
                    <p className="text-brand-light/50 text-xs">„Лило и Стич"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panda + Stitch together section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-navy">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="relative aspect-video sm:aspect-[21/9]">
                <Image
                  src="/images/panda-stitch-party.jpg"
                  alt="Панда и Стич заедно на детско парти"
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 to-transparent" />
                <div className="absolute inset-0 flex items-center px-8 sm:px-14">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                      Стич <span className="text-brand-light/60">+</span>{' '}
                      <span className="gradient-text-gold">Мечката</span> заедно?
                    </h3>
                    <p className="text-brand-light/70 max-w-sm mb-5 text-sm sm:text-base">
                      Двойна изненада за двойно повече смях! Двата героя едновременно
                      – за незабравимо парти!
                    </p>
                    <a href="tel:+359884665348" className="btn-phone inline-flex !py-3 !px-6 !text-sm">
                      📞 Запитай за двоен пакет
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ───────────────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-white text-center mb-10">
              Какво включва посещението на Стич?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform border border-cyan-500/15">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="font-black text-white mb-2">{f.title}</h3>
                  <p className="text-brand-light/65 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto glass-card rounded-3xl p-10 border border-cyan-500/20">
            <div className="text-6xl mb-4 animate-float inline-block">💙</div>
            <h2 className="text-3xl font-black text-white mb-4">
              Готови за <span className="gradient-text-cyan">Стич?</span>
            </h2>
            <p className="text-brand-light/65 mb-7">
              Обади се сега или запази час онлайн. Стич не може да дочака да
              се запознае с твоето дете!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+359884665348" className="btn-phone w-full sm:w-auto">
                📞 +359 884 665 348
              </a>
              <Link href="/rezervacia" className="btn-primary w-full sm:w-auto">
                🎂 Запази час онлайн
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-sell */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light/40 text-sm mb-4">Или предпочиташ Мечката?</p>
          <Link
            href="/hero/mecho"
            className="inline-flex items-center gap-2 text-brand-yellow hover:text-white font-bold transition-colors"
          >
            🐻 Виж Мечката →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
