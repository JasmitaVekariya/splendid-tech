"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/mini-navbar";
import { Footer } from "@/components/Footer";
import { X } from "lucide-react";

const VideoCard = ({ index, onOpen }: { index: number; onOpen: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onClick={onOpen}
      className="relative mx-auto w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden bg-black shadow-lg group border border-white/5 cursor-zoom-in"
    >
      <video
        ref={videoRef}
        src="/whatsapp.mp4"
        muted
        loop
        playsInline
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all">
           <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState(false);
  const cardCount = 36; 

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-24">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto mb-24">
          {/* Section Label (Left Aligned) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-start gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary">Testimonials</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] tracking-tighter uppercase mb-8 text-left"
          >
            <span className="text-primary">The Suuuper 🚀</span><br />
            <span className="text-slate-400">Testimonials.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 font-medium max-w-3xl text-left leading-relaxed"
          >
            Don&apos;t take our word for it. See what professionals like you are saying…
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {[...Array(cardCount)].map((_, i) => (
            <VideoCard key={i} index={i} onOpen={() => setSelectedVideo(true)} />
          ))}
        </div>
      </section>

      {/* Modal Overlay (Fixed Fitting) */}
      <AnimatePresence>
        {selectedVideo && (
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
              onClick={() => setSelectedVideo(false)}
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
                onClick={() => setSelectedVideo(false)}
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

      <Footer />
    </main>
  );
}
