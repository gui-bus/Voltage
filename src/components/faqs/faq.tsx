"use client";

import { cn } from "@heroui/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WarningCircle, CaretRight } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: t("items.q1"), answer: t("items.a1") },
    { question: t("items.q2"), answer: t("items.a2") },
    { question: t("items.q3"), answer: t("items.a3") },
    { question: t("items.q4"), answer: t("items.a4") },
    { question: t("items.q5"), answer: t("items.a5") },
  ];

  return (
    <section className="py-24 md:py-40 bg-black border-y border-white/5" id="faq">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-32">
          <div className="flex items-center gap-4 mb-6">
            <WarningCircle weight="fill" className="text-purple-500" size={24} />
            <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">
              {t("protocol")}
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-white uppercase italic leading-none mb-12">
            {t("title")} <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>{t("titleSpan")}</span>
          </h2>
          <div className="w-24 h-px bg-purple-500/40" />
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="group flex flex-col">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={cn(
                    "flex items-center justify-between p-8 border transition-all duration-500 text-left",
                    isOpen 
                      ? "bg-white text-black border-white shadow-[0_0_40px_rgba(255,255,255,0.1)]" 
                      : "bg-[#0a0a0a] text-white border-white/5 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-8">
                    <span className={cn(
                      "text-[10px] font-black tracking-widest",
                      isOpen ? "text-black/40" : "text-white/20"
                    )}>
                      Q.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg md:text-2xl font-black tracking-tighter uppercase italic">
                      {faq.question}
                    </span>
                  </div>
                  <CaretRight 
                    size={24} 
                    weight="bold" 
                    className={cn("transition-transform duration-500", isOpen ? "rotate-90" : "opacity-20")} 
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-[#0a0a0a] border-x border-b border-white/10"
                    >
                      <div className="p-10 flex gap-8 items-start">
                        <span className="text-[10px] font-black text-purple-500 tracking-widest uppercase mt-1">
                          {t("ans")}
                        </span>
                        <p className="text-lg font-bold text-white/50 uppercase tracking-tight italic leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
