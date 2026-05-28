'use client';

import React, { useEffect, useCallback, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface SliderProps {
  slides: { src: string; alt?: string }[];
  autoplayInterval?: number;
  gap?: number;
}

export const Slider: React.FC<SliderProps> = ({
  slides,
  autoplayInterval = 4000,
  gap = 8,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    containScroll: 'trimSnaps',
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (!emblaApi) return;

    intervalRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayInterval);
  }, [emblaApi, autoplayInterval, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [startAutoplay, stopAutoplay]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full mx-auto px-0">
      <div
        className="overflow-hidden rounded-2xl shadow-lg md:shadow-xl mx-0"
        ref={emblaRef}
      >
        <div
          className="flex"
          style={{ marginLeft: -(gap / 2), marginRight: -(gap / 2) }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_80%] min-w-0 relative aspect-video"
              style={{ paddingLeft: gap / 2, paddingRight: gap / 2 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt || `Slide ${index + 1}`}
                width={1200}
                height={675}
                className="w-full h-full object-cover select-none pointer-events-none rounded-md"
                loading={index === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-3 md:mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`rounded-full transition-all duration-500 ease-out ${
              index === currentIndex
                ? 'w-6 md:w-8 h-1.5 bg-primary dark:bg-primary-dark'
                : 'w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
