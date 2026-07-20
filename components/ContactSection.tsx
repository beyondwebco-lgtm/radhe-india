"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Building2, MessageCircle, ExternalLink, Send } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const mapsDirectUrl = `https://maps.google.com/?q=${encodeURIComponent(
    "Orange Business Centre, Plot No.21, Beach Road, Kirlampudi Layout, Visakhapatnam, Andhra Pradesh 530017"
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (
      !formData.name.trim() ||
      !formData.company.trim() ||
      !formData.email.trim() ||
      !formData.country.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const rawMessage = `*New Website Inquiry*

Name: ${formData.name.trim()}
Company: ${formData.company.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim() || "N/A"}
Country: ${formData.country.trim()}

Message:
${formData.message.trim()}`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/919494321980?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
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
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-ocean-400 block mb-1">
            Direct Trade Contact
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-ocean-gradient">Radhe India Enterprises</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
            Submit your export requirements below to connect directly with our trade specialists on WhatsApp.
          </p>
        </div>

        {/* Contact Details & Restored Inline Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-4 bg-navy-900/90 border border-ocean-500/30 shadow-xl">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <Building2 className="w-5 h-5 text-ocean-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-base">{COMPANY_INFO.name}</h3>
                  <p className="text-xs text-ocean-300 font-medium">{COMPANY_INFO.tagline}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-ocean-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Address:</strong>
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

              {/* View location on Google Maps Button */}
              <div className="pt-2 border-t border-slate-800">
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

          {/* Right Column: Restored Inline Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-5 sm:p-7 rounded-2xl bg-navy-900/90 border border-ocean-500/30 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">Send Export Inquiry</h3>
              <p className="text-xs text-slate-300 mb-4">Complete the form below to initiate a direct WhatsApp inquiry.</p>

              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+91 9494321980"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Country *</label>
                  <input
                    type="text"
                    required
                    placeholder="Destination Country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Message *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe product details and estimated order quantity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-ocean w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
