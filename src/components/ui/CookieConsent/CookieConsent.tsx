'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

interface CookieConsentProps {
  delay?: number;
  storageKey?: string;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  delay = 1000,
  storageKey = 'cookie-consent',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem(storageKey);
    if (!hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay, storageKey]);

  const acceptAll = () => {
    const consentData = {
      accepted: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(storageKey, JSON.stringify(consentData));
    setIsVisible(false);
  };

  const decline = () => {
    const consentData = {
      accepted: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(storageKey, JSON.stringify(consentData));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-4 md:left-4 md:right-auto md:max-w-md">
      <div className="bg-white dark:bg-gray-900 rounded-t-xl md:rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Конфиденциальность
            </h3>
          </div>
          <button
            onClick={decline}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Мы используем файлы cookie для улучшения работы сайта. 
            Продолжая использовать наш сайт, вы соглашаетесь с условиями 
            обработки персональных данных.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={acceptAll} variant="default" className="flex-1">
              Принять
            </Button>
            <Button onClick={decline} variant="outline" className="flex-1">
              Отклонить
            </Button>
          </div>
        </div>

        <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 text-center">
          <Link
            href="/privacy"
            className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 underline"
          >
            Политика обработки персональных данных
          </Link>
        </div>
      </div>
    </div>
  );
};