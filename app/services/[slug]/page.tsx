import React from "react";
import { Navbar } from "@/components/ui/mini-navbar";
import { Footer } from "@/components/Footer";
import { servicesData } from "@/lib/servicesData";
import { ServiceSplitHero } from "@/components/ServiceSplitHero";
import Link from "next/link";
import * as Icons from "lucide-react";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Lookup service from our central dataset
  const service = servicesData.find((s) => s.slug === slug);

  // If not found, render a clean fallback
  if (!service) {
    return (
      <main className="min-h-screen bg-white overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="flex-1 pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black text-slate-800 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The requested service pathway does not exist.</p>
          <Link href="/" className="px-6 py-3 bg-[#2029b8] text-white font-bold rounded-full hover:bg-[#181d85] transition-colors">
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <Navbar />

      {/* Content Section (Using the EXACT same Wonsulting W-split standard layout, Pure White) */}
      <div className="pt-32 pb-12 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 bg-white">
        <ServiceSplitHero service={service} />
      </div>

      {/* Dynamic Key Offerings / Core Modules Grid Section (Premium Soft Blue Tint - 0.20 Opacity) */}
      <div className="bg-[#2029b8]/20 border-t border-b border-slate-200/50 py-16 md:py-24 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header Title Block matching the homepage center style */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-[#2029b8] bg-[#2029b8]/10 border border-[#2029b8]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest inline-block">
              Core Deliverables
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mt-6 tracking-tight uppercase leading-tight">
              Bespoke {service.title} Features
            </h2>
            <div className="w-16 h-1 bg-[#2029b8] mx-auto mt-4 rounded-full" />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4">
              Explore the critical pillars and expert-led pathways included in our custom-tailored operational plan.
            </p>
          </div>

          {/* Grid Layout (Properly Responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, idx) => {
              const IconComponent = (Icons as any)[feature.icon] || Icons.CheckCircle;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-[#2029b8]/20 hover:shadow-xl hover:shadow-[#2029b8]/5 transition-all duration-300 flex flex-col items-start text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2029b8]/5 text-[#2029b8] flex items-center justify-center mb-5 group-hover:bg-[#2029b8] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[2.25]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#2029b8] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mt-2.5">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Action Lead Capture Banner (Pure White) */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-black text-[#2029b8] bg-[#2029b8]/10 border border-[#2029b8]/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            Get In Touch
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-800 mt-6 tracking-tight uppercase leading-tight">
            Ready to scale your career or business operations?
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
            Book an absolute free career orientation consult or project workflow blueprint alignment calls with our senior engineering directors today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#2029b8] hover:bg-[#181d85] text-white font-extrabold text-xs md:text-sm rounded-full shadow-lg shadow-[#2029b8]/20 transition-all duration-300 uppercase tracking-wider">
              Schedule Free Session
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
