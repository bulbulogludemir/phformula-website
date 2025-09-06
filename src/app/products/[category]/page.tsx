import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, ArrowLeft, Star, Clock, Users, Eye, CheckCircle, Shield, Award, Truck, Heart, ShoppingCart, Crown, Gift, Zap, TrendingUp } from "lucide-react";
import { getAllProducts, getCategories, getProductsByCategory } from "@/lib/products";
import { ScarcityIndicator, LiveActivity } from "@/components/psychology/ScarcityIndicator";
import { generateTurkishSEOTitle } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = getCategories().find(cat => cat.id === params.category);
  if (!category) return {};
  
  return {
    title: generateTurkishSEOTitle(category.name, `phFormula ${category.name} - Premium Cilt Bakım Ürünleri`),
    description: `${category.description} phFormula ${category.name} ürünlerini keşfedin. İsviçre kalitesi, orijinal ürünler, hızlı kargo. WhatsApp'tan hemen sipariş verin.`,
  };
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategories().find(cat => cat.id === params.category);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = getAllProducts().filter(product => product.category.id === category.id);

  return (
    <div className="min-h-screen">
      {/* Live Activity Notifications */}
      <LiveActivity />
      <ScarcityIndicator />
      {/* Breadcrumb */}
      <section className="bg-black py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link>
            <span className="text-gray-600">/</span>
            <Link href="/products" className="text-gray-400 hover:text-white transition-colors">Ürünler</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white font-bold">{category.name.toUpperCase()}</span>
          </nav>
        </div>
      </section>

      {/* Category Header with Psychology */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Button variant="outline" size="sm" className="text-white border-white bg-transparent hover:bg-white hover:text-black mb-6 font-bold" asChild>
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  TÜM KATEGORİLER
                </Link>
              </Button>
              
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-white/10 text-green-400 font-bold tracking-wider border-0 animate-pulse">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  {categoryProducts.length} ÜRÜN MEVCUT
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                  <span className="text-white">{category.name.toUpperCase()}</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  {category.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-green-600 text-white hover:bg-green-700 font-bold py-4 px-8 rounded-none border-0 transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  <Link href={`https://wa.me/905551234567?text=Merhaba%20phFormula!%20${category.name}%20kategorisi%20hakkında%20detaylı%20bilgi%20almak%20istiyorum%20🌟`}>
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WHATSAPP'TAN DANIŞMANLIK
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-none transition-all duration-300 hover:scale-105">
                  <Link href="#products">
                    <Eye className="mr-3 h-5 w-5" />
                    ÜRÜNLERİ KEŞFET
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Live Statistics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Bu Kategoride Sipariş:</span>
                  <span className="text-white font-bold text-xl animate-pulse">{Math.floor(Math.random() * 50) + 20} adet</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Aktif Görüntüleyici:</span>
                  <span className="text-green-400 font-bold text-xl">{Math.floor(Math.random() * 15) + 8} kişi</span>
                </div>
              </div>
              
              {/* Category specific info with psychology */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Crown className="mr-3 h-5 w-5 text-yellow-400" />
                  UZMAN TAVSİYELERİ:
                </h3>
                <div className="grid md:grid-cols-1 gap-3 text-sm">
                  {category.id === 'cleansers' && (
                    <>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Günlük cilt bakım rutininizin temelini oluşturur
                      </div>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Sabah ve akşam düzenli kullanım önerilir
                      </div>
                    </>
                  )}
                  {category.id === 'recovery' && (
                    <>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Spesifik cilt problemlerine hedefli çözüm
                      </div>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Uzman gözetiminde kullanılması önerilir
                      </div>
                    </>
                  )}
                  {category.id === 'kits' && (
                    <>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Kapsamlı tedavi için ideal çözüm
                      </div>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Profesyonel protokol dahilinde kullanım
                      </div>
                    </>
                  )}
                  {category.id === 'serums' && (
                    <>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Yoğun aktif bileşenler içerir
                      </div>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Temizlik sonrası uygulanır
                      </div>
                    </>
                  )}
                  {category.id === 'masks' && (
                    <>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Haftada 1-2 kez kullanım önerilir
                      </div>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle className="mr-3 h-4 w-4 text-green-400" />
                        Vitamin ve mineral desteği sağlar
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white text-black p-10 border-0 shadow-2xl transition-all duration-500 hover:shadow-3xl group">
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-black flex items-center justify-center transition-transform group-hover:scale-110">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-black tracking-tight">{Math.floor(Math.random() * 5000) + 2000}+</h3>
                      <p className="text-gray-600 text-sm uppercase tracking-wider">Bu Kategoriden Satılan</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 uppercase tracking-wide">Kategori Memnuniyeti</span>
                      <span className="font-black text-lg">%{Math.floor(Math.random() * 5) + 95}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-black h-1 transition-all duration-1000" style={{width: `${Math.floor(Math.random() * 5) + 95}%`}}></div>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-6 w-6 text-black fill-current" />
                    ))}
                    <span className="ml-3 text-sm text-gray-600 uppercase tracking-wide">({Math.floor(Math.random() * 1000) + 500} değerlendirme)</span>
                  </div>
                  
                  <Button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-none border-0 transition-all duration-300 hover:scale-105" asChild>
                    <Link href="#products">
                      <Eye className="mr-2 h-4 w-4" />
                      ÜRÜNLERİ İNCELE
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <Gift className="mr-2 h-4 w-4" />
                  ÖZEL KOLEKSİYON
                </Badge>
                <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
                  {category.name.toUpperCase()} ÜRÜNLERİ
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  {categoryProducts.length} adet premium ürün - İsviçre teknolojisi ile üretildi
                </p>
                
                {/* Urgency Banner */}
                <div className="bg-red-600 text-white rounded-lg p-4 mt-8 max-w-2xl mx-auto animate-pulse">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-bold">SİNİRLI STOK!</span>
                  </div>
                  <p className="text-sm mt-1">Bu kategorideki ürünler sınırlı stokta. WhatsApp'tan hemen sipariş verin!</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product, index) => (
                  <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-black bg-white overflow-hidden">
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
                          {category.name.toUpperCase()}
                        </Badge>
                        {product.inStock ? (
                          <Badge variant="default" className="bg-green-600 text-white font-bold border-0">
                            STOKTA
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="bg-red-600 text-white font-bold border-0">
                            TÜKENDİ
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl font-black line-clamp-2 text-black group-hover:text-black transition-colors tracking-tight uppercase">
                        {product.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 relative z-10">
                      <CardDescription className="text-base leading-relaxed line-clamp-3 text-gray-600 font-light">
                        {product.description}
                      </CardDescription>
                      
                      {/* Rating stars */}
                      <div className="flex items-center space-x-1 mb-4">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2 font-medium">(4.{Math.floor(Math.random() * 3) + 6})</span>
                      </div>

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

                      {product.usage && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-bold text-xs text-black mb-1 uppercase tracking-wide">KULLANIM:</h4>
                          <p className="text-xs text-gray-700 line-clamp-2 font-light">
                            {product.usage}
                          </p>
                        </div>
                      )}
                      
                      {/* Trust indicators */}
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <div className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                          <span>Orijinal</span>
                        </div>
                        <div className="flex items-center">
                          <Truck className="h-3 w-3 text-blue-500 mr-1" />
                          <span>Hızlı Kargo</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-3 w-3 text-purple-500 mr-1" />
                          <span>Garanti</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-3 pt-0 relative z-10">
                      <Button variant="outline" className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white font-bold rounded-none transition-all duration-300 hover:scale-105" asChild>
                        <Link href={`/products/${category.id}/${product.id}`}>
                          DETAYLI İNCELE
                        </Link>
                      </Button>
                      <Button 
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold rounded-none transition-all duration-300 hover:scale-105" 
                        asChild
                        disabled={!product.inStock}
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
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Related Categories with Psychology */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-black text-white font-bold px-6 py-2 tracking-wider border-0">
              <Zap className="mr-2 h-4 w-4" />
              KOMPLE BAKI M PROGRAMI
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              DIĞER KATEGORİLER
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Cilt bakım rutininizi tamamlayacak diğer premium ürün grupları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getCategories()
              .filter(cat => cat.id !== category.id)
              .map((otherCategory, index) => (
                <Card key={otherCategory.id} className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-black bg-white text-center overflow-hidden">
                  <CardHeader className="pb-4 relative">
                    <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      {index === 0 && <Zap className="h-8 w-8 text-white" />}
                      {index === 1 && <Crown className="h-8 w-8 text-white" />}
                      {index === 2 && <Gift className="h-8 w-8 text-white" />}
                      {index === 3 && <Award className="h-8 w-8 text-white" />}
                    </div>
                    <CardTitle className="text-xl font-black text-black group-hover:text-black transition-colors tracking-tight uppercase">
                      {otherCategory.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <CardDescription className="text-sm line-clamp-3 text-gray-600 font-light leading-relaxed">
                      {otherCategory.description}
                    </CardDescription>
                    
                    {/* Trust indicators */}
                    <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        <span>Premium</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-3 w-3 text-blue-500 mr-1" />
                        <span>Güvenli</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full border-2 border-black text-black hover:bg-black hover:text-white font-bold transition-all duration-300 hover:scale-105" asChild>
                      <Link href={`/products/${otherCategory.id}`}>
                        KATEGORİYİ İNCELE
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold transition-all duration-300 hover:scale-105" asChild>
                      <Link href={`https://wa.me/905551234567?text=Merhaba%20phFormula!%20${otherCategory.name}%20kategorisi%20hakkında%20bilgi%20almak%20istiyorum%20🌟`}>
                        <MessageCircle className="mr-2 h-3 w-3" />
                        WHATSAPP
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            }
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="bg-green-600 text-white rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-black mb-4 tracking-tight">UZMAN DANIŞMANLIĞI AL</h3>
              <p className="text-lg mb-6 font-light">Hangi kategorilerin cildinize en uygun olduğunu öğrenmek için uzmanlarımızla konuşun.</p>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8" asChild>
                <Link href="https://wa.me/905551234567?text=Merhaba%20phFormula!%20Cilt%20tipime%20en%20uygun%20ürün%20kategorilerini%20öğrenmek%20istiyorum.%20Ücretsiz%20danışmanlık%20alabilir%20miyim%3F%20🌟">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  ÜCRETSIZ DANIŞMANLIK AL
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}