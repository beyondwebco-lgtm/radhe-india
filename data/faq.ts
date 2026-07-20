export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Products' | 'Export' | 'Services';
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What products do you export?',
    answer: 'Radhe India Enterprises exports a diverse portfolio including Agricultural Products (Basmati & Non-Basmati Rice, Spices like Turmeric and Chilli, Dehydrated Vegetables), Electrical Equipment (Switchgear, Transformers, Cables), Industrial Steel & Metals (Sheets, Pipes, Structural Steel), and customized B2B manufactured orders.',
    category: 'Products'
  },
  {
    id: 'faq-2',
    question: 'Do you supply internationally?',
    answer: 'Yes! We actively serve international buyers across North America, Europe, the Middle East, Southeast Asia, and Africa. We handle all international shipping logistics, customs documentation, and Incoterms (FOB, CIF, CFR, DDP).',
    category: 'Export'
  },
  {
    id: 'faq-3',
    question: 'Can I request bulk orders and custom product packaging?',
    answer: 'Absolutely. We cater to wholesale, industrial, and government buyers with scalable bulk quantities. We offer custom private-label packaging, customized bag sizing (5kg to 50kg PP/Jute), and OEM branding to match your market requirements.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'Do you manufacture products directly or trade?',
    answer: 'We operate both as direct manufacturers and specialized export traders. We own state-of-the-art dehydration and food processing units in India, and maintain exclusive manufacturing contracts with top ISO-certified steel and electrical mills across India.',
    category: 'Products'
  },
  {
    id: 'faq-5',
    question: 'Do you provide electrical manpower services?',
    answer: 'Yes, Radhe India Enterprises provides skilled and certified electrical engineers, switchgear specialists, and technical manpower for industrial projects, power plants, and substation commissioning across domestic and international sites.',
    category: 'Services'
  },
  {
    id: 'faq-6',
    question: 'How do you ensure quality control and certifications for exports?',
    answer: 'Quality assurance is central to our business. Every shipment undergoes rigorous multi-tier testing, batch inspections, and third-party verification (such as SGS, Intertek, or Geo-Chem) along with mandatory APEDA, FSSAI, ISO, and Phytosanitary certificates.',
    category: 'Export'
  },
  {
    id: 'faq-7',
    question: 'What payment terms do you accept for global trade?',
    answer: 'We support flexible trade finance options including Irrevocable Letter of Credit (L/C at sight), Telegraphic Transfer (T/T), Advance payment terms, and Bank Guarantees tailored to established B2B partnerships.',
    category: 'General'
  }
];
