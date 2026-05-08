import Image from 'next/image'
import Link from 'next/link'

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
  </svg>
)
const InstaIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const heroes = [
  {
    id: 'mecho',
    name: 'Мечката',
    emoji: '🐻',
    tagline: 'Бялата Полярна Мечка',
    description:
      'Огромна, пухкава и невероятно забавна! Мечката обича да танцува с децата, да раздава прегръдки и да превръща всеки рожден ден в незабравимо приключение. Костюмът е висококачествен, надуваем и абсолютно уникален.',
    features: ['Интерактивни игри', 'Танци и забавления', 'Снимки с децата', 'Изненади и подаръци'],
    href: '/hero/mecho',
    image: '/images/mecho-stadium-2.jpg',
    imageAlt: 'Аниматор в костюм на Бяла Мечка на детско парти',
    accentColor: 'from-amber-400/20 to-brand-violet/20',
    borderColor: 'border-amber-400/30',
    badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/30',
    btnClass: 'bg-brand-yellow hover:bg-brand-gold text-brand-dark',
    socialColor: 'text-amber-300',
  },
  {
    id: 'stitch',
    name: 'Стич',
    emoji: '💙',
    tagline: 'От „Лило и Стич" – Disney',
    description:
      'Синьото извънземно от Disney е тук! Стич е любимецът на всяко дете – весел, палав и пълен с изненади. Костюмът е с невероятни детайли и моментално разпознаваем. Идеален за фенове на Disney магията.',
    features: ['Disney магия', 'Забавни игри', 'Танцови паузи', 'Персонализирани изненади'],
    href: '/hero/stitch',
    image: '/images/stitch-outdoor.jpg',
    imageAlt: 'Аниматор в костюм на Стич от Лило и Стич на детско парти',
    accentColor: 'from-cyan-400/20 to-blue-600/20',
    borderColor: 'border-cyan-400/30',
    badgeColor: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30',
    btnClass: 'bg-brand-cyan hover:bg-sky-400 text-brand-dark',
    socialColor: 'text-cyan-300',
  },
]

export default function HeroesSection() {
  return (
    <section
      id="nashi-heroi"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-navy relative overflow-hidden"
      aria-labelledby="heroes-heading"
    >
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-cyan mb-3">
            ✦ Нашите Герои ✦
          </span>
          <h2 id="heroes-heading" className="section-heading">
            <span className="gradient-text-gold">Запознай се</span>{' '}
            <span className="text-white">с Героите</span>
          </h2>
          <p className="section-sub">
            Два уникални характера. Един общ мисия – да направят детето ти
            истински щастливо.
          </p>
        </div>

        {/* Hero cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {heroes.map((hero) => (
            <article
              key={hero.id}
              className={`glass-card rounded-3xl overflow-hidden border ${hero.borderColor} group hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Image */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${hero.accentColor} from-brand-navy/80 to-transparent`} />
                {/* Badge */}
                <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-sm font-bold backdrop-blur-sm ${hero.badgeColor}`}>
                  <span>{hero.emoji}</span>
                  <span>{hero.tagline}</span>
                </div>
                {/* Social icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href="https://www.tiktok.com/@popinski.4fun?_r=1&_t=ZN-96CC5iTgMMg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className={`w-8 h-8 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center ${hero.socialColor} hover:scale-110 transition-transform`}
                  >
                    <TikTokIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/popinski.4fun?igsh=MTdxbGRqbnJpeGRmeQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={`w-8 h-8 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center ${hero.socialColor} hover:scale-110 transition-transform`}
                  >
                    <InstaIcon />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  {hero.emoji} {hero.name}
                </h3>
                <p className="text-brand-light/70 leading-relaxed mb-5 text-sm sm:text-base">
                  {hero.description}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {hero.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-brand-light/80 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={hero.href}
                    className={`${hero.btnClass} font-black px-6 py-3 rounded-full text-center transition-all hover:scale-105 flex-1`}
                  >
                    Виж повече →
                  </Link>
                  <Link
                    href="/rezervacia"
                    className="border-2 border-brand-light/25 hover:border-brand-yellow text-brand-light hover:text-brand-yellow font-bold px-6 py-3 rounded-full text-center transition-all flex-1"
                  >
                    Запази час
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
