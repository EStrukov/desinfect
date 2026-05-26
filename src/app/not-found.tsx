import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

export const metadata: Metadata = {
  title: 'Страница не найдена',
  description: 'Страница, которую вы ищете, не существует или была перемещена. Вернитесь на главную страницу Дезинфект.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-red-200 to-orange-200 dark:from-red-800/30 dark:to-orange-800/30 rounded-full flex items-center justify-center">
              <svg
                className="w-16 h-16 text-red-500 dark:text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>

          <div className="text-9xl font-bold text-gray-200 dark:text-gray-700 absolute inset-0 flex items-center justify-center -z-10">
            404
          </div>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Страница не найдена
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Страница, которую вы ищете, не существует или была перемещена.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <Link href="/">
            <Button size="lg" className="w-full justify-center">
              <Home className="w-5 h-5 mr-2" />
              На главную
            </Button>
          </Link>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Быстрые ссылки:</p>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 hover:bg-blue-50 dark:hover:border-blue-700 dark:hover:bg-blue-900/20 transition-colors group"
            >
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium">
                Услуги
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
            </Link>

            <Link
              href="/about"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 hover:bg-blue-50 dark:hover:border-blue-700 dark:hover:bg-blue-900/20 transition-colors group"
            >
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium">
                О нас
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}