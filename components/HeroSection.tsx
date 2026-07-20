"use client";

import { useState } from "react";
import { Package, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";
import EnquiryModal from "@/components/EnquiryModal";

export default function HeroSection() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <section id="hero" className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 flex items-center justify-center bg-navy-950 overflow-hidden gpu-accelerated">
        
        {/* Background Cargo Ship & Global Trade Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=85&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/75 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-ocean-400" />
                <span>{COMPANY_INFO.tagline}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Connecting India to{" "}
                <span className="text-ocean-gradient block mt-1">
                  Global Markets
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Radhe India Enterprises specializes in E-Commerce, Import & Export, Custom Manufacturing, Electrical Manpower, and Supply Chain Management.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="#products"
                  className="btn-ocean w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Package className="w-4 h-4" />
                  <span>Explore Products</span>
                </a>

                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="btn-outline-ocean w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 bg-navy-950/60"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>

            {/* Right Floating Metric Card */}
            <div className="lg:col-span-4">
              <div className="glass-panel p-5 rounded-2xl border-ocean-500/30 space-y-3 bg-navy-900/90 shadow-xl">
                <h3 className="font-bold text-white text-sm pb-2 border-b border-slate-800">
                  Global Trade Hub
                </h3>
                <p className="text-xs text-slate-300">Visakhapatnam Deep Sea Port • Andhra Pradesh, India</p>

                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-xl bg-navy-950 border border-slate-800">
                    <span className="text-ocean-400 font-bold text-base block font-display">100%</span>
                    <span className="text-slate-400">Quality Verified</span>
                  </div>
                  <div className="p-3 rounded-xl bg-navy-950 border border-slate-800">
                    <span className="text-ocean-400 font-bold text-base block font-display">Global</span>
                    <span className="text-slate-400">Trade Network</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GoDaddy-style Popup Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
