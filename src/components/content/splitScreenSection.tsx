"use client";
//#region Imports
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
//#endregion

export default function SplitScreenSection() {
  //#region useRefs
  const containerRef = useRef<HTMLDivElement>(null);
  //#endregion

  //#region Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const centerScale = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    [0.8, 1, 0.8]
  );
  const centerOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    [0, 1, 0]
  );
  //#endregion

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden"
      id="experience"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-8 items-center min-h-[70vh]">
          <motion.div style={{ y: leftY }} className="space-y-8">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/content/images/DJ_01.webp"
                alt="DJ 01"
                className="w-full h-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/content/images/DJ_04.webp"
                alt="DJ 04"
                className="w-full h-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ scale: centerScale, opacity: centerOpacity }}
            className="text-center lg:col-span-1"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Feel the Pulse of the Night
            </h2>
            <p className="mt-6 font-light max-w-md mx-auto">
              Voltage brings the world’s top DJs under one roof, delivering an
              unforgettable electronic music experience filled with lights,
              beats, and energy.
            </p>
          </motion.div>

          <motion.div style={{ y: rightY }} className="space-y-8">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/content/images/DJ_03.webp"
                alt="DJ 03"
                className="w-full h-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/content/images/DJ_02.webp"
                alt="DJ 02"
                className="w-full h-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
