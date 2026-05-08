import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

interface LogoProps {
  variant?: 'header' | 'footer';
}

export function Logo({ variant = 'header' }: LogoProps) {
  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Дезинфект</span>
          <div className="text-sm text-gray-600 dark:text-gray-400">Профессиональная защита</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse group-hover:animate-bounce"></div>
        </div>
        <div className="hidden sm:block">
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
            Дезинфект
          </span>
          <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            Профессиональная защита
          </div>
        </div>
      </Link>
    </div>
  );
}