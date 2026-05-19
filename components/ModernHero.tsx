"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

// Right-side images from HeroCarousel (synced with testimonial rotation)
const heroImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
];

const testimonials = [
  {
    name: "Sonia Rivera",
    role: "Strategy Operations COE at Salesforce",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Alex Gupta",
    role: "Data Science Consultant at Management Solutions",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Priya Sharma",
    role: "Cloud Architect at Amazon Web Services",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "James Wilson",
    role: "Product Lead at LinkedIn",
    image: "https://images.unsplash.com/photo-1507081323647-4d250478b919?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Daniel Park",
    role: "Machine Learning Engineer at NVIDIA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Emily Zhang",
    role: "Senior UX Designer at Airbnb",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Marcus Johnson",
    role: "DevOps Lead at Stripe",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Aisha Patel",
    role: "Full Stack Developer at Shopify",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600",
  }
];


const TestimonialCard = ({ user, isSquare }: { user: any; isSquare: boolean }) => {
  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(3px)", transition: { duration: 0.25, ease: "easeIn" } }}
      className={`relative ${
        isSquare
          ? "w-[160px] h-[180px] md:w-[260px] md:h-[280px] rounded-[24px] md:rounded-[36px]"
          : "w-[160px] h-[240px] md:w-[260px] md:h-[370px] rounded-[24px] md:rounded-[36px]"
      } overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/80 shadow-[0_4px_40px_rgba(0,0,0,0.08)] group hover:shadow-[0_8px_50px_rgba(0,0,0,0.12)] hover:translate-y-[-3px] transition-all duration-500 ease-out`}
    >
      {/* Floating Role Tag — minimal, frosted */}
      <div className="absolute top-3 md:top-5 left-1/2 -translate-x-1/2 z-20 w-[85%]">
        <div className="px-2 md:px-4 py-1 md:py-1.5 bg-white/80 backdrop-blur-md rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-white/60 text-center">
          <p className="text-[8px] md:text-[10px] font-medium tracking-wide text-gray-600 truncate">
            {user.role}
          </p>
        </div>
      </div>

      {/* Person Image — natural, blended */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={user.image}
          alt={user.name}
          fill
          className="object-cover object-top scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 160px, 300px"
        />
        <div className="absolute inset-x-0 top-0 h-16 md:h-20 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 md:h-24 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
      </div>

      {/* Name at bottom */}
      <div className="absolute bottom-3 md:bottom-4 left-0 right-0 z-10 flex justify-center">
        <span className="text-[9px] md:text-[11px] font-semibold text-white/90 tracking-wide drop-shadow-sm truncate px-2">
          {user.name}
        </span>
      </div>
    </motion.div>
  );
};

const VideoShowcaseCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setUserHasScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoError && userHasScrolled) {
          videoRef.current?.play().then(() => {
            setHasStarted(true);
          }).catch(() => {});
        } else if (!entry.isIntersecting) {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [videoError, userHasScrolled]);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full group mt-6 md:mt-10"
    >
      {/* Cinematic Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-primary/10 via-blue-500/5 to-purple-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Container - Aligned, Minor Curve Corners (5%), No Border */}
      <div className="relative z-10 w-full md:h-[480px] aspect-video md:aspect-auto overflow-hidden bg-gray-900 shadow-[0_24px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm rounded-[32px] md:rounded-[40px]">
        <div className="w-full h-full relative">
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            className={cn(
              "w-full h-full object-cover transition-all duration-1000 ease-out",
              hasStarted && !videoError ? "opacity-100 scale-100" : "opacity-0 scale-105",
              videoError ? "hidden" : "block"
            )}
            onError={() => setVideoError(true)}
            onCanPlay={() => {
              setHasStarted(true);
              setVideoError(false);
            }}
          >
            <source src="/interview.mp4" type="video/mp4" />
            <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=fb4777d11f67f677d2925b4b1c78b6680a6b107e&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            <source src="https://cdn.pixabay.com/video/2021/04/12/70860-538411906_large.mp4" type="video/mp4" />
          </video>
          
          {videoError && (
            <div className="w-full h-full relative">
              <Image 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" 
                alt="Tech Workspace" 
                fill 
                className="object-cover opacity-60"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-white/60 text-sm font-medium tracking-widest uppercase">Initializing Preview...</p>
              </div>
            </div>
          )}
        </div>

        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />

        {/* Mute Control Overlay */}
        <div className="absolute bottom-10 right-10 z-30">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl text-white shadow-2xl hover:bg-white/15 transition-all duration-300"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </motion.button>
        </div>

        {/* Label Overlay (Bottom Left) */}
        <div className="absolute bottom-10 left-10 z-20 pointer-events-none">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/70 text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-sm">Experience the Journey</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function ModernHero() {
  const [wordIndex, setWordIndex] = useState(0);
  
  const rotatingWords = [
    "DREAM JOB",
    "TECH CAREER",
    "PLACEMENT",
    "FUTURE ROLE",
    "GLOBAL CAREER"
  ];

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000); 
    return () => clearInterval(wordTimer);
  }, [rotatingWords.length]);

  return (
    <section className="relative w-full pt-[120px] overflow-hidden bg-white">
      
      {/* Soft Premium Abstract Gradient Background */}
      <div className="absolute inset-0 z-0 bg-white overflow-hidden pointer-events-none">
        {/* Base layered linear gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,1)_0%,rgba(240,247,255,0.6)_40%,rgba(248,245,255,0.5)_80%,rgba(255,255,255,1)_100%)]" />
        
        {/* Soft blue glow near top-left */}
        <div className="absolute -top-[15%] -left-[10%] w-[60%] md:w-[50%] h-[60%] md:h-[70%] rounded-full bg-primary/10 blur-[100px] md:blur-[140px]" />
        
        {/* Subtle center blend */}
        <div className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[70%] md:w-[60%] h-[50%] md:h-[60%] rounded-full bg-blue-400/5 blur-[100px] md:blur-[120px]" />

        {/* Soft purple accent to complement the blue */}
        <div className="absolute top-[30%] -right-[10%] w-[50%] md:w-[40%] h-[60%] rounded-full bg-purple-400/5 blur-[100px] md:blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* ROW 1: Centered Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mb-6 md:mb-10">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* LEFT: Heading */}
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] md:text-[13px] font-bold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Empowering 500+ Career Journeys
                </div>
                
                <h1 className="flex flex-col items-center text-center font-black text-[#0f172a] leading-[0.95] tracking-tighter uppercase overflow-visible">
                  <span className="text-2xl md:text-3xl lg:text-[2rem] text-slate-800 mb-1 font-bold opacity-90">Land Your</span>
                  
                  {/* Vertical Scrolling Word Container */}
                  <div className="h-[40px] md:h-[60px] lg:h-[70px] relative overflow-visible my-1 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={wordIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="absolute text-3xl md:text-4xl lg:text-[3.2rem] text-primary drop-shadow-sm whitespace-nowrap"
                      >
                        {rotatingWords[wordIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  
                  <span className="text-2xl md:text-3xl lg:text-[2rem] text-slate-800 mt-1 font-bold opacity-90">in the USA</span>
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center">
                  <Link 
                    href="/contact"
                    className="relative group inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white text-[11px] md:text-xs font-black uppercase tracking-wider shadow-[0_10px_25px_rgba(25,43,194,0.25)] hover:shadow-[0_15px_35px_rgba(25,43,194,0.35)] transition-all duration-300 hover:-translate-y-[2px]"
                  >
                    Download Brochure
                    <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/40 backdrop-blur-md border border-slate-200/80 text-slate-800 text-[11px] md:text-xs font-black uppercase tracking-wider shadow-sm hover:bg-white/80 transition-all duration-300 hover:-translate-y-[2px]"
                  >
                    Book Demo
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Side-by-Side Profile Cards */}
            {/* <div className="lg:col-span-5 flex flex-row items-center justify-center lg:justify-end gap-3 md:gap-6 pt-4">
              <AnimatePresence mode="popLayout">
                <div className="flex flex-row gap-3 md:gap-6" key={currentIndex}>
                  <TestimonialCard user={user1} isSquare={true} />
                  <TestimonialCard user={user2} isSquare={true} />
                </div>
              </AnimatePresence>
            </div> */}
          </div>
        </div>

        {/* ROW 2: Aligned Video Card (Centered & Smaller) */}
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <VideoShowcaseCard />
        </div>
      </div>

      {/* Smooth gradient transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-48 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-[5]" />
    </section>
  );
}


