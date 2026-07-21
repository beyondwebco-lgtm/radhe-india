"use client";

import Image from "next/image";
import { SERVICES } from "@/data/services";
import { Globe2, Factory, ShoppingCart, Users, Truck } from "lucide-react";

const serviceIconMap: Record<string, any> = {
  ShoppingCart, Globe2, Factory, Users, Truck
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-14 sm:py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-1">
            Trade Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-ocean-gradient">Services</span>
          </h2>
        </div>

        {/* 5 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComp = serviceIconMap[service.icon] || Globe2;
            return (
              <div
                key={service.id}
                className="rounded-2xl overflow-hidden border border-slate-200 group hover:border-blue-300 transition-all shadow-md hover:shadow-xl bg-white flex flex-col justify-between"
              >
                {/* Top Clear Image Banner */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 z-10 p-2 rounded-xl bg-white/90 text-blue-600 border border-slate-200 backdrop-blur-md shadow-sm">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Text Content */}
                <div className="p-5 space-y-2 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
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
