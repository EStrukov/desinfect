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

export const metadata: Metadata = {
  title: 'Дезинфект',
  description: 'Избавим вас от мелких и больших неприятностей!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 overflow-y-auto`}>
        <Providers>
          {/* Header - фиксированный */}
          <Header />

          {/* Sidebar - фиксированный */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Основной контент */}
          <div className="md:ml-16 pt-16">
            <div className="max-w-7xl mx-auto p-4 lg:p-6">{children}</div>
          </div>

          {/* Footer - после контента */}
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