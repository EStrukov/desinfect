'use client';

import React from 'react';
import { H3, P } from '@/components/ui/Typography/Typography';
import { type ServiceCardData, iconMap } from '@/lib/servicesConfig';
import { useInView } from '@/lib/useInView';

interface ServiceCardProps {
  data: ServiceCardData;
  index?: number;
}

const bgColorMap: Record<string, string> = {
  primary: 'bg-primary-light dark:bg-primary-light/30',
  secondary: 'bg-secondary-light dark:bg-secondary-light/30',
  accent: 'bg-accent-light dark:bg-accent-light/30',
};

const iconColorMap: Record<string, string> = {
  primary: 'text-primary dark:text-primary-dark',
  secondary: 'text-secondary dark:text-secondary-dark',
  accent: 'text-accent dark:text-accent-dark',
};

const titleColorMap: Record<string, string> = {
  primary: 'text-primary dark:text-primary-dark',
  secondary: 'text-secondary dark:text-secondary-dark',
  accent: 'text-accent dark:text-accent-dark',
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ data, index = 0 }) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const { title, description, icon, benefits, colorClass } = data;
  const Icon = iconMap[icon];

  return (
    <div
      ref={ref}
      className={`card group hover:shadow-lg transition-shadow ${isVisible ? 'animate-in' : 'opacity-0'}`}
      style={isVisible ? { animationDelay: `${index * 150}ms` } : undefined}
    >
      <div
        className={`w-16 h-16 ${bgColorMap[colorClass]} rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <Icon className={`w-8 h-8 ${iconColorMap[colorClass]}`} />
      </div>
      <H3 className={`mb-4 ${titleColorMap[colorClass]}`}>{title}</H3>
      <P className="mb-4">{description}</P>
      <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
        {benefits.map((benefit, i) => (
          <li key={i}>• {benefit}</li>
        ))}
      </ul>
    </div>
  );
};