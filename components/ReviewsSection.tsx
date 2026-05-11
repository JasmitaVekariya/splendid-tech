"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, Quote, Box, Orbit, Triangle, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Kunal T.",
    role: "Business Analyst, Dallas",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150&auto=format&fit=crop", 
    logo: Box,
    quote: "I joined their BA training while finishing my master's. The sessions were simple, practical, and fully job-focused. I cracked two interviews and got placed within 3 months.",
  },
  {
    id: 2,
    name: "Ryan K.",
    role: "Data Analyst, Wyoming",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    logo: Orbit,
    quote: "We needed a backend tool for our logistics workflow. The Splendid Tech team delivered it in phases, stayed transparent, and nailed our custom requirements.",
  },
  {
    id: 3,
    name: "Fatima R.",
    role: "Marketing Manager, KrowdBooks",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    logo: Triangle,
    quote: "From design to deployment, the website they built was exactly what we needed — fast, clean, and mobile-friendly. Great support too!",
  },
  {
    id: 5,
    name: "Sarah J.",
    role: "Product Designer, TechFlow",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    logo: Orbit,
    quote: "The UX/UI design program was phenomenal. It gave me the practical portfolio pieces I needed to land my dream job at a top tech firm.",
  },
  {
    id: 6,
    name: "David L.",
    role: "Frontend Developer, InnovateCo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    logo: Triangle,
    quote: "I was struggling with React until I took their advanced frontend bootcamp. The instructors break down complex concepts perfectly.",
  },
  {
    id: 7,
    name: "Priya M.",
    role: "QA Engineer, SecureNet",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    logo: Box,
    quote: "Splendid Tech's QA training is rigorous and exact. I learned automated testing tools that immediately made me more valuable to my team.",
  }
];

export function ReviewsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="w-full bg-slate-50 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q400,300 800,100 T1600,100" fill="none" stroke="#e2e8f0" strokeWidth="1" />
          <path d="M0,300 Q400,500 800,300 T1600,300" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black !font-sans text-slate-900 tracking-tight mb-4">
            Client <span className="text-[#2029b8]">Testimonials</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Hear from our students and partners about their experience working with Splendid Tech.
          </p>
        </div>

        {/* DESKTOP VIEW: Expanding Cards (lg and above) */}
        <div className="hidden lg:flex w-full items-stretch justify-center gap-6 min-h-[450px]">
          {reviews.map((review, idx) => {
            const isExpanded = expandedIndex === idx;
            const Logo = review.logo;

            return (
              <div
                key={review.id}
                onMouseEnter={() => setExpandedIndex(idx)}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white",
                  isExpanded 
                    ? "w-[32rem] shadow-2xl border border-slate-200 ring-4 ring-primary/5" 
                    : "w-[6.5rem] shadow-md border border-slate-100 opacity-60 hover:opacity-100"
                )}
              >
                <div className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className={cn(
                          "rounded-full object-cover shadow-sm transition-all duration-700",
                          isExpanded ? "w-16 h-16" : "w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        )}
                      />
                      <div className={cn(
                        "flex flex-col transition-all duration-500 delay-100 whitespace-nowrap",
                        isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 absolute"
                      )}>
                        <h4 className="text-xl font-bold text-[#1d2ba5]">{review.name}</h4>
                        <p className="text-sm font-medium text-slate-500">{review.role}</p>
                      </div>
                    </div>
                    <div className={cn(
                      "text-[#1d2ba5] transition-all duration-500",
                      isExpanded ? "opacity-100" : "opacity-0 absolute"
                    )}>
                      <Logo size={32} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className={cn(
                    "flex flex-col gap-6 mt-8 transition-all duration-700 delay-200",
                    isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute"
                  )}>
                    <div className="flex gap-1 text-[#1d2ba5]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium italic relative z-10">
                      "{review.quote}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE & TABLET VIEW: Carousel (below lg) */}
        <div className="lg:hidden w-full max-w-2xl mx-auto relative px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => {
                const Logo = review.logo;
                return (
                  <div key={review.id} className="flex-[0_0_100%] min-w-0 px-2">
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100 flex flex-col h-full min-h-[380px]">
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
                          <div className="flex flex-col">
                            <h4 className="text-xl font-bold text-[#1d2ba5]">{review.name}</h4>
                            <p className="text-sm font-medium text-slate-500">{review.role}</p>
                          </div>
                        </div>
                        <Logo size={32} strokeWidth={1.5} className="text-[#1d2ba5]" />
                      </div>
                      
                      <div className="flex gap-1 text-[#1d2ba5] mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} fill="currentColor" />
                        ))}
                      </div>

                      <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium italic mb-8">
                        "{review.quote}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-10 px-4">
            <button onClick={scrollPrev} className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div key={i} className={cn("w-2 h-2 rounded-full transition-all duration-300", i === selectedIndex ? "bg-primary w-6" : "bg-slate-300")} />
              ))}
            </div>
            <button onClick={scrollNext} className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
