"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/mini-navbar";
import { Footer } from "@/components/Footer";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { blogs, BlogPost } from "@/data/blogs";
import { CalendarDays, User, X, ArrowRight, BookOpen } from "lucide-react";

const testimonialsData = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonialsData.slice(0, 3);
const secondColumn = testimonialsData.slice(3, 6);
const thirdColumn = testimonialsData.slice(6, 9);

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedBlog]);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden flex flex-col">
      <Navbar />

      {/* Hero Section for Blogs */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-12 pt-32 pb-16 text-slate-800">
        <div className="mb-8 flex flex-col items-start justify-start text-left w-full">
          <div className="flex items-center gap-2 mb-4 text-[#2029b8] font-bold uppercase tracking-wider text-sm">
            <span className="w-8 h-px bg-[#2029b8]"></span> Latest News & Insights
          </div>
          <h1 className="w-full max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black text-[#2029b8] leading-[1.1] tracking-tight">
            Discover Our <span className="text-slate-400">Thoughts</span>
          </h1>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl">
            Stay updated with the latest trends in technology, career growth, and software development directly from the experts at Splendid Tech.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="w-full mx-auto max-w-7xl px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2029b8]">
                  {blog.category}
                </div>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-3.5 h-3.5" /> {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {blog.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-[#2029b8] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-auto flex items-center text-[#2029b8] font-bold text-sm group/btn">
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden border-t border-slate-200">
        <div className="w-full mx-auto max-w-7xl px-6 md:px-12 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center mb-16"
          >
            <div className="flex items-center gap-2 mb-4 text-cyan-600 font-bold uppercase tracking-wider text-sm">
              <span className="w-8 h-px bg-cyan-600"></span> Testimonials <span className="w-8 h-px bg-cyan-600"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
              What our users say
            </h2>
            <p className="text-center mt-5 text-slate-600 text-lg">
              See what our customers have to say about working with Splendid Tech.
            </p>
          </motion.div>

          {/* Scrolling Columns */}
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      <Footer />

      {/* Z-Axis Blog Modal Overlay */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/40 backdrop-blur-md"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside modal from closing it
            >
              {/* Close Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedBlog(null);
                }}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] w-10 h-10 bg-white/80 backdrop-blur-md hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-lg transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content Scrollable Area */}
              <div className="overflow-y-auto w-full h-full custom-scrollbar">
                <div className="w-full h-64 md:h-80 relative">
                  <div className="absolute inset-0 bg-black/20 z-0"></div>
                  <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent z-10">
                    <div className="inline-block bg-[#2029b8] text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                      {selectedBlog.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                      {selectedBlog.title}
                    </h2>
                  </div>
                </div>
                
                <div className="p-8 md:p-12 max-w-3xl mx-auto">
                  <div className="flex items-center gap-6 pb-8 border-b border-slate-100 mb-8 text-sm font-semibold text-slate-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#2029b8]" /> By {selectedBlog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-[#2029b8]" /> {selectedBlog.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#2029b8]" /> 5 min read
                    </div>
                  </div>

                  <div className="prose prose-lg prose-slate max-w-none">
                    {selectedBlog.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-6 text-slate-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </main>
  );
}
