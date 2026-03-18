"use client";

import { Button, cn } from "@heroui/react";
import {
  IdentificationBadge,
  Lightning,
  SketchLogo,
  Ticket,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type React from "react";

export function PricingSection() {
  const t = useTranslations("Pricing");

  const passes = [
    {
      name: t("items.standard.name"),
      price: "50",
      id: "AC-01",
      desc: t("items.standard.desc"),
      features: [
        t("items.standard.f1"),
        t("items.standard.f2"),
        t("items.standard.f3"),
      ],
      icon: Ticket,
    },
    {
      name: t("items.vip.name"),
      price: "160",
      id: "AC-02",
      desc: t("items.vip.desc"),
      features: [
        t("items.vip.f1"),
        t("items.vip.f2"),
        t("items.vip.f3"),
        t("items.vip.f4"),
      ],
      popular: true,
      icon: IdentificationBadge,
    },
    {
      name: t("items.duo.name"),
      price: "90",
      id: "AC-03",
      desc: t("items.duo.desc"),
      features: [t("items.duo.f1"), t("items.duo.f2"), t("items.duo.f3")],
      icon: SketchLogo,
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-black overflow-hidden" id="tickets">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-32">
          <div className="flex items-center gap-4 mb-6">
            <Lightning weight="fill" className="text-purple-500" size={24} />
            <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">
              {t("protocol")}
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-white uppercase italic leading-none mb-12">
            {t("title")} <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
            >
              {t("titleSpan")}
            </span>
          </h2>
          <div className="w-24 h-px bg-purple-500/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passes.map((pass, i) => (
            <motion.div
              key={pass.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative p-8 md:p-12 border transition-all duration-500 overflow-hidden",
                pass.popular
                  ? "bg-[#0a0a0a] border-purple-500 shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]"
                  : "bg-[#0a0a0a] border-white/5 hover:border-white/20",
              )}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-16">
                <div
                  className={cn(
                    "p-4 border transition-colors duration-500",
                    pass.popular
                      ? "bg-purple-500 text-black border-purple-500"
                      : "bg-white/5 text-white/40 border-white/10 group-hover:text-white",
                  )}
                >
                  <pass.icon size={32} weight="duotone" />
                </div>
                <span className="text-[10px] font-black text-white/20 tracking-widest uppercase italic">
                  Auth_ID: {pass.id}
                </span>
              </div>

              {/* Pricing */}
              <div className="mb-12">
                <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic mb-4">
                  {pass.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black text-white italic tracking-tighter">
                    ${pass.price}
                  </span>
                  <span className="text-xs font-black text-white/20 uppercase tracking-widest">
                    USD
                  </span>
                </div>
              </div>

              <p className="text-sm font-bold text-white/40 uppercase tracking-tight italic mb-12 leading-relaxed">
                {pass.desc}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-16">
                {pass.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500" />
                    <span className="text-[10px] font-black text-white/60 tracking-widest uppercase italic">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="#" className="block">
                <Button
                  className={cn(
                    "w-full h-16 rounded-none font-black text-xs uppercase tracking-[0.3em] transition-all duration-500",
                    pass.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-transparent border border-white/10 text-white hover:bg-white hover:text-black",
                  )}
                >
                  {t("initialize")}
                </Button>
              </Link>

              {/* Decorative side bar for popular */}
              {pass.popular && (
                <div className="absolute top-0 right-0 p-4 overflow-hidden">
                  <div className="bg-purple-500 text-black text-[8px] font-black tracking-[0.4em] uppercase px-6 py-1 rotate-45 translate-x-4 -translate-y-2 shadow-lg">
                    {t("recommended")}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple wrapper for Link if not imported
function Link({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
