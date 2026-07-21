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
      {/* Main Header Starts Directly (Top Info Bar Removed) */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? "bg-navy-950/95 border-b border-ocean-500/20 shadow-lg py-2" 
          : "bg-navy-950/90 border-b border-white/5 py-3"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Enlarged Logo & Branding (+35% size) */}
          <Link href="/#hero" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white flex items-center justify-center border-2 border-ocean-500/60 shadow-xl ring-4 ring-ocean-400/20 group-hover:scale-105 transition-transform overflow-hidden">
              <Image
                src="/logo.png"
                alt="Radhe India Enterprises Official Logo"
                fill
                priority
                className="object-contain scale-[1.75]"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-display font-extrabold text-lg sm:text-xl md:text-2xl text-white group-hover:text-ocean-300 transition-colors tracking-tight leading-tight">
                RADHE INDIA <span className="text-ocean-400">ENTERPRISES</span>
              </span>
              <span className="text-xs sm:text-xs text-ocean-300 tracking-wider font-bold uppercase mt-0.5">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-slate-200 hover:text-ocean-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-ocean-400 border border-slate-800 bg-navy-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-ocean-500/20 shadow-xl">
          <div className="px-4 py-4 space-y-3 max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-semibold text-slate-200 hover:text-ocean-400 hover:bg-slate-900 rounded-xl transition-colors"
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
