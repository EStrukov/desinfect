import Link from 'next/link';

interface LogoProps {
  variant?: 'header' | 'footer';
}

export function Logo({ variant = 'header' }: LogoProps) {
  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
        <div>
          <span className="text-xl font-bold text-gray-900">Дезинфект</span>
          <div className="text-sm text-gray-600">Профессиональная защита</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse group-hover:animate-bounce"></div>
        </div>
        <div className="hidden sm:block">
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
            Дезинфект
          </span>
          <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
            Профессиональная защита
          </div>
        </div>
      </Link>
    </div>
  );
}
