"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Header Container */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 border-b border-slate-200/80 shadow-md py-2 sm:py-2.5 backdrop-blur-md" 
          : "bg-white/90 border-b border-slate-200/50 py-3 sm:py-4 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Header Branding */}
          <Link href="/#hero" className="flex items-center gap-2 sm:gap-4 group shrink-0">
            
            {/* Logo Badge */}
            <div className="relative w-11 h-11 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center border-2 border-blue-600/60 shadow-lg ring-4 ring-blue-500/20 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <Image
                src="/logo.png"
                alt="Radhe India Enterprises Official Logo"
                fill
                priority
                className="object-contain scale-[1.75]"
              />
            </div>

            {/* Company Name & Tagline */}
            <div className="flex flex-col justify-center">
              <span className="font-display font-extrabold text-base min-[360px]:text-lg sm:text-3xl md:text-4xl lg:text-[42px] text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-none">
                RADHE INDIA <span className="text-blue-600">ENTERPRISES</span>
              </span>
              <span className="text-[8px] min-[360px]:text-[10px] sm:text-sm md:text-base lg:text-[18px] text-sky-600 tracking-wider sm:tracking-widest font-bold uppercase mt-1 sm:mt-1.5 leading-none">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-bold text-slate-700 hover:text-blue-600 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-blue-600 border border-slate-200 bg-slate-50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl">
          <div className="px-4 py-4 space-y-3 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
