'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ContactModal } from '@/components/ui/ContactModal/ContactModal';

export const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 `}
      >
        <ContactModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          trigger={
            <div className="relative group">
              <button
                onClick={() => setIsOpen(true)}
                className="
                  flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-blue-600
                  text-white rounded-full shadow-lg
                  transition-all duration-300 hover:scale-110
                  animate-pulse-subtle
                "
              >
                <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          }
        />
      </div>
  );
};