const SITE_URL = 'https://popinski4fun.com'
const PHONE    = '+359884665348'

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EntertainmentBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Popinski.4fun',
    alternateName: 'Popinski 4fun',
    description:
      'Аниматори за детски партита с висококачествени костюми на Бялата Мечка, Панда и Стич. Организираме незабравими рождени дни, тематични партита и корпоративни събития с деца в България.',
    telephone: PHONE,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo.jpg`,
      width: 500,
      height: 500,
    },
    image: [
      `${SITE_URL}/images/logo.jpg`,
      `${SITE_URL}/images/mecho-gym.jpg`,
      `${SITE_URL}/images/stitch-outdoor.jpg`,
      `${SITE_URL}/images/panda-stitch-party.jpg`,
    ],
    sameAs: [
      'https://www.instagram.com/popinski.4fun',
      'https://www.tiktok.com/@popinski.4fun',
    ],
    priceRange: '$$',
    currenciesAccepted: 'BGN',
    paymentAccepted: 'Cash, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Пловдив',
      addressCountry: 'BG',
    },
    areaServed: [
      { '@type': 'City',    name: 'Пловдив' },
      { '@type': 'Country', name: 'България' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Аниматори за детски партита',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Аниматор Мечката – Детско Парти',
            description:
              'Анимация за детско парти с костюм на Бялата Мечка или Панда – интерактивни игри, танци, снимки и незабравими моменти за всяко дете.',
            url: `${SITE_URL}/hero/mecho`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Аниматор Стич – Детско Парти',
            description:
              'Анимация за детско парти с костюм на Стич от „Лило и Стич" – пълна Disney магия, смях и незабравими спомени.',
            url: `${SITE_URL}/hero/stitch`,
          },
        },
      ],
    },
  }
}

export function getHeroPageSchema(params: {
  heroName: string
  description: string
  path: string
  imagePath: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Аниматор ${params.heroName} – Popinski.4fun`,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    image: `${SITE_URL}${params.imagePath}`,
    provider: {
      '@type': 'EntertainmentBusiness',
      name: 'Popinski.4fun',
      telephone: PHONE,
      url: SITE_URL,
    },
    areaServed: { '@type': 'Country', name: 'България' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BGN',
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
