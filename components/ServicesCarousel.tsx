"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    id: "01",
    title: "Staffing Services",
    description: "We provide reliable staffing solutions that connect businesses with skilled professionals for permanent roles.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "02",
    title: "Training Program",
    description: "Learn in-demand skills like Java, QA, and BA through practical training made for job seekers. Our goal? Get you job-ready, fast.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "03",
    title: "Job Search Support",
    description: "From resume building to interview preparation and networking guidance, we help candidates land the right opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "04",
    title: "Software Development",
    description: "From internal tools to client-facing platforms, we build secure and scalable software to solve real business problems.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "05",
    title: "Website Development",
    description: "We design clean, responsive websites that look good, load fast, and work across all devices - no unnecessary stuffing.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "06",
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
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Format the current index (1-indexed) with a leading zero
  const currentIndexFormatted = String(selectedIndex + 1).padStart(2, '0');
  const totalSlidesFormatted = String(services.length).padStart(2, '0');

  return (
    <section id="services" className="relative w-full pt-34 pb-32 md:pb-48 bg-[#0a0f1c] overflow-hidden">
      {/* Decorative background lines (optional approximation of the wave pattern) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q400,300 800,100 T1600,100" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0,300 Q400,500 800,300 T1600,300" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0,500 Q400,700 800,500 T1600,500" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            Practical Tech Services That Lead to Hands-On Results
          </h2>
        </div>

        {/* Carousel Viewport and Side Arrows */}
        <div className="relative group px-4 md:px-0">
          
          {/* Previous Button (Left Side) - Always visible on mobile, hover on desktop */}
          <button 
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a0f1c]/80 border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 hover:scale-110 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 disabled:opacity-0 shadow-2xl"
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
                      <h3 className="text-lg md:text-2xl font-bold text-primary max-w-[75%] leading-tight">
                        {service.title}
                      </h3>
                      <span className="text-3xl md:text-5xl font-extrabold text-gray-100 leading-none">
                        {service.id}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base min-h-[60px] md:min-h-[80px] leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Image */}
                    <div className="mt-auto pt-4">
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

          {/* Next Button (Right Side) - Always visible on mobile, hover on desktop */}
          <button 
            onClick={scrollNext}
            className="absolute -right-2 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#0a0f1c]/80 border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 hover:scale-110 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 disabled:opacity-0 shadow-2xl"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

      </div>
    </section>
  );
}
