"use client";

import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={COMPANY_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-[9999] bottom-5 right-5 sm:bottom-6 sm:right-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 transition-shadow duration-200"
      style={{ position: "fixed", bottom: "var(--floating-bottom, 20px)", right: "var(--floating-right, 20px)" }}
    >
      {/* CSS custom properties for responsive mobile/desktop spacing */}
      <style jsx global>{`
        :root {
          --floating-bottom: 20px;
          --floating-right: 20px;
        }
        @media (min-width: 640px) {
          :root {
            --floating-bottom: 24px;
            --floating-right: 24px;
          }
        }
      `}</style>
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.202 4.393-1.151z" />
      </svg>
    </motion.a>
  );
}
