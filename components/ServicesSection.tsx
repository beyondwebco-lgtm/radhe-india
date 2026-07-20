"use client";

import { SERVICES } from "@/data/services";
import { Globe2, Factory, ShoppingCart, Users, Truck } from "lucide-react";

const serviceIconMap: Record<string, any> = {
  ShoppingCart, Globe2, Factory, Users, Truck
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-14 sm:py-16 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-ocean-400 block mb-1">
            Trade Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our <span className="text-ocean-gradient">Services</span>
          </h2>
        </div>

        {/* 5 Cards with Brightened Background Images & Ocean Gradient Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComp = serviceIconMap[service.icon] || Globe2;
            return (
              <div
                key={service.id}
                className="relative rounded-2xl overflow-hidden border border-ocean-500/30 group hover:border-ocean-400 transition-all shadow-lg flex flex-col justify-between h-48 p-5 bg-navy-950"
              >
                {/* Brightened Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700 z-0 opacity-40"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                {/* Subtle Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60 z-0" />

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-ocean-500/20 text-ocean-300 border border-ocean-500/40 backdrop-blur-md shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-ocean-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed pt-1 font-normal">
                    {service.shortDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
