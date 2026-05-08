const benefits = [
  {
    icon: '🎭',
    title: 'Професионални Аниматори',
    desc: 'Нашите аниматори са обучени артисти с опит в работата с деца. Те знаят как да задържат вниманието и да създадат магическа атмосфера.',
  },
  {
    icon: '👑',
    title: 'Уникални Костюми',
    desc: 'Висококачествени, надуваеми костюми с невероятни детайли. Мечката и Стич изглеждат точно така, сякаш са излезли от анимациите!',
  },
  {
    icon: '🎨',
    title: 'Гъвкави Програми',
    desc: 'Рождени дни, спортни турнири, детски градини, училища, фирмени партита с деца, изненади за новородено – идваме при теб в Пловдив и региона!',
  },
  {
    icon: '📸',
    title: 'Незабравими Спомени',
    desc: 'Детето ти ще помни деня с Мечката или Стич цял живот. Снимки, прегръдки, танци и истинска магия – всичко на едно място.',
  },
  {
    icon: '⚡',
    title: 'Бърза Резервация',
    desc: 'Само едно обаждане или съобщение и твоето парти е запазено! Отговаряме бързо и организираме всичко за теб.',
  },
  {
    icon: '💛',
    title: 'Обичани от Родители',
    desc: 'Стотици доволни родители ни препоръчват на приятелите си. Нашата репутация се гради на истинските усмивки на децата.',
  },
]

export default function WhyUsSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-violet/10 blur-[80px]" />
        <div className="absolute right-0 top-1/3 w-56 h-56 rounded-full bg-brand-blue/10 blur-[70px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-yellow mb-3">
            ✦ Защо Ние ✦
          </span>
          <h2 id="why-heading" className="section-heading">
            <span className="text-white">Защо да изберете&nbsp;</span>
            <span className="gradient-text-gold">Popinski.4fun?</span>
          </h2>
          <p className="section-sub">
            Всяко парти е различно, но нашата страст към детската радост е
            винаги еднаква.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="glass-card rounded-2xl p-7 group hover:border-brand-yellow/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-5 group-hover:animate-float inline-block">{b.icon}</div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:gradient-text-gold transition-colors">
                {b.title}
              </h3>
              <p className="text-brand-light/65 leading-relaxed text-sm">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 text-center">
          <a href="tel:+359884665348" className="btn-phone inline-flex">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z"/>
            </svg>
            Обади се и запази вашето парти!
          </a>
        </div>
      </div>
    </section>
  )
}
