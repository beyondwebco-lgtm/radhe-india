"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, Building2, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", country: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.country.trim() || !formData.message.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    // Format WhatsApp pre-filled message
    const rawMessage = `*New Export Inquiry*

👤 Name:
${formData.name.trim()}

🏢 Company:
${formData.company.trim()}

📧 Email:
${formData.email.trim()}

📱 Phone / WhatsApp:
${formData.phone.trim() || "N/A"}

🌍 Country:
${formData.country.trim()}

📝 Message:
${formData.message.trim()}

Sent from the Radhe India Enterprises website.`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/919494321980?text=${encodedMessage}`;

    // Open WhatsApp chat directly
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 bg-navy-900 overflow-hidden scroll-mt-16">
      {/* Background Visual Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=80&w=1920')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/95 to-navy-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-1">
            Direct Trade Contact
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gold-gradient">Radhe India Enterprises</span>
          </h2>
        </div>

        {/* Form & Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-5 rounded-2xl space-y-3 bg-navy-900/90 border border-slate-800">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <Building2 className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-sm">{COMPANY_INFO.name}</h3>
                  <p className="text-[11px] text-gold-300">Est. 2023 • Women Entrepreneur Enterprise</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Address:</strong>
                    <p>2nd Floor, Orange Business Centre, Plot No.21, Beach Road</p>
                    <p>Visakhapatnam, Andhra Pradesh - 530017, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Globe className="w-4 h-4 text-gold-400 shrink-0" />
                  <a href={COMPANY_INFO.website} target="_blank" rel="noopener noreferrer" className="text-gold-300 hover:underline">
                    {COMPANY_INFO.website}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>

                {/* Direct WhatsApp Callout */}
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-between hover:bg-emerald-900/90 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Inquiry (+91 9494321980)</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold bg-emerald-500 text-navy-950 px-2 py-0.5 rounded">Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 h-44 bg-navy-950">
              <iframe
                title="Radhe India Enterprises Location Map"
                src={COMPANY_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.5) opacity(0.9)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Instant WhatsApp Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-5 sm:p-7 rounded-2xl bg-navy-900/90 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-1">Send Export Inquiry</h3>
              <p className="text-xs text-slate-300 mb-4">Clicking submit will open WhatsApp directly with your pre-filled details.</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text" required placeholder="Full Name"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Company Name *</label>
                    <input
                      type="text" required placeholder="Company Name"
                      value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Business Email *</label>
                    <input
                      type="email" required placeholder="email@company.com"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel" placeholder="+91 9494321980"
                      value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Country of Import *</label>
                  <input
                    type="text" required placeholder="Destination Country"
                    value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Message *</label>
                  <textarea
                    rows={3} required placeholder="Describe product details and estimated quantity needed..."
                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-gold-400 resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
