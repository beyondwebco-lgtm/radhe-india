"use client";

import { useState, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function EnquiryModal({ isOpen, onClose, initialProduct = "" }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    message: "",
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

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

    const rawMessage = `*New Trade Inquiry*

${formData.product.trim() ? `📦 Product Interested In: ${formData.product.trim()}\n` : ""}👤 Name:
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

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-navy-900 border border-ocean-500/30 rounded-2xl shadow-2xl p-5 sm:p-7 text-white my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-full bg-navy-950 border border-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-4 pb-3 border-b border-slate-800 pr-8">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ocean-400 block mb-1">
              Direct Export Quotation
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Request <span className="text-ocean-gradient">Product Quote</span>
            </h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            {/* Auto-prefilled Product Interest Field */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Product Interested In</label>
              <input
                type="text"
                placeholder="e.g. Rice, Spices, Switchgear, Metal Sheets"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-ocean-500/40 text-gold-300 font-semibold focus:outline-none focus:border-ocean-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
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
                <label className="block text-slate-300 font-semibold mb-1">Company Name *</label>
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
                <label className="block text-slate-300 font-semibold mb-1">Business Email *</label>
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
                <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp</label>
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
              <label className="block text-slate-300 font-semibold mb-1">Country of Import *</label>
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
              <label className="block text-slate-300 font-semibold mb-1">Inquiry Message *</label>
              <textarea
                rows={3}
                required
                placeholder="Describe order quantity, specification, or port requirements..."
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
              <span>Submit Inquiry via WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
