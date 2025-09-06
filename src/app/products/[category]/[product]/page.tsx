import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllProducts, getCategories, getProductById } from "@/lib/products";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { generateTurkishSEOTitle, generateTurkishSEODescription, generateTurkishKeywords, generateCanonicalUrl, generateHreflangAlternates } from "@/lib/seo";
import { ProductPageClient } from "./client";

interface ProductPageProps {
  params: {
    category: string;
    product: string;
  };
}

// Generate SEO metadata for product pages
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getAllProducts().find(p => p.id === params.product);
  const category = getCategories().find(cat => cat.id === params.category);
  
  if (!product || !category) {
    return {
      title: 'Ürün Bulunamadı | phFormula Türkiye',
      description: 'Aradığınız ürün bulunamadı. Diğer premium cilt bakım ürünlerimizi keşfetmek için ürünler sayfasını ziyaret edin.',
      robots: 'noindex, nofollow'
    };
  }

  const canonicalUrl = generateCanonicalUrl(`/products/${category.id}/${product.id}`);
  const title = generateTurkishSEOTitle(`${product.name} - ${category.name}`, category.name);
  const description = generateTurkishSEODescription(
    `${product.description} Premium ${category.name.toLowerCase()} kategorisinde özel fiyatlarla.`,
    category.name,
    true
  );
  const keywords = generateTurkishKeywords(product.name.toLowerCase(), category.name, true);
  
  const ogImage = `https://phformula.com.tr/products/${product.id}/og-image.webp`;
  
  return {
    title,
    description,
    keywords: keywords.join(', '),
    canonical: canonicalUrl,
    
    openGraph: {
      title: `${product.name} | phFormula Türkiye - ${category.name}`,
      description,
      url: canonicalUrl,
      siteName: 'phFormula Türkiye',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${product.name} - phFormula Türkiye`,
          type: 'image/webp'
        }
      ],
      type: 'website',
      locale: 'tr_TR',
    },
    
    twitter: {
      card: 'summary_large_image',
      site: '@phformula_tr',
      creator: '@phformula_tr',
      title: `${product.name} - Özel Fiyat | phFormula Türkiye`,
      description: `${product.description} ✓ %100 Orijinal ✓ Hızlı Teslimat ✓ WhatsApp Sipariş`,
      images: [ogImage]
    },
    
    alternates: {
      canonical: canonicalUrl,
      languages: generateHreflangAlternates(`/products/${category.id}/${product.id}`).reduce((acc, alt) => {
        acc[alt.hrefLang] = alt.href;
        return acc;
      }, {} as Record<string, string>)
    },
    
    other: {
      'product:price:amount': 'Özel Fiyat',
      'product:price:currency': 'TRY',
      'product:availability': product.inStock ? 'instock' : 'oos',
      'product:condition': 'new',
      'product:retailer_item_id': product.id,
      'product:brand': 'phFormula',
      'product:category': category.name,
      'og:image:width': '1200',
      'og:image:height': '630'
    }
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getAllProducts().find(p => p.id === params.product);
  const category = getCategories().find(cat => cat.id === params.category);
  
  if (!product || !category || product.category.id !== category.id) {
    notFound();
  }

  // Related products from the same category
  const relatedProducts = getAllProducts()
    .filter(p => p.category.id === category.id && p.id !== product.id)
    .slice(0, 3);
    
  // Breadcrumb data for structured data
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: 'https://phformula.com.tr' },
    { name: 'Ürünler', url: 'https://phformula.com.tr/products' },
    { name: category.name, url: `https://phformula.com.tr/products/${category.id}` },
    { name: product.name, url: `https://phformula.com.tr/products/${category.id}/${product.id}` }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <ProductSchema product={product} category={category} />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      <ProductPageClient 
        product={product}
        category={category}
        relatedProducts={relatedProducts}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
}