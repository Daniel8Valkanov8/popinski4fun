import Link from 'next/link'
import StarField from '@/components/StarField'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-16"
      aria-label="Начален екран"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#2d1b69_0%,#15103a_45%,#0a0720_100%)]" />
        {/* Glow orbs */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[130px]"
          style={{ background: 'rgba(91,33,182,0.22)', animation: 'hero-glow 4s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'rgba(37,99,235,0.14)', animation: 'hero-glow 5s ease-in-out 1s infinite' }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-[280px] h-[280px] rounded-full blur-[80px]"
          style={{ background: 'rgba(250,204,21,0.08)', animation: 'hero-glow 6s ease-in-out 2s infinite' }}
        />
      </div>

      {/* Stars */}
      <StarField />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-violet/25 border border-brand-violet/40 rounded-full px-5 py-2 mb-8 text-sm font-semibold text-brand-light/90">
          <span>✨</span>
          <span>Най-добрите Аниматори за Детски Партита в Пловдив и България</span>
          <span>✨</span>
        </div>

        {/* H1 – SEO optimized */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-[1.08] tracking-tight">
          <span className="gradient-text-gold">Магически Детски</span>
          <br />
          <span className="text-white">Партита с&nbsp;</span>
          <span className="gradient-text-cyan">Мечката и Стич</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-brand-light/75 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          Превърни рождения ден на детето си в{' '}
          <strong className="text-brand-yellow font-extrabold">незабравима приказка</strong>!
          Нашите аниматори носят смях, танци и Disney магия при теб в{' '}
          <strong className="text-brand-cyan font-extrabold">Пловдив и региона</strong>.&nbsp;🎉
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="tel:+359884665348" className="btn-phone w-full sm:w-auto">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
            </svg>
            Позвъни Сега
          </a>
          <Link href="/rezervacia" className="btn-primary w-full sm:w-auto">
            🎂 Запази Час
          </Link>
          <Link href="#nashi-heroi" className="btn-outline w-full sm:w-auto">
            Виж Героите
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Trust micro-badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-light/55 font-semibold">
          <div className="flex items-center gap-2">
            <span className="text-brand-yellow text-base">⭐⭐⭐⭐⭐</span>
            <span>100+ щастливи семейства</span>
          </div>
          <div className="w-px h-4 bg-brand-light/15 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span>🎪</span>
            <span>3+ години опит</span>
          </div>
          <div className="w-px h-4 bg-brand-light/15 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span>🏆</span>
            <span>Уникални костюми</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce-slow">
          <svg className="w-6 h-6 mx-auto text-brand-light/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
