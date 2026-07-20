"use client";

import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, CheckCircle2 } from "lucide-react";
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

  // Lock background scroll when modal is open + ESC key listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
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

    // Open WhatsApp directly & close modal
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {/* Viewport-fixed Overlay with Background Blur */}
      <div
        onClick={handleBackdropClick}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-navy-950/85 backdrop-blur-md overflow-hidden"
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-xl bg-navy-900 border border-ocean-500/40 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 text-white max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1.5 text-slate-400 hover:text-white rounded-full bg-navy-950 border border-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-3 sm:mb-4 pb-2.5 border-b border-slate-800 pr-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-300 text-[10px] font-semibold uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-3 h-3 text-ocean-400" />
              <span>Export Quotation</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
              {formData.product ? (
                <>Quotation for <span className="text-ocean-gradient">{formData.product}</span></>
              ) : (
                <>Request <span className="text-ocean-gradient">Export Quotation</span></>
              )}
            </h2>
          </div>

          {/* Compact Viewport-Centered Form */}
          <form onSubmit={handleSubmit} className="space-y-2.5 text-xs">
            {/* Auto-filled Product Interest Field */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1 text-[11px]">Product Interested In</label>
              <input
                type="text"
                readOnly={!!initialProduct}
                placeholder="Product Name (e.g. Rice, Spices, Switchgear, Metal Sheets)"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border text-ocean-300 font-semibold focus:outline-none ${
                  initialProduct ? 'border-ocean-500/50 cursor-not-allowed bg-navy-950/80' : 'border-slate-700 focus:border-ocean-400'
                }`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-[11px]">Full Name *</label>
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
                <label className="block text-slate-300 font-semibold mb-1 text-[11px]">Company Name *</label>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-[11px]">Business Email *</label>
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
                <label className="block text-slate-300 font-semibold mb-1 text-[11px]">Phone / WhatsApp</label>
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
              <label className="block text-slate-300 font-semibold mb-1 text-[11px]">Country of Import *</label>
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
              <label className="block text-slate-300 font-semibold mb-1 text-[11px]">Inquiry Message *</label>
              <textarea
                rows={2}
                required
                placeholder="Describe order quantity, specification, or port requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-navy-950 border border-slate-700 text-white focus:outline-none focus:border-ocean-400 resize-none"
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="btn-ocean w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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
