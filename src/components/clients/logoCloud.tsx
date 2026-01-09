"use client";
//#region Imports
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
//#endregion

//#region Constants
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
//#endregion

export function LogoCloud() {
  return (
    <section
      className="border-y border-border bg-background pb-12"
      id="partners"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4 }}
        >
          Proudly Sponsored By
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.src}
              variants={staggerItem}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="flex h-12 w-24 items-center justify-center text-2xl font-bold text-muted-foreground/50"
            >
              <Image src={logo.src} alt={logo.name} width={100} height={100} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
