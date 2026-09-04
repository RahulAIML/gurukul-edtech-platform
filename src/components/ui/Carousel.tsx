'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  /** Auto-advance left to right; pauses on hover/touch and respects reduced-motion. */
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className = '',
  autoplay = false,
  autoplayDelay = 3500,
  loop = false,
}) => {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const plugins =
    autoplay && !prefersReducedMotion
      ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })]
      : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: loop || autoplay,
      align: 'start',
      dragFree: false,
      skipSnaps: prefersReducedMotion,
    },
    plugins
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={className}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {children.map((child, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] px-1">
              {child}
            </div>
          ))}
        </div>
      </div>

      {children.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === selectedIndex ? 'w-6 bg-purple-700' : 'w-1.5 bg-slate-200'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
