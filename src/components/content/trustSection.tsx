"use client";

import { cn } from "@heroui/react";
import {
  ShieldCheck,
  Users,
  SignOut,
  Heartbeat,
  Lightning,
} from "@phosphor-icons/react";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function TrustSection() {
  const t = useTranslations("Trust");

  const safetyProtocols = [
    {
      id: "01",
      icon: Heartbeat,
      title: t("items.medical.title"),
      desc: t("items.medical.desc"),
    },
    {
      id: "02",
      icon: Users,
      title: t("items.security.title"),
      desc: t("items.security.desc"),
    },
    {
      id: "03",
      icon: SignOut,
      title: t("items.extraction.title"),
      desc: t("items.extraction.desc"),
    },
    {
      id: "04",
      icon: ShieldCheck,
      title: t("items.venue.title"),
      desc: t("items.venue.desc"),
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-black border-y border-white/5" id="security">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-24">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Lightning weight="fill" className="text-purple-500" size={24} />
              <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">
                {t("protocol")}
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-white uppercase italic leading-none">
              {t("title")} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>{t("titleSpan")}</span>
            </h2>
          </div>
          
          <div className="flex flex-col max-w-md">
            <p className="text-lg md:text-xl font-bold tracking-tight text-white/30 uppercase italic leading-relaxed mb-8">
              {t("description")}
            </p>
            <div className="h-px w-24 bg-purple-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyProtocols.map((protocol, i) => (
            <motion.div
              key={protocol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 bg-[#0a0a0a] border border-white/5 flex flex-col items-start transition-all duration-500 hover:border-purple-500/30"
            >
              <div className="flex justify-between items-start w-full mb-12">
                <div className="p-3 bg-white/5 text-purple-500 group-hover:bg-purple-500 group-hover:text-black transition-all duration-500">
                  <protocol.icon size={32} weight="duotone" />
                </div>
                <span className="text-2xl font-black text-white/10 group-hover:text-purple-500/20 transition-colors">
                  P.{protocol.id}
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-tighter text-white uppercase italic mb-4">
                {protocol.title}
              </h3>
              
              <p className="text-sm font-bold tracking-tight text-white/40 uppercase italic leading-relaxed">
                {protocol.desc}
              </p>

              {/* Decorative side bar */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 group-hover:h-1/2 bg-purple-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
