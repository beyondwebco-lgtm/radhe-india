"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, PRODUCT_CATEGORIES, ProductItem } from "@/data/products";
import ProductModal from "@/components/ProductModal";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ArrowRight, Wheat, Flame, Leaf, Zap, Cpu, Layers } from "lucide-react";

const iconMap: Record<string, any> = {
  Wheat, Flame, Leaf, Zap, Cpu, Layers
};

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = PRODUCTS.filter((product) => {
    return activeCategory === "all" || product.categoryId === activeCategory;
  });

  return (
    <section id="products" className="relative py-12 sm:py-16 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-1">
            B2B Product Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Export <span className="text-gold-gradient">Product Lines</span>
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors border ${
                activeCategory === cat.id
                  ? "bg-gold-500 text-navy-950 border-gold-400 font-bold"
                  : "bg-navy-900 text-slate-300 border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Reliable Images & Dark Gradient Overlay */}
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
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden border border-gold-500/30 group hover:border-gold-400 transition-all shadow-lg flex flex-col justify-between h-60 p-5 bg-navy-900"
                >
                  {/* Optimized Product Image Background */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 z-0 opacity-45"
                    loading="lazy"
                    unoptimized
                  />
                  
                  {/* High-Contrast Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60 z-0" />

                  {/* Top Header */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-gold-500/20 text-gold-300 border border-gold-500/40 backdrop-blur-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-navy-950/90 text-gold-300 border border-slate-800">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Bottom Action */}
                  <div className="relative z-10">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="pt-2 border-t border-white/10 w-full flex items-center justify-between text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      <span>Request Product Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* RFQ Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
