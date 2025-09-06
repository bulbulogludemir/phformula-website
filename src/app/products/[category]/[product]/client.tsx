"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Shield, Sparkles, Heart, Share2, Crown, Zap } from "lucide-react";
import { ScarcityIndicator, LiveActivity } from "@/components/psychology/ScarcityIndicator";
import { WhatsAppOrder, QuickWhatsApp } from "@/components/psychology/WhatsAppOrder";
import { MobileWhatsAppOrder, MobileStickyWhatsApp } from "@/components/mobile/MobileWhatsAppOrder";

interface Product {
  id: string;
  name: string;
  description: string;
  inStock: boolean;
  benefits?: string[];
  usage?: string;
  ingredients?: string[];
  category: {
    id: string;
    name: string;
  };
}

interface Category {
  id: string;
  name: string;
}

interface Breadcrumb {
  name: string;
  url: string;
}

interface ProductPageClientProps {
  product: Product;
  category: Category;
  relatedProducts: Product[];
  breadcrumbs: Breadcrumb[];
}

export function ProductPageClient({ product, category, relatedProducts }: ProductPageClientProps) {
  const [isExclusive] = useState(Math.random() > 0.5);
  const [isUrgent] = useState(Math.random() > 0.7);

  return (
    <>
      <LiveActivity />
      {/* Responsive WhatsApp Buttons */}
      <div className="block md:hidden">
        <MobileStickyWhatsApp />
      </div>
      <div className="hidden md:block">
        <QuickWhatsApp />
      </div>
      <div className="min-h-screen" itemScope itemType="https://schema.org/Product">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#0170B9]">Ana Sayfa</Link>
              <span className="text-gray-400">/</span>
              <Link href="/products" className="text-gray-500 hover:text-[#0170B9]">Ürünler</Link>
              <span className="text-gray-400">/</span>
              <Link href={`/products/${category.id}`} className="text-gray-500 hover:text-[#0170B9]">{category.name}</Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#0170B9] font-medium line-clamp-1">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Button variant="outline" size="sm" className="mb-8" asChild>
                <Link href={`/products/${category.id}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {category.name} Kategorisine Dön
                </Link>
              </Button>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Product Image Placeholder */}
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group hover:from-blue-50 hover:to-blue-100 transition-all duration-300">
                    <div className="text-center space-y-4">
                      <Sparkles className="h-16 w-16 text-gray-400 group-hover:text-[#0170B9] transition-colors mx-auto" />
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-600 group-hover:text-[#0170B9] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-500">Ürün Görseli</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Information */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-[#0170B9] bg-blue-50">
                        {category.name}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      {product.name}
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        {product.inStock ? (
                          <Badge variant="default" className="bg-green-100 text-green-800 px-3 py-1 font-semibold">
                            ✓ Stokta Var
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="px-3 py-1">
                            ✗ Stokta Yok
                          </Badge>
                        )}
                        {isExclusive && (
                          <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 font-semibold">
                            <Crown className="h-3 w-3 mr-1" />
                            Premium Ürün
                          </Badge>
                        )}
                        <div className="flex items-center space-x-1">
                          {[1,2,3,4,5].map(i => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">(4.8/5 - 124 değerlendirme)</span>
                        </div>
                      </div>
                      
                      {/* Scarcity Indicators */}
                      <ScarcityIndicator 
                        productId={product.id} 
                        showViewers={true}
                        showStock={product.inStock}
                        showRecentSales={true}
                        showTrending={true}
                      />
                    </div>
                  </div>

                  {/* Mobile-First WhatsApp Order System */}
                  <div className="space-y-6">
                    {/* Mobile-optimized component for small screens */}
                    <div className="block md:hidden">
                      <MobileWhatsAppOrder 
                        productName={product.name}
                        productCategory={category.name}
                        urgent={isUrgent}
                        premium={isExclusive}
                        inStock={product.inStock}
                      />
                    </div>
                    
                    {/* Desktop component for larger screens */}
                    <div className="hidden md:block">
                      <WhatsAppOrder 
                        productName={product.name}
                        productCategory={category.name}
                        urgent={isUrgent}
                        premium={isExclusive}
                      />
                    </div>
                  </div>

                  {/* Enhanced Trust Indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-green-800">%100 Güvenli</p>
                      <p className="text-xs text-green-600">SSL Korumalı</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-blue-800">Orijinal Ürün</p>
                      <p className="text-xs text-blue-600">İsviçre Kalitesi</p>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-yellow-800">Uzman Desteği</p>
                      <p className="text-xs text-yellow-600">7/24 Hizmet</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-purple-800">Hızlı Teslimat</p>
                      <p className="text-xs text-purple-600">1-3 İş Günü</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefits */}
                {product.benefits && product.benefits.length > 0 && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Sparkles className="mr-3 h-6 w-6 text-[#0170B9]" />
                        Ana Faydaları
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-[#0170B9] rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Usage Instructions */}
                {product.usage && (
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Star className="mr-3 h-6 w-6 text-green-600" />
                        Kullanım Talimatları
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded-lg">
                        {product.usage}
                      </p>
                      <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-yellow-800 font-medium">
                          ⚠️ Önemli: İlk kullanımdan önce uzman görüşü alınması önerilir.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <Card className="mt-8 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Shield className="mr-3 h-6 w-6 text-purple-600" />
                      İçindeki Aktif Bileşenler
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {product.ingredients.map((ingredient, index) => (
                        <div key={index} className="bg-purple-50 rounded-lg p-3 text-center">
                          <span className="text-sm font-medium text-purple-900">{ingredient}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    İlgili Ürünler
                  </h2>
                  <p className="text-lg text-gray-600">
                    {category.name} kategorisindeki diğer ürünler
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {relatedProducts.map((relatedProduct) => (
                    <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary" className="text-[#0170B9] bg-blue-50">
                            {relatedProduct.category.name}
                          </Badge>
                          {relatedProduct.inStock && (
                            <Badge variant="default" className="bg-green-100 text-green-800">
                              Stokta
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg line-clamp-2 group-hover:text-[#0170B9] transition-colors">
                          {relatedProduct.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-3">
                          {relatedProduct.description}
                        </CardDescription>
                      </CardContent>
                      <div className="px-6 pb-6">
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/products/${relatedProduct.category.id}/${relatedProduct.id}`}>
                            Ürünü İncele
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}