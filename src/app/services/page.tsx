import React from 'react';
import Link from 'next/link';
import { H1, H2, H3, P, Lead } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';
import { ContactModal } from '@/components/ui/ContactModal/ContactModal';
import { Building2, Bug, Rat, Wind, Bus, Combine } from 'lucide-react';

export default function Services() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center section-padding bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
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
              <div className="w-16 h-16 bg-primary-light dark:bg-primary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary dark:text-primary-dark" />
              </div>
              <H3 className="mb-4 text-primary dark:text-primary-dark">Дезинфекция помещений</H3>
              <P className="mb-4">
                Полная дезинфекция жилых и коммерческих помещений с
                использованием современных средств.
              </P>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Обработка поверхностей</li>
                <li>• Дезинфекция воздуха</li>
                <li>• Уничтожение бактерий и вирусов</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary-light dark:bg-secondary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="w-8 h-8 text-secondary dark:text-secondary-dark" />
              </div>
              <H3 className="mb-4 text-secondary dark:text-secondary-dark">Дезинсекция</H3>
              <P className="mb-4">
                Борьба с насекомыми-вредителями: тараканы, муравьи, клопы и
                другие.
              </P>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Безопасные препараты</li>
                <li>• Гарантия результата</li>
                <li>• Профилактика повторного появления</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent-light dark:bg-accent-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rat className="w-8 h-8 text-accent dark:text-accent-dark" />
              </div>
              <H3 className="mb-4 text-accent dark:text-accent-dark">Дератизация</H3>
              <P className="mb-4">
                Уничтожение грызунов: крысы, мыши с использованием гуманных
                методов.
              </P>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Экологичные приманки</li>
                <li>• Профессиональное оборудование</li>
                <li>• Полная ликвидация популяции</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary-light dark:bg-secondary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-secondary dark:text-secondary-dark" />
              </div>
              <H3 className="mb-4 text-secondary dark:text-secondary-dark">Дезодорация</H3>
              <P className="mb-4">
                Удаление неприятных запахов и освежение воздуха в помещениях.
              </P>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Нейтрализация запахов</li>
                <li>• Экологичные средства</li>
                <li>• Долговременный эффект</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-light dark:bg-primary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="w-8 h-8 text-primary dark:text-primary-dark" />
              </div>
              <H3 className="mb-4 text-primary dark:text-primary-dark">Обработка транспорта</H3>
              <P className="mb-4">
                Дезинфекция автомобилей, общественного транспорта и спецтехники.
              </P>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Полная обработка салона</li>
                <li>• Антибактериальная защита</li>
                <li>• Безопасно для пассажиров</li>
              </ul>
            </div>

            <div className="card group hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary-light dark:bg-secondary-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Combine className="w-8 h-8 text-secondary dark:text-secondary-dark" />
              </div>
              <H3 className="mb-4 text-secondary dark:text-secondary-dark">Комплексная обработка</H3>
              <P className="mb-4">
                Полный комплекс мероприятий по санитарной обработке объектов.
              </P>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Осмотр и диагностика</li>
                <li>• Выбор оптимальных средств</li>
                <li>• Контроль качества</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="text-center max-w-3xl mx-auto px-4">
          <H2 className="mb-4">Нужна консультация?</H2>
          <Lead className="mb-8">
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