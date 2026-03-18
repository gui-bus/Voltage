"use client";

import { motion } from "framer-motion";
import { Lightning, TrendUp, Waves, Selection, Ghost } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function TextMorphSection() {
  const t = useTranslations("CoreComponents");

  const gridItems = [
    { 
      title: t("items.relentless.title"), 
      desc: t("items.relentless.desc"), 
      icon: <TrendUp size={32} weight="duotone" />,
      color: "from-purple-500/20 to-transparent"
    },
    { 
      title: t("items.hypnotic.title"), 
      desc: t("items.hypnotic.desc"), 
      icon: <Waves size={32} weight="duotone" />,
      color: "from-blue-500/20 to-transparent"
    },
    { 
      title: t("items.nocturnal.title"), 
      desc: t("items.nocturnal.desc"), 
      icon: <Ghost size={32} weight="duotone" />,
      color: "from-white/10 to-transparent"
    },
    { 
      title: t("items.transcendent.title"), 
      desc: t("items.transcendent.desc"), 
      icon: <Selection size={32} weight="duotone" />,
      color: "from-purple-600/20 to-transparent"
    },
  ];

  return (
    <section className="py-24 md:py-40 bg-black border-y border-white/5" id="offer">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Lightning weight="fill" className="text-purple-500" size={24} />
              <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">{t("protocol")}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-white uppercase italic leading-none">
              {t("title")} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>{t("titleSpan")}</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl font-bold tracking-tight text-white/30 max-w-md uppercase italic">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-none overflow-hidden transition-all duration-500 hover:border-purple-500/30`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="mb-12 text-white/20 group-hover:text-purple-500 transition-colors duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-3xl font-black tracking-tighter text-white uppercase mb-4 italic">
                  {item.title}
                </h3>
                
                <p className="text-sm font-bold tracking-tight text-white/40 uppercase italic group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/0 group-hover:border-purple-500/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
