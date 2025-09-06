// Ultra-optimized SEO utilities for Turkish market
// Based on 2024-2025 Google algorithm updates and Turkish market research

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  locale?: string;
  alternateLocales?: { hrefLang: string; href: string }[];
  jsonLd?: Record<string, any>;
  robots?: string;
  author?: string;
  publisher?: string;
  datePublished?: string;
  dateModified?: string;
  category?: string;
  tags?: string[];
}

export interface ProductSEO extends SEOMetadata {
  productName: string;
  productDescription: string;
  brand: string;
  category: string;
  price?: number;
  currency?: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  condition: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition';
  sku?: string;
  gtin?: string;
  mpn?: string;
  images: string[];
  reviews?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

export interface LocalBusinessSEO extends SEOMetadata {
  businessName: string;
  businessType: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  email?: string;
  website: string;
  openingHours: string[];
  priceRange?: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  sameAs?: string[];
}

// Turkish market-specific SEO keywords and terms
export const TURKISH_SEO_KEYWORDS = {
  skincare: [
    'cilt bakım ürünleri',
    'cilt bakım kremi',
    'anti aging serum',
    'nemlendiridici',
    'güzellik ürünleri',
    'kozmetik',
    'dermokozmetik',
    'organik cilt bakımı',
    'premium cilt bakım',
    'profesyonel cilt bakımı'
  ],
  phformula: [
    'phformula türkiye',
    'phformula ürünleri',
    'phformula serum',
    'phformula tedavi',
    'phformula mağaza',
    'phformula online',
    'phformula satış',
    'phformula orijinal',
    'phformula İstanbul',
    'phformula ankara'
  ],
  ecommerce: [
    'online alışveriş',
    'güvenli alışveriş',
    'hızlı teslimat',
    'ücretsiz kargo',
    'whatsapp sipariş',
    'taksit imkanı',
    'kapıda ödeme',
    'online mağaza'
  ],
  cities: [
    'istanbul', 'ankara', 'izmir', 'bursa', 'adana', 'gaziantep',
    'konya', 'antalya', 'kayseri', 'mersin', 'eskişehir', 'diyarbakır',
    'samsun', 'denizli', 'şanlıurfa', 'adapazarı', 'malatya', 'erzurum'
  ]
};

// Generate SEO-optimized title for Turkish market
export function generateTurkishSEOTitle(
  baseTitle: string,
  category?: string,
  isHomePage = false
): string {
  if (isHomePage) {
    return `${baseTitle} - Premium Cilt Bakım Ürünleri | Türkiye'nin #1 phFormula Mağazası`;
  }

  const suffix = category 
    ? `${category} | phFormula Türkiye - Orijinal Ürünler, Hızlı Teslimat`
    : `phFormula Türkiye - Orijinal Cilt Bakım Ürünleri`;

  // Keep title under 60 characters for optimal SERP display
  const fullTitle = `${baseTitle} - ${suffix}`;
  return fullTitle.length > 60 ? `${baseTitle} | ${suffix.split(' - ')[0]}` : fullTitle;
}

// Generate SEO-optimized description for Turkish market
export function generateTurkishSEODescription(
  baseDescription: string,
  productType?: string,
  includeOffers = true
): string {
  let description = baseDescription;
  
  // Add Turkish market-specific value propositions
  const turkishElements = [
    '✓ %100 Orijinal',
    '✓ Hızlı Teslimat',
    '✓ WhatsApp Sipariş'
  ];
  
  if (includeOffers) {
    turkishElements.unshift('✓ Özel Fiyat');
  }
  
  if (productType) {
    description += ` ${productType} kategorisinde Türkiye'nin en güvenilir adresi.`;
  }
  
  description += ` ${turkishElements.join(' ')} ⚡ Şimdi sipariş ver!`;
  
  // Keep description under 160 characters for optimal SERP display
  return description.length > 160 
    ? description.substring(0, 157) + '...'
    : description;
}

// Generate comprehensive keywords for Turkish market
export function generateTurkishKeywords(
  primaryKeyword: string,
  category: string,
  includeLocalTerms = true
): string[] {
  const keywords = [primaryKeyword];
  
  // Add category-specific keywords
  const categoryKeywords = TURKISH_SEO_KEYWORDS.skincare.filter(k => 
    k.includes(category.toLowerCase()) || category.toLowerCase().includes(k.split(' ')[0])
  );
  keywords.push(...categoryKeywords);
  
  // Add phFormula-specific keywords
  keywords.push(...TURKISH_SEO_KEYWORDS.phformula);
  
  // Add e-commerce related keywords
  keywords.push(...TURKISH_SEO_KEYWORDS.ecommerce.slice(0, 5));
  
  // Add local Turkish terms if requested
  if (includeLocalTerms) {
    keywords.push(
      `${primaryKeyword} türkiye`,
      `${primaryKeyword} online`,
      `${primaryKeyword} satış`,
      `${primaryKeyword} mağaza`
    );
  }
  
  // Remove duplicates and return
  return [...new Set(keywords)];
}

// Generate canonical URL with proper Turkish URL structure
export function generateCanonicalUrl(path: string, baseUrl = 'https://phformula.com.tr'): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove query parameters and fragments for canonical URL
  const cleanPath = normalizedPath.split('?')[0].split('#')[0];
  
  return `${baseUrl}${cleanPath}`;
}

// Turkish hreflang alternates (for future international expansion)
export function generateHreflangAlternates(path: string, baseUrl = 'https://phformula.com.tr') {
  return [
    {
      hrefLang: 'tr-TR',
      href: generateCanonicalUrl(path, baseUrl)
    },
    {
      hrefLang: 'tr',
      href: generateCanonicalUrl(path, baseUrl)
    },
    {
      hrefLang: 'x-default',
      href: generateCanonicalUrl(path, baseUrl)
    }
  ];
}

// Generate robots meta based on page type
export function generateRobotsDirective(
  pageType: 'public' | 'private' | 'noindex' | 'staging' = 'public',
  allowFollowLinks = true
): string {
  switch (pageType) {
    case 'private':
      return 'noindex, nofollow';
    case 'noindex':
      return allowFollowLinks ? 'noindex, follow' : 'noindex, nofollow';
    case 'staging':
      return 'noindex, nofollow, noarchive, nosnippet';
    case 'public':
    default:
      return 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  }
}

// Generate Open Graph locale for Turkish market
export function generateOGLocale(region?: string): string {
  return region ? `tr_${region.toUpperCase()}` : 'tr_TR';
}

// SEO-optimized URL slug generation for Turkish
export function generateSEOSlug(text: string): string {
  // Turkish character mapping for SEO-friendly URLs
  const turkishCharMap: { [key: string]: string } = {
    'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c',
    'İ': 'i', 'Ğ': 'g', 'Ü': 'u', 'Ş': 's', 'Ö': 'o', 'Ç': 'c'
  };
  
  return text
    .toLowerCase()
    .replace(/[ığüşöçİĞÜŞÖÇ]/g, (char) => turkishCharMap[char] || char)
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Generate breadcrumb schema for better navigation understanding
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.url
    }))
  };
}

// Performance hints for Core Web Vitals optimization
export const CORE_WEB_VITALS_HINTS = {
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com'
  ],
  dnsPrefetch: [
    'https://wa.me',
    'https://api.whatsapp.com'
  ],
  preload: [
    {
      href: '/logo.webp',
      as: 'image',
      type: 'image/webp'
    }
  ]
};