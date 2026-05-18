"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#2029b8]/10 text-[#2029b8] font-bold uppercase tracking-wider text-xs border border-[#2029b8]/20"
          >
            <Sparkles className="w-3.5 h-3.5" /> FOUNDER'S MESSAGE
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15] uppercase text-center"
          >
            Words from our <span className="text-[#2029b8]">Founder</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl text-center"
          >
            A personal message from our leadership on bridging technical expertise with global placement opportunity compliance.
          </motion.p>
        </div>

        {/* Layout: Photo | Content | Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Founder Portrait" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 text-center px-4"
          >
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-10">
                <Quote size={80} className="text-primary" />
              </div>
              
              <h3 className="text-2xl md:text-4xl font-heading font-bold text-slate-800 mb-8 leading-tight">
                "Our mission is to bridge the gap between <span className="text-primary italic">Ambition</span> and <span className="text-primary italic">Global Success</span>."
              </h3>
              
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8">
                At Splendid Tech, we don&apos;t just build software; we build careers. We understand the challenges of the international tech market, and we are here to provide the mentorship, tools, and community needed to thrive in the USA.
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-1 bg-primary/20 rounded-full mb-4" />
                <p className="font-heading font-black text-xl text-[#2029b8] uppercase tracking-wider">Chintan Shah</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Founder & CEO, Splendid Tech</p>
              </div>
            </div>
          </motion.div>

          {/* Right Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white rotate-[3deg] hover:rotate-0 transition-transform duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
                alt="Founder at work" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Mobile Photos (Stacked) */}
          <div className="lg:hidden flex flex-row gap-4 justify-center">
            <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Founder 1" fill className="object-cover" />
            </div>
            <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" alt="Founder 2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
