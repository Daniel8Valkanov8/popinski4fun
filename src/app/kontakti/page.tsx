import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Контакти – Свържете се с Popinski.4fun',
  description:
    'Свържете се с нас за резервация на аниматори за детско парти. Телефон: +359884665348. Instagram и TikTok: @popinski.4fun',
  alternates: {
    canonical: 'https://popinski4fun.com/kontakti',
  },
}

const contacts = [
  {
    icon: '📞',
    title: 'Телефон',
    value: '+359 884 665 348',
    href: 'tel:+359884665348',
    desc: 'Работим всеки ден. Отговаряме веднага!',
    color: 'border-green-500/30 hover:border-green-500/60',
    valueColor: 'text-green-400',
  },
  {
    icon: '📸',
    title: 'Instagram',
    value: '@popinski.4fun',
    href: 'https://www.instagram.com/popinski.4fun?igsh=MTdxbGRqbnJpeGRmeQ==',
    desc: 'Изпрати ни директно съобщение в Instagram.',
    color: 'border-pink-500/30 hover:border-pink-500/60',
    valueColor: 'text-pink-400',
  },
  {
    icon: '🎵',
    title: 'TikTok',
    value: '@popinski.4fun',
    href: 'https://www.tiktok.com/@popinski.4fun?_r=1&_t=ZN-96CC5iTgMMg',
    desc: 'Виж клиповете ни и пиши в коментарите.',
    color: 'border-brand-light/15 hover:border-brand-cyan/40',
    valueColor: 'text-brand-cyan',
  },
]

export default function KontaktiPage() {
  return (
    <>
      <Header />
      <main className="bg-brand-dark min-h-screen pt-20">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,#2d1b69_0%,transparent_70%)] opacity-25 pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-yellow mb-3">
              ✦ Контакти ✦
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              <span className="text-white">Свържи се с&nbsp;</span>
              <span className="gradient-text-gold">Нас</span>
            </h1>
            <p className="text-brand-light/65 text-lg max-w-xl mx-auto">
              Готови сме да организираме магически рожден ден за твоето дете.
              Свържи се с нас сега!
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 max-w-3xl mx-auto">
          <div className="space-y-5 mb-10">
            {contacts.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`glass-card flex items-center gap-5 rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5 group ${c.color}`}
              >
                <span className="text-5xl flex-shrink-0">{c.icon}</span>
                <div className="flex-1">
                  <p className="text-xs text-brand-light/40 font-semibold uppercase tracking-wider mb-1">{c.title}</p>
                  <p className={`font-black text-xl ${c.valueColor}`}>{c.value}</p>
                  <p className="text-brand-light/55 text-sm mt-1">{c.desc}</p>
                </div>
                <svg className="w-5 h-5 text-brand-light/30 group-hover:text-brand-yellow transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Big CTA */}
          <div className="glass-card rounded-3xl p-10 text-center border border-brand-yellow/20">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-black text-white mb-3">
              Готови за <span className="gradient-text-gold">резервация?</span>
            </h2>
            <p className="text-brand-light/65 mb-7 text-sm leading-relaxed">
              Попълни формата за резервация и ние ще се свържем с теб в рамките
              на часове. Или просто ни се обади!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+359884665348" className="btn-phone w-full sm:w-auto">
                📞 +359 884 665 348
              </a>
              <Link href="/rezervacia" className="btn-primary w-full sm:w-auto">
                🎂 Онлайн Резервация
              </Link>
            </div>
          </div>

          {/* FAQ mini */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-black text-white">
              Често задавани въпроси
            </h2>
            {[
              {
                q: 'За какви поводи работите?',
                a: 'Детски рождени дни, спортни медалиади, корпоративни семейни събития, Коледни партита, Великден и всякакви специални поводи.',
              },
              {
                q: 'Колко предварително трябва да резервирам?',
                a: 'Препоръчваме минимум 1-2 седмици предварително, особено за уикенди. Понякога имаме свободни дати за по-кратки срокове – обади се и ще разберем.',
              },
              {
                q: 'Работите ли навсякъде в България?',
                a: 'Да! Можем да дойдем при вас – вкъщи, в зала, на открито или навсякъде другаде. Свържете се с нас за повече детайли.',
              },
              {
                q: 'Може ли да имам и двата героя?',
                a: 'Разбира се! Мечката и Стич заедно е двойна магия. Питайте за нашия двоен пакет.',
              },
            ].map((faq) => (
              <div key={faq.q} className="glass-card rounded-2xl p-5">
                <h3 className="font-black text-white text-base mb-2">❓ {faq.q}</h3>
                <p className="text-brand-light/65 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
