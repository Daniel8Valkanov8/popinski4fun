import Link from 'next/link'

export default function SEOTextSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-navy relative"
      aria-labelledby="seo-heading"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-violet/25 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12">
          <h2
            id="seo-heading"
            className="text-2xl sm:text-3xl font-black text-white mb-6"
          >
            🎊 Аниматори за Детски Партита – Popinski.4fun
          </h2>

          <div className="space-y-5 text-brand-light/70 leading-relaxed text-sm sm:text-base">
            <p>
              Търсите незабравими <strong className="text-white">аниматори за детско парти</strong> в
              България? Popinski.4fun е вашият отговор! Ние организираме магически{' '}
              <strong className="text-white">тематични детски партита</strong> с висококачествени
              костюми, с които детето ви ще запомни завинаги своя специален ден. Независимо дали
              търсите{' '}
              <strong className="text-white">аниматор с Мечката</strong> или{' '}
              <strong className="text-white">аниматор Стич</strong> – ние имаме идеалния герой за
              вашия малчуган.
            </p>

            <p>
              Нашата{' '}
              <Link href="/hero/mecho" className="text-brand-yellow hover:underline font-semibold">
                Бяла Мечка
              </Link>{' '}
              е огромна, пухкава и невероятно харизматична – детска мечта, станала реалност! Тя
              танцува, прегръща и играе с всяко дете. Нашият{' '}
              <Link href="/hero/stitch" className="text-brand-cyan hover:underline font-semibold">
                Стич от Disney
              </Link>{' '}
              пък носи магията на анимационните филми директно на вашето парти. Двата костюма са
              висококачествени, надуваеми и абсолютно уникални на пазара.
            </p>

            <p>
              Ние предлагаме{' '}
              <strong className="text-white">гъвкави програми за детски рождени дни</strong> –
              при вас вкъщи, в детска зала, в парк, ресторант или на спортно събитие. Нашите
              аниматори са обучени да работят с деца от 2 до 12 години, да задържат вниманието им
              и да им подарят спомени за цял живот. Всяко парти може да се персонализира спрямо
              желанията на детето и бюджета на семейството.
            </p>

            <p>
              Базирани в <strong className="text-white">Пловдив</strong>,{' '}
              <strong className="text-white">Мечката и Стич</strong> са идеалният избор не само за
              детски рождени дни, но и за:{' '}
              <strong className="text-brand-yellow">спортни турнири и церемонии</strong>,{' '}
              <strong className="text-brand-yellow">тържества в детски градини и училища</strong>,{' '}
              <strong className="text-brand-yellow">фирмени партита с деца</strong> и{' '}
              <strong className="text-brand-yellow">изненади за изписване на бебе</strong>.
              Работим в Пловдивска област и из цяла България – идваме при теб!
            </p>

            <p>
              <strong className="text-white">Детски парти агенция Popinski.4fun</strong> е
              базирана в Пловдив и обслужва над 100 семейства годишно. Имаме опит с групи от 5 до
              100+ деца. Всяко посещение включва интерактивни игри, танци, снимки и незабравими
              моменти с героя.
            </p>

            <p>
              За да запазите вашия{' '}
              <strong className="text-white">аниматор за рожден ден</strong>, просто се обадете на{' '}
              <a href="tel:+359884665348" className="text-green-400 hover:underline font-bold">
                +359 884 665 348
              </a>{' '}
              или{' '}
              <Link href="/rezervacia" className="text-brand-yellow hover:underline font-semibold">
                попълнете формата за резервация
              </Link>
              . Ние ще се погрижим за всичко останало. Следете ни в{' '}
              <a
                href="https://www.tiktok.com/@popinski.4fun?_r=1&_t=ZN-96CC5iTgMMg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cyan hover:underline font-semibold"
              >
                TikTok
              </a>{' '}
              и{' '}
              <a
                href="https://www.instagram.com/popinski.4fun?igsh=MTdxbGRqbnJpeGRmeQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline font-semibold"
              >
                Instagram
              </a>{' '}
              за вдъхновение и зад кулисите клипове!
            </p>

            <p>
              Popinski.4fun – защото{' '}
              <strong className="text-brand-yellow">
                всяко дете заслужава магически рожден ден
              </strong>
              . 🌟
            </p>
          </div>

          {/* Keywords list (visible, helpful for SEO and users) */}
          <div className="mt-8 pt-6 border-t border-brand-violet/20">
            <p className="text-xs text-brand-light/30 font-semibold uppercase tracking-wider mb-3">
              Нашите услуги
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Аниматори Пловдив',
                'Детско парти Пловдив',
                'Аниматори за детско парти',
                'Рожден ден с Мечката',
                'Рожден ден със Стич',
                'Тематични партита',
                'Детски аниматори',
                'Парти агенция',
                'Аниматор под наем',
                'Disney тематично парти',
                'Корпоративни партита с деца',
                'Спортни турнири и церемонии',
                'Аниматор за детска градина',
                'Изненада за новородено',
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-brand-purple/40 border border-brand-violet/25 text-brand-light/60 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
