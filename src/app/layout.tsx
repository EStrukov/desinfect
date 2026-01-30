import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';

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
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-50 overflow-y-auto`}>
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
      </body>
    </html>
  );
}
