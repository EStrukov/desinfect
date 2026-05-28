'use client';

import React, { type ReactNode } from 'react';
import { useInView } from '@/lib/useInView';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  index = 0,
}) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-in' : 'opacity-0'}`}
      style={isVisible ? { animationDelay: `${index * 100}ms` } : undefined}
    >
      {children}
    </div>
  );
};
