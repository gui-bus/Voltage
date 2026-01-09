"use client";
//#region Imports
import { Button } from "@heroui/react";
import { ArrowRightIcon, TicketIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
//#endregion

export function HeroSection() {
  //#region useStates
  const [scrollY, setScrollY] = useState(0);
  //#endregion

  //#region useRefs
  const heroRef = useRef<HTMLElement>(null);
  //#endregion

  //#region useEffects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //#endregion

  //#region Constants
  const rawOpacity = 1 - scrollY / 700;
  const opacity = Number.isNaN(rawOpacity) ? 1 : Math.max(rawOpacity, 0);
  const scale = Number.isNaN(scrollY) ? 1 : 1 + scrollY * 0.0002;
  const textY = Number.isNaN(scrollY) ? 0 : scrollY * 0.35;
  const blur = Number.isNaN(scrollY) ? 0 : Math.min(scrollY / 100, 5);
  //#endregion

  return (
    <section
      ref={heroRef}
      className="pb-40 pt-32 relative flex items-center justify-center overflow-hidden select-none"
      id="hero"
    >
      <div className="absolute inset-0 noise-overlay" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.55 0.18 260 / 0.08), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, oklch(0.6 0.15 200 / 0.05), transparent),
            radial-gradient(ellipse 50% 30% at 20% 80%, oklch(0.7 0.12 280 / 0.04), transparent)
          `,
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
        >
          <source src="/content/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div
        className="absolute top-[15%] left-[8%] w-100 h-100 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.18 260 / 0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.12}px)`,
        }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-125 h-125 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.15 200 / 0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          transform: `translate(-${scrollY * 0.06}px, -${scrollY * 0.1}px)`,
        }}
      />

      <div
        className="relative z-10 text-center px-5 max-w-5xl mx-auto flex flex-col items-center gap-5 justify-center md:justify-start scale-90"
        style={{
          opacity,
          transform: `translateY(${textY}px) scale(${scale})`,
          filter: `blur(${blur}px)`,
        }}
      >
        <Image
          width={400}
          height={0}
          src="/content/images/voltageWhite.png"
          alt="Voltage"
          priority
          draggable={false}
        />

        <h1 className="text-[clamp(3rem,8vw,5rem)] font-semibold tracking-[-0.04em] leading-[0.95] text-white mb-8">
          The Ultimate Indoor
          <br />
          <span className="font-serif italic font-normal text-white">
            Electronic Music Experience
          </span>
        </h1>

        <div className="space-y-5">
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-light">
            July 23, 2026 – Neon Club, New York
          </p>

          <Link href={"/#tickets"}>
            <Button className="w-full max-w-sm mx-auto h-14 text-lg group/button text-white">
              Get Tickets
              <TicketIcon
                size={20}
                weight="bold"
                className="ml-2 group-hover/button:translate-x-1 transition-all duration-300"
              />
            </Button>
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: opacity * 0.8 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-white/60">
          Scroll to explore
        </span>
        <div className="w-5 h-9 rounded-full border border-white flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
    </section>
  );
}
