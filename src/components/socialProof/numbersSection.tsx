"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Lightning, Pulse, Users, Globe } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function NumbersSection() {
  const t = useTranslations("Numbers");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const stats = [
    { number: 10, suffix: "", label: t("sonic"), icon: Pulse },
    { number: 8, suffix: "HRS", label: t("flow"), icon: Lightning },
    { number: 5000, suffix: "+", label: t("units"), icon: Users },
    { number: 3, suffix: "ZONES", label: t("sectors"), icon: Globe },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-black border-y border-white/5" id="numbers">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/5 bg-[#0a0a0a]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-12 flex flex-col items-center md:items-start text-center md:text-left border-white/5 border-b md:border-b-0 md:border-r last:border-0 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="mb-12 text-white/20 group-hover:text-purple-500 transition-colors duration-500">
                <stat.icon size={32} weight="duotone" />
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl md:text-7xl font-black text-white italic tracking-tighter">
                  <Counter
                    from={0}
                    to={stat.number}
                    duration={2}
                    delay={i * 0.1}
                    inView={isInView}
                  />
                  {stat.suffix}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-purple-500/40" />
                <p className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ from, to, duration, delay, inView }: { from: number; to: number; duration: number; delay: number; inView: boolean }) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView && countRef.current) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        if (countRef.current) {
          const currentCount = Math.floor(progress * (to - from) + from);
          countRef.current.textContent = currentCount.toLocaleString();
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      const timeoutId = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, from, to, duration, delay]);

  return <span ref={countRef}>{from}</span>;
}
