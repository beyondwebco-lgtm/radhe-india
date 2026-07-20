"use client";

import Image from "next/image";
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

        {/* 5 Service Cards with High Visual Clarity Restored */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComp = serviceIconMap[service.icon] || Globe2;
            return (
              <div
                key={service.id}
                className="rounded-2xl overflow-hidden border border-ocean-500/30 group hover:border-ocean-400 transition-all shadow-xl bg-navy-950 flex flex-col justify-between"
              >
                {/* Top Clear Image Banner */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-navy-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/20" />
                  
                  <div className="absolute top-3 left-3 z-10 p-2 rounded-xl bg-navy-950/90 text-ocean-400 border border-ocean-500/30 backdrop-blur-md">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Text Content */}
                <div className="p-4 space-y-2 bg-navy-950 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-ocean-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
