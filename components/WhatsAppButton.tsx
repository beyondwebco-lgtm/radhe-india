"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-2xl transition-all duration-300 hover:scale-110 group border border-emerald-300/40"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
      </div>
      <span className="hidden sm:inline">WhatsApp Inquiry</span>
    </a>
  );
}
