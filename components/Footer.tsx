import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 py-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-800">
          
          {/* Zoomed Circular Logo + Brand Typography */}
          <Link href="/#hero" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-ocean-500/50 shadow-lg ring-2 ring-ocean-400/20 group-hover:scale-105 transition-transform overflow-hidden">
              <Image
                src="/logo.png"
                alt="Radhe India Enterprises Logo"
                fill
                className="object-contain scale-[1.75]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-white tracking-tight">
                RADHE INDIA <span className="text-ocean-400">ENTERPRISES</span>
              </span>
              <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Direct Email & Phone Details (WhatsApp button removed from footer) */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-ocean-400 transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-ocean-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-ocean-400 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-ocean-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-5 font-semibold text-slate-300">
            <a href="/#hero" className="hover:text-ocean-400 transition-colors">Home</a>
            <a href="/#about" className="hover:text-ocean-400 transition-colors">About</a>
            <a href="/#services" className="hover:text-ocean-400 transition-colors">Services</a>
            <a href="/#products" className="hover:text-ocean-400 transition-colors">Products</a>
            <a href="/#contact" className="hover:text-ocean-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400">
          <p>© 2026 Radhe India Enterprises. All Rights Reserved.</p>
          
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-ocean-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-ocean-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
