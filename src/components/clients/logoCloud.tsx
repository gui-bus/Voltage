"use client";

import { Lightning } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const logos = [
  { name: "Logo Ipsum", src: "/logos/01.png" },
  { name: "Logo Ipsum", src: "/logos/02.png" },
  { name: "Logo Ipsum", src: "/logos/03.png" },
  { name: "Logo Ipsum", src: "/logos/07.png" },
  { name: "Logo Ipsum", src: "/logos/08.png" },
  { name: "Logo Ipsum", src: "/logos/09.png" },
  { name: "Logo Ipsum", src: "/logos/11.png" },
  { name: "Logo Ipsum", src: "/logos/13.png" },
];

export function LogoCloud() {
  const t = useTranslations("LogoCloud");

  return (
    <section className="py-24 bg-black border-y border-white/5" id="partners">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Lightning weight="fill" className="text-purple-500" size={16} />
            <span className="text-[10px] font-black tracking-[0.5em] text-white/30 uppercase">
              {t("protocol")}
            </span>
          </div>
          <div className="w-12 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-white/5">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex h-40 items-center justify-center border-r border-b border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors overflow-hidden"
            >
              {/* Technical corner marks */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 group-hover:border-purple-500/40 transition-all" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/0 group-hover:border-purple-500/40 transition-all" />

              <div className="relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-30 group-hover:opacity-100 group-hover:scale-110">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
