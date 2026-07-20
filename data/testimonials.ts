export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  countryCode: string;
  content: string;
  rating: number;
  productLine: string;
  avatar: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Marcus Vance',
    role: 'Procurement Director',
    company: 'Vance Agri-Imports LLC',
    country: 'United States',
    countryCode: 'US',
    content: 'Radhe India Enterprises has been our most reliable Indian agricultural supplier since 2023. Their Basmati rice and dehydrated garlic flakes exceed purity standards every single shipment.',
    rating: 5,
    productLine: 'Agricultural Exports',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't-2',
    name: 'Tariq Al-Maktoum',
    role: 'Senior Project Manager',
    company: 'Gulf Horizon Infrastructure',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    content: 'We sourced heavy electrical switchgears and specialized cable trays for our commercial grid project in Dubai. Radhe India delivered flawless equipment ahead of deadline with zero customs delays.',
    rating: 5,
    productLine: 'Electrical Equipment',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Supply Chain Executive',
    company: 'EuroSteel Dynamics',
    country: 'Germany',
    countryCode: 'DE',
    content: 'Impressive professionalism and transparent business practices. As a women-led enterprise, Radhe India brings unmatched attention to quality control and technical steel specifications.',
    rating: 5,
    productLine: 'Industrial Metal Sheets',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't-4',
    name: 'Ketan Patel',
    role: 'Founder & CEO',
    company: 'GlobalSpice E-Commerce',
    country: 'United Kingdom',
    countryCode: 'GB',
    content: 'Their private label packaging service for organic turmeric and cumin enabled us to launch our UK online store effortlessly. Exceptional support and fast air freight handling!',
    rating: 5,
    productLine: 'E-Commerce Supply',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];
