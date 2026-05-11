'use client';

import { useState, ReactNode } from 'react';
import { Modal } from '@/components/ui/Modal/Modal';
import { ContactForm } from '@/components/ui/ContactForm/ContactForm';

interface ContactModalProps {
  title?: string;
  trigger?: ReactNode;
  showTitle?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export function ContactModal({
  title = 'Связаться с нами',
  trigger,
  showTitle = false,
  isOpen: externalIsOpen,
  onClose: externalOnClose,
}: ContactModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const closeModal = externalOnClose || (() => setInternalIsOpen(false));
  const openModal = () => {
    if (externalIsOpen === undefined) setInternalIsOpen(true);
  };

  return (
    <>
      {trigger && <div onClick={openModal}>{trigger}</div>}

      <Modal isOpen={isOpen} onClose={closeModal} title={title}>
        <ContactForm showTitle={showTitle} onClose={closeModal} />
      </Modal>
    </>
  );
}