"use client";

import { Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function AboutSection() {
  const activities = [
    "E-Commerce",
    "Import & Export",
    "Manufacturing",
    "Global Sourcing",
    "Industrial Supply",
  ];

  return (
    <section id="about" className="relative py-14 sm:py-16 bg-white overflow-hidden">
      {/* Background Corporate Office Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1920')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>About Radhe India Enterprises</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {COMPANY_INFO.tagline}
        </h2>

        {/* Concise narrative */}
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Radhe India Enterprises is a fast-growing Indian trading and manufacturing enterprise headquartered in Visakhapatnam. We bridge Indian suppliers with international markets across agriculture, electrical equipment, and industrial supplies, delivering trusted products, transparent business practices, and long-term global partnerships.
        </p>

        {/* 5 Reordered Business Activities */}
        <div className="pt-2 grid grid-cols-2 md:grid-cols-5 gap-2.5 max-w-4xl mx-auto text-xs font-semibold text-slate-800">
          {activities.map((activity, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-sm">
              <span className="text-blue-600 font-bold block mb-0.5">•</span>
              <span>{activity}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
