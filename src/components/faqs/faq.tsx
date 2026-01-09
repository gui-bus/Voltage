"use client";
//#region Imports
import { cn, IconChevronDown } from "@heroui/react";
import type React from "react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
//#endregion

//#region Constants
const faqs = [
  {
    question: "What is the minimum age to attend?",
    answer:
      "Voltage is strictly 18+ only. A valid government-issued photo ID is required at entry for age verification.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes. A secure, on-site parking lot will be available throughout the event. Availability is limited and works on a first-come, first-served basis.",
  },
  {
    question: "Can I bring my own food or drinks?",
    answer:
      "Outside food and drinks are not permitted. Inside the venue, you’ll find curated food trucks and multiple bar stations.",
  },
  {
    question: "Are cameras allowed?",
    answer:
      "Smartphones and small personal cameras are allowed. Professional cameras require an official press pass.",
  },
  {
    question: "Is re-entry allowed?",
    answer:
      "Re-entry is not permitted once you leave the venue. Please plan accordingly.",
  },
];
//#endregion

export function FAQSection() {
  //#region Hooks
  const { ref, isVisible } = useScrollAnimation(0.1);
  //#endregion

  //#region useStates
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  //#endregion

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-32 lg:py-40 bg-background overflow-hidden"
      id="faq"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-px bg-foreground/30" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">
              FAQ
            </span>
            <div className="w-10 h-px bg-foreground/30" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Everything you need to know{" "}
            <span className="block font-serif italic font-normal text-muted-foreground">
              before the night begins
            </span>
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                style={{ transitionDelay: `${i * 90}ms` }}
                className={cn(
                  "group relative border rounded-3xl transition-all duration-500",
                  "bg-card/70 backdrop-blur-xl",
                  "hover:-translate-y-0.5",
                  isOpen
                    ? "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]"
                    : "shadow-sm",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-r from-transparent via-foreground/5 to-transparent" />

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="relative z-10 flex w-full items-center justify-between gap-6 p-6 lg:p-8 text-left cursor-pointer"
                >
                  <span
                    className={cn(
                      "text-lg font-medium transition-colors duration-300",
                      isOpen ? "text-foreground" : "text-foreground/90"
                    )}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      isOpen
                        ? "bg-primary text-background scale-105"
                        : "bg-default text-foreground group-hover:bg-foreground/10"
                    )}
                  >
                    <IconChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-out",
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-6 lg:px-8 pb-6 lg:pb-8 text-muted-foreground leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
