"use client";

import { Button } from "@heroui/react";
import { Lightning, Ticket } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Hero");
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 15]);

  return (
    <section
      ref={containerRef}
      className="relative h-svh w-full flex flex-col items-center justify-center overflow-hidden bg-black"
      id="hero"
    >
      {/* Background Layer: Immersive Video */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-50 grayscale"
          autoPlay
          loop
          muted
          playsInline
          src="/content/videos/hero.mp4"
        />
        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-96 bg-purple-600/10 blur-[160px] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity, filter: `blur(${blur}px)` }}
        className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-center text-center"
      >
        {/* Main Title with Layered Glow */}
        <div className="relative mb-12 group">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[240px] font-black leading-none tracking-[-0.06em] text-white uppercase italic relative z-10"
          >
            VOLTAGE
          </motion.h1>
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl lg:text-[180px] xl:text-[240px] font-black leading-none tracking-[-0.06em] text-purple-500 uppercase italic blur-3xl z-0 pointer-events-none select-none"
          >
            VOLTAGE
          </motion.div>
        </div>

        {/* Tagline & Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-3xl font-black text-white italic tracking-tight uppercase">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-4 justify-center">
              <div className="h-px w-8 bg-purple-500/50" />
              <p className="text-sm md:text-lg font-bold text-white/40 uppercase italic tracking-widest">
                {t("info")}
              </p>
              <div className="h-px w-8 bg-purple-500/50" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto">
            <Link href="#tickets" className="w-full sm:w-auto">
              <Button className="w-full sm:w-72 h-20 bg-white text-black rounded-none font-black uppercase tracking-[0.2em] text-xs hover:bg-purple-500 transition-colors group relative overflow-hidden active:scale-95">
                <span className="relative z-10">{t("buyPass")}</span>
                <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </Link>
            <Link href="#lineup" className="w-full sm:w-auto">
              <Button className="w-full sm:w-72 h-20 bg-transparent border border-white/10 text-white rounded-none font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all active:scale-95">
                {t("viewLineup")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 border-[40px] border-white/5" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
