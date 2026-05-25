'use client';

import React from 'react';
import { H3, P } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';
import { ContactModal } from '@/components/ui/ContactModal/ContactModal';
import { Check } from 'lucide-react';
import { PricingCardData } from '@/lib/priceConfig';
import { useInView } from '@/lib/useInView';

interface PricingCardProps {
  data: PricingCardData;
  index?: number;
}

const priceColorMap = {
  primary: 'text-primary dark:text-primary-dark',
  secondary: 'text-secondary dark:text-secondary-dark',
  accent: 'text-accent dark:text-accent-dark',
};

export const PricingCard: React.FC<PricingCardProps> = ({ data, index = 0 }) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const {
    title,
    priceFormatted,
    area,
    features,
    isPopular,
    buttonVariant = 'primary',
    priceColor = 'primary',
  } = data;

  return (
    <div
      ref={ref}
      className={`card relative flex flex-col ${isPopular ? 'border-2 border-secondary dark:border-secondary-dark' : ''} ${isVisible ? 'animate-in' : 'opacity-0'}`}
      style={isVisible ? { animationDelay: `${index * 150}ms` } : undefined}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-secondary dark:bg-secondary-dark text-white px-4 py-1 rounded-full text-sm font-medium">
            Популярный
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <H3 className="mb-2">{title}</H3>
        <div className={`text-4xl font-bold ${priceColorMap[priceColor]} mb-2`}>
          от {priceFormatted}
        </div>
        <P>{area}</P>
      </div>

      <div className="flex-1">
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
              <Check className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2 flex-shrink-0" />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>

      <ContactModal
        trigger={
          <Button variant={buttonVariant === 'primary' ? 'default' : 'secondary'} className="w-full mt-auto">
            Заказать
          </Button>
        }
      />
    </div>
  );
};