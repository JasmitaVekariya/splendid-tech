"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceData } from "@/lib/servicesData";

interface ServiceSplitHeroProps {
  service: ServiceData;
}

export function ServiceSplitHero({ service }: ServiceSplitHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full py-8 bg-white relative">
      
      {/* Signature pastel light-blue sidebar panel from the reference photo (extended length by 50px) */}
      <div className="absolute right-[-48px] md:right-[-96px] top-[-50px] bottom-[-50px] w-[35%] bg-[#2029b8]/10 z-0 hidden lg:block" />

      {/* Left Column Content */}
      <div className="lg:col-span-7 relative z-10 flex flex-col items-start text-left">
        {/* Category Tag */}
        <span className="text-[#2029b8] font-bold tracking-wider uppercase text-xs mb-2 block">
          {service.tag}
        </span>

        {/* Dynamic Wonsulting Style Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-[2.65rem] font-black text-slate-800 tracking-tight leading-[1.1] mb-4">
          {service.headline.split(" ").map((word, idx) => {
            const isHighlight = word.includes("#");
            return (
              <span key={idx} className={isHighlight ? "text-[#2029b8]" : ""}>
                {word}{" "}
              </span>
            );
          })}
        </h2>

        {/* Structured Body Description */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mb-5">
          {service.description}
        </p>

        {/* Primary Route Trigger */}
        <div className="flex flex-col items-start mb-6">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-[#2029b8] hover:bg-[#181d85] text-white font-extrabold text-xs md:text-sm rounded-full shadow-lg shadow-[#2029b8]/20 transition-all duration-300 flex items-center gap-2.5 uppercase tracking-wider"
            >
              {service.buttonText}
            </motion.button>
          </Link>

          {/* Validation Subtext */}
          <span className="text-[11px] text-slate-400 font-bold pl-4 mt-2">
            {service.subText}
          </span>
        </div>

        {/* Verified Placement/Scale Metric Row (Aligned horizontally like reference image) */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 w-full max-w-md">
          <span className="text-3xl md:text-4xl font-extrabold text-[#113a5d] leading-none shrink-0">
            {service.metricNumber}
          </span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {service.metricLabel}
          </span>
        </div>
      </div>

      {/* Right Column Video Frame */}
      <div className="lg:col-span-5 relative z-10 flex justify-center w-full">
        {isPlaying ? (
          <div className="w-full max-w-[480px] aspect-[16/9] bg-slate-950 border border-slate-200/80 rounded-none overflow-hidden shadow-2xl relative">
            <iframe 
              src={`https://www.youtube.com/embed/${service.youtubeId}?autoplay=1&rel=0`} 
              title={service.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full absolute inset-0"
            />
          </div>
        ) : (
          <div className="w-full max-w-[480px] aspect-[16/9] bg-slate-900 border border-slate-200/80 rounded-none overflow-hidden shadow-2xl relative group/video">
            {/* Dynamic Custom Unsplash Picture Frame */}
            <img 
              src={service.coverImage} 
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-750 group-hover/video:scale-105 absolute inset-0 rounded-none"
            />
            {/* Interactive Dark Backdrop */}
            <div 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 bg-black/35 group-hover/video:bg-black/25 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-none"
            />

            {/* Standard YouTube Red Action Button (Centered) */}
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group/play border border-red-500/20"
              aria-label="Play video walkthrough"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Walkthrough Tag Overlay */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-left text-white pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div>
                <span className="text-[10px] text-white/80 block font-bold uppercase tracking-wider">Demo Video Walkthrough</span>
                <span className="text-xs text-white font-extrabold line-clamp-1">{service.title}</span>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
