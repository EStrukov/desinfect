import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { H1, H2, Lead } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';
import { ContactModal } from '@/components/ui/ContactModal/ContactModal';
import { ServiceCard } from '@/components/ui/ServiceCard/ServiceCard';
import { services } from '@/lib/servicesConfig';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://desinfect.vercel.app');

export const metadata: Metadata = {
  title: 'Услуги',
  description:
    'Профессиональная дезинфекция, дезинсекция и дератизация в Минске и области. Обработка от насекомых, грызунов, плесени и бактерий. Гарантия качества.',
  openGraph: {
    title: 'Услуги по дезинфекции | Дезинфект',
    description:
      'Профессиональная дезинфекция, дезинсекция и дератизация в Минске и области. Обработка от насекомых, грызунов, плесени и бактерий.',
    url: `${SITE_URL}/services`,
    siteName: 'Дезинфект',
    images: [
      {
        url: `${SITE_URL}/og`,
        secureUrl: `${SITE_URL}/og`,
        width: 1200,
        height: 630,
        alt: 'Услуги Дезинфект — профессиональная обработка',
        type: 'image/png',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Услуги по дезинфекции | Дезинфект',
    description:
      'Профессиональная дезинфекция, дезинсекция и дератизация в Минске и области.',
    images: [`${SITE_URL}/og`],
  },
};

export default function Services() {
  return (
    <div className="space-y-16">
      <section className="text-center section-padding rounded-2xl shadow-sm bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">Наши услуги</H1>
          <Lead className="mb-8 max-w-3xl mx-auto">
            Профессиональная дезинфекция и дезинсекция для вашего комфорта и
            безопасности
          </Lead>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} data={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding rounded-2xl shadow-sm bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="text-center max-w-3xl mx-auto px-4">
          <H2 className="mb-4">Нужна консультация?</H2>
          <Lead className="mb-8">
            Свяжитесь с нами для получения бесплатной консультации и расчета
            стоимости услуг
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal
              trigger={<Button variant="default">Связаться с нами</Button>}
            />
            <Link href="/pricing">
              <Button variant="outline">Посмотреть цены</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
