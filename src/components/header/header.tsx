"use client";

import { Button, cn } from "@heroui/react";
import { Lightning, List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LanguageSelector } from "../language/languageSelector";

export default function Header() {
  const t = useTranslations("Header");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#lineup", label: t("lineup") },
    { href: "#experience", label: t("experience") },
    { href: "#tickets", label: t("tickets") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
          scrolled
            ? "bg-black/90 backdrop-blur-xl h-16"
            : "bg-transparent h-24",
        )}
      >
        {/* Horizontal separator line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />

        <div className="max-w-[1800px] mx-auto h-full flex items-center px-6 lg:px-12">
          {/* Brand/Logo Zone */}
          <div className="flex items-center gap-4 pr-12 border-r border-white/10 h-full">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-purple-500 flex items-center justify-center">
                <Lightning weight="fill" size={20} className="text-black" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                VOLTAGE
              </span>
            </Link>
          </div>

          {/* Navigation Zone */}
          <nav className="hidden lg:flex items-center h-full">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-10 h-full flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white border-r border-white/10 transition-colors group relative overflow-hidden"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          {/* User/Action Zone */}
          <div className="flex items-center gap-8 ml-auto h-full pl-12">
            <div className="hidden sm:block">
              <LanguageSelector />
            </div>

            <Link href="#tickets">
              <Button className="bg-white text-black h-10 px-8 rounded-none font-black text-[10px] tracking-[0.2em] uppercase hover:bg-purple-500 transition-colors">
                {t("accessEvent")}
              </Button>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white/5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[110] flex flex-col"
          >
            {/* Overlay Header */}
            <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
              <span className="text-xl font-black text-white italic tracking-tighter">
                VOLTAGE
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white w-12 h-12 flex items-center justify-center border border-white/10"
              >
                <X size={32} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col grow justify-center px-6 gap-12">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-5xl sm:text-7xl font-black text-white/20 hover:text-purple-500 uppercase italic transition-colors leading-none tracking-tighter"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Overlay Footer */}
            <div className="p-8 border-t border-white/10 flex flex-col gap-8 bg-[#0a0a0a]">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] italic">
                  {t("selectLanguage")}
                </span>
                <LanguageSelector />
              </div>
              <Link href="#tickets" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-white text-black h-20 rounded-none text-2xl font-black uppercase tracking-widest">
                  {t("initializeAccess")}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
