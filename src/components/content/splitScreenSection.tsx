"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Lightning, Cpu, ChartBar, Waves } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function SplitScreenSection() {
  const t = useTranslations("SplitScreen");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const dividerHeight = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  const specs = [
    { icon: <Waves size={20} />, label: t("specs.audio"), value: t("specs.audioValue") },
    { icon: <Cpu size={20} />, label: t("specs.visuals"), value: t("specs.visualsValue") },
    { icon: <ChartBar size={20} />, label: t("specs.energy"), value: t("specs.energyValue") },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-svh w-full bg-black flex flex-col lg:flex-row overflow-hidden border-y border-white/5"
      id="experience"
    >
      {/* Left Side: Immersive Visual */}
      <div className="relative w-full lg:w-1/2 h-[60svh] lg:h-svh overflow-hidden group">
        <motion.div style={{ scale: imageScale }} className="w-full h-full">
          <Image
            src="/content/images/DJ_01.webp"
            alt="Voltage Experience"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-60"
          />
        </motion.div>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        {/* Corner Accents */}
        <div className="absolute top-12 left-12 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">{t("sensoryInput")}</span>
          </div>
          <span className="text-xs font-black text-white tracking-widest uppercase">{t("liveFeed")}</span>
        </div>

        {/* Floating Spec Box */}
        <div className="absolute bottom-12 right-12 hidden xl:block p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-sm">
          <div className="flex flex-col gap-4">
            {specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-4 group/item">
                <div className="text-purple-500 group-hover/item:scale-110 transition-transform">
                  {spec.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-white/30 tracking-[0.2em] uppercase">{spec.label}</span>
                  <span className="text-[10px] font-black text-white tracking-widest uppercase">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <motion.div 
        style={{ height: dividerHeight }}
        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block z-20"
      />

      {/* Right Side: Technical Content */}
      <div className="w-full lg:w-1/2 min-h-[60svh] lg:h-svh flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative bg-[#080808]">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <motion.div style={{ y: textY }} className="relative z-10 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-purple-500" />
            <span className="text-xs font-black tracking-[0.5em] text-purple-500 uppercase">
              {t("architecture")}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-[-0.06em] text-white uppercase italic leading-[0.9] mb-12">
            {t("beyondSound")} <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>{t("beyondSoundSpan")}</span>
          </h2>

          <p className="text-lg md:text-xl text-white/50 font-bold tracking-tight max-w-xl leading-relaxed mb-16 uppercase italic">
            {t("description")}
          </p>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-full max-w-md">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-white/20 tracking-[0.3em] uppercase underline underline-offset-8 decoration-purple-500/50">{t("capacity")}</span>
              <span className="text-2xl font-black text-white tracking-tighter uppercase italic">{t("capacityValue")}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black text-white/20 tracking-[0.3em] uppercase underline underline-offset-8 decoration-purple-500/50">{t("duration")}</span>
              <span className="text-2xl font-black text-white tracking-tighter uppercase italic">{t("durationValue")}</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative lightning icon at bottom */}
        <div className="absolute bottom-12 right-12 opacity-5">
          <Lightning size={120} weight="fill" className="text-white" />
        </div>
      </div>
    </section>
  );
}
