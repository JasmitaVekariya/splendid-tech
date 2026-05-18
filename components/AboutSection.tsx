"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

const journeySteps = [
  {
    title: "Learning",
    description: "Master the fundamentals of your chosen tech stack with guided expertise and industry-standard curriculum.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Training",
    description: "Get hands-on experience through real-world projects and scenarios that mimic production environments.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Interview",
    description: "Perfect your pitch with comprehensive mock interviews, technical drills, and personalized feedback.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Placement",
    description: "Connect directly with our network of hiring managers and secure your ideal role in the USA.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Success",
    description: "Launch your career and join an elite alumni network that supports your professional growth for life.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  }
];

interface JourneyStep {
  title: string;
  description: string;
  image: string;
}

interface TimelineStepProps {
  step: JourneyStep;
  index: number;
  activeIndex: number;
  progress: MotionValue<number>;
}

const TimelineStep = ({
  step,
  index,
  activeIndex,
  progress
}: TimelineStepProps) => {
  const isActive = activeIndex === index;

  return (
    <div className="relative pl-12 pb-[clamp(12px,2.5vh,28px)] last:pb-0 group">
      {/* Numbered Circle */}
      <div className="absolute left-0 top-0 z-10">
        <motion.div 
          animate={{ 
            scale: isActive ? 1.1 : 1,
            backgroundColor: isActive ? "#192bc2" : "#f1f5f9",
            color: isActive ? "#ffffff" : "#64748b",
            boxShadow: isActive ? "0 0 15px rgba(25, 43, 194, 0.3)" : "none"
          }}
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-500 border border-slate-200"
        >
          {index + 1}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        animate={{ 
          opacity: isActive ? 1 : 0.4,
          x: isActive ? 0 : -5 
        }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-0.5 md:gap-1"
      >
        <h3 className="text-[clamp(14px,2vh,20px)] font-heading font-black uppercase tracking-tight text-[#0f172a]">
          {step.title}
        </h3>
        <p className="text-slate-500 text-[clamp(11px,1.4vh,14px)] leading-relaxed max-w-xs">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
};

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.15", "end 0.85"]
  });

  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate active index based on scroll progress
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  useTransform(scrollYProgress, (value) => {
    // Increase sensitivity for 5 steps
    const step = Math.floor(value * journeySteps.length);
    const clampedStep = Math.min(journeySteps.length - 1, Math.max(0, step));
    if (clampedStep !== activeIndex) {
      setActiveIndex(clampedStep);
    }
    return value;
  });

  // For the vertical line animation
  const lineHeight = useTransform(scrollSpring, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="relative w-full bg-white">
      {/* Introduction Heading (Centered) */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-24 pb-8 px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#2029b8]/10 text-[#2029b8] font-bold uppercase tracking-wider text-xs border border-[#2029b8]/20"
        >
          <Sparkles className="w-3.5 h-3.5" /> HOW IT WORKS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15] uppercase text-center"
        >
          Your Journey to <span className="text-[#2029b8]">USA Success</span> Starts Here
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl text-center"
        >
          We guide you step-by-step through our active software delivery training, corporate resume screening bypass, direct recruitment submittals, and OPT/STEM immigration sponsorship.
        </motion.p>
      </div>

      {/* Main Scroll Content */}
      <div
        ref={containerRef}
        style={{ height: `${journeySteps.length * 100}vh` }}
        className="relative w-full"
      >
        <div className="sticky top-[80px] md:top-[96px] h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] w-full flex items-start pt-8 md:pt-12 lg:pt-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Column: Timeline Content */}
            <div className="relative py-4">
              {/* Connecting Line Background */}
              <div className="absolute left-[19px] top-5 bottom-5 w-[2px] bg-slate-100" />

              {/* Animated Connecting Line */}
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-[19px] top-5 w-[2px] bg-primary z-0 origin-top shadow-[0_0_10px_rgba(25,43,194,0.3)]"
              />

              <div className="relative">
                {journeySteps.map((step, index) => (
                  <TimelineStep
                    key={index}
                    step={step}
                    index={index}
                    progress={scrollYProgress}
                    activeIndex={activeIndex}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Media Card */}
            <div className="hidden lg:block relative aspect-[4/3] w-full max-h-[clamp(280px,45vh,440px)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl bg-slate-900 border border-slate-100 group"
                >
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  <Image
                    src={journeySteps[activeIndex].image}
                    alt={journeySteps[activeIndex].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                    sizes="50vw"
                    priority
                  />

                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />

                  {/* Step Badge */}
                  <div className="absolute bottom-10 left-10">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-bold text-sm uppercase tracking-widest"
                    >
                      Step 0{activeIndex + 1}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* Final Wrap-up Section */}
      <div className="py-32 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.3] tracking-tight text-slate-400"
        >
          But <span className="font-heading text-primary text-[1.4em] inline-block align-baseline tracking-tighter">SPLENDID</span> Tech doesn&apos;t end on placement day. We and our alumni network continue to help you navigate your career for life.
        </motion.p>
      </div>
    </section>
  );
}
