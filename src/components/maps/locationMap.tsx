"use client";

import { motion } from "framer-motion";
import { MapPin } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export function LocationMap() {
  const t = useTranslations("Map");

  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden" id="location">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <MapPin weight="fill" className="text-purple-500" size={24} />
              <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">
                {t("protocol")}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-white uppercase italic leading-none mb-12">
              {t("title")} <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>{t("titleSpan")}</span>
            </h2>

            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-purple-500 tracking-widest uppercase mb-2">{t("location")}</span>
                <p className="text-2xl font-black text-white italic uppercase tracking-tight">{t("locValue")}</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-purple-500 tracking-widest uppercase mb-2">{t("address")}</span>
                <p className="text-lg font-bold text-white/40 uppercase tracking-tight">{t("addrValue")}</p>
              </div>
              <div className="h-px w-24 bg-purple-500/40" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Technical Frame */}
            <div className="absolute -inset-4 border border-white/5 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-purple-500 z-10" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-purple-500 z-10" />
            
            <div className="aspect-video md:aspect-square lg:aspect-video bg-[#0a0a0a] grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635781234567!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="h-full w-full opacity-60 hover:opacity-100 transition-opacity duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
