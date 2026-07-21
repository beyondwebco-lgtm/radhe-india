"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

function RequestQuoteFormContent() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: initialProduct,
    message: "",
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

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

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      
      {/* Navigation Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Main Website</span>
      </Link>

      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>Official Export Request</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Request <span className="text-ocean-gradient">Export Quotation</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Complete your trade requirements below to connect directly with our international trade desk on WhatsApp.
        </p>
      </div>

      {/* Corporate Form */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
        
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {/* Product Auto-Filled Field */}
          <div>
            <label className="block text-slate-700 font-semibold mb-1 text-xs">
              Product Interested In
            </label>
            <input
              type="text"
              readOnly={!!initialProduct}
              placeholder="e.g. Rice, Spices, Switchgear, Metal Sheets"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-blue-700 font-semibold focus:outline-none ${
                initialProduct
                  ? "border-blue-200 cursor-not-allowed bg-slate-100"
                  : "border-slate-300 focus:border-blue-600"
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1 text-xs">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1 text-xs">
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 font-semibold mb-1 text-xs">
                Business Email *
              </label>
              <input
                type="email"
                required
                placeholder="email@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-semibold mb-1 text-xs">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="+91 9494321980"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1 text-xs">
              Country of Import *
            </label>
            <input
              type="text"
              required
              placeholder="Destination Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1 text-xs">
              Inquiry Message *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Describe product details, estimated order quantity, or port delivery specs..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-ocean w-full py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Submit Inquiry via WhatsApp</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen text-slate-900">
      <Suspense fallback={
        <div className="text-center py-20 text-slate-500">Loading Request Form...</div>
      }>
        <RequestQuoteFormContent />
      </Suspense>
    </main>
  );
}
