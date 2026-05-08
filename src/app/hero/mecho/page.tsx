import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getHeroPageSchema, getBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Аниматор Мечката – Бяла Полярна Мечка за Детско Парти',
  description:
    'Наемете аниматор в костюм на Бялата Мечка за детски рожден ден! Огромна, пухкава и невероятно забавна. Танци, игри и незабравими спомени. ☎ +359884665348',
  keywords: [
    'аниматор Мечката',
    'Бяла Мечка детско парти',
    'аниматор Полярна Мечка',
    'рожден ден с Мечката',
    'детски аниматор мечка',
    'наем мечка аниматор',
  ],
  alternates: {
    canonical: 'https://popinski4fun.com/hero/mecho',
  },
  openGraph: {
    title: 'Аниматор Мечката – Popinski.4fun',
    description: 'Бяла Полярна Мечка за незабравим детски рожден ден!',
    images: ['/images/mecho-stadium-2.jpg'],
  },
}

const heroSchema  = getHeroPageSchema({
  heroName:    'Мечката',
  description: 'Аниматор в костюм на Бяла Полярна Мечка за детски партита и рождени дни. Интерактивни игри, танци и незабравими спомени.',
  path:        '/hero/mecho',
  imagePath:   '/images/mecho-stadium-2.jpg',
})
const breadSchema = getBreadcrumbSchema([
  { name: 'Начало',         url: 'https://popinski4fun.com' },
  { name: 'Аниматор Мечката', url: 'https://popinski4fun.com/hero/mecho' },
])

const features = [
  { icon: '🕺', title: 'Танци и Игри',        desc: 'Динамична програма с музика, игри и интерактивни моменти за всяко дете.' },
  { icon: '🤗', title: 'Прегръдки и Снимки',  desc: 'Всяко дете получава специален момент с Мечката – прегръдка и незабравима снимка.' },
  { icon: '🎁', title: 'Изненади',             desc: 'Персонализирани изненади, подаръци и специален рожденик протокол.' },
  { icon: '📍', title: 'Идваме при Теб',       desc: 'На твоя адрес, зала, парк, ресторант – работим навсякъде в България.' },
]

const gallery = [
  { src: '/images/mecho-gym.jpg',      alt: 'Мечката с деца в гимнастическа зала' },
  { src: '/images/mecho-stadium-1.jpg', alt: 'Мечката на стадион със спортен отбор' },
  { src: '/images/mecho-stadium-2.jpg', alt: 'Мечката раздава медали на спортно събитие' },
]

export default function MechoPage() {
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
              src="/images/mecho-stadium-2.jpg"
              alt="Аниматор в костюм на Бяла Мечка"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
            {/* Breadcrumb */}
            <nav className="text-sm text-brand-light/40 mb-4 font-medium" aria-label="Навигация">
              <Link href="/" className="hover:text-brand-yellow transition-colors">Начало</Link>
              <span className="mx-2">/</span>
              <span className="text-brand-yellow">Мечката</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-4 text-amber-300 text-sm font-bold">
              🐻 Полярна Мечка
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              <span className="gradient-text-gold">Аниматор Мечката</span>
              <br />
              <span className="text-xl sm:text-2xl font-semibold text-brand-light/70">
                Бяла Полярна Мечка за Детски Партита
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+359884665348" className="btn-phone w-full sm:w-auto">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
                </svg>
                Запази Мечката
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
                <span className="gradient-text-gold">Мечката!</span>
              </h2>
              <div className="space-y-4 text-brand-light/70 leading-relaxed">
                <p>
                  <strong className="text-white">Бялата Полярна Мечка</strong> е
                  любимецът на всеки, от малкото дете до техните родители! Огромна,
                  пухкава и изпълнена с енергия – тя превръща всяко парти в истинско
                  приключение.
                </p>
                <p>
                  Нашият висококачествен, надуваем костюм е забележителен по своите
                  детайли и размери. Мечката изглежда точно като излязла от
                  анимациите и моментално привлича вниманието на всяко дете.
                </p>
                <p>
                  Перфектна за <strong className="text-white">рождени дни</strong>,
                  спортни събития, корпоративни партита с деца и всякакви специални
                  поводи. Работим в цяла България.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {gallery.slice(0, 2).map((g) => (
                <div key={g.src} className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="25vw" loading="lazy" />
                </div>
              ))}
              <div className="col-span-2 relative aspect-video rounded-2xl overflow-hidden">
                <Image src={gallery[2].src} alt={gallery[2].alt} fill className="object-cover object-top" sizes="50vw" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ───────────────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-navy">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-white text-center mb-10">
              Какво включва посещението?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => (
                <div key={f.title} className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform">
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
          <div className="max-w-2xl mx-auto glass-card rounded-3xl p-10 border border-amber-500/20">
            <div className="text-6xl mb-4 animate-float inline-block">🐻</div>
            <h2 className="text-3xl font-black text-white mb-4">
              Готови за <span className="gradient-text-gold">Мечката?</span>
            </h2>
            <p className="text-brand-light/65 mb-7">
              Обади се сега или запази час онлайн. Мечката не може да дочака да
              танцува с твоето дете!
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

        {/* ── Cross-sell ─────────────────────────────────────────────── */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-light/40 text-sm mb-4">Искаш и двата героя?</p>
          <Link
            href="/hero/stitch"
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-white font-bold transition-colors"
          >
            💙 Виж и Стич →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
