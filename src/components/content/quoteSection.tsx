"use client";
//#region Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
//#endregion

export default function QuoteSection() {
  //#region useRefs
  const containerRef = useRef<HTMLDivElement>(null);
  //#endregion

  //#region Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    [50, 0, 0, -50]
  );
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.95, 1, 0.95]);
  //#endregion

  return (
    <section
      ref={containerRef}
      className="relative bg-[#101010] text-white"
      id="quote"
    >
      <div className="sticky top-0 py-48 flex items-center justify-center">
        <motion.div
          style={{ opacity, y, scale }}
          className="container mx-auto px-6 lg:px-12 text-center"
        >
          <motion.span className="text-8xl md:text-[12rem] font-serif leading-none text-white/10 block">
            {'"'}
          </motion.span>

          <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-5xl mx-auto -mt-16 md:-mt-24">
            The night belongs to those who feel the music.
          </blockquote>

          <footer className="mt-12">
            <p className="font-mono text-sm tracking-[0.2em] uppercase text-white/50">
              — Nina Kraviz — DJ & Producer
            </p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
}
