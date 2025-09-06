"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Share2, Star, Package, Sparkles, Info, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, getProductImageUrl } from '@/lib/products';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductPageClient({ product, relatedProducts }: ProductDetailProps) {
  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Merhaba phFormula! "${product.name}" ürünü hakkında detaylı bilgi almak istiyorum.`
    );
  };

  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/905358726752?text=${getWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Ultra Thin Header */}
      <section className="py-4 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/products" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Geri</span>
          </Link>
        </div>
      </section>

      {/* Product Details - Ultra Clean */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={getProductImageUrl(product.product_id, 0)}
                alt={product.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/placeholder.svg';
                }}
              />
              
              {/* Ultra Minimal Actions */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-white/80 text-gray-600 hover:text-gray-900 backdrop-blur transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {product.size && (
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-black/70 text-white text-xs">
                    {product.size}
                  </Badge>
                </div>
              )}
            </div>

            {/* Product Info - Ultra Clean */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">phFormula</span>
                </div>
              </div>

              {/* Single Action Button - Ultra Focus */}
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp ile Bilgi Al
              </Button>

              {/* Clean Description */}
              {product.description && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Açıklama</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Clean Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Özellikler</h3>
                  <ul className="space-y-1">
                    {product.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Clean Usage */}
              {product.usage_instructions && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Kullanım</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.usage_instructions}
                  </p>
                </div>
              )}

              {/* Clean Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">İçerik</h3>
                  <div className="flex flex-wrap gap-1">
                    {product.ingredients.slice(0, 8).map((ingredient, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Clean Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-6 text-center">Diğer Ürünler</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.product_id}
                  href={`/products/${relatedProduct.product_id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-square">
                      <Image
                        src={getProductImageUrl(relatedProduct.product_id, 0)}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder.svg';
                        }}
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                        {relatedProduct.name}
                      </h3>
                      {relatedProduct.size && (
                        <p className="text-xs text-gray-500">
                          {relatedProduct.size}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ultra Clean CTA */}
      <section className="py-8 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            {product.name} hakkında bilgi alın
          </h2>
          <Button 
            size="lg" 
            onClick={handleWhatsAppContact}
            className="bg-white text-green-600 hover:bg-gray-100"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp ile İletişim
          </Button>
        </div>
      </section>
    </div>
  );
}