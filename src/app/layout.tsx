import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Providers } from '@/components/Providers';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { CookieConsent } from '@/components/ui/CookieConsent/CookieConsent';
import { FloatingContactButton } from '@/components/ui/FloatingContactButton/FloatingContactButton';

const inter = Inter({ subsets: ['latin'] });

// Используем статический URL без query параметров
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL 
  || process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'https://desinfect.vercel.app';

// Убираем ?t=${Date.now()} — это мешает кэшированию
const OG_IMAGE_URL = `${SITE_URL}/og.png`;
const FAVICON_URL = `${SITE_URL}/favicon.ico`;

export const metadata: Metadata = {
  title: {
    default: 'Дезинфект | Профессиональная дезинфекция, дезинсекция и дератизация',
    template: '%s | Дезинфект',
  },
  description: 'Избавим вас от мелких и больших неприятностей! Профессиональная обработка помещений от насекомых, грызунов и бактерий. Гарантия качества. Работаем по Минску и области.',
  
  metadataBase: new URL(SITE_URL),
  
  openGraph: {
    title: 'Дезинфект | Профессиональная обработка помещений',
    description: 'Избавим вас от мелких и больших неприятностей! Профессиональная дезинфекция, дезинсекция и дератизация в Минске и области.',
    url: SITE_URL,
    siteName: 'Дезинфект',
    images: [
      {
        url: OG_IMAGE_URL,
        secureUrl: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Дезинфект — профессиональная обработка',
        type: 'image/png', // или 'image/jpeg', в зависимости от формата
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Дезинфект | Профессиональная обработка',
    description: 'Избавим вас от мелких и больших неприятностей!',
    images: [OG_IMAGE_URL],
    site: '@desinfect_by',
    creator: '@desinfect_by',
  },
  
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
  
  icons: {
    icon: FAVICON_URL,
    apple: `${SITE_URL}/apple-touch-icon.png`,
  },
  
  other: {
    'telegram:title': 'Дезинфект | Профессиональная обработка',
    'telegram:description': 'Избавим вас от мелких и больших неприятностей!',
    'telegram:image': OG_IMAGE_URL,
    'telegram:card': 'summary_large_image',
  },
  
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full" suppressHydrationWarning>
      <head>
        {/* Дополнительные метатеги для гарантии */}
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 overflow-y-auto`}
      >
        <Providers>
          <Header />

          <div className="hidden md:block">
            <Sidebar />
          </div>

          <div className="md:ml-16 pt-16">
            <div className="max-w-7xl mx-auto p-4 lg:p-6">{children}</div>
          </div>

          <div className="md:ml-16">
            <Footer />
          </div>
        </Providers>
        <CookieConsent />
        <FloatingContactButton />
      </body>
    </html>
  );
}