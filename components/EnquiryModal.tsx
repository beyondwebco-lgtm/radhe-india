"use client";

import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Send, CheckCircle2 } from "lucide-react";
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

  const modalRef = useRef<HTMLDivElement>(null);

  // Sync initial product parameter
  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  // ESC Key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

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

    const rawMessage = `*New Export Inquiry*

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

    // Open WhatsApp directly & close full-screen modal
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/90 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-navy-900 border border-ocean-500/40 rounded-3xl shadow-2xl p-6 sm:p-8 text-white my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-navy-950 border border-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pb-4 border-b border-slate-800 pr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-ocean-400" />
              <span>Full-Screen Export Inquiry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {formData.product ? (
                <>Quotation for <span className="text-ocean-gradient">{formData.product}</span></>
              ) : (
                <>Request <span className="text-ocean-gradient">Export Quotation</span></>
              )}
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Submit your trade specifications to receive an instant response from our export team on WhatsApp.
            </p>
          </div>

          {/* Full-Screen Modal Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Auto-filled Product Interest Field */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1 text-xs">Product Interested In</label>
              <input
                type="text"
                readOnly={!!initialProduct}
                placeholder="Product Name (e.g. Rice, Spices, Switchgear, Metal Sheets)"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-navy-950 border text-ocean-300 font-semibold focus:outline-none ${
                  initialProduct ? 'border-ocean-500/50 cursor-not-allowed bg-navy-950/80' : 'border-slate-700 focus:border-ocean-400'
                }`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-xs">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-xs">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-xs">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-xs">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+91 9494321980"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 text-xs">Country of Import *</label>
              <input
                type="text"
                required
                placeholder="Destination Country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1 text-xs">Inquiry Message *</label>
              <textarea
                rows={3}
                required
                placeholder="Describe order quantity, specification, or port requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-ocean w-full py-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
