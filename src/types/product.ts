export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  category: ProductCategory;
  usage?: string;
  ingredients?: string[];
  benefits?: string[];
  image?: string;
  inStock: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'cleansers',
    name: 'Cleansers',
    description: 'Gentle yet effective cleansing products for all skin types',
  },
  {
    id: 'recovery',
    name: 'Recovery & Treatment',
    description: 'Targeted treatments for specific skin concerns',
  },
  {
    id: 'kits',
    name: 'Specialized Kits',
    description: 'Complete treatment systems for comprehensive care',
  },
  {
    id: 'serums',
    name: 'Serums & Essentials',
    description: 'High-concentration actives for enhanced results',
  },
  {
    id: 'masks',
    name: 'Masks & Additional Products',
    description: 'Vitamin masks and specialty treatments',
  },
];

export const PRODUCTS: Product[] = [
  // Cleansers
  {
    id: 'uv-protect-spf30',
    name: 'U.V. Protect SPF 30',
    description: 'Broad-spectrum sun protection with antioxidants',
    category: PRODUCT_CATEGORIES[0],
    usage: 'Apply liberally 15 minutes before sun exposure. Reapply every 2 hours.',
    benefits: ['SPF 30 protection', 'Antioxidant defense', 'Non-greasy formula'],
    inStock: true,
  },
  {
    id: 'exfo-cleanse',
    name: 'EXFO Cleanse',
    description: 'Gentle exfoliating cleanser with AHA/BHA complex',
    category: PRODUCT_CATEGORIES[0],
    usage: 'Use morning and evening. Apply to damp skin, massage gently, rinse thoroughly.',
    benefits: ['Gentle exfoliation', 'Removes dead skin cells', 'Improves skin texture'],
    inStock: true,
  },
  {
    id: 'gel-cleanse',
    name: 'GEL Cleanse 100ml',
    description: 'Deep cleansing gel for oily and combination skin',
    category: PRODUCT_CATEGORIES[0],
    usage: 'Apply to wet skin, massage in circular motions, rinse with lukewarm water.',
    benefits: ['Deep cleansing', 'Controls oil production', 'Purifies pores'],
    inStock: true,
  },
  {
    id: 'foam-cleanse',
    name: 'FOAM Cleanse 150ml',
    description: 'Luxurious foaming cleanser for all skin types',
    category: PRODUCT_CATEGORIES[0],
    usage: 'Pump foam into hands, massage onto damp skin, rinse thoroughly.',
    benefits: ['Gentle cleansing', 'Maintains pH balance', 'Suitable for sensitive skin'],
    inStock: true,
  },
  {
    id: 'eye-balm-cleanse',
    name: 'EYE Balm Cleanse',
    description: 'Gentle eye makeup remover and cleanser',
    category: PRODUCT_CATEGORIES[0],
    usage: 'Apply to cotton pad, gently press over closed eyes, sweep away makeup.',
    benefits: ['Gentle on eyes', 'Removes waterproof makeup', 'Nourishes lashes'],
    inStock: true,
  },
  
  // Recovery & Treatment Lines
  {
    id: 'active-formula',
    name: 'Active Formula 30ml',
    description: 'High-concentration active treatment serum',
    category: PRODUCT_CATEGORIES[1],
    usage: 'Apply 2-3 drops to clean skin evening only. Always use SPF during the day.',
    benefits: ['High potency actives', 'Visible results', 'Professional grade'],
    inStock: true,
  },
  {
    id: 'age-recovery',
    name: 'AGE Recovery 30ml',
    description: 'Anti-aging treatment with peptides and vitamins',
    category: PRODUCT_CATEGORIES[1],
    usage: 'Apply morning and evening after cleansing. Follow with moisturizer.',
    benefits: ['Reduces fine lines', 'Improves elasticity', 'Brightens complexion'],
    inStock: true,
  },
  {
    id: 'mela-recovery',
    name: 'MELA Recovery 30ml',
    description: 'Pigmentation treatment for even skin tone',
    category: PRODUCT_CATEGORIES[1],
    usage: 'Apply to affected areas evening only. Use SPF during the day.',
    benefits: ['Reduces hyperpigmentation', 'Evens skin tone', 'Brightens dark spots'],
    inStock: true,
  },
  {
    id: 'ac-recovery',
    name: 'AC Recovery 30ml',
    description: 'Acne treatment with antibacterial properties',
    category: PRODUCT_CATEGORIES[1],
    usage: 'Apply to clean skin morning and evening. May cause initial dryness.',
    benefits: ['Clears breakouts', 'Prevents new acne', 'Reduces inflammation'],
    inStock: true,
  },
  {
    id: 'cr-recovery',
    name: 'CR Recovery 30ml',
    description: 'Redness reduction treatment for sensitive skin',
    category: PRODUCT_CATEGORIES[1],
    usage: 'Apply to affected areas twice daily. Gentle for sensitive skin.',
    benefits: ['Reduces redness', 'Soothes inflammation', 'Strengthens skin barrier'],
    inStock: true,
  },
  
  // Specialized Kits
  {
    id: 'age-resurfacing-kit',
    name: 'AGE Resurfacing Kit',
    description: 'Complete anti-aging treatment system',
    category: PRODUCT_CATEGORIES[2],
    usage: 'Follow included protocol. Professional guidance recommended.',
    benefits: ['Complete anti-aging system', 'Professional results', 'Comprehensive care'],
    inStock: true,
  },
  {
    id: 'mela-resurfacing-kit',
    name: 'MELA Resurfacing Kit',
    description: 'Comprehensive pigmentation treatment system',
    category: PRODUCT_CATEGORIES[2],
    usage: 'Follow included protocol. Always use SPF during treatment.',
    benefits: ['Targets pigmentation', 'Professional grade', 'Visible results'],
    inStock: true,
  },
  {
    id: 'ac-resurfacing-kit',
    name: 'AC Resurfacing Kit',
    description: 'Complete acne treatment system',
    category: PRODUCT_CATEGORIES[2],
    usage: 'Follow included protocol. Start slowly to build tolerance.',
    benefits: ['Complete acne solution', 'Professional strength', 'Clear skin results'],
    inStock: true,
  },
  {
    id: 'cr-resurfacing-kit',
    name: 'CR Resurfacing Kit',
    description: 'Redness and sensitivity treatment system',
    category: PRODUCT_CATEGORIES[2],
    usage: 'Follow included protocol. Gentle for sensitive skin.',
    benefits: ['Reduces chronic redness', 'Gentle treatment', 'Soothing formula'],
    inStock: true,
  },
  {
    id: 'spot-on-kit',
    name: 'Spot On Kit',
    description: 'Targeted spot treatment system',
    category: PRODUCT_CATEGORIES[2],
    usage: 'Apply to individual spots as needed. Fast-acting formula.',
    benefits: ['Targeted treatment', 'Fast results', 'Convenient application'],
    inStock: true,
  },
  
  // Serums & Essentials
  {
    id: 'hydra-serum',
    name: 'HYDRA Serum 30ml',
    description: 'Deep hydration serum with hyaluronic acid',
    category: PRODUCT_CATEGORIES[3],
    usage: 'Apply to clean skin morning and evening before moisturizer.',
    benefits: ['Deep hydration', 'Plumps skin', 'Long-lasting moisture'],
    inStock: true,
  },
  {
    id: 'vita-c-serum',
    name: 'VITA C Serum 30ml',
    description: 'Vitamin C antioxidant serum for brightening',
    category: PRODUCT_CATEGORIES[3],
    usage: 'Apply mornings after cleansing. Always follow with SPF.',
    benefits: ['Vitamin C antioxidant', 'Brightens skin', 'Environmental protection'],
    inStock: true,
  },
  {
    id: 'mela-serum',
    name: 'MELA Serum 30ml',
    description: 'Concentrated pigmentation treatment serum',
    category: PRODUCT_CATEGORIES[3],
    usage: 'Apply to pigmented areas evening only. Use SPF during the day.',
    benefits: ['Concentrated actives', 'Targets dark spots', 'Even complexion'],
    inStock: true,
  },
  {
    id: 'age-serum',
    name: 'Age Serum 36gr',
    description: 'Premium anti-aging serum with peptides',
    category: PRODUCT_CATEGORIES[3],
    usage: 'Apply morning and evening. Follow with appropriate moisturizer.',
    benefits: ['Premium anti-aging', 'Peptide complex', 'Luxury formulation'],
    inStock: true,
  },
  
  // Masks & Additional Products
  {
    id: 'vita-a-mask',
    name: 'VITA A Mask',
    description: 'Vitamin A renewal mask for skin regeneration',
    category: PRODUCT_CATEGORIES[4],
    usage: 'Apply twice weekly. Leave on for 15-20 minutes, rinse thoroughly.',
    benefits: ['Skin renewal', 'Cell regeneration', 'Improves texture'],
    inStock: true,
  },
  {
    id: 'vita-b3-mask',
    name: 'VITA B3 Mask',
    description: 'Niacinamide mask for pore refinement',
    category: PRODUCT_CATEGORIES[4],
    usage: 'Apply weekly. Leave on for 10-15 minutes, rinse with lukewarm water.',
    benefits: ['Minimizes pores', 'Controls oil', 'Improves skin tone'],
    inStock: true,
  },
  {
    id: 'vita-c-mask',
    name: 'VITA C Mask',
    description: 'Brightening vitamin C mask',
    category: PRODUCT_CATEGORIES[4],
    usage: 'Apply weekly. Leave on for 15 minutes, rinse thoroughly.',
    benefits: ['Brightens complexion', 'Antioxidant boost', 'Radiant skin'],
    inStock: true,
  },
  {
    id: 'sos-hydra-gel-mask',
    name: 'SOS Hydra Gel Mask',
    description: 'Emergency hydration gel mask',
    category: PRODUCT_CATEGORIES[4],
    usage: 'Apply as needed for extra hydration. Leave on for 20 minutes or overnight.',
    benefits: ['Instant hydration', 'Soothes irritation', 'Emergency treatment'],
    inStock: true,
  },
];