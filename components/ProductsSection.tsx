"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
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
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-colors border ${
                  activeCategory === cat.id
                    ? "bg-ocean-500 text-white border-ocean-400 font-bold shadow-md"
                    : "bg-navy-900 text-slate-300 border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Cards Grid with Image as Main Hero Focus */}
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
                    className="rounded-2xl overflow-hidden border border-ocean-500/30 group hover:border-ocean-400 transition-all shadow-xl bg-navy-900 flex flex-col justify-between"
                  >
                    {/* Top Hero Image Banner (Main Focus) */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-navy-950">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        unoptimized
                      />
                      
                      {/* Subtle Bottom Shadow for text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-black/20" />

                      {/* Floating Category Tag */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy-950/90 text-ocean-300 text-[10px] font-bold border border-ocean-500/30 backdrop-blur-md">
                        <IconComp className="w-3.5 h-3.5 text-ocean-400" />
                        <span>{product.category}</span>
                      </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="p-4 sm:p-5 space-y-3 flex flex-col justify-between flex-1 bg-navy-900">
                      <div>
                        <h3 className="text-lg font-extrabold text-white group-hover:text-ocean-300 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Specifications Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.specifications.slice(0, 2).map((spec, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-navy-950 text-slate-300 border border-slate-800 font-medium">
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* Request Quote Button */}
                      <div className="pt-2 border-t border-slate-800">
                        <button
                          onClick={() => handleEnquire(product.name)}
                          className="btn-ocean w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                          <span>Request Product Quote</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Full-Screen Mobile-Responsive Popup Overlay Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialProduct={selectedProduct}
      />
    </>
  );
}
