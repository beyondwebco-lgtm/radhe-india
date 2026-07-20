"use client";

import { 
  ShieldCheck, 
  Award, 
  DollarSign, 
  Zap, 
  Globe2, 
  Users, 
  HeartHandshake, 
  Smile 
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    { title: "Trusted Partner", desc: "Transparent business ethics and verified export credentials.", icon: ShieldCheck },
    { title: "Quality Assurance", desc: "Multi-point inspection and strict APEDA/ISO compliance.", icon: Award },
    { title: "Competitive Pricing", desc: "Direct farm & mill sourcing eliminating intermediaries.", icon: DollarSign },
    { title: "Fast Delivery", desc: "Optimized shipping routes from Visakhapatnam port.", icon: Zap },
    { title: "Global Network", desc: "Active trade presence across Asia, UAE, Europe, and Africa.", icon: Globe2 },
    { title: "Professional Team", desc: "Experienced trade consultants and export managers.", icon: Users },
    { title: "Women-Led Enterprise", desc: "Empowered leadership driving high integrity and precision.", icon: HeartHandshake },
    { title: "Customer Satisfaction", desc: "Dedicated B2B account support and reliable fulfillment.", icon: Smile },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-16 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-1">
            The Radhe Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose <span className="text-gold-gradient">Radhe India Enterprises</span>
          </h2>
        </div>

        {/* 8 Clean Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-4 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all bg-navy-900/90"
              >
                <div className="space-y-2">
                  <div className="p-2 w-fit rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
