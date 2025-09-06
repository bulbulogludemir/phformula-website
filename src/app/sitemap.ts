import { MetadataRoute } from 'next';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/types/product';

// Ultra-optimized sitemap generation for Turkish market SEO
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://phformula.com.tr';
  const currentDate = new Date().toISOString();
  
  // Static pages with priority and change frequency optimization
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0, // Homepage - highest priority
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9, // Products page - very high priority
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7, // Contact higher priority for local SEO
    },
    {
      url: `${baseUrl}/shipping`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/returns`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  // Category pages - high priority for SEO
  const categoryPages = PRODUCT_CATEGORIES.map((category) => ({
    url: `${baseUrl}/products/${category.id}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8, // Categories are important for navigation
  }));

  // Individual product pages - optimized for e-commerce SEO
  const productPages = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.category.id}/${product.id}`,
    lastModified: currentDate,
    changeFrequency: product.inStock ? 'daily' as const : 'weekly' as const,
    priority: product.inStock ? 0.7 : 0.5, // In-stock products higher priority
  }));

  // Turkish market specific pages (future expansion)
  const localPages = [
    {
      url: `${baseUrl}/istanbul`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ankara`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/izmir`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // SEO-optimized landing pages for Turkish keywords
  const seoLandingPages = [
    {
      url: `${baseUrl}/cilt-bakimi`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/anti-aging`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/serum`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/temizleyici`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  // Combine all pages and sort by priority for optimal crawling
  const allPages = [
    ...staticPages,
    ...categoryPages,
    ...productPages,
    ...localPages,
    ...seoLandingPages,
  ].sort((a, b) => b.priority - a.priority);

  return allPages;
}

// Generate robots.txt dynamically
export async function GET() {
  const sitemap = await sitemap();
  
  // Generate XML sitemap
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${sitemap.map((item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
    <xhtml:link 
      rel="alternate" 
      hreflang="tr-TR" 
      href="${item.url}" />
    <xhtml:link 
      rel="alternate" 
      hreflang="tr" 
      href="${item.url}" />
    <mobile:mobile/>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXML, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}