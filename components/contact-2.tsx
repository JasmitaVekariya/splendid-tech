import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "Whether you're looking for career placement, training, or need robust software development for your business, our team is ready to help.",
  phone = "+1 (800) 123-4567",
  email = "info@splendidtechitsolutions.com",
  web = { label: "splendidtechitsolutions.com", url: "https://splendidtechitsolutions.com" },
}: Contact2Props) => {
  return (
    <section className="pt-32 pb-20 lg:pb-32 bg-white relative z-10 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-24">
          <div className="flex flex-col justify-between gap-10 lg:w-1/2">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-4 text-[#2029b8] font-bold uppercase tracking-wider text-sm">
                <span className="w-8 h-px bg-[#2029b8]"></span> Get In Touch
              </div>
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black text-[#2029b8] leading-[1.1] tracking-tight">
                {title}
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg">
                {description}
              </p>
            </div>
            
            <div className="w-full">
              <h3 className="mb-6 text-2xl font-bold text-[#1d2ba5]">
                Contact Details
              </h3>
              <ul className="space-y-6">
                <li className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Phone</span>
                  <span className="text-lg font-medium text-slate-900 mt-1">{phone}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email</span>
                  <a href={`mailto:${email}`} className="text-lg font-medium text-[#2029b8] hover:text-[#192bc2] transition-colors mt-1">
                    {email}
                  </a>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Web</span>
                  <a href={web.url} target="_blank" className="text-lg font-medium text-[#2029b8] hover:text-[#192bc2] transition-colors mt-1" rel="noreferrer">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form Card */}
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-xl shadow-slate-200/50 lg:w-1/2">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="firstname" className="text-slate-700">First Name</Label>
                <Input type="text" id="firstname" placeholder="John" className="h-12 bg-slate-50" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="lastname" className="text-slate-700">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Doe" className="h-12 bg-slate-50" />
              </div>
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="email" className="text-slate-700">Email Address</Label>
              <Input type="email" id="email" placeholder="john@example.com" className="h-12 bg-slate-50" />
            </div>
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="subject" className="text-slate-700">Subject</Label>
              <Input type="text" id="subject" placeholder="How can we help?" className="h-12 bg-slate-50" />
            </div>
            <div className="grid w-full gap-2">
              <Label htmlFor="message" className="text-slate-700">Message</Label>
              <Textarea placeholder="Type your message here." id="message" className="min-h-[150px] bg-slate-50 resize-y" />
            </div>
            <Button className="w-full h-14 text-base font-bold rounded-full bg-[#2029b8] hover:bg-[#192bc2] mt-2 transition-transform hover:scale-[1.02]">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
