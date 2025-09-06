"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Product, ProductCategory } from "@/lib/products";

interface CategoryClientProps {
  category: ProductCategory;
  categoryProducts: Product[];
}

export function CategoryPageClient({ category, categoryProducts }: CategoryClientProps) {
  return (
    <>
      {/* Products Grid with Psychology */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {categoryProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Bu kategoride henüz ürün bulunmamaktadır.</p>
              <Button variant="outline" className="mt-6 border-2 border-black text-black hover:bg-black hover:text-white" asChild>
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  DIĞER KATEGORİLERİ İNCELE
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-20">
                <Badge variant="secondary" className="mb-6 bg-black text-white font-bold px-6 py-2 tracking-wider border-0">
                  ÖZEL KOLEKSİYON
                </Badge>
                <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
                  {category.name?.toUpperCase() || ''} ÜRÜNLERİ
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  {categoryProducts.length} adet premium ürün - İspanya teknolojisi ile üretildi
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product, index) => (
                  <Link key={product.product_id} href={`/products/${category.id}/${product.product_id}`} className="block">
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-black bg-white overflow-hidden cursor-pointer">
                      <CardHeader className="pb-4 relative">
                        {/* Popular/New badges */}
                        {index === 0 && (
                          <Badge className="absolute top-4 right-4 bg-red-500 text-white font-bold animate-pulse border-0">
                            EN POPÜLER
                          </Badge>
                        )}
                        {index === 1 && (
                          <Badge className="absolute top-4 right-4 bg-green-500 text-white font-bold border-0">
                            YENİ
                          </Badge>
                        )}
                        
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="secondary" className="text-white bg-black font-bold tracking-wider border-0">
                            {category.name?.toUpperCase() || ''}
                          </Badge>
                          <Badge variant="default" className="bg-green-600 text-white font-bold border-0">
                            STOKTA
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-black line-clamp-2 text-black group-hover:text-black transition-colors tracking-tight uppercase">
                          {product.name}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4 relative z-10">
                        <p className="text-base leading-relaxed line-clamp-3 text-gray-600 font-light">
                          {product.description}
                        </p>
                        
                        {product.benefits && product.benefits.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="font-bold text-sm text-black uppercase tracking-wide">Faydaları:</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                              {product.benefits.slice(0, 2).map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                                  <span className="font-light">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="flex gap-3 pt-0 relative z-10" onClick={(e) => e.stopPropagation()}>
                        <Button variant="outline" className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white font-bold rounded-none transition-all duration-300 hover:scale-105" asChild>
                          <Link href={`/products/${category.id}/${product.product_id}`}>
                            DETAYLI İNCELE
                          </Link>
                        </Button>
                        <Button 
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold rounded-none transition-all duration-300 hover:scale-105" 
                          asChild
                        >
                          <Link 
                            href={`https://wa.me/905551234567?text=Merhaba%20phFormula!%20${encodeURIComponent(product.name)}%20hakkında%20detaylı%20bilgi%20ve%20özel%20fiyat%20almak%20istiyorum%20🌟`} 
                            target="_blank"
                          >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            WHATSAPP
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}