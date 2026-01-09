"use client";
//#region Imports
import { cn } from "@heroui/react";
import { StarIcon } from "@phosphor-icons/react";
import type React from "react";
import {
  useScrollAnimation,
  useScrollProgress,
} from "@/hooks/use-scroll-animation";
import Image from "next/image";
//#endregion

//#region Constants
const testimonials = [
  {
    quote:
      "Voltage is hands down the best electronic music festival I've ever attended!",
    author: "Jessica Johnson",
    role: "Music Influencer",
    avatar: "/content/images/jessicaJohnson.png",
    rating: 5,
  },
  {
    quote:
      "The energy, the lights, the music — it all felt like a dream come true.",
    author: "Sofia Lee",
    role: "YouTube DJ Channel",
    avatar: "/content/images/sofiaLee.png",
    rating: 5,
  },
  {
    quote: "Every beat, every drop, every moment was perfect.",
    author: "Marco Silva",
    role: "Festival Enthusiast",
    avatar: "/content/images/marcoSilva.png",
    rating: 5,
  },
];
//#endregion

export function TestimonialsSection() {
  //#region Hooks
  const { ref, progress } = useScrollProgress();
  //#endregion

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 lg:py-40 bg-background overflow-hidden"
      id="testimonials"
    >
      <div className="px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-foreground/20" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Testimonials
            </span>
            <div className="w-8 h-px bg-foreground/20" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Loved by the crowd —{" "}
            <span className="font-serif italic font-normal text-muted-foreground">
              real voices, real moments
            </span>
          </h2>
        </div>

        <div className="relative">
          <div
            className="flex gap-6 lg:gap-8"
            style={{
              transform: `translateX(${-progress * 25}%)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} index={i} />
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "shrink-0 w-85 md:w-100 p-8 lg:p-10 rounded-3xl border bg-card shadow-premium transition-all duration-700 hover:shadow-premium-lg hover:-translate-y-1",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon
            weight="duotone"
            key={i}
            className="w-4 h-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      <blockquote className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 font-light">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-background shadow-sm"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
