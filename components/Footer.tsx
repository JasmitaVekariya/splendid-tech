"use client";
import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Brain,
  ShieldCheck,
  Landmark,
  Building2
} from "lucide-react";

// Inline SVG Icons for social brands (since Lucide removed brand icons)
const Facebook = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const Instagram = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const Linkedin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const Youtube = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

export function Footer() {
  // Footer link data based on the screenshot
  const footerLinks = [
    {
      title: "Useful Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Blogs", href: "/blogs" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Staffing", href: "/services/staffing" },
        { label: "Training", href: "/services/training" },
        { label: "Software Development", href: "/services/software-development" },
        { label: "Website Development", href: "/services/website-development" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
      ],
    },
  ];

  // Contact info data based on the screenshot
  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-[#3ca2fa] mt-1 flex-shrink-0" />,
      text: "30 N Gould St STE ST R, Sheridan, WY 82801, United States",
    },
    {
      icon: <Phone size={20} className="text-[#3ca2fa] flex-shrink-0" />,
      text: "+1(307) 441 7592",
      href: "tel:+13074417592",
    },
    {
      icon: <Mail size={20} className="text-[#3ca2fa] flex-shrink-0" />,
      text: "connect@splendidtechitsolutions.com",
      href: "mailto:connect@splendidtechitsolutions.com",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
    { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
    { icon: <Youtube size={18} />, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16 pb-16">
          
          {/* Column 1: Brand & Badges */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center">
              {/* Actual Logo from public folder */}
              <img 
                src="/logo.png" 
                alt="Splendid Tech IT Solutions" 
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-slate-600">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#2029b8] hover:text-white transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Badges Mockup */}
            <div className="flex flex-col space-y-4 pt-2">
              <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-md border border-slate-200 w-fit">
                <ShieldCheck size={24} className="text-blue-500" />
                <span className="text-slate-800 font-bold tracking-wider text-xl italic">E-Verify</span>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full border-2 border-dashed border-slate-300 bg-slate-50">
                  <Building2 size={20} className="text-slate-400 mb-1" />
                  <span className="text-[8px] text-slate-500 uppercase leading-none">SSA</span>
                </div>
                <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full border-2 border-dashed border-slate-300 bg-slate-50">
                  <Landmark size={20} className="text-slate-400 mb-1" />
                  <span className="text-[8px] text-slate-500 uppercase leading-none text-center">DHS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-slate-900 text-xl font-bold mb-8">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label} className="group">
                    <Link
                      href={link.href}
                      className="flex items-center text-slate-600 hover:text-[#2029b8] transition-colors"
                    >
                      <ChevronRight size={16} className="mr-2 text-slate-400 group-hover:text-[#2029b8] transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-slate-900 text-xl font-bold mb-8">
              Contact Info
            </h4>
            <ul className="space-y-6">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 border border-slate-200">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-600 hover:text-[#2029b8] transition-colors text-sm leading-relaxed pt-2"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-600 text-sm leading-relaxed pt-1">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-slate-200 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Splendid Tech IT Solutions. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect using Website Name */}
      <div className="lg:flex hidden h-[24rem] -mt-24 pointer-events-auto relative z-30 justify-center">
        <TextHoverEffect text="SPLENDID" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
