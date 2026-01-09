"use client";
//#region Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
//#endregion

//#region Constants
const milestones = [
  {
    year: "2023",
    title: "Voltage: Genesis",
    description:
      "An indoor rave that ignited the movement, gathering over 3,000 attendees and 6 world-class DJs for the very first spark.",
  },
  {
    year: "2024",
    title: "Voltage: Neon Pulse",
    description:
      "The edition that redefined immersion, introducing neon light ecosystems and interactive stages that moved with the crowd.",
  },
  {
    year: "2025",
    title: "Voltage: Multiverse",
    description:
      "A massive leap forward, expanding to four stages and unveiling VR-powered visuals that blurred the line between reality and sound.",
  },
  {
    year: "2026",
    title: "Voltage: Full Charge",
    description:
      "The biggest edition yet, uniting global headliners, cutting-edge light technology, and a fully immersive indoor rave experience designed to push sound and visuals to the next level.",
  },
];
//#endregion

export default function TimelineSection() {
  //#region useRefs
  const containerRef = useRef<HTMLDivElement>(null);
  //#endregion

  //#region Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  //#endregion

  return (
    <section ref={containerRef} className="bg-background py-32 md:py-48" id="timeline">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Our Journey
          </p>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-6xl">
            Past Events History
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="origin-top bg-accent w-full"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <div className="absolute left-4 md:left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-accent border-4 border-background z-10" />

                <TimelineItem
                  milestone={milestone}
                  index={index}
                  progress={scrollYProgress}
                  isEven={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
  progress,
  isEven,
}: {
  milestone: {
    year: string;
    title: string;
    description: string;
  };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  isEven: boolean;
}) {
  const start = 0.1 + index * 0.15;

  const opacity = useTransform(progress, [start, start + 0.1], [0, 1]);
  const x = useTransform(
    progress,
    [start, start + 0.1],
    [isEven ? -30 : 30, 0]
  );

  return (
    <motion.div
      style={{ opacity, x }}
      className={`relative pl-12 md:pl-0 md:w-1/2 ${
        isEven ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"
      }`}
    >
      <span className="font-mono text-sm text-accent">{milestone.year}</span>

      <h3 className="mt-1 font-serif text-2xl font-light text-foreground md:text-3xl">
        {milestone.title}
      </h3>

      <p className="mt-2 font-light text-muted-foreground">
        {milestone.description}
      </p>
    </motion.div>
  );
}
