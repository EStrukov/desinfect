import React from 'react';
import type { Metadata } from 'next';
import { H1, H2, P, Lead } from '@/components/ui/Typography/Typography';
import { extraServices, pricingCards } from '@/lib/priceConfig';
import { ExtraServiceCard } from '@/components/ui/ExtraServiceCard/ExtraServiceCard';
import { PricingCard } from '@/components/ui/PricingCard/PricingCard';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL 
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://desinfect.vercel.app');

export const metadata: Metadata = {
  title: 'Цены',
  description: 'Стоимость услуг дезинфекции, дезинсекции и дератизации. Прозрачное ценообразование без скрытых платежей. Работаем по Минску и области.',
  openGraph: {
    title: 'Цены на дезинфекцию | Дезинфект',
    description: 'Стоимость услуг дезинфекции, дезинсекции и дератизации. Прозрачное ценообразование без скрытых платежей.',
    url: `${SITE_URL}/pricing`,
    siteName: 'Дезинфект',
    images: [
      {
        url: `${SITE_URL}/og1.png`,
        secureUrl: `${SITE_URL}/og1.png`,
        width: 1200,
        height: 630,
        alt: 'Цены на услуги Дезинфект',
        type: 'image/png',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Цены на дезинфекцию | Дезинфект',
    description: 'Стоимость услуг дезинфекции, дезинсекции и дератизации.',
    images: [`${SITE_URL}/og1.png`],
  },
};

export default function Pricing() {
  return (
    <div className="space-y-16">
      <section className="text-center section-padding rounded-2xl shadow-sm bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">Цены на услуги</H1>
          <Lead className="mb-8 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых платежей
          </Lead>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCards.map((card, index) => (
              <PricingCard key={card.id} data={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <H2 className="mb-4">Дополнительные услуги</H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraServices.map((service, index) => (
              <ExtraServiceCard key={service.id} data={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <P className="mb-4">
            Цены указаны ориентировочно. Точная стоимость рассчитывается
            индивидуально после осмотра объекта.
          </P>
        </div>
      </section>
    </div>
  );
}