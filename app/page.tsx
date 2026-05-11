"use client";

import { Navbar } from "@/components/ui/mini-navbar";
import { ResumeTransformationHero } from "@/components/ResumeTransformationHero";
import { ModernHero } from "@/components/ModernHero";
import { TestimonialsPreview } from "@/components/TestimonialsPreview";
import { BeInTheRoomSection } from "@/components/BeInTheRoomSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { MetricsBanner } from "@/components/MetricsBanner";
import { FounderSection } from "@/components/FounderSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative flex flex-col">
      <Navbar />
      {/* <ResumeTransformationHero /> */}

      <ModernHero />
      <TestimonialsPreview />
      <AboutSection />
      <BeInTheRoomSection />
      {/* <ServicesCarousel /> */}
      <MetricsBanner />
      <FounderSection />
      {/* <ReviewsSection /> */}
      <Footer />
    </main>
  );
}
