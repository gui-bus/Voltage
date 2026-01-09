"use client";
//#region Imports
import { cn } from "@heroui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
//#endregion

//#region Contants
const djs = [
  {
    name: "Supernova",
    description: "An EDM powerhouse known for electrifying live performances.",
    image: "/content/images/djs/supernova.webp",
  },
  {
    name: "Luma",
    description: "A techno visionary crafting immersive soundscapes.",
    image: "/content/images/djs/luma.webp",
  },
  {
    name: "Bassline X",
    description: "Masters of bass-heavy beats that move the crowd.",
    image: "/content/images/djs/bassline-x.webp",
  },
  {
    name: "Trancewave",
    description: "Progressive trance with unforgettable melodies.",
    image: "/content/images/djs/trancewave.webp",
  },
  {
    name: "Neon Flux",
    description: "High-energy sets blending techno and electro.",
    image: "/content/images/djs/neon-flux.webp",
  },
  {
    name: "Echo Pulse",
    description: "Hypnotic rhythms designed for late-night journeys.",
    image: "/content/images/djs/echo-pulse.webp",
  },
  {
    name: "Vortex",
    description: "Dark, driving techno with relentless momentum.",
    image: "/content/images/djs/vortex.webp",
  },
  {
    name: "Aurora",
    description: "Melodic electronic music with emotional depth.",
    image: "/content/images/djs/aurora.webp",
  },
  {
    name: "Signal Lost",
    description: "Experimental sounds pushing dancefloor boundaries.",
    image: "/content/images/djs/signal-lost.webp",
  },
  {
    name: "Midnight Circuit",
    description: "Fast-paced electronic beats built for peak time.",
    image: "/content/images/djs/midnight-circuit.webp",
  },
];
//#endregion

export function HorizontalScrollSection() {
  //#region useRefs
  const containerRef = useRef<HTMLElement>(null);
  //#endregion

  //#region useStates
  const [scrollProgress, setScrollProgress] = useState(0);
  //#endregion

  //#region useEffects
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
  //#endregion

  return (
    <section ref={containerRef} className="relative h-[300vh]" id="lineup">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-foreground/20" />
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  Lineup
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Meet the{" "}
                <span className="font-serif italic font-normal text-muted-foreground">
                  DJs
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg font-light max-w-md">
              Experience a curated lineup of electronic music artists bringing
              unique sounds to the dance floor.
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex gap-6 px-6"
            style={{
              transform: `translateX(calc(-${
                scrollProgress * (djs.length - 2) * 340
              }px))`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {djs.map((dj, index) => (
              <div
                key={dj.name}
                className="shrink-0 w-[320px] md:w-95 h-85 md:h-95 rounded-3xl overflow-hidden border shadow-premium relative group transition-all duration-500 hover:shadow-premium-lg"
              >
                <Image
                  src={dj.image ?? "/placeholders/placeholder.svg"}
                  alt={dj.name}
                  className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  width={0}
                  height={0}
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-black/40 transition-colors duration-500" />

                <div className="relative h-full p-10 flex flex-col">
                  <span className="text-xs font-mono font-medium tracking-wider text-background/70 mb-auto">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-background mb-3">
                      {dj.name}
                    </h3>
                    <p className="text-white text-base font-light leading-relaxed">
                      {dj.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full mt-12">
          <div className="flex gap-2">
            {djs.map((_, i) => {
              const isActive =
                scrollProgress >= i / djs.length &&
                scrollProgress < (i + 1) / djs.length;
              const isPast = scrollProgress >= (i + 1) / djs.length;

              return (
                <div
                  key={i}
                  className={cn(
                    "h-0.5 rounded-full transition-all duration-500",
                    isActive
                      ? "w-12 bg-foreground"
                      : isPast
                      ? "w-6 bg-foreground/40"
                      : "w-6 bg-foreground/10"
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
