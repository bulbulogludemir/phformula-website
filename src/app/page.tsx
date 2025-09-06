import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Shield, Sparkles, ShoppingCart, Instagram, Heart, Truck, Award, Users, Clock, MessageCircle, Zap, Crown } from "lucide-react";
import { getAllProducts, getCategories, getFeaturedProducts } from "@/lib/products";
import { ScarcityIndicator, LiveActivity } from "@/components/psychology/ScarcityIndicator";
import { QuickWhatsApp } from "@/components/psychology/WhatsAppOrder";
import { MobileStickyWhatsApp } from "@/components/mobile/MobileWhatsAppOrder";

export default function Home() {
  const allProducts = getAllProducts();
  const categories = getCategories();
  const featuredProducts = getFeaturedProducts();
  const bestSellerProducts = allProducts.slice(6, 12);
  
  // Add psychological elements
  const getRandomUrgency = () => Math.random() > 0.7;
  const getRandomPopularity = () => Math.random() > 0.5;

  return (
    <>
      <LiveActivity />
      {/* Responsive WhatsApp Integration */}
      <div className="block md:hidden">
        <MobileStickyWhatsApp />
      </div>
      <div className="hidden md:block">
        <QuickWhatsApp />
      </div>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-300 opacity-5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white text-black text-sm px-6 py-2 font-bold tracking-wider border-0 hover:bg-gray-100 transition-colors">
                  İSVİÇRE KALİTESİ
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                  <span className="text-white">ph</span><span className="text-gray-300">Formula</span><br />
                  <span className="text-2xl md:text-4xl font-light tracking-widest uppercase text-gray-400">Mağaza</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  Profesyonel cilt bakım ürünleri online. İsviçre kalitesinde formüller, hızlı kargo, güvenli alışveriş.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-green-600 text-white hover:bg-green-700 font-bold py-4 px-8 rounded-none border-0 transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  <Link href="https://wa.me/905551234567?text=Merhaba%20phFormula!%20Ürünleriniz%20hakkında%20bilgi%20almak%20istiyorum%20🌟">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WHATSAPP'TAN SİPARİŞ
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-none transition-all duration-300 hover:scale-105">
                  <Link href="/products">
                    <Star className="mr-3 h-5 w-5" />
                    ÇOK SATANLAR
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Live Statistics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Bugün Sipariş Veren:</span>
                  <span className="text-white font-bold text-xl animate-pulse">47 kişi</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Son 1 Saatte:</span>
                  <span className="text-green-400 font-bold text-xl">12 sipariş</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                  <Truck className="mr-3 h-5 w-5 text-green-400" />
                  <span className="text-gray-300 uppercase tracking-wide font-medium">Ücretsiz Kargo</span>
                </div>
                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                  <Shield className="mr-3 h-5 w-5 text-blue-400" />
                  <span className="text-gray-300 uppercase tracking-wide font-medium">Güvenli WhatsApp</span>
                </div>
                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                  <Award className="mr-3 h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300 uppercase tracking-wide font-medium">%100 Orijinal</span>
                </div>
                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                  <Zap className="mr-3 h-5 w-5 text-purple-400" />
                  <span className="text-gray-300 uppercase tracking-wide font-medium">Anında Yanıt</span>
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
                      <h3 className="text-2xl font-black text-black tracking-tight">10.000+</h3>
                      <p className="text-gray-600 text-sm uppercase tracking-wider">Mutlu Müşteri</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 uppercase tracking-wide">Memnuniyet</span>
                      <span className="font-black text-lg">%98</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-black h-1 transition-all duration-1000" style={{width: '98%'}}></div>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-6 w-6 text-black fill-current" />
                    ))}
                    <span className="ml-3 text-sm text-gray-600 uppercase tracking-wide">(2.847 değerlendirme)</span>
                  </div>
                  
                  <Button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-none border-0 transition-all duration-300 hover:scale-105" asChild>
                    <Link href="/products">
                      ÜRÜNLERİ KEŞFEDİN
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              KATEGORİLER
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
              Her cilt tipi için özel olarak geliştirilmiş profesyonel ürün koleksiyonları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={category.id} className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-black bg-white hover:-translate-y-4 cursor-pointer">
                <CardHeader className="text-center pb-8">
                  <div className="w-24 h-24 bg-black flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-900 transition-all duration-300">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-black text-black group-hover:text-gray-900 transition-colors tracking-tight uppercase">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600 mt-4 font-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardFooter className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 font-bold text-base py-6 rounded-none border-2 border-gray-300" 
                    asChild
                  >
                    <Link href={`/products/${category.id}`}>
                      ÜRÜNLERİ GÖRÜNTÜLE
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-black text-white font-bold px-6 py-2 tracking-wider border-0">ÖZEL</Badge>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              ÇOK SATANLAR
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Müşterilerimizin en çok tercih ettiği ve en yüksek puanları alan ürünlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-black bg-white overflow-hidden">
                <CardHeader className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="text-white bg-black border-0 font-bold tracking-wider z-10 relative">
                      {product.category?.name?.toUpperCase() || ''}
                    </Badge>
                    <div className="flex items-center space-x-2 z-10 relative">
                      {product.inStock ? (
                        <Badge variant="default" className="bg-green-600 text-white font-bold border-0">
                          STOKTA
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="bg-red-600 text-white font-bold border-0">
                          TÜKENDİ
                        </Badge>
                      )}
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300 rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-black line-clamp-2 text-black group-hover:text-black transition-colors tracking-tight relative z-10">
                    {product.name?.toUpperCase() || ''}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="line-clamp-3 text-base leading-relaxed mb-6 text-gray-600 font-light">
                    {product.description}
                  </CardDescription>
                  
                  <div className="flex items-center space-x-1 mb-6">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-3 font-medium">(4.8)</span>
                  </div>

                  {product.benefits && (
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
                <CardFooter className="flex gap-3 relative z-10">
                  <Button variant="outline" className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white font-bold rounded-none transition-all duration-300 hover:scale-105" asChild>
                    <Link href={`/products/all/${product.product_id}`}>
                      İNCELE
                    </Link>
                  </Button>
                  <Button className="flex-1 bg-green-600 text-white hover:bg-green-700 font-bold rounded-none transition-all duration-300 hover:scale-105" disabled={!product.inStock}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    SEPETE EKLE
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white font-bold px-12 py-4 rounded-none transition-all duration-300">
              <Link href="/products">
                TÜM ÜRÜNLERİ GÖRÜNTÜLE
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-black text-white font-bold px-6 py-2 tracking-wider border-0">
              #PHFORMULA
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              BİZİ TAKİP EDİN
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Güncel ürünlerimizi, kullanım ipuçlarını ve müşteri deneyimlerini kaçırmayın
            </p>
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="default" asChild className="bg-black hover:bg-gray-900 text-white font-bold px-12 py-4 rounded-none transition-all duration-300 hover:scale-105">
              <Link href="https://instagram.com/phformula" target="_blank">
                <Instagram className="mr-3 h-6 w-6" />
                INSTAGRAM'DA TAKİP ET
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center space-y-6 group cursor-pointer">
              <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight uppercase">Ücretsiz Kargo</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                250₺ ve üzeri alışverişlerde ücretsiz kargo
              </p>
            </div>

            <div className="text-center space-y-6 group cursor-pointer">
              <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight uppercase">Güvenli Ödeme</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                256-bit SSL şifreleme ile güvenli alışveriş
              </p>
            </div>

            <div className="text-center space-y-6 group cursor-pointer">
              <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight uppercase">Orijinal</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                %100 orijinal ürün garantisi
              </p>
            </div>

            <div className="text-center space-y-6 group cursor-pointer">
              <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight uppercase">Hızlı Teslimat</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                1-3 iş günü içinde kapınızda
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}