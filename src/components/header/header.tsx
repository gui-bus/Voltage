"use client";
//#region Imports
import { Button, cn } from "@heroui/react";
import {
  ArrowRightIcon,
  List,
  ListIcon,
  ShoppingCartIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
//#endregion

export default function Header() {
  //#region useStates
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  //#endregion

  //#region useEffects
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  //#endregion

  //#region Constants
  const headerVariants = {
    top: {
      y: 0,
      opacity: 1,
    },
    scrolled: {
      y: 0,
      opacity: 1,
    },
  };

  const links = [
    { href: "#lineup", label: "Lineup" },
    { href: "#tickets", label: "Tickets" },
    { href: "#faq", label: "FAQ" },
  ];
  //#endregion

  return (
    <AnimatePresence>
      <motion.header
        initial="top"
        animate={scrolled ? "scrolled" : "top"}
        variants={headerVariants}
        transition={{ type: "tween", duration: 0.3 }}
        className={cn(
          "fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-400 z-50 ",
          menuOpen && "bg-[#101010]/95!",
          scrolled && "bg-[#101010]!"
        )}
      >
        <div className="flex items-center justify-around px-5 py-4">
          <motion.div
            animate={{ scale: scrolled ? 0.95 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link href="/#hero">
              <Image
                src="/content/images/voltageWhite.png"
                alt="Voltage Festival"
                width={100}
                height={0}
                draggable={false}
                priority
                className="drop-shadow-[0_0_12px_rgba(196,181,253,0.7)]"
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-6 text-white font-medium text-sm">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative px-1 overflow-hidden"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <ListIcon size={28} weight="duotone" />
            </button>
          </div>

          <div className="hidden md:block">
            <Link href={"/#tickets"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button className="min-w-fit px-6 h-10 text-lg group/button relative overflow-hidden text-white">
                  <span className="relative z-10">Buy now</span>

                  <ShoppingCartIcon
                    size={20}
                    weight="bold"
                    className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:hidden bg-[#101010]/95 backdrop-blur-sm overflow-hidden"
            >
              <div className="flex flex-col px-5 py-4 space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white font-medium text-lg hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href={"/#tickets"}>
                  <Button className="w-full px-6 h-10 text-lg group/button relative overflow-hidden">
                    <span className="relative z-10">Get Tickets</span>
                    <ArrowRightIcon
                      size={20}
                      weight="bold"
                      className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Button>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
