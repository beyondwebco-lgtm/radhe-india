import { Package, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-40 pb-12 sm:pt-48 sm:pb-16 flex items-center justify-center bg-slate-50 overflow-hidden gpu-accelerated">
      
      {/* Background Cargo Ship & Global Trade Image - Prominent Visual */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-85"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=85&w=1920')`
        }}
      />
      {/* Soft light overlay for text readability while maintaining visual vibrancy */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-slate-50/40 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Connecting India to{" "}
              <span className="text-ocean-gradient block mt-1">
                Global Markets
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Radhe India Enterprises specializes in E-Commerce, Import & Export, Custom Manufacturing, Electrical Manpower, and Supply Chain Management.
            </p>

            {/* Simplified Hero CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#products"
                className="btn-ocean w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Package className="w-4 h-4" />
                <span>Explore Products</span>
              </a>

              <a
                href="#services"
                className="btn-outline-ocean w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Floating Metric Card */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-5 rounded-2xl border-slate-200 space-y-3 bg-white/95 shadow-xl">
              <h3 className="font-bold text-slate-900 text-sm pb-2 border-b border-slate-200">
                Global Trade Hub
              </h3>
              <p className="text-xs text-slate-600">Visakhapatnam Deep Sea Port • Andhra Pradesh, India</p>

              <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-blue-600 font-bold text-base block font-display">100%</span>
                  <span className="text-slate-600">Quality Verified</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-blue-600 font-bold text-base block font-display">Global</span>
                  <span className="text-slate-600">Trade Network</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
