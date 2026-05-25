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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL 
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://desinfect.vercel.app');

const OG_IMAGE_URL = `${SITE_URL}/og.png`;
const FAVICON_URL = `${SITE_URL}/favicon.ico`;

export const metadata: Metadata = {
  title: {
    default: 'Дезинфект | Профессиональная дезинфекция, дезинсекция и дератизация',
    template: '%s | Дезинфект',
  },
  description: 'Избавим вас от мелких и больших неприятностей! Профессиональная обработка помещений от насекомых, грызунов и бактерий. Гарантия качества. Работаем по Минску и области.',
  
  metadataBase: new URL(SITE_URL),
  
  // Open Graph (Facebook, LinkedIn, Viber, WhatsApp, Telegram, Slack, Discord)
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
        type: 'image/png',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
    // Дополнительные поля для Facebook
    determiner: 'auto',
    emails: ['info@desinfect.by'],
    phoneNumbers: ['+375291234567'],
    countryName: 'Belarus',
  },
  
  // Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: 'Дезинфект | Профессиональная обработка',
    description: 'Избавим вас от мелких и больших неприятностей!',
    images: [OG_IMAGE_URL],
    site: '@desinfect_by',
    creator: '@desinfect_by',
  },
  
  // Robots
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
  
  // Иконки
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      // { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#10b981' },
    ],
  },
  
  // Apple
  appleWebApp: {
    capable: true,
    title: 'Дезинфект',
    statusBarStyle: 'black-translucent',
  },
  
  // Format detection
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  // Верификация поисковых систем
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    me: ['@desinfect_by'], // для Mastodon
  },
  
  // Другие метатеги
  category: 'Услуги дезинфекции',
  authors: [{ name: 'Дезинфект', url: SITE_URL }],
  creator: 'Дезинфект',
  publisher: 'Дезинфект',
  
  // Альтернативные языки (опционально)
  alternates: {
    canonical: '/',
    languages: {
      'ru': '/',
      // 'be': '/be',
      // 'en': '/en',
    },
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
        {/* ========== OPEN GRAPH (Facebook, LinkedIn, Viber, WhatsApp) ========== */}
        <meta property="og:title" content="Дезинфект | Профессиональная обработка помещений" />
        <meta property="og:description" content="Избавим вас от мелких и больших неприятностей! Профессиональная дезинфекция, дезинсекция и дератизация в Минске и области." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Дезинфект" />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Дезинфект — профессиональная обработка помещений" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:locale:alternate" content="be_BY" />
        
        {/* ========== TWITTER ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="twitter:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <meta name="twitter:image:alt" content="Дезинфект — профессиональная обработка" />
        <meta name="twitter:site" content="@desinfect_by" />
        <meta name="twitter:creator" content="@desinfect_by" />
        
        {/* ========== TELEGRAM ========== */}
        <meta property="telegram:title" content="Дезинфект | Профессиональная обработка" />
        <meta property="telegram:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta property="telegram:image" content={OG_IMAGE_URL} />
        
        {/* ========== VIBER ========== */}
        <meta property="viber:title" content="Дезинфект | Профессиональная обработка" />
        <meta property="viber:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta property="viber:image" content={OG_IMAGE_URL} />
        
        {/* ========== LINKEDIN ========== */}
        <meta property="linkedin:title" content="Дезинфект | Профессиональная обработка" />
        <meta property="linkedin:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta property="linkedin:image" content={OG_IMAGE_URL} />
        
        {/* ========== PINTEREST ========== */}
        <meta name="pinterest:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="pinterest:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta name="pinterest:image" content={OG_IMAGE_URL} />
        
        {/* ========== WHATSAPP ========== */}
        <meta property="wa:title" content="Дезинфект | Профессиональная обработка" />
        <meta property="wa:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta property="wa:image" content={OG_IMAGE_URL} />
        
        {/* ========== DISCORD ========== */}
        <meta name="discord:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="discord:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta name="discord:image" content={OG_IMAGE_URL} />
        
        {/* ========== SLACK ========== */}
        <meta name="slack:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="slack:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta name="slack:image" content={OG_IMAGE_URL} />
        
        {/* ========== FACEBOOK (дополнительно) ========== */}
        <meta property="fb:app_id" content="your-facebook-app-id" />
        <meta property="fb:pages" content="your-facebook-page-id" />
        
        {/* ========== INSTAGRAM (для превью ссылок) ========== */}
        <meta property="inst:title" content="Дезинфект | Профессиональная обработка" />
        <meta property="inst:description" content="Избавим вас от мелких и больших неприятностей!" />
        
        {/* ========== TIKTOK ========== */}
        <meta name="tiktok:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="tiktok:description" content="Избавим вас от мелких и больших неприятностей!" />
        
        {/* ========== APPLE / iOS ========== */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Дезинфект" />
        <meta name="apple-itunes-app" content="app-id=your-app-id" />
        
        {/* ========== ANDROID ========== */}
        <meta name="theme-color" content="#10b981" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* ========== YANDEX ========== */}
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* ========== GOOGLE ========== */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* ========== MASTODON ========== */}
        <link rel="me" href="https://mastodon.social/@desinfect_by" />
        
        {/* ========== MICROSOFT TEAMS ========== */}
        <meta name="msteams:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="msteams:description" content="Избавим вас от мелких и больших неприятностей!" />
        <meta name="msteams:image" content={OG_IMAGE_URL} />
        
        {/* ========== SIGNAL ========== */}
        <meta name="signal:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="signal:description" content="Избавим вас от мелких и больших неприятностей!" />
        
        {/* ========== ELEMENT / MATRIX ========== */}
        <meta name="element:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="element:description" content="Избавим вас от мелких и больших неприятностей!" />
        
        {/* ========== THREADS ========== */}
        <meta name="threads:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="threads:description" content="Избавим вас от мелких и больших неприятностей!" />
        
        {/* ========== BLUESKY ========== */}
        <meta name="bsky:title" content="Дезинфект | Профессиональная обработка" />
        <meta name="bsky:description" content="Избавим вас от мелких и больших неприятностей!" />
        
        {/* ========== Общие метатеги ========== */}
        <meta name="author" content="Дезинфект" />
        <meta name="copyright" content="Дезинфект" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={SITE_URL} />
        
        {/* Альтернативные языки */}
        <link rel="alternate" hrefLang="ru" href={SITE_URL} />
        <link rel="alternate" hrefLang="be" href={`${SITE_URL}/be`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//api.telegram.org" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
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