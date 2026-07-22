"use client";

import { useState } from "react";
import { ProductItem } from "@/data/products";
import { X, Send, ShieldCheck, Mail, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", country: "", quantity: "", notes: ""
  });

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.country.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const rawMessage = `*New Product Inquiry: ${product.name}*

📦 Product: ${product.name} (${product.category})

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

📊 Estimated Quantity:
${formData.quantity.trim() || "Standard Order"}

📝 Additional Notes:
${formData.notes.trim() || "N/A"}

Sent from the Radhe India Enterprises website.`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/919494321980?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden p-6 max-h-[90vh] overflow-y-auto text-slate-900"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 rounded-full bg-slate-100 border border-slate-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-5 pb-3 border-b border-slate-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Export Quotation Request
            </span>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>{product.name}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-normal">
                {product.category}
              </span>
            </h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                <input
                  type="text" required placeholder="Name"
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Company Name *</label>
                <input
                  type="text" required placeholder="Company"
                  value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Business Email *</label>
                <input
                  type="email" required placeholder="email@company.com"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Phone / WhatsApp</label>
                <input
                  type="tel" placeholder="e.g. +91 99999 99999"
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Country of Import *</label>
                <input
                  type="text" required placeholder="Destination Country"
                  value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Estimated Order Quantity</label>
                <input
                  type="text" placeholder="e.g. 25 Metric Tons / 500 Units"
                  value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Specific Requirements / Packaging</label>
              <textarea
                rows={2} placeholder="Port of delivery, packaging preference..."
                value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 resize-none"
              />
            </div>

            <button type="submit" className="btn-ocean w-full py-2.5 font-bold uppercase tracking-wider flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Send Product Inquiry via WhatsApp</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
