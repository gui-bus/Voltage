"use client";
//#region Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
//#endregion

//#region Constants
const words = [
  "Hypnotic",
  "Relentless",
  "Nocturnal",
  "High-Voltage",
  "Transcendent",
];
//#endregion

export default function TextMorphSection() {
  //#region useRefs
  const containerRef = useRef<HTMLDivElement>(null);
  //#endregion

  //#region Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  //#endregion

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] w-full mx-auto"
      id="offer"
    >
      <div className="sticky top-0 h-screen w-full max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
        <div className="relative flex flex-col items-center justify-center text-center w-full h-full px-6">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10">
            The Voltage Experience
          </p>

          {/* Word stack */}
          <div className="relative h-[8em] w-full flex items-center justify-center overflow-hidden">
            {words.map((word, i) => (
              <WordReveal
                key={word}
                word={word}
                index={i}
                total={words.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          <p className="mt-10 text-muted-foreground font-light max-w-xl">
            Voltage is more than a party — it’s a high-energy journey through
            sound, light, and movement, built to pull you into the rhythm and
            never let go.
          </p>
        </div>
      </div>
    </section>
  );
}

function WordReveal({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    ["120%", "0%", "0%", "-120%"]
  );

  const opacity = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0]
  );

  return (
    <motion.h2
      style={{ y, opacity }}
      className="absolute inset-0 flex items-center justify-center font-serif text-[clamp(3rem,8vw,10rem)] font-light tracking-tight text-foreground"
    >
      {word}
    </motion.h2>
  );
}
