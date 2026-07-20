export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    shortDesc: 'B2B e-commerce supply chain, private-label packaging, and digital fulfillment.',
    icon: 'ShoppingCart',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=85&w=800'
  },
  {
    id: 'import-export',
    title: 'Import & Export',
    shortDesc: 'End-to-end international trade, customs clearance, and global port solutions.',
    icon: 'Globe2',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=85&w=800'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    shortDesc: 'Custom food product manufacturing and dehydrated vegetable processing.',
    icon: 'Factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=85&w=800'
  },
  {
    id: 'manpower',
    title: 'Electrical Manpower Supply',
    shortDesc: 'Certified electrical engineers and technical industrial manpower deployment.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=85&w=800'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Management',
    shortDesc: 'Global freight forwarding, strategic warehousing, and port logistics assistance.',
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=85&w=800'
  }
];
