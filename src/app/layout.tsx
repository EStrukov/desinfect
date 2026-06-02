import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Providers } from '@/components/Providers';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { CookieConsent } from '@/components/ui/CookieConsent/CookieConsent';
import { FloatingContactButton } from '@/components/ui/FloatingContactButton/FloatingContactButton';
import { getSiteUrl, createPageMetadata, ogPageConfig } from '@/lib/og';

const inter = Inter({ subsets: ['latin'] });

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
  ...createPageMetadata('root', SITE_URL),
  title: {
    default: ogPageConfig.root.title,
    template: '%s | Дезинфект',
  },
  metadataBase: new URL(SITE_URL),

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
    icon: [{ url: '/favicon.ico', sizes: 'any' }],
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
    me: ['@desinfect_by'],
  },

  // Другие метатеги
  category: 'Услуги дезинфекции',
  authors: [{ name: 'Дезинфект', url: SITE_URL }],
  creator: 'Дезинфект',
  publisher: 'Дезинфект',

  // Альтернативные языки
  alternates: {
    canonical: '/',
    languages: {
      ru: '/',
    },
  },
} as Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="//api.telegram.org" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <meta
          name="yandex-verification"
          content="your-yandex-verification-code"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 overflow-y-auto`}
        suppressHydrationWarning
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
