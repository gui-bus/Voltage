"use client";
//#region Imports
import { cn } from "@heroui/react";
import {
  ShieldCheckIcon,
  UsersIcon,
  SignOutIcon,
  HeartbeatIcon,
} from "@phosphor-icons/react";
import type React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
//#endregion

//#region Constants
const badges = [
  {
    icon: HeartbeatIcon,
    title: "Medical Support",
    description: "On-site medical team with rapid response units",
  },
  {
    icon: UsersIcon,
    title: "Trained Security",
    description: "Professional staff monitoring crowd flow and access",
  },
  {
    icon: SignOutIcon,
    title: "Emergency Routes",
    description: "Well-lit, clearly marked exits across all areas",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safe Environment",
    description: "Controlled access and continuous venue monitoring",
  },
];

const securityFeatures = [
  "On-site medical teams with rapid emergency response",
  "Highly trained security staff across all zones",
  "Clearly marked emergency exits and evacuation routes",
  "Controlled access points and real-time crowd monitoring",
];
//#endregion

export function TrustSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 lg:py-40 bg-background"
      id="security"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className={cn(
              "transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            )}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-foreground/20" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Security
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Feel safe.{" "}
              <span className="font-serif italic font-normal text-muted-foreground">
                Stay immersed.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light max-w-lg">
              Every detail at Voltage is designed to ensure your safety —
              without breaking the flow of the experience.
            </p>

            <div className="space-y-5">
              {securityFeatures.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-700",
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6"
                  )}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "grid grid-cols-2 gap-5 transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            )}
          >
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.title}
                  className={cn(
                    "p-8 rounded-3xl border bg-card shadow-premium text-center transition-all duration-700 hover:shadow-premium-lg hover:-translate-y-1 group",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  )}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                    <Icon weight="duotone" className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 tracking-tight">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
