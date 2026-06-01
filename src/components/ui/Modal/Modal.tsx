'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { H3 } from '../Typography/Typography';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  customCloseButton?: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  customCloseButton,
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    let scrollY = 0;

    if (isOpen) {
      scrollY = window.scrollY;
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.touchAction = 'none';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.touchAction = '';
      if (isOpen) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-800 sm:rounded-lg sm:shadow-xl sm:max-w-md sm:w-full sm:mx-4 sm:max-h-[90vh] overflow-y-auto w-full h-full max-w-none max-h-none rounded-none sm:inset-auto inset-0">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <H3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </H3>
          {showCloseButton &&
            (customCloseButton ? (
              customCloseButton
            ) : (
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            ))}
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
