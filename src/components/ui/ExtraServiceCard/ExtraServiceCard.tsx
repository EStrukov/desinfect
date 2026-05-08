// components/sections/pricing/ExtraServiceCard.tsx

import React from 'react';
import { H3, P } from '@/components/ui/Typography/Typography';
import { ExtraServiceData } from '@/lib/priceConfig';

interface ExtraServiceCardProps {
  data: ExtraServiceData;
}

const priceColorMap = {
  success: 'text-success dark:text-secondary-dark',
  accent: 'text-accent dark:text-accent-dark',
  primary: 'text-primary dark:text-primary-dark',
};

export const ExtraServiceCard: React.FC<ExtraServiceCardProps> = ({ data }) => {
  const { title, description, price, priceColor = 'primary' } = data;

  return (
    <div className="card flex justify-between items-center">
      <div>
        <H3 className="font-semibold">{title}</H3>
        <P className="text-sm">{description}</P>
      </div>
      <span className={`text-lg font-bold ${priceColorMap[priceColor]}`}>
        {price}
      </span>
    </div>
  );
};