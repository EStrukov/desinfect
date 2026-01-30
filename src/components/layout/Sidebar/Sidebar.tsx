'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Shield, Bug, BarChart3, Phone } from 'lucide-react';

const sidebarItems = [
  {
    title: 'Главная',
    icon: Home,
    href: '/',
  },
  {
    title: 'Услуги',
    icon: Shield,
    href: '/services',
  },
  {
    title: 'О нас',
    icon: Bug,
    href: '/about',
  },
  {
    title: 'Цены',
    icon: BarChart3,
    href: '/pricing',
  },
  {
    title: 'Контакты',
    icon: Phone,
    href: '/contact',
  },
];

export const Sidebar = memo(function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed left-0 top-16 h-[calc(100vh-64px)] bg-gradient-to-b from-primary-light to-secondary-light border-r border-primary z-40
        ${isExpanded ? 'w-64' : 'w-16'}
        transition-all duration-300 ease-in-out
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="flex flex-col h-full py-4">
        <div className="space-y-2 px-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + '/');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative flex items-center rounded-lg px-3 h-10 text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? 'bg-primary-light text-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon
                  className={`
                    h-5 w-5 flex-shrink-0 transition-colors duration-200
                    ${isActive ? 'text-primary' : 'text-gray-600 group-hover:text-gray-900'}
                  `}
                />

                <span
                  className={`
                    ml-3 overflow-hidden transition-all duration-300 ease-out
                    ${
                      isExpanded
                        ? 'max-w-xs opacity-100 translate-x-0'
                        : 'max-w-0 opacity-0 -translate-x-2'
                    }
                  `}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Уведомления - только в развернутом виде */}
      {/* {!collapsed && (
        <div className="p-4 border-t border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                3 notifications
              </p>
              <p className="text-xs text-gray-500">Check your updates</p>
            </div>
          </div>
        </div>
      )} */}

      {/* Нижняя часть Sidebar - фиксированная */}
      {/* <div className="p-4 border-t border-gray-100 flex-shrink-0">
        {!collapsed ? (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <PlusCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Upgrade Plan</h3>
                  <p className="text-sm text-gray-600">Get more features</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Upgrade Now
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <HelpCircle className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-700">Help & Support</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <PlusCircle className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <HelpCircle className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        )}
      </div> */}
    </aside>
  );
});
