"use client";

import { cn } from "@heroui/react";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import type React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Documentation", "API"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Community", "Help Center", "Status", "Security", "Privacy"],
  Legal: ["Terms", "Privacy", "Cookies", "Licenses", "Contact"],
};

const socialLinks = [
  { icon: TwitterLogoIcon, href: "#", label: "Twitter" },
  { icon: GithubLogoIcon, href: "#", label: "GitHub" },
  { icon: LinkedinLogoIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeLogoIcon, href: "#", label: "YouTube" },
];

export function FooterSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-24 bg-default relative"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16 mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:pr-8">
            <div className="text-2xl font-semibold tracking-tight mb-5">
              Platform
            </div>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed font-light max-w-xs">
              Building the future of web development, one deployment at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon
                      weight="duotone"
                      className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links], i) => (
            <div
              key={category}
              className={cn(
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h4 className="font-medium text-sm tracking-wide mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="/#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-muted-foreground text-sm font-light">
            © 2026 Platform, Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="/#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-light"
            >
              Privacy Policy
            </a>
            <a
              href="/#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-light"
            >
              Terms of Service
            </a>
            <a
              href="/#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-light"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
