"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Building2,
  Globe2
} from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-navy-900/40 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Client Endorsements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Trusted by International <span className="text-gold-gradient">B2B Trade Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Here is what global procurement heads, industrial distributors, and e-commerce leaders say about partnering with Radhe India Enterprises.
          </motion.p>
        </div>

        {/* Testimonial Slider Box */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card p-8 sm:p-12 rounded-3xl border-gold-500/30 overflow-hidden shadow-2xl">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-gold-500/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating Stars & Product Tag */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-500/10 text-gold-300 border border-gold-500/20">
                    Product Line: {activeTestimonial.productLine}
                  </span>
                </div>

                {/* Quote Narrative */}
                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed italic">
                  &ldquo;{activeTestimonial.content}&rdquo;
                </p>

                {/* Client Profile */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold-400 shadow-md"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white">{activeTestimonial.name}</h4>
                      <p className="text-xs text-gold-300 font-medium">{activeTestimonial.role}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3 h-3 text-slate-500" />
                        <span>{activeTestimonial.company} • {activeTestimonial.country}</span>
                      </p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={handlePrev}
                      className="p-3 rounded-xl bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-slate-300 border border-slate-700 transition-colors shadow-md"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 rounded-xl bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-slate-300 border border-slate-700 transition-colors shadow-md"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-gold-400" : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
