'use client';

import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { type ReviewData } from '@/lib/reviewsConfig';
import { useInView } from '@/lib/useInView';
import { P } from '@/components/ui/Typography/Typography';

interface ReviewCardProps {
  data: ReviewData;
  index?: number;
  animate?: boolean;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name: string): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-amber-500',
    'bg-purple-500',
    'bg-rose-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-cyan-500',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Рейтинг: ${rating} из 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <span key={star}>
            {filled ? (
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ) : half ? (
              <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ) : (
              <Star className="w-4 h-4 text-gray-300 dark:text-gray-600" />
            )}
          </span>
        );
      })}
    </div>
  );
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  data,
  index = 0,
  animate = true,
}) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const { name, role, text, rating, date } = data;

  return (
    <div
      ref={animate ? ref : undefined}
      className={`card flex flex-col h-full ${
        animate ? (isVisible ? 'animate-in' : 'opacity-0') : ''
      }`}
      style={
        animate && isVisible
          ? { animationDelay: `${index * 100}ms` }
          : undefined
      }
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-full ${getAvatarColor(name)} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
        >
          {getInitials(name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {name}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {role}
          </div>
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap flex-shrink-0">
          {date}
        </div>
      </div>

      <RatingStars rating={rating} />

      <P className="mt-3 flex-1">&laquo;{text}&raquo;</P>
    </div>
  );
};
