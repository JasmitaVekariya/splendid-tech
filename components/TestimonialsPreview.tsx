"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Sparkles } from "lucide-react";

const VideoCard = ({ index, onOpen }: { index: number; onOpen: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={onOpen}
      className="relative mx-auto w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden bg-[#0f172a] shadow-xl border border-gray-100 group cursor-zoom-in"
    >
      <video
        ref={videoRef}
        src="/whatsapp.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsPreview = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#2029b8]/10 text-[#2029b8] font-bold uppercase tracking-wider text-xs border border-[#2029b8]/20"
          >
            <Sparkles className="w-3.5 h-3.5" /> SUCCESS STORIES
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15] uppercase text-center"
          >
            Listen to what our <span className="text-[#2029b8]">Candidates say</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl text-center"
          >
            Real results from real tech professionals who unlocked direct placements in the USA. Watch their inspiring placement video testimonials.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mb-16 items-center">
          {[1, 2, 3].map((_, index) => (
            <VideoCard key={index} index={index} onOpen={() => setIsOpen(true)} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href="/testimonials">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#2029b8] text-white rounded-full font-bold text-lg shadow-lg shadow-[#2029b8]/20 hover:bg-[#181d85] transition-all flex items-center gap-2 group"
            >
              View More Testimonials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Modal Overlay (Fixed Fitting) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-[450px] max-h-[85vh] bg-black rounded-3xl overflow-hidden shadow-2xl z-10 flex items-center justify-center"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <video
                src="/whatsapp.mp4"
                autoPlay
                controls
                loop
                className="w-full h-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
