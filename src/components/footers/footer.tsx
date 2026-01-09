"use client";

//#region Imports
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
//#endregion

//#region Constants
const social = [
  { name: "Instagram", icon: InstagramLogoIcon, href: "#" },
  { name: "Facebook", icon: FacebookLogoIcon, href: "#" },
  { name: "Twitter", icon: TwitterLogoIcon, href: "#" },
  { name: "YouTube", icon: YoutubeLogoIcon, href: "#" },
];
//#endregion

//#region Animations
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item: any = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
//#endregion

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-border bg-background"
      id="footer"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -bottom-48 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-foreground/5 blur-[140px]"
          animate={{ y: [0, -20, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <Image
              src="/content/images/voltageBlack.png"
              alt="Voltage Festival"
              width={220}
              height={0}
              draggable={false}
              priority
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-muted-foreground font-light leading-relaxed"
          >
            An immersive electronic music experience where sound, light and
            movement collide.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex gap-5">
            {social.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + index * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.15,
                  y: -4,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon weight="duotone" className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-sm text-muted-foreground"
          >
            © 2026 Voltage Festival — All Rights Reserved
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
