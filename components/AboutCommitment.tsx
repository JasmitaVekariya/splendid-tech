"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

// Timeline steps to loop in the animation
const steps = [
  {
    num: "01",
    title: "Book a Consultation",
    subtitle: "Choose your service — staffing, training, or development — and schedule a call to discuss your needs.",
  },
  {
    num: "02",
    title: "Get a Personalized Plan",
    subtitle: "We assess your profile or project requirements and share a tailored roadmap for your career or tech solution.",
  },
  {
    num: "03",
    title: "Start & See Results",
    subtitle: "Begin your journey with our full support — from resume and skill building to job offers or product delivery.",
  },
];

export function AboutCommitment() {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pb-32 bg-slate-50 text-slate-900 overflow-hidden">
      {/* Decorative Background Waves (similar to screenshot) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-200 200 Q 200 100 600 300 T 1400 200" fill="none" stroke="#e2e8f0" strokeWidth="60" strokeLinecap="round"/>
          <path d="M-200 400 Q 200 300 600 500 T 1400 400" fill="none" stroke="#f1f5f9" strokeWidth="60" strokeLinecap="round"/>
          <path d="M-200 600 Q 200 500 600 700 T 1400 600" fill="none" stroke="#e2e8f0" strokeWidth="60" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 relative z-10">
        
        {/* LEFT SIDE - Content */}
        <div className="space-y-8 lg:space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#2029b8] font-bold uppercase tracking-wider text-sm">
              <span className="w-8 h-px bg-[#2029b8]"></span> About Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2029b8] leading-[1.1] tracking-tight">
              Your Career, <span className="text-slate-400">Our Commitment.</span>
            </h2>
            <p className="mt-6 text-slate-600 text-lg md:text-xl leading-relaxed">
              At Splendid Tech IT Solutions, we help international students and job seekers navigate the competitive U.S. and Canadian job markets with confidence. Whether you're looking for a career break, upgrading your tech skills, or launching your own software project, we provide the tools, training, and connections to make it happen.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              "Visa-Aware Career Planning (OPT, STEM, H-1B)",
              "Mentor-Led Training & Real Interview Prep",
              "Affordable Career & Tech Development Packages"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#ff6b2b] flex-shrink-0 mt-0.5" />
                <span className="text-lg font-medium text-[#1d2ba5]">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full bg-[#2029b8] hover:bg-[#192bc2] text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                Appointment Now
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Task Loop with Vertical Bar representing the Timeline */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <Card className="overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-lg z-10 border-slate-100">
            <CardContent className="relative h-[480px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-4 absolute w-full px-6 py-4"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20, // Slower duration for reading
                    ease: "linear",
                  }}
                >
                  {/* Duplicate array for seamless infinite scroll */}
                  {[...steps, ...steps].map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-6 px-4 py-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative"
                    >
                      {/* Vertical line connection simulation */}
                      <div className="absolute left-11 top-24 bottom-0 w-px bg-slate-200 border-dashed hidden md:block" />
                      
                      {/* Number Bubble */}
                      <div className="flex items-center justify-center bg-[#2029b8] text-white w-14 h-14 rounded-full shadow-lg font-bold text-xl flex-shrink-0 z-10 ring-4 ring-[#e0e7ff]">
                        {step.num}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <p className="text-xl font-bold text-[#1d2ba5] dark:text-white mb-2">{step.title}</p>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Fade effect only inside card */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/90 via-white/50 to-transparent pointer-events-none z-20" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/90 via-white/50 to-transparent pointer-events-none z-20" />
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
