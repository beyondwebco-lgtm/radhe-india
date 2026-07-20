"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";
import EnquiryModal from "@/components/EnquiryModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        {/* Top Quick Info Bar */}
        <div className="bg-navy-950/95 border-b border-ocean-500/10 text-xs py-1.5 hidden md:block text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-ocean-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-ocean-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-ocean-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-ocean-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 9494321980</span>
              </a>
            </div>

            <div className="text-ocean-400 font-medium text-[11px]">
              Visakhapatnam, India • {COMPANY_INFO.tagline}
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className={`transition-all duration-300 ${
          isScrolled 
            ? "bg-navy-950/95 border-b border-ocean-500/20 shadow-lg py-2" 
            : "bg-navy-950/85 border-b border-white/5 py-2.5"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Zoomed Circular Logo + Typography */}
            <Link href="#hero" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white flex items-center justify-center border-2 border-ocean-500/50 shadow-lg ring-2 ring-ocean-400/20 group-hover:scale-105 transition-transform overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Radhe India Enterprises Official Logo"
                  fill
                  priority
                  className="object-contain scale-[1.75]"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-ocean-300 transition-colors tracking-tight leading-tight">
                  RADHE INDIA <span className="text-ocean-400">ENTERPRISES</span>
                </span>
                <span className="text-[10px] text-slate-300 tracking-wider font-medium uppercase">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </Link>

            {/* Clean Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-200 hover:text-ocean-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="btn-ocean px-5 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-ocean-400 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-navy-950 border-b border-ocean-500/20 shadow-xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3 max-w-md mx-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-base font-semibold text-slate-200 hover:text-ocean-400 hover:bg-slate-900 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 text-center text-xs font-bold rounded-full bg-emerald-600 text-white flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us (+91 9494321980)</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsEnquiryOpen(true);
                    }}
                    className="btn-ocean w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* GoDaddy-style Popup Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
