import React from "react";
import { Navbar } from "@/components/ui/mini-navbar";
import { Footer } from "@/components/Footer";
import { AboutCommitment } from "@/components/AboutCommitment";
import { AboutWhyChooseUs } from "@/components/AboutWhyChooseUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      
      <Navbar />

      <AboutCommitment />
      
      <AboutWhyChooseUs />

      <Footer />
    </main>
  );
}
