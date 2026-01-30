'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal/Modal';
import { ContactForm } from '@/components/ui/ContactForm/ContactForm';
import { Button } from '@/components/ui/Button/Button';
import { H1, H2, H3, P, Lead } from '@/components/ui/Typography/Typography';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center section-padding bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">
            Профессиональная дезинфекция
            <span className="block text-primary">для вашего комфорта</span>
          </H1>
          <Lead className="mb-8 max-w-2xl mx-auto">
            Мы обеспечиваем полную защиту от вредителей и инфекций. Современные
            методы, экологичные средства, гарантия результата.
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">Заказать услугу</Button>
            <Button variant="outline" className="btn-outline">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16">
        <div className="text-center mb-12">
          <H2 className="mb-4">Почему выбирают нас</H2>
          <P className="max-w-2xl mx-auto">
            Более 10 лет опыта в сфере дезинфекции и дезинсекции
          </P>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <H3 className="mb-2">Гарантия качества</H3>
            <P>Предоставляем гарантию на все виды работ до 6 месяцев</P>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <H3 className="mb-2">Быстро и эффективно</H3>
            <P>Современное оборудование и проверенные методики</P>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <H3 className="mb-2">Безопасные средства</H3>
            <P>Используем только сертифицированные и экологичные препараты</P>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-600">Эффективность</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="text-center max-w-3xl mx-auto px-4">
          <H2 className="mb-4 text-gray-900">Готовы избавиться от проблемы?</H2>
          <Lead className="mb-8 text-gray-700">
            Свяжитесь с нами прямо сейчас и получите бесплатную консультацию
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              Позвонить: +7 (495) 123-45-67
            </Button>
            <Button variant="outline" className="btn-outline">
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Связаться с нами"
      >
        <ContactForm showTitle={false} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
