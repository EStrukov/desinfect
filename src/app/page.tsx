import type { Metadata } from 'next';
import HomePageContent from './HomePageContent';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://desinfect.vercel.app');

const OG_DYNAMIC_URL = `${SITE_URL}/og`;

export const metadata: Metadata = {
  title: 'Дезинфект | Профессиональная дезинфекция, дезинсекция и дератизация',
  description:
    'Избавим вас от мелких и больших неприятностей! Профессиональная обработка помещений от насекомых, грызунов и бактерий. Гарантия качества. Работаем по Минску и области.',
  openGraph: {
    title: 'Дезинфект | Профессиональная обработка помещений',
    description:
      'Избавим вас от мелких и больших неприятностей! Профессиональная дезинфекция, дезинсекция и дератизация в Минске и области.',
    url: SITE_URL,
    siteName: 'Дезинфект',
    images: [
      {
        url: OG_DYNAMIC_URL,
        secureUrl: OG_DYNAMIC_URL,
        width: 1200,
        height: 630,
        alt: 'Дезинфект — профессиональная обработка',
        type: 'image/png',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дезинфект | Профессиональная обработка',
    description: 'Избавим вас от мелких и больших неприятностей!',
    images: [OG_DYNAMIC_URL],
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
