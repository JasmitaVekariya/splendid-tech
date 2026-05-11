"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pizza04Icon,
  CommandFreeIcons,
  GlobalSearchIcon,
  AiCloudIcon,
  SmartPhone01Icon,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  MagicWandIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

// The 4 core features from screenshot, plus 4 extra to make the carousel scroll nicely
const FEATURES = [
  {
    id: "certified",
    label: "Certified Industry Experts",
    icon: CheckmarkCircle01Icon,
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop",
    description: "Learn and build with professionals actively working in top tech companies.",
  },
  {
    id: "placement",
    label: "Fast & Quality Placement",
    icon: MagicWandIcon,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    description: "Accelerate your career with direct interview alignments and robust vendor networks.",
  },
  {
    id: "transparent",
    label: "Transparent & Affordable Plans",
    icon: CommandFreeIcons,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    description: "No hidden fees. We offer flexible packages tailored for students and enterprises alike.",
  },
  {
    id: "proven",
    label: "Proven Track Record",
    icon: DashboardSquare01Icon,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description: "Hundreds of successful placements and robust software deliveries speak for themselves.",
  },
  {
    id: "support",
    label: "24/7 Dedicated Support",
    icon: GlobalSearchIcon,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    description: "We are always available to resolve queries, guide your projects, and prepare you for interviews.",
  },
  {
    id: "resume",
    label: "Advanced Resume Building",
    icon: AiCloudIcon,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    description: "Stand out to ATS scanners and recruiters with perfectly crafted tech profiles.",
  },
  {
    id: "mock",
    label: "Real-World Mock Interviews",
    icon: Pizza04Icon,
    image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1200&auto=format&fit=crop",
    description: "Practice technical and behavioral rounds with actual hiring managers.",
  },
  {
    id: "tech",
    label: "Scalable Software Solutions",
    icon: SmartPhone01Icon,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description: "Custom-built, high-performance web and mobile applications for your business.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function AboutWhyChooseUs() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentIndex = ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <section className="w-full py-20 lg:py-32 bg-white overflow-hidden relative">
      
      {/* HEADER SECTION (from screenshot 2) */}
      <div className="max-w-7xl mx-auto mb-16 px-6 md:px-12">
        <div className="flex flex-col items-start max-w-3xl">
          <div className="flex items-center gap-2 mb-4 text-[#2029b8] font-bold uppercase tracking-wider text-sm">
            <span className="w-8 h-px bg-[#2029b8]"></span> Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black !font-sans text-[#2029b8] leading-[1.1] tracking-tight mb-6">
            Your Career And Tech Partner For The Long Run
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            We're not just another consultancy or development agency. At Splendid Tech IT Solutions, we combine career strategy, skill training, and tech expertise under one roof. From international students seeking jobs to businesses needing robust software, we bring the same level of focus, transparency, and results.
          </p>
        </div>
      </div>

      {/* CAROUSEL SECTION (from feature-carousel.tsx) */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px] lg:aspect-video border border-slate-200 shadow-2xl">
          {/* LEFT CHIP SELECTION AREA */}
          <div className="w-full lg:w-[40%] min-h-[280px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-4 md:px-16 lg:pl-16 bg-[#2029b8]">
            <div className="absolute inset-x-0 top-0 h-10 md:h-20 lg:h-16 bg-gradient-to-b from-[#2029b8] via-[#2029b8]/80 to-transparent z-40" />
            <div className="absolute inset-x-0 bottom-0 h-10 md:h-20 lg:h-16 bg-gradient-to-t from-[#2029b8] via-[#2029b8]/80 to-transparent z-40" />
            <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
              {FEATURES.map((feature, index) => {
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(
                  -(FEATURES.length / 2),
                  FEATURES.length / 2,
                  distance
                );

                return (
                  <motion.div
                    key={feature.id}
                    style={{
                      height: ITEM_HEIGHT,
                      width: "fit-content",
                    }}
                    animate={{
                      y: wrappedDistance * (isMobile ? 55 : ITEM_HEIGHT),
                      opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 22,
                      mass: 1,
                    }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "relative flex items-center gap-3 md:gap-4 px-5 md:px-10 lg:px-8 py-3 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border",
                        isActive
                          ? "bg-white text-[#2029b8] border-white z-10 shadow-lg"
                          : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center transition-colors duration-500",
                          isActive ? "text-[#2029b8]" : "text-white/40"
                        )}
                      >
                        <HugeiconsIcon
                          icon={feature.icon}
                          size={16}
                          strokeWidth={2}
                        />
                      </div>

                      <span className="font-bold text-[11px] md:text-[15px] tracking-tight whitespace-nowrap uppercase">
                        {feature.label}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE/CARD DISPLAY AREA */}
          <div className="flex-1 min-h-[400px] md:min-h-[600px] lg:h-full relative bg-slate-50 flex items-center justify-center py-12 md:py-24 lg:py-16 px-4 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
            <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {FEATURES.map((feature, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";

                return (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                      rotate: isPrev ? -3 : isNext ? 3 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-white bg-white shadow-xl origin-center"
                  >
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isActive
                          ? "grayscale-0 blur-0"
                          : "grayscale blur-[2px] brightness-75"
                      )}
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-[#0a0f1c]/90 via-[#0a0f1c]/50 to-transparent flex flex-col justify-end pointer-events-none"
                        >
                          <div className="bg-[#2029b8] text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] w-fit shadow-lg mb-3">
                            {index + 1} • {feature.label}
                          </div>
                          <p className="text-white font-medium text-lg md:text-xl leading-relaxed drop-shadow-md">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div
                      className={cn(
                        "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#ff6b2b] shadow-[0_0_10px_#ff6b2b]" />
                      <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.3em] bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
                        Splendid Advantage
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
