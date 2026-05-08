import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import HeroesSection from '@/components/home/HeroesSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import GallerySection from '@/components/home/GallerySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import SEOTextSection from '@/components/home/SEOTextSection'

export const metadata: Metadata = {
  title: 'Popinski.4fun – Аниматори за Детски Партита | Мечката и Стич',
  description:
    'Организираме незабравими детски рождени дни с аниматори в костюми на Бялата Мечка, Панда и Стич в България. Тематични партита, игри, магия. ☎ +359884665348',
  alternates: {
    canonical: 'https://popinski4fun.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HeroesSection />
        <WhyUsSection />
        <GallerySection />
        <TestimonialsSection />
        <SEOTextSection />

        {/* Final CTA Banner */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card rounded-3xl p-10 sm:p-14 border border-brand-yellow/20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Готови за{' '}
                <span className="gradient-text-gold">Незабравимо Парти?</span>
              </h2>
              <p className="text-brand-light/70 text-lg mb-8 max-w-xl mx-auto">
                Само едно обаждане разделя детето ти от магическата среща с
                Мечката или Стич!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+359884665348" className="btn-phone w-full sm:w-auto">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
                  </svg>
                  +359 884 665 348
                </a>
                <a
                  href="/rezervacia"
                  className="btn-primary w-full sm:w-auto"
                >
                  🎉 Запази Час Онлайн
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
