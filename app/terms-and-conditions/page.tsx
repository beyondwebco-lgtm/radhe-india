import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

export const metadata = {
  title: "Terms & Conditions | Radhe India Enterprises",
  description: "Terms and conditions governing international trade transactions with Radhe India Enterprises.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen text-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Website</span>
        </Link>

        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500">
            Effective Date: January 2026 • Radhe India Enterprises
          </p>
        </div>

        <div className="prose max-w-none space-y-6 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Trade Agreement & Incoterms</h2>
            <p>
              All international commercial transactions, sales quotes, and shipment orders executed by <strong>{COMPANY_INFO.name}</strong> are governed by international Incoterms 2020 (FOB, CIF, CFR, DDP) as explicitly stated in the binding Sales Contract or Proforma Invoice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Quality Assurance & Inspection</h2>
            <p>
              Product quality, grade, and specifications (moisture content, purity, dimensions, voltage ratings) conform to agreed technical datasheets. Buyers retain the right to request pre-shipment inspections via SGS, Intertek, or Geo-Chem prior to container loading at Indian ports.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Payment Terms & Letter of Credit</h2>
            <p>
              Payment terms must be finalized in writing before order execution. Standard accepted modalities include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Irrevocable Letter of Credit (L/C) at sight issued by prime international banks</li>
              <li>Telegraphic Transfer (T/T) wire with advance deposit & balance against Bill of Lading scan</li>
              <li>Customized trade financing as mutually agreed in formal contracts</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Jurisdiction & Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of India. Any legal dispute or arbitration arising hereunder shall be subject to the exclusive jurisdiction of the courts in Visakhapatnam, Andhra Pradesh, India.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
