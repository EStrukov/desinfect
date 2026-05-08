// components/sections/pricing/PricingCard.tsx

import React from 'react';
import { H3, P } from '@/components/ui/Typography/Typography';
import { Button } from '@/components/ui/Button/Button';
import { ContactModal } from '@/components/ui/ContactModal/ContactModal';
import { Check } from 'lucide-react';
import { PricingCardData } from '@/lib/priceConfig';

interface PricingCardProps {
  data: PricingCardData;
}

const priceColorMap = {
  primary: 'text-primary dark:text-primary-dark',
  secondary: 'text-secondary dark:text-secondary-dark',
  accent: 'text-accent dark:text-accent-dark',
};

const buttonVariantMap = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

export const PricingCard: React.FC<PricingCardProps> = ({ data }) => {
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
    <div className={`card relative ${isPopular ? 'border-2 border-secondary dark:border-secondary-dark' : ''}`}>
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

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
            <Check className="w-5 h-5 text-secondary dark:text-secondary-dark mr-2 flex-shrink-0" />
            {feature.text}
          </li>
        ))}
      </ul>

      <ContactModal
        trigger={<Button className={`${buttonVariantMap[buttonVariant]} w-full`}>Заказать</Button>}
      />
    </div>
  );
};