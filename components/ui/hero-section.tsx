import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component
export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground min-h-screen",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row min-h-screen">
          {/* Left Side: Content */}
          <div className="flex w-full flex-col justify-center py-32 md:w-1/2 lg:w-3/5 pr-8">
              {/* Top Section: Slogan/Header */}
              <div className="max-w-2xl">
                  <motion.header className="mb-10" variants={itemVariants}>
                      {slogan && <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">{slogan}</p>}
                  </motion.header>

                  <motion.main variants={containerVariants}>
                      <motion.h1 className="text-5xl font-extrabold leading-[1.1] text-foreground md:text-6xl lg:text-7xl tracking-tight" variants={itemVariants}>
                          {title}
                      </motion.h1>
                      <motion.div className="my-8 h-1.5 w-24 bg-primary rounded-full" variants={itemVariants}></motion.div>
                      <motion.p className="mb-10 text-lg md:text-xl text-foreground/70 leading-relaxed font-medium" variants={itemVariants}>
                          {subtitle}
                      </motion.p>
                      <motion.a 
                          href={callToAction.href} 
                          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary-dark hover:-translate-y-1 shadow-lg" 
                          variants={itemVariants}
                      >
                          {callToAction.text}
                      </motion.a>
                  </motion.main>
              </div>

              {/* Bottom Section: Footer Info */}
              <motion.footer className="mt-20 w-full" variants={itemVariants}>
                  <div className="grid grid-cols-1 gap-6 text-sm font-medium text-foreground/60 sm:grid-cols-3">
                      <div className="flex items-center hover:text-primary transition-colors cursor-pointer">
                          <InfoIcon type="website" />
                          <span>{contactInfo.website}</span>
                      </div>
                      <div className="flex items-center hover:text-primary transition-colors cursor-pointer">
                          <InfoIcon type="phone" />
                          <span>{contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center hover:text-primary transition-colors cursor-pointer">
                          <InfoIcon type="address" />
                          <span>{contactInfo.address}</span>
                      </div>
                  </div>
              </motion.footer>
          </div>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5 md:absolute md:right-0 md:top-0 md:h-full"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
            {/* Subtle overlay to make image blend better */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80 md:opacity-100"></div>
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
