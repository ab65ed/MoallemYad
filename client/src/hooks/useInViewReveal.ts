"use client";

import { useEffect, useRef, useState } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export function useInViewReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = { root: null, rootMargin: "0px", threshold: 0.15 }
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible } as const;
}


