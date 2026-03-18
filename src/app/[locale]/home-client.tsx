"use client";
import { LogoCloud } from "@/components/clients/logoCloud";
import { HorizontalScrollSection } from "@/components/content/horizontalScrollSection";
import MaskRevealSection from "@/components/content/maskRevealSection";
import ParallaxTextSection from "@/components/content/parallaxTextSection";
import QuoteSection from "@/components/content/quoteSection";
import SplitScreenSection from "@/components/content/splitScreenSection";
import TextMorphSection from "@/components/content/textMorphSection";
import { TrustSection } from "@/components/content/trustSection";
import { FAQSection } from "@/components/faqs/faq";
import { Footer } from "@/components/footers/footer";
import Header from "@/components/header/header";
//#region Imports
import { HeroSection } from "@/components/heros/heroSection";
import { LocationMap } from "@/components/maps/locationMap";
import { PricingSection } from "@/components/pricing/pricingSection";
import NumbersSection from "@/components/socialProof/numbersSection";
import { TestimonialsSection } from "@/components/socialProof/testimonialsSection";
import TimelineSection from "@/components/timelines/timelineSection";
import { useScrollSpy } from "@/hooks/useScrollSpy";
//#endregion

export function HomeClient() {
  //#region Hooks
  useScrollSpy([
    { id: "hero" },
    { id: "energy" },
    { id: "experience" },
    { id: "numbers" },
    { id: "offer" },
    { id: "quote" },
    { id: "timeline" },
    { id: "visual" },
    { id: "testimonials" },
    { id: "lineup" },
    { id: "security" },
    { id: "tickets" },
    { id: "faq" },
    { id: "partners" },
    { id: "location" },
    { id: "footer" },
  ]);
  //#endregion

  return (
    <main className="relative">
      <Header />

      <HeroSection />

      <ParallaxTextSection />

      <SplitScreenSection />

      <NumbersSection />

      <TextMorphSection />

      <QuoteSection />

      <TimelineSection />

      <MaskRevealSection />

      <TestimonialsSection />

      <HorizontalScrollSection />

      <TrustSection />

      <PricingSection />

      <FAQSection />

      <LogoCloud />

      <LocationMap />

      <Footer />
    </main>
  );
}
