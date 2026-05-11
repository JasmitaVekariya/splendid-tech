import React from "react";
import { Navbar } from "@/components/ui/mini-navbar";
import { Footer } from "@/components/Footer";

// We format the slug to make it readable, e.g., 'software-development' -> 'Software Development'
function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceName = formatSlug(params.slug);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-6 bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
          <div className="flex items-center justify-center gap-2 text-[#2029b8] font-bold uppercase tracking-wider text-sm mb-4">
            <span className="w-8 h-px bg-[#2029b8]"></span> Service Detail <span className="w-8 h-px bg-[#2029b8]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2029b8]">
            {serviceName}
          </h1>
          <p className="text-slate-600 text-lg md:text-xl">
            This is the personalized page for our {serviceName} services. Content for this specific service will be populated here.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
