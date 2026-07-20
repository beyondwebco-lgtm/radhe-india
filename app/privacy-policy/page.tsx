import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export const metadata = {
  title: "Privacy Policy | Radhe India Enterprises",
  description: "Privacy Policy and data handling procedures for Radhe India Enterprises.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-navy-950 min-h-screen text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Website</span>
        </Link>

        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Corporate Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: January 2026 • Radhe India Enterprises
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              At <strong>{COMPANY_INFO.name}</strong>, accessible from {COMPANY_INFO.website}, one of our main priorities is the privacy of our visitors and international trade partners. We collect personal and corporate details provided directly by you when submitting export RFQs, requesting product quotes, or contacting our trade desk.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Full Name and Job Title</li>
              <li>Company Name and Business Registration Details</li>
              <li>Business Email Address & Telephone/WhatsApp numbers</li>
              <li>Destination Country, Delivery Port & Order Specifications</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
            <p>
              The information we collect is strictly used to execute B2B export contracts, process product quotes, arrange customs clearance, and communicate logistics updates.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Providing customized Proforma Invoices (PI) and trade quotations</li>
              <li>Processing export documentation (APEDA, FSSAI, Phytosanitary, B/L)</li>
              <li>Communicating order status, ocean freight schedules, and tracking</li>
              <li>Complying with international trade laws and statutory anti-fraud mandates</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Data Protection & Confidentiality</h2>
            <p>
              We do not sell, rent, or lease your corporate or personal information to third-party marketing brokers. Information is shared solely with essential logistics partners (shipping lines, customs brokers, banks) required to execute your trade orders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Contacting Our Data Officer</h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at:
            </p>
            <div className="p-4 rounded-xl bg-navy-900 border border-slate-800 text-xs space-y-1">
              <p className="text-white font-semibold">{COMPANY_INFO.name}</p>
              <p>{COMPANY_INFO.address.fullAddress}</p>
              <p>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-gold-400">{COMPANY_INFO.email}</a></p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
