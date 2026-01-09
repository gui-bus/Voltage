"use client";
//#region Imports
import { cn } from "@heroui/react";
import { useEffect, useState } from "react";
//#endregion

//#region Constants
const sections = [
  { label: "Hero", id: "hero" },
  { label: "Energy", id: "energy" },
  { label: "Experience", id: "experience" },
  { label: "Numbers", id: "numbers" },
  { label: "What We Offer", id: "offer" },
  { label: "Quote", id: "quote" },
  { label: "Timeline", id: "timeline" },
  { label: "Visual", id: "visual" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Lineup", id: "lineup" },
  { label: "Security", id: "security" },
  { label: "Tickets", id: "tickets" },
  { label: "FAQ", id: "faq" },
  { label: "Partners", id: "partners" },
  { label: "Location", id: "location" },
  { label: "Footer", id: "footer" },
];
//#endregion

export function ProgressIndicator() {
  //#region useStates
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  //#endregion

  //#region useEffects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setIsVisible(scrollTop > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  //#endregion

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-0.5 z-50 transition-opacity duration-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-foreground/5" />
        <div
          className="h-full bg-linear-to-r from-accent via-accent to-accent/60 transition-all duration-150 ease-out relative"
          style={{ width: `${scrollProgress * 100}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-accent/50 blur-md" />
        </div>
      </div>

      <nav
        className={cn(
          "fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-1.5 transition-all duration-500",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        )}
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isPast =
            sections.findIndex((s) => s.id === activeSection) >
            sections.findIndex((s) => s.id === section.id);

          return (
            <button
              key={section.id}
              type="button"
              aria-label={`Go to ${section.label}`}
              onClick={() => {
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group flex items-center justify-end gap-3"
            >
              <span
                className={cn(
                  "text-[10px] font-medium tracking-wider uppercase transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                  isActive ? "text-accent" : "text-muted-foreground"
                )}
              >
                {section.label}
              </span>

              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-accent scale-[1.8] shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                    : isPast
                    ? "bg-foreground/40 group-hover:bg-foreground/60"
                    : "bg-foreground/15 group-hover:bg-foreground/30"
                )}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
}
