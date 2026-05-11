import React from "react";
import { Navbar } from "@/components/ui/mini-navbar";
import { Footer } from "@/components/Footer";
import { Contact2 } from "@/components/contact-2";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col justify-center">
        <Contact2 />
      </div>

      <Footer />
    </main>
  );
}
