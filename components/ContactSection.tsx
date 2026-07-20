"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, MessageCircle, ExternalLink, Send } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";
import EnquiryModal from "@/components/EnquiryModal";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mapsDirectUrl = `https://maps.google.com/?q=${encodeURIComponent(
    "Orange Business Centre, Plot No.21, Beach Road, Kirlampudi Layout, Visakhapatnam, Andhra Pradesh 530017"
  )}`;

  return (
    <>
      <section id="contact" className="relative py-14 sm:py-16 bg-navy-900 overflow-hidden scroll-mt-16">
        {/* Background Visual Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=85&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-ocean-400 block mb-1">
              Direct Trade Contact
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Contact <span className="text-ocean-gradient">Radhe India Enterprises</span>
            </h2>
            <p className="text-xs text-slate-300 mt-2 max-w-lg mx-auto">
              Our trade team handles global inquiries for agricultural products, electrical equipment, and industrial supplies.
            </p>
          </div>

          {/* Clean Contact Details & Modal Trigger Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Left Column: Office Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="glass-card p-6 rounded-2xl space-y-4 bg-navy-900/95 border border-ocean-500/30 shadow-xl">
                <div className="pb-3 border-b border-slate-800">
                  <h3 className="font-bold text-white text-base">{COMPANY_INFO.name}</h3>
                  <p className="text-xs text-ocean-300 font-medium">{COMPANY_INFO.tagline}</p>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-ocean-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Corporate Address:</strong>
                      <p>2nd Floor, Orange Business Centre, Plot No.21, Beach Road</p>
                      <p>Kirlampudi Layout, Visakhapatnam, AP - 530017, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <Globe className="w-4 h-4 text-ocean-400 shrink-0" />
                    <a href={COMPANY_INFO.website} target="_blank" rel="noopener noreferrer" className="text-ocean-300 hover:underline">
                      {COMPANY_INFO.website}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-ocean-400 shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-ocean-400 shrink-0" />
                    <span>{COMPANY_INFO.phone}</span>
                  </div>
                </div>

                {/* View on Google Maps Button */}
                <div className="pt-2">
                  <a
                    href={mapsDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-navy-950 hover:bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View Location on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-ocean-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Modal Trigger Box */}
            <div className="lg:col-span-6">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl bg-navy-900/95 border border-ocean-500/30 text-center space-y-5 shadow-xl">
                <div className="p-3.5 w-14 h-14 rounded-2xl bg-ocean-500/10 text-ocean-400 border border-ocean-500/30 mx-auto flex items-center justify-center">
                  <Send className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white">Need an Export Quotation?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                    Click below to open our export inquiry modal and receive a custom quotation directly on WhatsApp.
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-ocean w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Export Inquiry Popup</span>
                  </button>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Direct WhatsApp Chat (+91 9494321980)</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* GoDaddy-style Popup Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
