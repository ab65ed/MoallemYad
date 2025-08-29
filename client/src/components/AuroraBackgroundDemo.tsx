"use client";

import React from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "@/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <div className="relative flex items-center justify-center px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-black/30 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10 shadow-[0_10px_40px_-12px_rgba(0,0,0,.3)]">
            <div className="h-1.5 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-500" />

            <div className="p-6 sm:p-10 text-center">
              <h1 className="font-yekan text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-300">
                Background lights are cool you know.
              </h1>

              <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-2xl text-slate-700/90 dark:text-slate-200/90 leading-relaxed max-w-3xl mx-auto">
                And this, is chemical burn.
              </p>

              <div className="mt-8 sm:mt-10 flex items-center justify-center">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group inline-flex items-center rounded-full text-sm sm:text-base font-semibold"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                  <span className="relative rounded-full px-6 sm:px-7 py-2.5 sm:py-3 bg-black/70 dark:bg-white/90 text-white dark:text-black backdrop-blur-md ring-1 ring-black/10 dark:ring-white/10">
                    Debug now
                  </span>
                </motion.button>
              </div>
            </div>
          </div>

          <div aria-hidden className="pointer-events-none absolute -inset-x-8 -bottom-10 h-24 bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent" />
        </motion.div>
      </div>
    </AuroraBackground>
  );
}

export default AuroraBackgroundDemo;


