"use client";

import { motion } from "framer-motion";

const links = {
  company: ["About", "Careers", "Press", "Contact"],
  services: ["Strategy", "Design", "Development", "Motion"],
  social: ["Twitter", "Instagram", "LinkedIn", "Dribbble"],
};

export default function FooterScrollSection() {
  return (
    <footer className="bg-foreground text-background py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-light mb-4">Meridian</h3>
            <p className="text-background/60 font-light">
              Crafting digital experiences that inspire and transform.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-background/40 mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="/#"
                      whileHover={{ x: 4 }}
                      className="text-background/80 hover:text-background transition-colors font-light"
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-background/40">
            © 2026 Meridian Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/#"
              className="font-mono text-xs text-background/40 hover:text-background transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/#"
              className="font-mono text-xs text-background/40 hover:text-background transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
