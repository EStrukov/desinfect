'use client';

import React from 'react';
import { H3, P } from '@/components/ui/Typography/Typography';
import { ExtraServiceData } from '@/lib/priceConfig';
import { useInView } from '@/lib/useInView';

interface ExtraServiceCardProps {
  data: ExtraServiceData;
  index?: number;
}

const priceColorMap = {
  success: 'text-success dark:text-secondary-dark',
  accent: 'text-accent dark:text-accent-dark',
  primary: 'text-primary dark:text-primary-dark',
};

export const ExtraServiceCard: React.FC<ExtraServiceCardProps> = ({ data, index = 0 }) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const { title, description, price, priceColor = 'primary' } = data;

  return (
    <div
      ref={ref}
      className={`card flex justify-between items-center gap-4 ${isVisible ? 'animate-in' : 'opacity-0'}`}
      style={isVisible ? { animationDelay: `${index * 150}ms` } : undefined}
    >
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
