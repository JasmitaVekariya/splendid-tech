"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    slug: "staffing",
    title: "Staffing Services",
    description: "We provide reliable staffing solutions that connect businesses with skilled professionals for permanent roles.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "02",
    slug: "training",
    title: "Training Program",
    description: "Learn in-demand skills like Java, QA, and BA through practical training made for job seekers. Our goal? Get you job-ready, fast.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "03",
    slug: "software-development",
    title: "Software Development",
    description: "From internal tools to client-facing platforms, we build secure and scalable software to solve real business problems.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "04",
    slug: "website-development",
    title: "Website Development",
    description: "We design clean, responsive websites that look good, load fast, and work across all devices - no unnecessary stuffing.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "05",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Whether Android or iOS, we develop easy-to-use mobile apps that match your vision and work seamlessly in the real world.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
  }
];

export function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="services" className="relative w-full pt-34 pb-32 md:pb-48 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Unified Centered Header for Bright Theme */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#2029b8]/10 text-[#2029b8] font-bold uppercase tracking-wider text-xs border border-[#2029b8]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2029b8]" /> WHAT WE DO
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15] uppercase text-center"
          >
            Practical Tech Solutions <span className="text-[#2029b8]">Designed for Career Growth</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl text-center"
          >
            Choose from our professional pathways to secure custom software building capabilities, hands-on team training, direct recruiter pathways, and compliant corporate staffing.
          </motion.p>
        </div>

        {/* Carousel Viewport and Side Arrows */}
        <div className="relative group px-4 md:px-0">
          
          {/* Previous Button (Left Side) */}
          <button 
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/80 border border-slate-200 text-slate-800 backdrop-blur-sm hover:bg-slate-100 hover:text-[#2029b8] hover:scale-110 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 disabled:opacity-0 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] md:pl-6"
                >
                  <Card className="h-full flex flex-col bg-white rounded-2xl border-none shadow-xl overflow-hidden p-6 md:p-8">
                    {/* Top Header: Title and Number */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg md:text-2xl font-bold text-slate-800 max-w-[75%] leading-tight">
                        {service.title}
                      </h3>
                      <span className="text-3xl md:text-5xl font-extrabold text-slate-200 leading-none">
                        {service.id}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-600 mb-6 text-sm md:text-base min-h-[60px] md:min-h-[80px] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Explore Dynamic Navigation Button */}
                    <div className="mt-auto mb-6">
                      <Link href={`/services/${service.slug}`}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3.5 bg-[#2029b8] hover:bg-[#181d85] text-white rounded-full font-bold text-xs transition-all duration-300 shadow-md shadow-[#2029b8]/10 flex items-center justify-center gap-2 group uppercase tracking-wider"
                        >
                          Explore Pathway
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                    
                    {/* Image */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="relative aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden rounded-b-xl rounded-tr-xl rounded-tl-[2.5rem] md:rounded-tl-[4rem]">
                        <img 
                          src={service.imageUrl} 
                          alt={service.title}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button (Right Side) */}
          <button 
            onClick={scrollNext}
            className="absolute -right-2 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/80 border border-slate-200 text-slate-800 backdrop-blur-sm hover:bg-slate-100 hover:text-[#2029b8] hover:scale-110 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 disabled:opacity-0 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

      </div>
    </section>
  );
}
