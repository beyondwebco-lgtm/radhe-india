"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-14 sm:py-16 bg-navy-900 overflow-hidden">
      {/* Background Corporate Office Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider"
        >
          <Award className="w-3.5 h-3.5 text-gold-400" />
          <span>About Radhe India Enterprises</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
        >
          Your Gateway for <span className="text-gold-gradient">Global Market Trade</span>
        </motion.h2>

        {/* 3-4 Lines Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed"
        >
          Radhe India Enterprises is a fast-growing Indian trading company established in 2023 by a visionary woman entrepreneur. We specialize in Import & Export, Manufacturing, E-Commerce, Global Sourcing, and Industrial Supply. We help businesses source high-quality products from India while connecting Indian manufacturers with global buyers. Our mission is to deliver trusted products, transparent business practices, and long-term partnerships worldwide.
        </motion.p>

        {/* Core Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="pt-2 grid grid-cols-2 md:grid-cols-5 gap-2.5 max-w-4xl mx-auto text-xs font-semibold text-slate-200"
        >
          {["Import & Export", "Manufacturing", "E-Commerce", "Global Sourcing", "Industrial Supply"].map((pillar, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-navy-950/80 border border-slate-800 text-center">
              <span className="text-gold-400 font-bold block mb-0.5">•</span>
              <span>{pillar}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
