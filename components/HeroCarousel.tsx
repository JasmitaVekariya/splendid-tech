"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';

const slides = [
  {
    id: 1,
    slogan: "WELCOME TO SPLENDID TECH IT SOLUTIONS",
    title: (
      <>
        Learn The <span className="text-primary">Tech Skills</span> <br /> Companies Ask About.
      </>
    ),
    subtitle: "Our training programs in Java, QA, BA, and more are made for students like you; practical, job-oriented, and guided by people who've been there.",
    callToAction: {
      text: "Explore Training",
      href: "#training",
    },
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    slogan: "WELCOME TO SPLENDID TECH IT SOLUTIONS",
    title: (
      <>
        Development Solutions - <br /> <span className="text-primary">Built For Business</span>
      </>
    ),
    subtitle: "We don't just train and place talent; we also develop custom software, web & mobile applications for clients across industries.",
    callToAction: {
      text: "View Services",
      href: "#development",
    },
    backgroundImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 3,
    slogan: "WELCOME TO SPLENDID TECH IT SOLUTIONS",
    title: (
      <>
        Get Hired <span className="text-primary">Faster</span> <br /> In The U.S. Tech Market
      </>
    ),
    subtitle: "We match international graduates with career-defining opportunities; tailored to your visa path, skillset, and goals.",
    callToAction: {
      text: "Start Your Career",
      href: "#staffing",
    },
    backgroundImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <HeroSection
            slogan={slides[currentSlide].slogan}
            title={slides[currentSlide].title}
            subtitle={slides[currentSlide].subtitle}
            callToAction={slides[currentSlide].callToAction}
            backgroundImage={slides[currentSlide].backgroundImage}
            contactInfo={{
              website: "splendidtechitsolutions.com",
              phone: "+1 (800) 123-4567",
              address: "USA",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
