import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'header' | 'footer';
}

export function Logo({ variant = 'header' }: LogoProps) {
  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="/assets/logo.webp"
          alt="Дезинфект"
          width={48}
          height={48}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
        <div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Дезинфект
          </span>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Профессиональная защита
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/assets/logo.webp"
          alt="Дезинфект"
          width={160}
          height={160}
          className="h-8 md:h-10 w-auto object-contain"
        />
      </Link>
    </div>
  );
}