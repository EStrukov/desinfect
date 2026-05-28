'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewCard } from '@/components/ui/ReviewCard/ReviewCard';
import { type ReviewData } from '@/lib/reviewsConfig';
import { H2, P } from '@/components/ui/Typography/Typography';

interface ReviewsSectionProps {
  reviews: ReviewData[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  });

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);
    return () => {
      emblaApi.off('select', updateButtons);
      emblaApi.off('reInit', updateButtons);
    };
  }, [emblaApi, updateButtons]);

  useEffect(() => {
    if (!emblaApi) return;
    const raf = requestAnimationFrame(() => {
      setPrevEnabled(emblaApi.canScrollPrev());
      setNextEnabled(emblaApi.canScrollNext());
    });
    return () => cancelAnimationFrame(raf);
  }, [emblaApi]);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <H2 className="mb-4">Отзывы наших клиентов</H2>
          <P className="max-w-2xl mx-auto">
            Более 5000 довольных клиентов за 10 лет работы. Вот что говорят о
            нас те, кому мы уже помогли.
          </P>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2"
                >
                  <ReviewCard data={review} animate={false} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!prevEnabled}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-200 ${
              prevEnabled
                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg active:scale-95'
                : 'text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-50'
            }`}
            aria-label="Предыдущие отзывы"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!nextEnabled}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-200 ${
              nextEnabled
                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-lg active:scale-95'
                : 'text-gray-300 dark:text-gray-600 cursor-not-allowed opacity-50'
            }`}
            aria-label="Следующие отзывы"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
