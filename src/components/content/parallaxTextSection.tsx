"use client";
//#region Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
//#endregion

export default function ParallaxTextSection() {
  //#region useRefs
  const containerRef = useRef<HTMLDivElement>(null);
  //#endregion

  //#region Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  //#endregion

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-48 overflow-hidden text-black"
      id="energy"
    >
      <div className="space-y-4">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap">
          <p className="font-serif text-5xl md:text-7xl lg:text-9xl font-light tracking-tight opacity-20">
            PROGRESSIVE — EDM — HOUSE — TECHNO — EDM — HOUSE —
          </p>
        </motion.div>

        <motion.div style={{ x: x2 }} className="whitespace-nowrap">
          <p className="font-serif text-5xl md:text-7xl lg:text-9xl font-light tracking-tight">
            DUBSTEP — TRANCE — PROGRESSIVE — TRANCE — DUBSTEP —
          </p>
        </motion.div>

        <motion.div style={{ x: x3 }} className="whitespace-nowrap">
          <p className="font-serif text-5xl md:text-7xl lg:text-9xl font-light tracking-tight opacity-20">
            HARDSTYLE — TECHNO — EDM — HARDSTYLE — TECHNO —
          </p>
        </motion.div>
      </div>
    </section>
  );
}
