"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, GraduationCap, Code2, Globe, Smartphone } from "lucide-react";

export const BouncyCardsFeatures = () => {
  return (
    <section className="w-full mx-auto max-w-7xl px-6 md:px-12 pt-32 pb-20 text-slate-800">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end w-full">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-4 text-[#2029b8] font-bold uppercase tracking-wider text-sm">
            <span className="w-8 h-px bg-[#2029b8]"></span> Our Services
          </div>
          <h2 className="w-full max-w-3xl text-4xl md:text-5xl lg:text-6xl font-black text-[#2029b8] leading-[1.1] tracking-tight">
            Comprehensive Solutions for <span className="text-slate-400">Your Success</span>
          </h2>
        </div>
      </div>
      
      {/* ROW 1: 2 boxes (Yellow, Teal) */}
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-6" href="/services/staffing">
          <CardTitle icon={<Users className="w-8 h-8 mb-4 text-yellow-500" />}>Staffing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl shadow-slate-900/40 flex flex-col items-center justify-center">
            <span className="block text-center font-bold text-white text-xl mb-2">
              Talent Placement
            </span>
            <p className="text-yellow-50 text-center text-sm">Connecting top IT professionals with leading companies.</p>
          </div>
        </BounceCard>
        
        <BounceCard className="col-span-12 md:col-span-6" href="/services/training">
          <CardTitle icon={<GraduationCap className="w-8 h-8 mb-4 text-cyan-500" />}>Training</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl bg-gradient-to-br from-cyan-400 to-cyan-600 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl shadow-slate-900/40 flex flex-col items-center justify-center">
            <span className="block text-center font-bold text-white text-xl mb-2">
              Skill Development
            </span>
            <p className="text-cyan-50 text-center text-sm">Empowering careers through industry-aligned tech training and mentorship.</p>
          </div>
        </BounceCard>
      </div>

      {/* ROW 2: 1 box (Pink) */}
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12" href="/services/software-development">
          <CardTitle icon={<Code2 className="w-8 h-8 mb-4 text-fuchsia-500" />}>Software Development</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl shadow-slate-900/40 flex flex-col items-center justify-center">
            <span className="block text-center font-bold text-white text-xl mb-2">
              Custom Solutions
            </span>
            <p className="text-fuchsia-50 text-center text-sm max-w-md">Building scalable, high-performance software tailored to your business needs.</p>
          </div>
        </BounceCard>
      </div>

      {/* ROW 3: 2 boxes (Teal, Yellow) */}
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-6" href="/services/website-development">
          <CardTitle icon={<Globe className="w-8 h-8 mb-4 text-cyan-500" />}>Website Development</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl bg-gradient-to-br from-cyan-400 to-cyan-600 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl shadow-slate-900/40 flex flex-col items-center justify-center">
            <span className="block text-center font-bold text-white text-xl mb-2">
              Digital Presence
            </span>
            <p className="text-cyan-50 text-center text-sm">Creating stunning, responsive web platforms.</p>
          </div>
        </BounceCard>

        <BounceCard className="col-span-12 md:col-span-6" href="/services/mobile-app-development">
          <CardTitle icon={<Smartphone className="w-8 h-8 mb-4 text-yellow-500" />}>Mobile App Development</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-3xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-2xl shadow-slate-900/40 flex flex-col items-center justify-center">
            <span className="block text-center font-bold text-white text-xl mb-2">
              iOS & Android
            </span>
            <p className="text-yellow-50 text-center text-sm">Delivering seamless and engaging mobile experiences for your users across all devices.</p>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children, href }: { className?: string; children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className={`block col-span-12 ${className}`}>
      <motion.div
        whileHover={{ scale: 0.98, rotate: "-1deg" }}
        className={`group relative min-h-[350px] w-full h-full cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/20 border border-slate-100 p-8 transition-shadow hover:shadow-2xl hover:shadow-slate-900/40`}
      >
        {children}
      </motion.div>
    </Link>
  );
};

const CardTitle = ({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="mx-auto text-center text-2xl font-bold text-slate-800">{children}</h3>
    </div>
  );
};
