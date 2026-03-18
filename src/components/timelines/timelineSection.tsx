"use client";

import { Calendar, Lightning } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function TimelineSection() {
  const t = useTranslations("Timeline");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const milestones = [
    {
      year: "2023",
      title: t("items.2023.title"),
      desc: t("items.2023.desc"),
      align: "left",
    },
    {
      year: "2024",
      title: t("items.2024.title"),
      desc: t("items.2024.desc"),
      align: "right",
    },
    {
      year: "2025",
      title: t("items.2025.title"),
      desc: t("items.2025.desc"),
      align: "left",
    },
    {
      year: "2026",
      title: t("items.2026.title"),
      desc: t("items.2026.desc"),
      align: "right",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-40 bg-black relative"
      id="timeline"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="mb-32 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <Calendar weight="fill" className="text-purple-500" size={24} />
            <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">
              {t("protocol")}
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-white uppercase italic leading-none mb-6">
            {t("title")} <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
            >
              {t("titleSpan")}
            </span>
          </h2>
          <div className="w-24 h-px bg-purple-500/40 mt-8" />
        </div>

        {/* Vertical Line for Tablet/Desktop */}
        <div className="absolute left-1/2 top-[400px] bottom-0 w-px bg-white/5 hidden md:block">
          <motion.div
            style={{ scaleY: pathLength }}
            className="w-full h-full bg-linear-to-b from-purple-500 to-transparent origin-top"
          />
        </div>

        <div className="space-y-32">
          {milestones.map((item, _i) => (
            <div
              key={item.year}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 relative ${item.align === "right" ? "md:flex-row-reverse" : ""}`}
            >
              {/* Year Bubble */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex w-12 h-12 rounded-full bg-black border border-white/20 items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`w-full md:w-1/2 ${item.align === "left" ? "md:pr-24 text-center md:text-right" : "md:pl-24 text-center md:text-left"}`}
              >
                <span className="text-4xl md:text-6xl font-black text-white/10 tracking-tighter mb-4 block">
                  {item.year}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic mb-4">
                  {item.title}
                </h3>
                <p className="text-lg font-bold text-white/30 uppercase tracking-tight italic max-w-md mx-auto md:mx-0">
                  {item.desc}
                </p>
              </motion.div>

              <div className="w-full md:w-1/2 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 overflow-hidden">
        <Lightning
          weight="fill"
          size={600}
          className="text-white absolute -top-40 -left-40 rotate-12"
        />
        <Lightning
          weight="fill"
          size={600}
          className="text-white absolute -bottom-40 -right-40 -rotate-12"
        />
      </div>
    </section>
  );
}
