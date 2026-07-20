"use client";

import { 
  ShieldCheck, 
  Award, 
  DollarSign, 
  Zap, 
  PackageCheck, 
  Headphones 
} from "lucide-react";

export default function WhyChooseUs() {
  const advantages = [
    { title: "Reliable Global Trade Partner", desc: "Transparent business ethics, verified export credentials, and trusted port execution.", icon: ShieldCheck },
    { title: "Quality Assured Products", desc: "Multi-point inspection and strict compliance with international trade standards.", icon: Award },
    { title: "Competitive Pricing", desc: "Direct farm & manufacturer sourcing eliminating unnecessary intermediaries.", icon: DollarSign },
    { title: "Timely Delivery", desc: "Optimized ocean freight schedules and fast customs dispatch from Visakhapatnam port.", icon: Zap },
    { title: "Customized Export Solutions", desc: "Tailored private-label packaging, bulk consignments, and flexible Incoterms.", icon: PackageCheck },
    { title: "Professional Customer Support", desc: "Dedicated B2B account managers assisting your trade orders 24/7.", icon: Headphones },
  ];

  return (
    <section id="advantage" className="py-14 sm:py-16 bg-navy-950 relative border-t border-b border-ocean-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-ocean-400 block mb-1">
            Why Choose Radhe India Enterprises
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Radhe <span className="text-ocean-gradient">Advantage</span>
          </h2>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all bg-navy-900/90 border-ocean-500/20 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-ocean-500/10 text-ocean-400 border border-ocean-500/30">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
