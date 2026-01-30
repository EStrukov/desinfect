import React from 'react';
import Link from 'next/link';
import { H1, H2, H3, P, Lead } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';
import { ContactModal } from '@/components/ui/ContactModal/ContactModal';

export default function Services() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center section-padding bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">Наши услуги</H1>
          <Lead className="mb-8 max-w-3xl mx-auto">
            Профессиональная дезинфекция и дезинсекция для вашего комфорта и
            безопасности
          </Lead>
        </div>
      </section>

      {/* Услуги */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-light">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <H3 className="mb-4 text-primary">Дезинфекция помещений</H3>
              <P className="mb-4">
                Полная дезинфекция жилых и коммерческих помещений с
                использованием современных средств.
              </P>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Обработка поверхностей</li>
                <li>• Дезинфекция воздуха</li>
                <li>• Уничтожение бактерий и вирусов</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <H3 className="mb-4 text-secondary">Дезинсекция</H3>
              <P className="mb-4">
                Борьба с насекомыми-вредителями: тараканы, муравьи, клопы и
                другие.
              </P>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Безопасные препараты</li>
                <li>• Гарантия результата</li>
                <li>• Профилактика повторного появления</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <H3 className="mb-4 text-accent">Дератизация</H3>
              <P className="mb-4">
                Уничтожение грызунов: крысы, мыши с использованием гуманных
                методов.
              </P>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Экологичные приманки</li>
                <li>• Профессиональное оборудование</li>
                <li>• Полная ликвидация популяции</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m-3 7.5A9.5 9.5 0 1121.5 12 9.5 9.5 0 0112 2.5z"
                  />
                </svg>
              </div>
              <H3 className="mb-4 text-success">Дезодорация</H3>
              <P className="mb-4">
                Удаление неприятных запахов и освежение воздуха в помещениях.
              </P>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Нейтрализация запахов</li>
                <li>• Экологичные средства</li>
                <li>• Долговременный эффект</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <H3 className="mb-4 text-primary">Обработка транспорта</H3>
              <P className="mb-4">
                Дезинфекция автомобилей, общественного транспорта и спецтехники.
              </P>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Полная обработка салона</li>
                <li>• Антибактериальная защита</li>
                <li>• Безопасно для пассажиров</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <H3 className="mb-4 text-secondary">Комплексная обработка</H3>
              <P className="mb-4">
                Полный комплекс мероприятий по санитарной обработке объектов.
              </P>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Осмотр и диагностика</li>
                <li>• Выбор оптимальных средств</li>
                <li>• Контроль качества</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="text-center max-w-3xl mx-auto px-4">
          <H2 className="mb-4 text-gray-900">Нужна консультация?</H2>
          <Lead className="mb-8 text-gray-700">
            Свяжитесь с нами для получения бесплатной консультации и расчета
            стоимости услуг
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal
              trigger={
                <Button className="btn-primary">Связаться с нами</Button>
              }
            />
            <Link href="/pricing">
              <Button variant="outline" className="btn-outline">
                Посмотреть цены
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
