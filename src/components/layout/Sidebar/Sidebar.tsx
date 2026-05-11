'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Shield, Bug, BarChart3, Phone } from 'lucide-react';

const sidebarItems = [
  { title: 'Главная', icon: Home, href: '/' },
  { title: 'Услуги', icon: Shield, href: '/services' },
  { title: 'О нас', icon: Bug, href: '/about' },
  { title: 'Цены', icon: BarChart3, href: '/pricing' },
  { title: 'Контакты', icon: Phone, href: '/contact' },
];

export const Sidebar = memo(function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 transition-[width] duration-100 ease-in-out ${
        isExpanded ? 'w-48' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="flex flex-col h-full py-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative flex items-center h-10 w-full text-sm font-medium transition-colors duration-200
                  ${
                    isActive
                      ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200'
                  }
                `}
              >
                {/* Иконка всегда шириной 64px, по центру — 16px иконка */}
                <div className="flex items-center justify-center w-16 h-10 flex-shrink-0">
                  <Icon
                    className={`h-5 w-5 transition-colors duration-200 ${
                      isActive
                        ? 'text-primary dark:text-blue-400'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  />
                </div>

                {/* Текст — появляется справа */}
                <span
                  className={`whitespace-nowrap text-left transition-all duration-300 ease-out ${
                    isExpanded
                      ? 'max-w-xs opacity-100 translate-x-0'
                      : 'max-w-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
});