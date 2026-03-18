"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export function HorizontalScrollSection() {
  const t = useTranslations("Lineup");
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const djs = [
    {
      name: "Supernova",
      description: t("djs.supernova"),
      image: "/content/images/djs/supernova.webp",
      bpm: "142",
    },
    {
      name: "Luma",
      description: t("djs.luma"),
      image: "/content/images/djs/luma.webp",
      bpm: "138",
    },
    {
      name: "Bassline X",
      description: t("djs.bassline-x"),
      image: "/content/images/djs/bassline-x.webp",
      bpm: "145",
    },
    {
      name: "Trancewave",
      description: t("djs.trancewave"),
      image: "/content/images/djs/trancewave.webp",
      bpm: "140",
    },
    {
      name: "Neon Flux",
      description: t("djs.neon-flux"),
      image: "/content/images/djs/neon-flux.webp",
      bpm: "144",
    },
    {
      name: "Echo Pulse",
      description: t("djs.echo-pulse"),
      image: "/content/images/djs/echo-pulse.webp",
      bpm: "136",
    },
    {
      name: "Vortex",
      description: t("djs.vortex"),
      image: "/content/images/djs/vortex.webp",
      bpm: "148",
    },
    {
      name: "Aurora",
      description: t("djs.aurora"),
      image: "/content/images/djs/aurora.webp",
      bpm: "134",
    },
    {
      name: "Signal Lost",
      description: t("djs.signal-lost"),
      image: "/content/images/djs/signal-lost.webp",
      bpm: "150",
    },
    {
      name: "Midnight Circuit",
      description: t("djs.midnight-circuit"),
      image: "/content/images/djs/midnight-circuit.webp",
      bpm: "146",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height - window.innerHeight;
      const scrolledPast = -rect.top;
      const progress = Math.min(Math.max(scrolledPast / containerHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-black"
      id="lineup"
    >
      <div className="sticky top-0 h-svh flex flex-col justify-center overflow-hidden">
        {/* Section Header */}
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 w-full mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-purple-500" />
                <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">
                  {t("protocol")}
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-[-0.04em] text-white uppercase italic leading-none">
                {t("title")} <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
                >
                  {t("titleSpan")}
                </span>
              </h2>
            </div>
            <p className="text-lg font-bold tracking-tight text-white/30 max-w-sm uppercase italic">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Scrolling Content */}
        <div className="relative w-full">
          <div
            className="flex gap-4 px-6 lg:px-12"
            style={{
              transform: `translateX(calc(-${scrollProgress * (djs.length - 1) * 420}px))`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {djs.map((dj, index) => (
              <div
                key={dj.name}
                className="shrink-0 w-[300px] md:w-[400px] h-[500px] md:h-[600px] bg-[#0a0a0a] border border-white/5 relative group overflow-hidden"
              >
                {/* Image Layer */}
                <Image
                  src={dj.image}
                  alt={dj.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-60"
                  sizes="(max-w-768px) 300px, 400px"
                />

                {/* Technical Overlays */}
                <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10">
                  <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">
                    ID_{String(index + 1).padStart(3, "0")}
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] font-black text-purple-500 tracking-widest uppercase mb-1">
                      {t("frequency")}
                    </span>
                    <span className="text-[10px] font-black text-white">
                      {dj.bpm} BPM
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                  <div className="w-12 h-1 bg-purple-500 mb-6 group-hover:w-full transition-all duration-500" />
                  <h3 className="text-4xl font-black tracking-tighter text-white uppercase italic mb-4">
                    {dj.name}
                  </h3>
                  <p className="text-xs font-bold tracking-tight text-white/40 uppercase italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dj.description}
                  </p>
                </div>

                {/* Grid Accent */}
                <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 w-full mt-20">
          <div className="w-full h-1 bg-white/5 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-purple-500"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-[10px] font-black text-white/20 tracking-widest uppercase">
              01 / {djs.length}
            </span>
            <span className="text-[10px] font-black text-white/20 tracking-widest uppercase">
              {t("scroll")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
