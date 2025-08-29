import React from "react";

type AuroraBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Lightweight aurora-style background wrapper using layered radial gradients.
 * Safe, dependency-free, and SSR-friendly.
 */
export function AuroraBackground({ className = "", children }: AuroraBackgroundProps) {
  return (
    <div className={`relative isolate ${className}`}>
      {/* Aurora layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-[50vh] w-[50vh] rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-[55vh] w-[55vh] rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[40vh] w-[90vw] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export default AuroraBackground;


