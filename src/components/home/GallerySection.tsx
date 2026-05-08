import Image from 'next/image'
import Link from 'next/link'

const photos = [
  {
    src: '/images/mecho-gym.jpg',
    alt: 'Мечката на детско парти в спортна зала с деца',
    span: 'col-span-2',
  },
  {
    src: '/images/panda-stitch-party.jpg',
    alt: 'Панда и Стич на рожден ден с деца на открито',
    span: 'col-span-1',
  },
  {
    src: '/images/stitch-outdoor.jpg',
    alt: 'Стич танцува с дете на детско парти',
    span: 'col-span-1',
  },
  {
    src: '/images/mecho-stadium-1.jpg',
    alt: 'Мечката на стадион с млади спортисти',
    span: 'col-span-1',
  },
  {
    src: '/images/mecho-stadium-2.jpg',
    alt: 'Мечката раздава медали на спортно събитие',
    span: 'col-span-2',
  },
]

export default function GallerySection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-navy relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Top/Bottom dividers */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-cyan mb-3">
            ✦ Галерия ✦
          </span>
          <h2 id="gallery-heading" className="section-heading">
            <span className="text-white">Погледни&nbsp;</span>
            <span className="gradient-text-cyan">Магията в Действие</span>
          </h2>
          <p className="section-sub">
            Снимки от реални партита – истинска радост, истински усмивки.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl aspect-square group ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* TikTok CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.tiktok.com/@popinski.4fun?_r=1&_t=ZN-96CC5iTgMMg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card border border-brand-light/15 hover:border-brand-cyan/40 rounded-full px-7 py-4 font-bold text-brand-light hover:text-brand-cyan transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
            </svg>
            Виж повече видеа в TikTok @popinski.4fun
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Full gallery link */}
        <div className="mt-5 text-center">
          <Link
            href="/galeria"
            className="text-brand-light/50 hover:text-brand-yellow text-sm font-semibold transition-colors underline underline-offset-4"
          >
            Виж пълната галерия →
          </Link>
        </div>
      </div>
    </section>
  )
}
