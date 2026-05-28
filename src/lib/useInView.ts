'use client';

import { useRef, useState, useEffect, type RefObject } from 'react';

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
): { ref: RefObject<T | null>; isVisible: boolean } {
  const ref = useRef<T>(null!);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
