"use client";

import { Navbar } from "@/components/ui/mini-navbar";
import { ModernHero } from "@/components/ModernHero";
import { WhyWeExist } from "@/components/WhyWeExist";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsPreview } from "@/components/TestimonialsPreview";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { MetricsBanner } from "@/components/MetricsBanner";
import { FounderSection } from "@/components/FounderSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative flex flex-col">
      <Navbar />

      <ModernHero />
      <WhyWeExist />
      <AboutSection />
      <TestimonialsPreview />
      <ServicesCarousel />
      <MetricsBanner />
      <FounderSection />
      <Footer />
    </main>
  );
}
