import React from "react";
import { Navbar } from "@/components/ui/mini-navbar";
import { Footer } from "@/components/Footer";
import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col justify-center">
        <BouncyCardsFeatures />
      </div>

      <Footer />
    </main>
  );
}
