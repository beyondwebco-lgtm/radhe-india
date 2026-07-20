"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe2, 
  MapPin, 
  Sparkles, 
  Ship, 
  CheckCircle2, 
  TrendingUp, 
  Building,
  Navigation
} from "lucide-react";

export default function GlobalPresence() {
  const regions = [
    {
      id: "india",
      name: "India (Headquarters)",
      type: "Primary Export Hub",
      location: "Visakhapatnam, Andhra Pradesh",
      details: "State-of-the-art dehydration manufacturing plant, deep sea port logistics office, and central trade management.",
      products: ["Basmati & Non-Basmati Rice", "Spices", "Dehydrated Vegetables", "Switchgear", "Steel Sheets"],
      coords: { x: "68%", y: "46%" },
    },
    {
      id: "middle-east",
      name: "Middle East",
      type: "Strategic Trade Partner",
      location: "UAE, Saudi Arabia, Qatar, Oman",
      details: "High volume electrical equipment, switchgears, structural steel pipes, and agricultural commodity supply.",
      products: ["Electrical Equipment", "Basmati Rice", "Steel Pipes", "Spices"],
      coords: { x: "58%", y: "44%" },
    },
    {
      id: "europe",
      name: "Europe",
      type: "Quality Compliance Sector",
      location: "Germany, UK, Netherlands, Italy",
      details: "Strict ISO and FSSAI certified organic spice extracts, dehydrated flakes, and precision metal fabrications.",
      products: ["Dehydrated Vegetables", "Turmeric & Chilli", "Custom Spares"],
      coords: { x: "48%", y: "32%" },
    },
    {
      id: "asia",
      name: "Asia-Pacific",
      type: "Bulk Sourcing & Trade Network",
      location: "Singapore, Malaysia, Vietnam, Thailand",
      details: "Cross-border agricultural trade, oilseed supply, and e-commerce drop-shipping fulfillment.",
      products: ["Agricultural Commodities", "Private Label Packs", "Industrial Raw Supplies"],
      coords: { x: "76%", y: "52%" },
    },
    {
      id: "africa",
      name: "Africa",
      type: "Growing Market Corridor",
      location: "Kenya, Nigeria, Egypt, South Africa",
      details: "Building material exports, electrical cabling, rice distribution, and industrial infrastructure supplies.",
      products: ["Rice Exports", "Construction Fasteners", "Electrical Cables"],
      coords: { x: "52%", y: "58%" },
    },
    {
      id: "future",
      name: "Americas & Oceania",
      type: "Future Expansion Horizon",
      location: "United States, Canada, Australia",
      details: "Expanding B2B e-commerce supply chains, organic spice retail packs, and OEM industrial component imports.",
      products: ["E-Commerce Sourcing", "Organic Spices", "OEM Manufacturing"],
      coords: { x: "25%", y: "40%" },
    },
  ];

  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <section id="global-presence" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            <span>International Trade Footprint</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Our Growing <span className="text-gold-gradient">Global Presence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Connecting Indian manufacturing centers to major international trade corridors across 5 continents with reliable port shipping networks.
          </motion.p>
        </div>

        {/* Map & Region Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Interactive SVG World Map View */}
          <div className="lg:col-span-7 rounded-2xl glass-panel p-6 border-gold-500/30 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                <Globe2 className="w-4 h-4 text-gold-400" />
                <span>Interactive Global Trade Routes</span>
              </div>
              <span className="text-[10px] text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                Click map pins to explore markets
              </span>
            </div>

            {/* Map Graphic Box */}
            <div className="relative h-80 sm:h-96 w-full rounded-xl bg-navy-950/90 border border-slate-800/80 overflow-hidden flex items-center justify-center bg-dots-pattern">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full object-contain text-slate-700/60"
                fill="currentColor"
              >
                {/* Simplified World Continents Vector Outlines */}
                <path d="M150,150 Q200,100 300,120 Q350,180 280,240 Q200,260 150,150 Z" opacity="0.3" />
                <path d="M450,120 Q550,80 620,120 Q600,200 480,180 Z" opacity="0.3" />
                <path d="M480,220 Q580,200 600,280 Q520,380 480,280 Z" opacity="0.3" />
                <path d="M630,140 Q800,120 850,220 Q750,300 650,260 Z" opacity="0.3" />
                <path d="M800,320 Q880,300 900,380 Q820,400 800,320 Z" opacity="0.3" />
              </svg>

              {/* Hotspot Pins */}
              {regions.map((region) => {
                const isSelected = selectedRegion.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    style={{ left: region.coords.x, top: region.coords.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    aria-label={region.name}
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                        isSelected ? "bg-gold-400 opacity-75" : "bg-emerald-400 opacity-40"
                      }`} />
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${
                        isSelected ? "bg-gold-400 ring-4 ring-gold-400/30" : "bg-emerald-400 group-hover:bg-gold-300"
                      }`} />
                    </span>
                    <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap transition-all ${
                      isSelected 
                        ? "bg-gold-500 text-navy-950 shadow-md" 
                        : "bg-navy-950/90 text-slate-300 border border-slate-700 opacity-0 group-hover:opacity-100"
                    }`}>
                      {region.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-400" />
                <span>Headquarters & Deep Sea Port</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Active International Trade Partners</span>
              </span>
            </div>
          </div>

          {/* Right Region Info Cards Stack */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              <span>Select Region to View Trade Details</span>
            </h3>

            <div className="space-y-3">
              {regions.map((region) => {
                const isSelected = selectedRegion.id === region.id;
                return (
                  <div
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-navy-900 border-gold-500/60 shadow-lg"
                        : "bg-navy-950/60 border-slate-800 hover:border-slate-700 text-slate-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin className={`w-4 h-4 ${isSelected ? "text-gold-400" : "text-slate-500"}`} />
                        <div>
                          <h4 className={`text-sm font-bold ${isSelected ? "text-white" : "text-slate-300"}`}>
                            {region.name}
                          </h4>
                          <p className="text-[11px] text-slate-400">{region.location}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        isSelected ? "bg-gold-500/20 text-gold-300 border border-gold-500/40" : "bg-slate-800 text-slate-400"
                      }`}>
                        {region.type}
                      </span>
                    </div>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pt-3 border-t border-slate-800 space-y-2 text-xs"
                        >
                          <p className="text-slate-300 leading-relaxed">
                            {region.details}
                          </p>

                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {region.products.map((prod, pIdx) => (
                              <span
                                key={pIdx}
                                className="px-2 py-0.5 rounded bg-navy-950 text-slate-300 border border-slate-700/80 text-[10px] flex items-center gap-1"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 text-gold-400" />
                                {prod}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
