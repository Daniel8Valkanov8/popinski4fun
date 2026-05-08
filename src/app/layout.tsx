import type { Metadata } from 'next'
import './globals.css'
import { getLocalBusinessSchema } from '@/lib/schema'

const SITE_URL = 'https://popinski4fun.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Popinski.4fun – Аниматори за Детски Партита | Мечката и Стич',
    template: '%s | Popinski.4fun',
  },
  description:
    'Аниматори за детски партита в Пловдив – Мечката и Стич. Рождени дни, детски градини, спортни турнири, фирмени партита и изненади за бебе. ☎ +359884665348',
  keywords: [
    'аниматори Пловдив',
    'детско парти Пловдив',
    'аниматори детско парти',
    'рожден ден аниматор',
    'аниматор Мечката',
    'аниматор Стич',
    'детски аниматори България',
    'тематично детско парти',
    'парти с аниматори',
    'Popinski 4fun',
    'детски рожден ден аниматор',
    'аниматор под наем',
    'аниматори за детска градина',
    'аниматор спортно събитие',
  ],
  authors: [{ name: 'Popinski.4fun' }],
  creator: 'Popinski.4fun',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: SITE_URL,
    siteName: 'Popinski.4fun',
    title: 'Popinski.4fun – Магически Детски Партита с Мечката и Стич',
    description:
      'Организираме незабравими детски рождени дни с аниматори в костюми на Мечката и Стич. Тематични партита, игри и магически моменти!',
    images: [
      {
        url: '/images/social-media.jpg',
        width: 1200,
        height: 630,
        alt: 'Popinski.4fun – Аниматори за детски партита с Мечката и Стич в Пловдив',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Popinski.4fun – Аниматори за Детски Партита',
    description: 'Незабравими детски рождени дни с Мечката и Стич в Пловдив! ⭐',
    images: ['/images/social-media.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = getLocalBusinessSchema()

  return (
    <html lang="bg" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-nunito antialiased bg-brand-dark text-brand-light">
        {children}
      </body>
    </html>
  )
}
