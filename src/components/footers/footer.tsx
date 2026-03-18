"use client";

import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
  Lightning,
  ArrowUp,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const social = [
  { name: "Instagram", icon: InstagramLogo, href: "#" },
  { name: "Facebook", icon: FacebookLogo, href: "#" },
  { name: "Twitter", icon: TwitterLogo, href: "#" },
  { name: "YouTube", icon: YoutubeLogo, href: "#" },
];

export function Footer() {
  const t = useTranslations("Footer");

  const links = {
    internal: [
      { label: t("navItems.lineup"), href: "#lineup" },
      { label: t("navItems.experience"), href: "#experience" },
      { label: t("navItems.tickets"), href: "#tickets" },
      { label: t("navItems.faq"), href: "#faq" },
    ],
    legal: [
      { label: t("privacy"), href: "#" },
      { label: t("terms"), href: "#" },
      { label: t("safety"), href: "#" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden" id="footer">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <Lightning weight="fill" size={40} className="text-white group-hover:text-purple-500 transition-colors" />
              <span className="text-3xl font-black tracking-tighter text-white uppercase italic">VOLTAGE</span>
            </Link>
            <p className="text-sm font-bold text-white/30 uppercase italic leading-relaxed max-w-xs mb-12">
              {t("description")}
            </p>
            <div className="flex gap-4">
              {social.map((s) => (
                <a 
                  key={s.name} 
                  href={s.href} 
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
                >
                  <s.icon size={20} weight="duotone" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.4em] text-purple-500 uppercase mb-8 italic">{t("nav")}</span>
            <nav className="flex flex-col gap-4">
              {links.internal.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-lg font-black text-white/40 hover:text-white uppercase italic transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-8 italic">{t("info")}</span>
            <nav className="flex flex-col gap-4">
              {links.legal.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-xs font-bold text-white/30 hover:text-white uppercase italic transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Newsletter/Action */}
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-8 italic">{t("conn")}</span>
            <div className="p-8 border border-white/5 bg-[#0a0a0a] relative group">
              <p className="text-sm font-bold text-white/60 uppercase italic mb-6">{t("join")}</p>
              <button className="w-full h-12 bg-white text-black font-black text-[10px] tracking-[0.3em] uppercase hover:bg-purple-500 transition-colors">
                {t("connect")}
              </button>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-black text-white/20 tracking-widest uppercase italic">© 2026 VOLTAGE_FESTIVAL</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-4 group"
          >
            <span className="text-[10px] font-black text-white/40 group-hover:text-white tracking-[0.3em] uppercase transition-colors italic">{t("top")}</span>
            <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-white/30 group-hover:bg-white/5 transition-all">
              <ArrowUp size={16} weight="bold" className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
