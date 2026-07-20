"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, PRODUCT_CATEGORIES, ProductItem } from "@/data/products";
import EnquiryModal from "@/components/EnquiryModal";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ArrowRight, Wheat, Flame, Leaf, Zap, Cpu, Layers } from "lucide-react";

const iconMap: Record<string, any> = {
  Wheat, Flame, Leaf, Zap, Cpu, Layers
};

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);

  const filteredProducts = PRODUCTS.filter((product) => {
    return activeCategory === "all" || product.categoryId === activeCategory;
  });

  const handleEnquire = (productName: string) => {
    setSelectedProduct(productName);
    setIsEnquiryOpen(true);
  };

  return (
    <>
      <section id="products" className="relative py-14 sm:py-16 bg-navy-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-ocean-400 block mb-1">
              B2B Product Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Export <span className="text-ocean-gradient">Product Lines</span>
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
                    ? "bg-ocean-500 text-white border-ocean-400 font-bold shadow-md"
                    : "bg-navy-900 text-slate-300 border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Cards Grid with Brightened, High-Clarity Imagery */}
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
                    className="relative rounded-2xl overflow-hidden border border-ocean-500/30 group hover:border-ocean-400 transition-all shadow-lg flex flex-col justify-between h-64 p-5 bg-navy-900"
                  >
                    {/* Brightened High-Clarity Product Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 z-0 opacity-75"
                      loading="lazy"
                      unoptimized
                    />
                    
                    {/* Light Gradient Overlay for crisp text clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40 z-0" />

                    {/* Top Header */}
                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-xl bg-navy-950/80 text-ocean-300 border border-ocean-500/40 backdrop-blur-md">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-navy-950/90 text-ocean-300 border border-slate-800 backdrop-blur-md">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-white group-hover:text-ocean-300 transition-colors drop-shadow-sm">
                        {product.name}
                      </h3>
                    </div>

                    {/* Bottom Action */}
                    <div className="relative z-10">
                      <button
                        onClick={() => handleEnquire(product.name)}
                        className="pt-2 border-t border-white/20 w-full flex items-center justify-between text-xs font-bold text-ocean-300 hover:text-white transition-colors"
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
      </section>

      {/* Full-Screen Slide-Up Overlay Modal with Auto Product Pre-fill */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialProduct={selectedProduct}
      />
    </>
  );
}
