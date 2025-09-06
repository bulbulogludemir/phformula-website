import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllProducts, getCategories, getProductsByCategory } from "@/lib/products";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { generateTurkishSEOTitle, generateTurkishSEODescription, generateTurkishKeywords, generateCanonicalUrl, generateHreflangAlternates } from "@/lib/seo";
import { CategoryPageClient } from "./client";

interface ProductPageProps {
  params: {
    category: string;
  };
}

// Generate SEO metadata for product pages
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const category = getCategories().find(cat => cat.id === params.category);
  
  if (!category) {
    return {
      title: 'Kategori Bulunamadı | phFormula Türkiye',
      description: 'Aradığınız kategori bulunamadı. Diğer premium cilt bakım ürün kategorilerimizi keşfetmek için ürünler sayfasını ziyaret edin.',
      robots: 'noindex, nofollow'
    };
  }

  return {
    title: generateTurkishSEOTitle(category.name, `phFormula ${category.name} - Premium Cilt Bakım Ürünleri`),
    description: `${category.description} phFormula ${category.name} ürünlerini keşfedin. İspanya kalitesi, orijinal ürünler, hızlı kargo. WhatsApp'tan hemen sipariş verin.`,
  };
}

export default function CategoryPage({ params }: ProductPageProps) {
  const category = getCategories().find(cat => cat.id === params.category);
  
  if (!category) {
    notFound();
  }

  // Get products for this category
  const categoryProducts = getProductsByCategory(params.category);
    
  // Breadcrumb data for structured data
  const breadcrumbs = [
    { name: 'Ana Sayfa', url: 'https://phformula.com.tr' },
    { name: 'Ürünler', url: 'https://phformula.com.tr/products' },
    { name: category.name, url: `https://phformula.com.tr/products/${category.id}` }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      <CategoryPageClient 
        category={category}
        categoryProducts={categoryProducts}
      />
    </>
  );
}