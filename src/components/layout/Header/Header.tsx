'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button/Button';
import { Logo } from '@/components/ui/Logo/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle/ThemeToggle';
import { contactInfo } from '@/lib/contacts';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Услуги' },
  { href: '/about', label: 'О нас' },
  { href: '/pricing', label: 'Цены' },
  { href: '/contact', label: 'Контакты' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Logo />

          {/* Правая часть */}
          <div className="flex items-center gap-2">
            {/* Телефон */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden md:inline-flex text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium mr-2"
            >
              {contactInfo.phone}
            </a>

            {/* Переключатель темы */}
            <ThemeToggle />

            {/* Бургер-меню */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
              <a
                href={`tel:${contactInfo.phone}`}
                className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="block px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}