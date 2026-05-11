'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { ContactModal } from '@/components/ui/ContactModal/ContactModal';

export const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 `}
      >
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="
              flex items-center justify-center w-14 h-14
              bg-secondary hover:bg-secondary-dark
              text-white rounded-full shadow-lg
              transition-all duration-300 hover:scale-110
              animate-pulse-subtle
            "
          >
            <MessageCircle className="w-6 h-6" />
          </button>

          <div className="
            absolute bottom-full right-0 mb-2
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-200
          ">
            <div className="bg-gray-900 text-white text-xs py-1.5 px-3 rounded-lg whitespace-nowrap">
              Связаться с нами
              <div className="absolute -bottom-1 right-3 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};