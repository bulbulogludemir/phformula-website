"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  MessageCircle, 
  Heart, 
  Share2, 
  Eye, 
  ShoppingCart,
  Star,
  Calendar,
  Info,
  Package,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Product, ProductCategory, getAllProducts, getProductImageUrl } from '@/lib/products'

interface ProductDetailProps {
  product: Product;
  category: ProductCategory;
  relatedProducts: Product[];
  breadcrumbs: Array<{ name: string; url: string }>;
}

export function ProductPageClient({ product, category, relatedProducts, breadcrumbs }: ProductDetailProps) {
  // WhatsApp mesajı oluştur
  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Merhaba phFormula! "${product.name}" ürünü hakkında detaylı bilgi almak istiyorum. Fiyat, stok durumu ve kullanım şekli hakkında bilgi verebilir misiniz?`
    )
  }

  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/905358726752?text=${getWhatsAppMessage()}`
    window.open(whatsappUrl, '_blank')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.meta_description || product.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      // Toast notification can be added here
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Navigation */}
          <div className="flex items-center gap-2 mb-6 text-white/80">
            <Link 
              href="/products" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Ürünlere Dön</span>
            </Link>
            <span className="text-white/60">•</span>
            <Link href={`/products/${category.id}`} className="text-sm hover:text-white transition-colors">
              {category.name}
            </Link>
            <span className="text-white/60">•</span>
            <span className="text-sm text-white/90">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                <Image
                  src={getProductImageUrl(product.product_id, 0)}
                  alt={product.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/images/placeholder.svg'
                  }}
                />
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="p-3 rounded-full bg-white/80 text-gray-600 hover:text-red-500 backdrop-blur-xl transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-full bg-white/80 text-gray-600 hover:text-blue-600 backdrop-blur-xl transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Size badge */}
                {product.size && (
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-black/70 text-white border-0">
                      {product.size}
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                {product.brand && (
                  <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                )}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(phFormula Onaylı)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white border-0"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ile İletişim
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppContact}
                  className="border-gray-300 hover:bg-gray-50"
                >
                  <Info className="mr-2 h-4 w-4" />
                  Fiyat Al
                </Button>
              </div>

              {/* Product Description */}
              {product.description && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Package className="w-5 h-5 text-blue-600" />
                      Ürün Açıklaması
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Product Features */}
              {product.features && product.features.length > 0 && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      Özellikler
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Usage Instructions */}
              {product.usage_instructions && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Info className="w-5 h-5 text-green-600" />
                      Kullanım Talimatları
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {product.usage_instructions}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Eye className="w-5 h-5 text-orange-600" />
                      İçerik
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Benzer Ürünler</h2>
              <p className="text-gray-600">Size önerebileceğimiz diğer ürünler</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.product_id} className="shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Link href={`/products/${category.id}/${relatedProduct.product_id}`}>
                      <Image
                        src={getProductImageUrl(relatedProduct.product_id, 0)}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/images/placeholder.svg'
                        }}
                      />
                    </Link>
                  </div>
                  <CardContent className="p-3">
                    <Link href={`/products/${category.id}/${relatedProduct.product_id}`}>
                      <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-1 text-sm">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    {relatedProduct.size && (
                      <p className="text-xs text-gray-500 mb-2">
                        {relatedProduct.size}
                      </p>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full text-xs h-8"
                      asChild
                    >
                      <Link href={`/products/${category.id}/${relatedProduct.product_id}`}>
                        İncele
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hemen İletişime Geçin
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {product.name} hakkında detaylı bilgi almak ve fiyat öğrenmek için bizimle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsAppContact}
                className="bg-white text-green-700 hover:bg-gray-100"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp ile Yaz
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700"
                asChild
              >
                <Link href="/products">
                  <Calendar className="mr-2 h-4 w-4" />
                  Diğer Ürünler
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}