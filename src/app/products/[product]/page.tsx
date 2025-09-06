import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ProductPageClient } from "./client";
import { getProductById, getAllProducts } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ product: string }>;
}

// Generate SEO metadata
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { product: productId } = await params;
  const product = getProductById(productId);
  
  if (!product) {
    return {
      title: 'Ürün Bulunamadı | phFormula',
      description: 'Aradığınız ürün bulunamadı.',
      robots: 'noindex, nofollow'
    };
  }

  return {
    title: `${product.name} | phFormula`,
    description: product.meta_description || product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { product: productId } = await params;
  const product = getProductById(productId);
  
  if (!product) {
    notFound();
  }

  // Related products
  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter(p => p.product_id !== product.product_id)
    .slice(0, 4);

  return (
    <ProductPageClient 
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}