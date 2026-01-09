"use client";
//#region Imports
import { Button, cn } from "@heroui/react";
import { CheckIcon, StarIcon } from "@phosphor-icons/react";
import type React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
//#endregion

//#region Constants
const plans = [
  {
    name: "Individual Ticket",
    price: "$50",
    description: "Full access to all stages for one unforgettable night.",
    features: [
      "Access to all stages",
      "All-night event entry",
      "Immersive experience",
    ],
    cta: "Buy Ticket",
    popular: false,
  },
  {
    name: "Quad Pass",
    price: "$160",
    description: "Best value for groups with exclusive VIP perks.",
    features: [
      "Entry for four people",
      "VIP access & priority areas",
      "Exclusive perks and comfort zones",
      "Best value ticket option",
    ],
    cta: "Unlock VIP Access",
    popular: true,
  },
  {
    name: "Duo Pass",
    price: "$90",
    description: "Bring a friend and experience Voltage together.",
    features: [
      "Entry for two people",
      "Access to all stages",
      "Perfect for sharing the moment",
    ],
    cta: "Get Duo Pass",
    popular: false,
  },
];
//#endregion

export function PricingSection() {
  //#region Hooks
  const { ref, isVisible } = useScrollAnimation(0.1);
  //#endregion

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 lg:py-40 bg-background overflow-hidden"
      id="tickets"
    >
      <div className="absolute inset-0 bg-radial from-accent/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "text-center mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-foreground/20" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Tickets
            </span>
            <div className="w-8 h-px bg-foreground/20" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Choose your{" "}
            <span className="font-serif italic font-normal text-muted-foreground">
              experience
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Pick your ticket and step into a night of music, lights, and pure
            energy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-3xl border p-8 lg:p-10 transition-all duration-1000 group",
                plan.popular
                  ? "bg-foreground text-background border-foreground shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] scale-[1.05]"
                  : "bg-card border-border shadow-premium hover:shadow-premium-lg",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.popular && (
                <>
                  <div className="absolute -inset-px rounded-3xl bg-linear-to-br from-accent/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium shadow-lg">
                    <StarIcon weight="duotone" className="w-4 h-4" />
                    Best Value
                  </div>
                </>
              )}

              <div className="relative mb-10">
                <h3
                  className={cn(
                    "text-xl font-semibold tracking-tight mb-4",
                    plan.popular ? "text-background" : "text-foreground"
                  )}
                >
                  {plan.name}
                </h3>

                <div className="flex items-end gap-2">
                  <span
                    className={cn(
                      "text-5xl font-semibold tracking-tight",
                      plan.popular ? "text-background" : "text-foreground"
                    )}
                  >
                    {plan.price}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-4 text-sm font-light leading-relaxed",
                    plan.popular
                      ? "text-background/70"
                      : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 relative">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                        plan.popular ? "bg-accent" : "bg-accent-soft"
                      )}
                    >
                      <CheckIcon
                        weight="bold"
                        className={cn(
                          "w-3 h-3",
                          plan.popular
                            ? "text-accent-foreground"
                            : "text-accent"
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "font-light",
                        plan.popular ? "text-background/85" : "text-foreground"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full h-12 rounded-full font-medium transition-all text-black",
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
                variant={plan.popular ? "primary" : "secondary"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
