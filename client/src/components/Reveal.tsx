"use client";

import React from "react";
import { useInViewReveal } from "@/hooks/useInViewReveal";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function Reveal({ children, className, delayMs = 0 }: Props) {
  const { ref, isVisible } = useInViewReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={
        "transition-all duration-700 ease-out will-change-transform " +
        (isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6") +
        (className ? " " + className : "")
      }
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}


