"use client";

import { Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function AboutSection() {
  const activities = [
    "1. E-Commerce",
    "2. Import & Export",
    "3. Manufacturing",
    "4. Global Sourcing",
    "5. Industrial Supply",
  ];

  return (
    <section id="about" className="relative py-14 sm:py-16 bg-navy-900 overflow-hidden">
      {/* Background Corporate Office Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1920')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/20 text-ocean-300 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-ocean-400" />
          <span>About Radhe India Enterprises</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {COMPANY_INFO.tagline}
        </h2>

        {/* Concise narrative */}
        <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
          Radhe India Enterprises is a fast-growing Indian trading and manufacturing enterprise headquartered in Visakhapatnam. We bridge Indian suppliers with international markets across agriculture, electrical equipment, and industrial supplies, delivering trusted products, transparent business practices, and long-term global partnerships.
        </p>

        {/* 5 Reordered Business Activities */}
        <div className="pt-2 grid grid-cols-2 md:grid-cols-5 gap-2.5 max-w-4xl mx-auto text-xs font-semibold text-slate-200">
          {activities.map((activity, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-navy-950/80 border border-ocean-500/20 text-center backdrop-blur-sm">
              <span className="text-ocean-400 font-bold block mb-0.5">•</span>
              <span>{activity}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
