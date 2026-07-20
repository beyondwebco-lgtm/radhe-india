"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  PackageCheck, 
  Handshake, 
  ShieldCheck, 
  Award,
  Globe2
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function StatsSection() {
  const stats = [
    {
      value: "2023+",
      label: "Established",
      sublabel: "Founded by Women Entrepreneur",
      icon: Building2,
    },
    {
      value: "100+",
      label: "Products",
      sublabel: "Agri, Electrical & Industrial",
      icon: PackageCheck,
    },
    {
      value: "50+",
      label: "Business Partners",
      sublabel: "Worldwide Trade Corridors",
      icon: Handshake,
    },
    {
      value: "100%",
      label: "Customer Commitment",
      sublabel: "APEDA & ISO Quality Assured",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-y border-gold-500/20 relative overflow-hidden">
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-between group hover:border-gold-400 transition-all duration-300 shadow-xl"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-amber-600/20 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-4 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all shadow-md">
                  <IconComp className="w-7 h-7 stroke-[2]" />
                </div>

                {/* Animated Stat Value */}
                <h3 className="text-4xl sm:text-5xl font-extrabold text-gold-gradient font-display tracking-tight mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-base font-bold text-white mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400">
                  {stat.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
