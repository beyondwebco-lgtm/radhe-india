"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ArrowRight, Wheat, Flame, Leaf, Zap, Cpu, Layers } from "lucide-react";

const iconMap: Record<string, any> = {
  Wheat, Flame, Leaf, Zap, Cpu, Layers
};

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = PRODUCTS.filter((product) => {
    return activeCategory === "all" || product.categoryId === activeCategory;
  });

  return (
    <section id="products" className="relative py-14 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-1">
            B2B Product Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Export <span className="text-ocean-gradient">Product Lines</span>
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-colors border ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white border-blue-600 font-bold shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:border-slate-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const IconComp = iconMap[product.icon] || Package;
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl overflow-hidden border border-slate-200 group hover:border-blue-300 transition-all shadow-md hover:shadow-xl bg-white flex flex-col justify-between"
                >
                  {/* Top Hero Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      unoptimized
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 text-blue-700 text-[10px] font-bold border border-slate-200 backdrop-blur-md shadow-sm">
                      <IconComp className="w-3.5 h-3.5 text-blue-600" />
                      <span>{product.category}</span>
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="p-4 sm:p-5 space-y-3 flex flex-col justify-between flex-1 bg-white">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.specifications.slice(0, 2).map((spec, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Request Quote Direct Link to /request-quote */}
                    <div className="pt-2 border-t border-slate-100">
                      <Link
                        href={`/request-quote?product=${encodeURIComponent(product.name)}`}
                        className="btn-ocean w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        <span>Request Product Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
