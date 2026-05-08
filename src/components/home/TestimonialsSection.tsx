const reviews = [
  {
    name: 'Мария Т.',
    role: 'Майка на 6-годишна Ива',
    text: 'Децата бяха абсолютно очаровани! Мечката танцуваше с тях, прегръщаше всяко дете и се снима с всеки. Организацията беше перфектна, а момичетата говорят за Мечката до ден-днешен. Препоръчвам 100%!',
    stars: 5,
    emoji: '🐻',
  },
  {
    name: 'Иван П.',
    role: 'Баща на 5-годишна Ели',
    text: 'Стич изненада дъщеря ми на рождения й ден и тя плака от радост! Костюмът беше невероятен, а аниматорът наистина влезе в роля. Перфектна организация, точност и страхотен контакт с децата.',
    stars: 5,
    emoji: '💙',
  },
  {
    name: 'Стефания К.',
    role: 'Майка на 7-годишен Никита',
    text: 'Заредихме парти с Мечката и беше фантастично! Никита и приятелите му не искаха да тръгват. Аниматорите са много отговорни и знаят как да работят с деца. Задължително ще ги наемем пак за следващия рожден ден!',
    stars: 5,
    emoji: '⭐',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} звезди`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-violet/8 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-yellow mb-3">
            ✦ Отзиви ✦
          </span>
          <h2 id="reviews-heading" className="section-heading">
            <span className="text-white">Какво казват&nbsp;</span>
            <span className="gradient-text-gold">Родителите</span>
          </h2>
          <p className="section-sub">
            Истински думи от истински семейства. Тяхната радост е нашата
            мотивация.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="glass-card rounded-2xl p-7 flex flex-col gap-4 hover:border-brand-yellow/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <Stars count={r.stars} />
                <span className="text-3xl">{r.emoji}</span>
              </div>

              <p className="text-brand-light/75 leading-relaxed text-sm flex-1 italic">
                &ldquo;{r.text}&rdquo;
              </p>

              <footer className="border-t border-brand-violet/20 pt-4">
                <cite className="not-italic">
                  <p className="font-black text-white text-base">{r.name}</p>
                  <p className="text-brand-light/50 text-xs font-medium mt-0.5">{r.role}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Aggregate rating hint for SEO */}
        <p className="text-center mt-8 text-brand-light/30 text-sm">
          ⭐ Средна оценка: <strong className="text-brand-yellow">5.0/5</strong> от
          реални родители
        </p>
      </div>
    </section>
  )
}
