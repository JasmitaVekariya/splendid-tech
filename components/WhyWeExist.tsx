"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Cpu, 
  ShieldAlert, 
  Briefcase, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export function WhyWeExist() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden border-b border-slate-100">
      
      {/* Soft decorative background circles matching the photo reference */}
      <div className="absolute top-12 left-1/3 w-72 h-72 bg-[#2029b8]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -left-12 bottom-1/3 w-64 h-64 bg-rose-500/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#2029b8]/10 text-[#2029b8] font-bold uppercase tracking-wider text-xs border border-[#2029b8]/20"
          >
            <Sparkles className="w-3.5 h-3.5" /> WHY WE EXIST
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15]"
          >
            Bridging the Gap Between <span className="text-[#2029b8]">Ambition</span> & <span className="text-slate-400">Opportunity</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            Landing a rewarding tech role in the US requires more than just academic knowledge. 
            We identify the barriers in your way—and provide the exact solutions to overcome them.
          </motion.p>
        </div>

        {/* Classic 3-Column Layout from Reference Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1 (Left): The Key Challenges (Problems) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-100/50">
                The Hurdles
              </span>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight mt-3">
                The Hurdles You Face
              </h3>
            </div>

            {/* Challenge 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-start gap-4 text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 border border-rose-100/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-rose-100 group-hover:scale-105 flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-slate-800 group-hover:text-rose-600 transition-colors uppercase tracking-tight">
                  The Experience Catch-22
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-1 max-w-[340px]">
                US employers demand local professional experience, but won't hire F-1 OPT or international candidates without work history.
              </p>
            </motion.div>

            {/* Challenge 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start gap-4 text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 border border-rose-100/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-rose-100 group-hover:scale-105 flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-slate-800 group-hover:text-rose-600 transition-colors uppercase tracking-tight">
                  The ATS Filtering Void
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-1 max-w-[340px]">
                Automated ATS algorithms instantly filter out over 98% of applications lacking verified US project keyword density and references.
              </p>
            </motion.div>

            {/* Challenge 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-start gap-4 text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 border border-rose-100/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-rose-100 group-hover:scale-105 flex-shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-slate-800 group-hover:text-rose-600 transition-colors uppercase tracking-tight">
                  Compliance Complexities
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-1 max-w-[340px]">
                Navigating F-1 OPT regulations, STEM extension deadlines, and securing legal sponsorship requires verified immigration pathways.
              </p>
            </motion.div>
          </div>

          {/* Column 2 (Middle): Portrait Image Card with Double Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[380px] p-4 bg-white border border-slate-200/60 rounded-[44px] shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-[32px] overflow-hidden border border-slate-100">
                <img 
                  src="/us_career_hero.png" 
                  alt="Career Success in Tech" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Visual overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Floating Call to Action in the Visual Frame */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-max">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const demoSection = document.getElementById("contact");
                      if (demoSection) {
                        demoSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-3 bg-[#2029b8] hover:bg-[#181d85] text-white font-extrabold text-sm rounded-full shadow-lg shadow-blue-900/35 transition-all duration-300 flex items-center gap-2 border border-blue-400/20 uppercase tracking-wider"
                  >
                    Book Free Demo <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 3 (Right): Our Splendid Solutions */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2029b8] bg-[#2029b8]/10 px-3 py-1 rounded-full border border-[#2029b8]/20">
                Our Solution
              </span>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight mt-3">
                The Splendid Solutions
              </h3>
            </div>

            {/* Solution 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-start gap-4 text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-[#2029b8]/10 group-hover:text-[#2029b8] group-hover:border-[#2029b8]/30 group-hover:scale-105 flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-[#2029b8] group-hover:text-[#181d85] transition-colors uppercase tracking-tight">
                  Direct US Hub Training
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-1 max-w-[340px]">
                Work directly on active software engineering projects, production clouds, and modern databases inside our US-based delivery hub.
              </p>
            </motion.div>

            {/* Solution 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-start gap-4 text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-[#2029b8]/10 group-hover:text-[#2029b8] group-hover:border-[#2029b8]/30 group-hover:scale-105 flex-shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-[#2029b8] group-hover:text-[#181d85] transition-colors uppercase tracking-tight">
                  Direct Recruiter Pathways
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-1 max-w-[340px]">
                Skip public queues. We optimize your profile keyword density and send direct referrals to internal client recruitment managers.
              </p>
            </motion.div>

            {/* Solution 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-start gap-4 text-left group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-[#2029b8]/10 group-hover:text-[#2029b8] group-hover:border-[#2029b8]/30 group-hover:scale-105 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-[#2029b8] group-hover:text-[#181d85] transition-colors uppercase tracking-tight">
                  Full E-Verify Sponsorship
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-1 max-w-[340px]">
                100% compliant F-1 OPT STEM support. We are a verified E-Verify company with years of successful corporate sponsorship experience.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
