'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button/Button';
import { Logo } from '@/components/ui/Logo/Logo';
import { contactInfo } from '@/lib/contacts';
import {
  Menu,
  X,
  Search,
  Bell,
  User,
  Home,
  FileText,
  Info,
  Mail,
  Settings,
} from 'lucide-react';

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
    <div className="fixed top-0 left-0 right-0 z-50 mx-auto px-4 bg-white border-b border-gray-200">
      <div className="flex h-16 items-center justify-between">
        {/* Логотип */}
        <Logo />

        {/* Контактная информация - справа */}
        <div className="hidden md:flex flex-col items-end text-sm mr-4">
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-gray-700 hover:text-primary transition-colors font-medium"
          >
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>

        {/* Мобильное меню */}
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

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-light text-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Кнопки убраны */}
          </div>
        </div>
      )}
    </div>
  );
}
