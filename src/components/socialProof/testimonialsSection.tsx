"use client";

import { Lightning, Quotes } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function TestimonialsSection() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      quote: t("items.log1.quote"),
      author: "JESSICA JOHNSON",
      role: t("items.log1.role"),
      avatar: "/content/images/jessicaJohnson.png",
      id: "LOG_01",
    },
    {
      quote: t("items.log2.quote"),
      author: "SOFIA LEE",
      role: t("items.log2.role"),
      avatar: "/content/images/sofiaLee.png",
      id: "LOG_02",
    },
    {
      quote: t("items.log3.quote"),
      author: "MARCO SILVA",
      role: t("items.log3.role"),
      avatar: "/content/images/marcoSilva.png",
      id: "LOG_03",
    },
  ];

  return (
    <section
      className="py-24 md:py-40 bg-black overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <Lightning weight="fill" className="text-purple-500" size={24} />
              <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">
                {t("protocol")}
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-white uppercase italic leading-none">
              {t("title")} <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
              >
                {t("titleSpan")}
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl font-bold tracking-tight text-white/30 max-w-sm uppercase italic">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 bg-[#0a0a0a] border border-white/5 flex flex-col items-start transition-all duration-500 hover:border-purple-500/30"
            >
              <div className="flex justify-between items-center w-full mb-12">
                <span className="text-[10px] font-black text-purple-500 tracking-[0.4em] uppercase">
                  {item.id}
                </span>
                <Quotes
                  size={32}
                  weight="fill"
                  className="text-white/5 group-hover:text-purple-500/20 transition-colors"
                />
              </div>

              <blockquote className="text-xl md:text-2xl font-black tracking-tight text-white uppercase italic leading-tight mb-16 grow">
                &quot;{item.quote}&quot;
              </blockquote>

              <div className="flex items-center gap-6 pt-8 border-t border-white/5 w-full">
                <div className="relative w-14 h-14 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden border border-white/10">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-white tracking-tighter uppercase italic">
                    {item.author}
                  </span>
                  <span className="text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
