"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  PackageCheck, 
  Handshake, 
  ShieldCheck, 
} from "lucide-react";

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
    <section className="py-20 bg-slate-100 border-y border-slate-200 relative overflow-hidden">
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
                className="glass-card p-8 rounded-2xl text-center flex flex-col items-center justify-between group hover:border-blue-300 transition-all duration-300 shadow-md bg-white border-slate-200"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <IconComp className="w-7 h-7 stroke-[2]" />
                </div>

                {/* Animated Stat Value */}
                <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-600 font-display tracking-tight mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-base font-bold text-slate-900 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-600">
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
