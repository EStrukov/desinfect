'use client';

import { ContactModal } from '@/components/ui/ContactModal/ContactModal';
import { Button } from '@/components/ui/Button/Button';
import { H1, H2, H3, P, Lead } from '@/components/ui/Typography/Typography';
import { CheckCircle, Zap, Heart } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/AnimatedCard/AnimatedCard';
import { Slider } from '@/components/ui/Slider/Slider';

const slides = [
  { src: '/assets/slides/desinfection.webp', alt: 'Дезинфекция помещений' },
  { src: '/assets/slides/desinsect.webp', alt: 'Дезинсекция — борьба с насекомыми' },
  { src: '/assets/slides/deratization.webp', alt: 'Дератизация — уничтожение грызунов' },
];

export default function HomePageContent() {
  return (
    <div className="space-y-16">
      <Slider slides={slides} autoplayInterval={4000} />

      <section className="text-center section-padding rounded-2xl shadow-sm bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">
            Профессиональная дезинфекция
            <span className="block text-primary dark:text-blue-400">
              для вашего комфорта
            </span>
          </H1>
          <Lead className="mb-8 max-w-2xl mx-auto">
            Мы обеспечиваем полную защиту от вредителей и инфекций. Современные
            методы, экологичные средства, гарантия результата.
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal
              trigger={<Button variant="default">Заказать услугу</Button>}
            />
            <ContactModal
              trigger={
                <Button variant="outline">
                  Получить консультацию
                </Button>
              }
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="text-center mb-12">
          <H2 className="mb-4">Почему выбирают нас</H2>
          <P className="max-w-2xl mx-auto">
            Более 10 лет опыта в сфере дезинфекции и дезинсекции
          </P>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard className="card text-center" index={0}>
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <H3 className="mb-2">Гарантия качества</H3>
            <P>Предоставляем гарантию на все виды работ до 6 месяцев</P>
          </AnimatedCard>

          <AnimatedCard className="card text-center" index={1}>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <H3 className="mb-2">Быстро и эффективно</H3>
            <P>Современное оборудование и проверенные методики</P>
          </AnimatedCard>

          <AnimatedCard className="card text-center" index={2}>
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <H3 className="mb-2">Безопасные средства</H3>
            <P>Используем только сертифицированные и экологичные препараты</P>
          </AnimatedCard>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedCard index={0}>
              <div className="text-4xl font-bold text-primary dark:text-blue-400 mb-2">5000+</div>
              <div className="text-gray-600 dark:text-gray-400">Довольных клиентов</div>
            </AnimatedCard>
            <AnimatedCard index={1}>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Лет опыта</div>
            </AnimatedCard>
            <AnimatedCard index={2}>
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-400">Эффективность</div>
            </AnimatedCard>
            <AnimatedCard index={3}>
              <div className="text-4xl font-bold text-primary dark:text-blue-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Поддержка</div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding rounded-2xl shadow-sm bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="text-center max-w-3xl mx-auto px-4">
          <H2 className="mb-4">Готовы избавиться от проблемы?</H2>
          <Lead className="mb-8">
            Свяжитесь с нами прямо сейчас и получите бесплатную консультацию
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal
              trigger={<Button variant="default">Форма обратной связи</Button>}
            />
          </div>
        </div>
      </section>
    </div>
  );
}