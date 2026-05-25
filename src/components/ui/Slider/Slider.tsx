'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface SliderProps {
  slides: { src: string; alt?: string }[];
  autoplayInterval?: number;
}

export const Slider: React.FC<SliderProps> = ({
  slides,
  autoplayInterval = 4000,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [emblaApi, autoplayInterval]);

  useEffect(() => {
    const cleanup = autoplay();
    return () => cleanup?.();
  }, [autoplay]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto px-0 md:px-8">
      <div
        className="overflow-hidden rounded-2xl shadow-lg md:shadow-xl mx-2 md:mx-0"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <Image
                src={slide.src}
                alt={slide.alt || `Slide ${index + 1}`}
                width={1200}
                height={560}
                className="w-full h-52 xs:h-64 sm:h-80 md:h-[480px] lg:h-[560px] object-cover select-none pointer-events-none"
                loading={index === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 text-center">
                <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wide px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-sm md:bg-black/30">
                  {slide.alt}
                </span>
              </div>
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