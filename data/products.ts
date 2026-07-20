export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryId: 'agriculture' | 'electrical' | 'industrial';
  description: string;
  specifications: string[];
  icon: string;
  image: string;
}

export const PRODUCT_CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'agriculture', name: 'Agricultural Products' },
  { id: 'electrical', name: 'Electrical Products' },
  { id: 'industrial', name: 'Industrial Products' },
] as const;

export const PRODUCTS: ProductItem[] = [
  // Agricultural Products
  {
    id: 'agri-rice',
    name: 'Rice',
    category: 'Agricultural Products',
    categoryId: 'agriculture',
    description: 'Premium Basmati & Non-Basmati rice for international export markets.',
    specifications: ['Export Quality Grade', 'Bulk Packaging (25kg/50kg)', 'Phytosanitary Certified'],
    icon: 'Wheat',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=85&w=800'
  },
  {
    id: 'agri-spices',
    name: 'Spices',
    category: 'Agricultural Products',
    categoryId: 'agriculture',
    description: 'Authentic Indian whole and ground spices including turmeric, chilli & cumin.',
    specifications: ['Pure & Aromatic', 'APEDA & FSSAI Certified', 'Custom Packing Available'],
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=85&w=800'
  },
  {
    id: 'agri-veg',
    name: 'Dehydrated Vegetables',
    category: 'Agricultural Products',
    categoryId: 'agriculture',
    description: 'Hygienically dehydrated onion, garlic & ginger flakes and powders.',
    specifications: ['Low Moisture (<6%)', 'Extended Shelf Life', 'Zero Preservatives'],
    icon: 'Leaf',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=85&w=800'
  },

  // Electrical Products
  {
    id: 'elec-products',
    name: 'Electrical Products',
    category: 'Electrical Products',
    categoryId: 'electrical',
    description: 'Industrial cables, transformers, and electrical distribution components.',
    specifications: ['IEC Certified', 'Heavy Duty Insulation', 'Industrial Standard'],
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=85&w=800'
  },
  {
    id: 'elec-switchgear',
    name: 'Switchgear',
    category: 'Electrical Products',
    categoryId: 'electrical',
    description: 'Modern electrical switchgear panels and power distribution equipment.',
    specifications: ['Up to 33kV Rating', 'IP55/IP65 Enclosures', 'Full Safety Tested'],
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=85&w=800'
  },

  // Industrial Products
  {
    id: 'ind-metal',
    name: 'Metal Sheets',
    category: 'Industrial Products',
    categoryId: 'industrial',
    description: 'Precision cold-rolled, hot-rolled, and stainless steel sheets & coils.',
    specifications: ['SS 304 / 316L / GI', 'Precision Thickness', 'Mill Test Certified'],
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=85&w=800'
  }
];
