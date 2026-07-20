"use client";

import { motion } from "framer-motion";
import { 
  Wheat, 
  HardHat, 
  Zap, 
  Factory, 
  Building2, 
  ShoppingCart, 
  Store, 
  Globe2, 
  Landmark, 
  Hammer,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Agriculture & Food Processing",
      desc: "Bulk grains, spices, dehydrated flakes, and processed agricultural commodities.",
      icon: Wheat,
      bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Construction & Engineering",
      desc: "Structural steel, pipes, fasteners, and heavy civil construction supplies.",
      icon: HardHat,
      bgImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Electrical & Energy",
      desc: "Switchgear assemblies, power transformers, cabling, and substation manpower.",
      icon: Zap,
      bgImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Manufacturing Plants",
      desc: "Raw materials, precision metal sheets, machinery spares, and industrial OEM components.",
      icon: Factory,
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Industrial Enterprises",
      desc: "Factory consumables, heavy metal fabrication stock, and custom manufacturing parts.",
      icon: Building2,
      bgImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Retail & E-Commerce",
      desc: "Private label packaging, Amazon/FBA inventory supply, and consumer spice packs.",
      icon: ShoppingCart,
      bgImage: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Wholesale & Distributors",
      desc: "High volume containerized commodity shipments for regional distribution networks.",
      icon: Store,
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "International B2B Buyers",
      desc: "Dedicated global trade execution, CIF/FOB delivery, and single-window sourcing.",
      icon: Globe2,
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Government Projects",
      desc: "Tender execution, public infrastructure procurement, and electrical equipment supply.",
      icon: Landmark,
      bgImage: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Infrastructure & Ports",
      desc: "Marine steel plates, port logistics support, and heavy industrial material supply.",
      icon: Hammer,
      bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-navy-900/50 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            <span>Target Sectors</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Industries We <span className="text-gold-gradient">Serve Worldwide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Delivering customized product specifications, bulk trade packaging, and technical compliance for diverse industry verticals globally.
          </motion.p>
        </div>

        {/* 10 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative h-72 rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-400 transition-all duration-500 shadow-xl cursor-pointer"
              >
                {/* Card Background Image */}
                <img
                  src={item.bgImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20 group-hover:from-navy-950/95 transition-colors" />

                {/* Card Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded-xl bg-gold-500/20 backdrop-blur-md border border-gold-500/40 text-gold-300 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-gold-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
