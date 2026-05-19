"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Code2, 
  Globe, 
  Smartphone 
} from "lucide-react";

const navLinksData = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
];

const dropdownServices = [
  {
    slug: "staffing",
    title: "Staffing",
    subtitle: "Talent placement & recruitment",
    icon: Users,
    color: "text-amber-500 bg-amber-50 border-amber-100"
  },
  {
    slug: "training",
    title: "Training",
    subtitle: "Skill development program",
    icon: GraduationCap,
    color: "text-[#2029b8] bg-[#2029b8]/5 border-[#2029b8]/10"
  },
  {
    slug: "software-development",
    title: "Software Development",
    subtitle: "Scalable custom tech solutions",
    icon: Code2,
    color: "text-fuchsia-500 bg-fuchsia-50 border-fuchsia-100"
  },
  {
    slug: "website-development",
    title: "Website Development",
    subtitle: "Stunning responsive digital presence",
    icon: Globe,
    color: "text-cyan-500 bg-cyan-50 border-cyan-100"
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "iOS & Android mobile experiences",
    icon: Smartphone,
    color: "text-orange-500 bg-orange-50 border-orange-100"
  }
];

const AnimatedNavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) => {
  return (
    <Link 
      href={href} 
      className={cn(
        "relative px-3 md:px-4 py-1.5 text-[13px] font-semibold transition-colors duration-300 flex items-center gap-1.5",
        isActive ? "text-primary" : "text-gray-600 hover:text-primary"
      )}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-primary/5 rounded-full -z-0"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <motion.div 
        className="absolute inset-0 bg-gray-100/50 rounded-full -z-0 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    setActivePath(window.location.pathname);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-6 md:px-12",
          isScrolled ? "top-4 md:top-6" : "top-0 md:top-4"
        )}
      >
        <motion.div
          layout
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative",
            isScrolled 
              ? "w-full max-w-7xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-full px-4 md:px-6 py-1.5 md:py-2" 
              : "w-full max-w-7xl bg-transparent border-transparent py-2 md:py-3"
          )}
        >
          {/* Decorative shine for scrolled pill */}
          {isScrolled && (
            <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>
          )}

          {/* Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="relative z-10 flex items-center group">
              <motion.div layout className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="Splendid Tech" 
                  className={cn(
                    "h-auto transition-all duration-500",
                    isScrolled ? "w-24 md:w-32" : "w-32 md:w-48"
                  )}
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-gray-50/50 backdrop-blur-md rounded-full px-1.5 py-1 border border-gray-200/50 shadow-sm z-10">
            {navLinksData.map((link) => {
              if (link.label === "Services") {
                return (
                  <div 
                    key={link.label}
                    className="relative py-0.5"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <AnimatedNavLink 
                      href={link.href}
                      isActive={activePath.startsWith('/services')}
                    >
                      <span className="flex items-center gap-1.5">
                        Services
                        <svg 
                          viewBox="0 0 24 24" 
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-300 fill-none stroke-current stroke-[2.5]",
                            isServicesOpen ? "rotate-180 text-primary" : "text-gray-400"
                          )}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </AnimatedNavLink>

                    {/* Premium Hover Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white border border-slate-100 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-3.5 z-50 flex flex-col gap-1"
                        >
                          {dropdownServices.map((service) => (
                            <Link 
                              href={`/services/${service.slug}`}
                              key={service.slug}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors duration-200 group/item"
                            >
                              <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/item:scale-105 border",
                                service.color
                              )}>
                                <service.icon className="w-5 h-5" />
                              </div>
                              <div className="text-left">
                                <span className="block text-[13px] font-extrabold text-slate-800 transition-colors duration-200 group-hover/item:text-[#2029b8]">
                                  {service.title}
                                </span>
                                <span className="block text-[10px] text-slate-400 font-bold leading-none mt-1">
                                  {service.subtitle}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <AnimatedNavLink 
                  key={link.label} 
                  href={link.href}
                  isActive={activePath === link.href}
                >
                  {link.label}
                </AnimatedNavLink>
              );
            })}
          </nav>

          {/* Right Section: CTA & Menu Toggle */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <div className="hidden lg:block relative group">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <Link 
                href="/contact" 
                className={cn(
                  "relative z-10 inline-flex items-center gap-2 bg-primary text-white font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg overflow-hidden",
                  isScrolled ? "px-4 py-1.5 text-[13px]" : "px-5 py-2 text-[13px]"
                )}
              >
                <span className="relative z-10">Get In Touch</span>
                <ArrowRight size={isScrolled ? 16 : 18} className="relative z-10" />
                
                {/* Animated Shimmer Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ translateX: ["100%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </Link>
            </div>

            <button 
              onClick={toggleMenu}
              className={cn(
                "lg:hidden flex items-center justify-center rounded-full transition-all duration-300 relative overflow-hidden",
                isScrolled ? "w-8 h-8 bg-gray-100 text-gray-800" : "w-10 h-10 bg-white/20 backdrop-blur-md text-gray-900 border border-white/20 shadow-lg"
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-3xl lg:hidden flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img src="/logo.png" alt="Logo" className="w-24 h-auto" />
              <button 
                onClick={toggleMenu}
                className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-gray-900"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-8 overflow-y-auto py-6">
              <nav className="flex flex-col gap-6">
                {navLinksData.map((link, i) => {
                  if (link.label === "Services") {
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col"
                      >
                        <button 
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-primary transition-colors flex items-center justify-between group py-1 text-left w-full"
                        >
                          <span className="font-heading tracking-tight">Services</span>
                          <motion.span 
                            animate={{ rotate: isMobileServicesOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-slate-400 text-lg md:text-2xl"
                          >
                            {isMobileServicesOpen ? "−" : "+"}
                          </motion.span>
                        </button>
                        
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pl-4 flex flex-col gap-3.5 mt-3 border-l-2 border-[#2029b8]/10"
                            >
                              <Link
                                href="/services"
                                onClick={toggleMenu}
                                className="text-sm font-extrabold text-[#2029b8] hover:text-slate-900 transition-colors py-1 flex items-center gap-1 uppercase tracking-wider"
                              >
                                All Services <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                              
                              {dropdownServices.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={toggleMenu}
                                  className="text-base font-bold text-slate-600 hover:text-primary transition-colors flex items-center gap-3 py-1"
                                >
                                  <div className={cn(
                                    "w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0",
                                    service.color
                                  )}>
                                    <service.icon className="w-4.5 h-4.5" />
                                  </div>
                                  <span>{service.title}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        onClick={toggleMenu}
                        className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-primary transition-colors flex items-center justify-between group py-1"
                      >
                        <span className="font-heading tracking-tight">{link.label}</span>
                        <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                <Link 
                  href="/contact"
                  onClick={toggleMenu}
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:bg-primary-dark transition-colors"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="px-8 py-6 border-t border-gray-100 flex justify-between items-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
              <span>© {new Date().getFullYear()} Splendid Tech</span>
              <div className="flex gap-4">
                <span className="hover:text-primary transition-colors cursor-pointer">LI</span>
                <span className="hover:text-primary transition-colors cursor-pointer">FB</span>
                <span className="hover:text-primary transition-colors cursor-pointer">IG</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
