import Link from 'next/link';
import { Home, Search, AlertCircle, ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 py-12">
      <div className="max-w-md w-full text-center">
        {/* Иконка ошибки */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-red-200 to-orange-200 rounded-full flex items-center justify-center">
              <AlertCircle className="w-16 h-16 text-red-500" />
            </div>
          </div>

          <div className="text-9xl font-bold text-gray-200 absolute inset-0 flex items-center justify-center -z-10">
            404
          </div>
        </div>

        {/* Заголовок и описание */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-4 py-2">
            <Search className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-700">
              Check the URL or try one of these links:
            </span>
          </div> */}
        </div>

        {/* Кнопки навигации */}
        <div className="flex flex-col gap-4 mb-10">
          <Button size="lg" className="justify-center">
            <Link href="/" className="flex">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>

          {/* <Button size="lg" variant="outline" className="justify-center">
            <Link href="/dashboard">
              <Compass className="w-5 h-5 mr-2" />
              Go to Dashboard
            </Link>
          </Button> */}
        </div>

        {/* Быстрые ссылки */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
          <div className="grid grid-cols-2 gap-3">
            {/* <Link
              href="/blog"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                Blog
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
            </Link> */}

            <Link
              href="/about"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                About
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
            </Link>

            {/* <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                Contact
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
            </Link>

            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                Projects
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
            </Link> */}
          </div>
        </div>

        {/* Контактная информация */}
        {/* <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Need additional help?</p>
          <Link
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 text-sm"
          >
            Contact our support team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
