import React from 'react';
import { H1, H2, P, Lead } from '@/components/ui/Typography/Typography';
import { extraServices, pricingCards } from '@/lib/priceConfig';
import { ExtraServiceCard } from '@/components/ui/ExtraServiceCard/ExtraServiceCard';
import { PricingCard } from '@/components/ui/PricingCard/PricingCard';

export default function Pricing() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center section-padding bg-gradient-to-br from-primary-light to-secondary-light dark:from-primary-light/20 dark:to-secondary-light/20">
        <div className="max-w-4xl mx-auto px-4">
          <H1 className="mb-6">Цены на услуги</H1>
          <Lead className="mb-8 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых платежей
          </Lead>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCards.map((card) => (
              <PricingCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <H2 className="mb-4">Дополнительные услуги</H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extraServices.map((service) => (
              <ExtraServiceCard key={service.id} data={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
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