"use client";

import { useEffect } from "react";

interface ScrollControllerProps {
  scrollMultiplier?: number; // How much to multiply scroll distance (0.5 = half speed, 2 = double speed)
  enabled?: boolean;
}

export default function ScrollController({ 
  scrollMultiplier = 1, 
  enabled = true 
}: ScrollControllerProps) {
  useEffect(() => {
    if (!enabled || scrollMultiplier === 1) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // Only handle vertical scrolling
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        
        if (!isScrolling) {
          isScrolling = true;
          
          // Calculate the adjusted scroll distance
          const adjustedDelta = e.deltaY * scrollMultiplier;
          
          // Apply the scroll
          window.scrollBy({
            top: adjustedDelta,
            behavior: 'auto' // Use 'auto' for instant scroll, or 'smooth' for smooth
          });

          // Reset scrolling flag after a short delay
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 50);
        }
      }
    };

    // Add event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [scrollMultiplier, enabled]);

  return null;
}

