'use client';

import { useState, ReactNode } from 'react';
import { Modal } from '@/components/ui/Modal/Modal';
import { ContactForm } from '@/components/ui/ContactForm/ContactForm';

interface ContactModalProps {
  title?: string;
  trigger?: ReactNode;
  showTitle?: boolean;
}

export function ContactModal({
  title = 'Связаться с нами',
  trigger,
  showTitle = false,
}: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {trigger && <div onClick={openModal}>{trigger}</div>}

      <Modal isOpen={isOpen} onClose={closeModal} title={title}>
        <ContactForm showTitle={showTitle} onClose={closeModal} />
      </Modal>
    </>
  );
}

// Hook for imperative control
export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalComponent = ({
    title = 'Связаться с нами',
    showTitle = false,
  }: {
    title?: string;
    showTitle?: boolean;
  }) => (
    <Modal isOpen={isOpen} onClose={closeModal} title={title}>
      <ContactForm showTitle={showTitle} onClose={closeModal} />
    </Modal>
  );

  return {
    openModal,
    closeModal,
    isOpen,
    ModalComponent,
  };
}
