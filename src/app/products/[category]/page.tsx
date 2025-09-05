import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, ArrowLeft, Star } from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/types/product";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = PRODUCT_CATEGORIES.find(cat => cat.id === params.category);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter(product => product.category.id === category.id);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#0170B9]">Ana Sayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-[#0170B9]">Ürünler</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#0170B9] font-medium">{category.name}</span>
          </nav>
        </div>
      </section>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-[#0170B9] to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-[#0170B9] mb-6" asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Tüm Kategoriler
              </Link>
            </Button>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-[#0170B9]">
                  {categoryProducts.length} Ürün
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {category.name}
                </h1>
                <p className="text-xl opacity-90 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Category specific info */}
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold mb-3">Bu Kategori İçin Öneriler:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  {category.id === 'cleansers' && (
                    <>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Günlük cilt bakım rutininizin temelini oluşturur
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Sabah ve akşam düzenli kullanım önerilir
                      </div>
                    </>
                  )}
                  {category.id === 'recovery' && (
                    <>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Spesifik cilt problemlerine hedefli çözüm
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Uzman gözetiminde kullanılması önerilir
                      </div>
                    </>
                  )}
                  {category.id === 'kits' && (
                    <>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Kapsamlı tedavi için ideal çözüm
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Profesyonel protokol dahilinde kullanım
                      </div>
                    </>
                  )}
                  {category.id === 'serums' && (
                    <>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Yoğun aktif bileşenler içerir
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Temizlik sonrası uygulanır
                      </div>
                    </>
                  )}
                  {category.id === 'masks' && (
                    <>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Haftada 1-2 kez kullanım önerilir
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        Vitamin ve mineral desteği sağlar
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {categoryProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Bu kategoride henüz ürün bulunmamaktadır.</p>
              <Button variant="outline" className="mt-6" asChild>
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Diğer Kategorileri İncele
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {category.name} Ürünleri
                </h2>
                <p className="text-lg text-gray-600">
                  {categoryProducts.length} adet ürün bulundu
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <Badge variant="secondary" className="text-[#0170B9] bg-blue-50">
                          {category.name}
                        </Badge>
                        {product.inStock ? (
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            Stokta
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            Tükendi
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-[#0170B9] transition-colors">
                        {product.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed line-clamp-3">
                        {product.description}
                      </CardDescription>

                      {product.benefits && product.benefits.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-gray-900">Ana Faydaları:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {product.benefits.slice(0, 3).map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[#0170B9] rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.usage && (
                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-xs text-[#0170B9] mb-1">KULLANIM:</h4>
                          <p className="text-xs text-gray-700 line-clamp-2">
                            {product.usage}
                          </p>
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="flex gap-2 pt-0">
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href={`/products/${category.id}/${product.id}`}>
                          Detayları Gör
                        </Link>
                      </Button>
                      <Button 
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white" 
                        asChild
                        disabled={!product.inStock}
                      >
                        <Link 
                          href={`https://wa.me/905551234567?text=Merhaba, ${product.name} hakkında detaylı bilgi almak istiyorum.`} 
                          target="_blank"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Bilgi Al
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Diğer Kategoriler
            </h2>
            <p className="text-lg text-gray-600">
              Cilt bakım rutininizi tamamlayacak diğer ürün grupları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES
              .filter(cat => cat.id !== category.id)
              .map((otherCategory) => (
                <Card key={otherCategory.id} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{otherCategory.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <CardDescription className="text-sm line-clamp-2">
                      {otherCategory.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/products/${otherCategory.id}`}>
                        İncele
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}