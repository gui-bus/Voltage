"use client";
//#region Imports
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
//#endregion

//#region Constants
const stats = [
  { number: 10, suffix: "", label: "Featuring internationally acclaimed DJs" },
  { number: 8, suffix: "Hours", label: "Non-stop music from dusk till dawn" },
  {
    number: 5000,
    suffix: "+",
    label: "Experience the energy of a full-capacity rave",
  },
  {
    number: 3,
    suffix: "Stages",
    label: "Multiple areas to dance, relax, and socialize",
  },
];
//#endregion

export default function NumbersSection() {
  //#region useRefs
  const containerRef = useRef<HTMLDivElement>(null);
  //#endregion

  //#region Hooks
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  //#endregion

  return (
    <section ref={containerRef} className="pt-48 bg-background" id="numbers">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="font-serif text-5xl font-light text-foreground">
                <Counter
                  from={0}
                  to={stat.number}
                  duration={2}
                  delay={i * 0.15}
                  inView={isInView}
                />
                <span className="ml-2">{stat.suffix}</span>
              </div>
              <p className="mt-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  from,
  to,
  duration,
  delay,
  inView,
}: {
  from: number;
  to: number;
  duration: number;
  delay: number;
  inView: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        {inView ? (
          <AnimatedNumber value={to} duration={duration} delay={delay} />
        ) : (
          from
        )}
      </motion.span>
    </motion.span>
  );
}

function AnimatedNumber({
  value,
  duration,
  delay,
}: {
  value: number;
  duration: number;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.span
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: duration + delay }}
        onAnimationStart={() => {
          if (ref.current) {
            let start = 0;
            const increment = value / (duration * 60);
            const animate = () => {
              start += increment;
              if (ref.current) {
                ref.current.textContent = Math.min(
                  Math.floor(start),
                  value
                ).toString();
              }
              if (start < value) {
                requestAnimationFrame(animate);
              }
            };
            setTimeout(() => animate(), delay * 1000);
          }
        }}
      >
        <span ref={ref}>0</span>
      </motion.span>
    </motion.span>
  );
}
