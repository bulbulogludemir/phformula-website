import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, MessageCircle, Star, Shield, Truck, Award, Clock, Users, Zap, Crown, Gift, CheckCircle, TrendingUp, Eye } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/types/product";
import { ScarcityIndicator, LiveActivity } from "@/components/psychology/ScarcityIndicator";
import { generateTurkishSEOTitle } from "@/lib/seo";

export const metadata = {
  title: generateTurkishSEOTitle("Tüm Ürünler", "phFormula Türkiye Premium Cilt Bakım Ürünleri"),
  description: "phFormula Türkiye'nin tüm ürün kategorilerini keşfedin. İsviçre kalitesinde cilt bakım ürünleri, profesyonel formüller, hızlı kargo. WhatsApp'tan hemen sipariş verin.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Live Activity Notifications */}
      <LiveActivity />
      <ScarcityIndicator />
      {/* Hero Section with Psychology */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="bg-white/10 text-green-400 font-bold tracking-wider border-0 animate-pulse">
                <Crown className="mr-2 h-4 w-4" />
                PREMIUM KOLEKSİYON
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="text-white">phFormula</span><br />
                <span className="text-2xl md:text-4xl font-light tracking-widest uppercase text-gray-400">Tüm Ürünler</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                İsviçre teknolojisi, Türkiye'nin en kapsamlı cilt bakım koleksiyonu. Her cilt tipine profesyonel çözümler.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-green-600 text-white hover:bg-green-700 font-bold py-4 px-8 rounded-none border-0 transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  <Link href="https://wa.me/905551234567?text=Merhaba%20phFormula!%20Ürün%20kategorileri%20hakkında%20bilgi%20almak%20istiyorum%20🌟">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WHATSAPP'TAN DANIŞMANLIK
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-none transition-all duration-300 hover:scale-105">
                  <Link href="#categories">
                    <Eye className="mr-3 h-5 w-5" />
                    KATEGORİLERİ KEŞFET
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Live Statistics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Bu Hafta Sipariş:</span>
                  <span className="text-white font-bold text-xl animate-pulse">127 adet</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 uppercase tracking-wide">Aktif Kullanıcı:</span>
                  <span className="text-green-400 font-bold text-xl">38 kişi</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                  <Truck className="mr-3 h-5 w-5 text-green-400" />
                  <span className="text-gray-300 uppercase tracking-wide font-medium">Ücretsiz Kargo</span>
                </div>
                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                  <Shield className="mr-3 h-5 w-5 text-blue-400" />
                  <span className="text-gray-300 uppercase tracking-wide font-medium">%100 Orijinal</span>
                </div>
                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                  <Award className="mr-3 h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300 uppercase tracking-wide font-medium">Uzman Onaylı</span>
                </div>
                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                  <Zap className="mr-3 h-5 w-5 text-purple-400" />
                  <span className="text-gray-300 uppercase tracking-wide font-medium">Hızlı Teslimat</span>
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
                      <h3 className="text-2xl font-black text-black tracking-tight">15.000+</h3>
                      <p className="text-gray-600 text-sm uppercase tracking-wider">Mutlu Müşteri</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 uppercase tracking-wide">Kategori Memnuniyeti</span>
                      <span className="font-black text-lg">%97</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-black h-1 transition-all duration-1000" style={{width: '97%'}}></div>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-6 w-6 text-black fill-current" />
                    ))}
                    <span className="ml-3 text-sm text-gray-600 uppercase tracking-wide">(3.247 değerlendirme)</span>
                  </div>
                  
                  <Button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 rounded-none border-0 transition-all duration-300 hover:scale-105" asChild>
                    <Link href="https://wa.me/905551234567?text=Merhaba%20phFormula!%20En%20popüler%20ürünlerinizi%20öğrenmek%20istiyorum%20🌟">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      EN POPÜLER ÜRÜNLERİ ÖĞREN
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories with Psychology */}
      <section id="categories" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-black text-white font-bold px-6 py-2 tracking-wider border-0">
              <TrendingUp className="mr-2 h-4 w-4" />
              KATEGORİLER
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              CİLDİNİZE ÖZEL ÇÖZÜMLER
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Her cilt tipi ve problemi için İsviçre teknolojisi ile geliştirilmiş profesyonel ürün kategorileri
            </p>
            
            {/* Urgency Banner */}
            <div className="bg-red-600 text-white rounded-lg p-4 mt-8 max-w-2xl mx-auto animate-pulse">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-bold">ÖZEL FIRSAT!</span>
              </div>
              <p className="text-sm mt-1">WhatsApp'tan sipariş verenlere özel indirimler. Bugün son gün!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <Card key={category.id} className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 hover:border-black bg-white overflow-hidden">
                <CardHeader className="text-center pb-6 relative">
                  {/* Popular badge for first category */}
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
                  <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {index === 0 && <Sparkles className="h-10 w-10 text-white" />}
                    {index === 1 && <Zap className="h-10 w-10 text-white" />}
                    {index === 2 && <Award className="h-10 w-10 text-white" />}
                    {index === 3 && <Crown className="h-10 w-10 text-white" />}
                    {index === 4 && <Gift className="h-10 w-10 text-white" />}
                  </div>
                  <CardTitle className="text-2xl font-black text-black group-hover:text-black transition-colors tracking-tight uppercase">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600 mt-3 font-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center relative z-10">
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-black font-semibold">
                      {index === 0 && "🧼 Günlük temizlik ve koruma"}
                      {index === 1 && "🎯 Hedefli problemlere çözüm"}
                      {index === 2 && "⚕️ Kapsamlı tedavi sistemleri"}
                      {index === 3 && "💎 Yoğun aktif bileşenler"}
                      {index === 4 && "🌟 Özel bakım ve vitamin desteği"}
                    </p>
                  </div>
                  
                  {/* Trust indicators */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span>Uzman Onaylı</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Shield className="h-4 w-4 text-blue-500 mr-1" />
                      <span>%100 Orijinal</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0 space-y-3 relative z-10">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-bold text-base py-6 hover:scale-105" 
                    asChild
                  >
                    <Link href={`/products/${category.id}`}>
                      ÜRÜNLERİ İNCELE
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    className="w-full bg-green-600 text-white hover:bg-green-700 font-bold py-4 rounded-none transition-all duration-300 hover:scale-105" 
                    asChild
                  >
                    <Link href={`https://wa.me/905551234567?text=Merhaba%20phFormula!%20${category.name}%20kategorisi%20hakkında%20bilgi%20almak%20istiyorum%20🌟`}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WHATSAPP'TAN SOR
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Psychology */}
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
              <h3 className="text-2xl font-black text-black tracking-tight uppercase">%100 Orijinal</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Tüm ürünlerimiz orijinallik garantisi ile
              </p>
            </div>

            <div className="text-center space-y-6 group cursor-pointer">
              <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black tracking-tight uppercase">İsviçre Kalitesi</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Uluslararası standartlarda üretim
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

      {/* Social Proof Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-black text-white font-bold px-6 py-2 tracking-wider border-0">
              <Users className="mr-2 h-4 w-4" />
              MÜŞTERİ MEMNUNİYETİ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">
              15.000+ MUTLU MÜŞTERİ
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex space-x-1 mb-4 justify-center">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"3 yıldır phFormula kullanıyorum. Cildim hiç bu kadar sağlıklı görünmemişti!"</p>
                <p className="font-bold text-black">- Ayşe K., İstanbul</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex space-x-1 mb-4 justify-center">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"WhatsApp'tan sipariş vermek çok kolay. Ürünler hızlı geldi ve orijinal."</p>
                <p className="font-bold text-black">- Mehmet Y., Ankara</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex space-x-1 mb-4 justify-center">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"Profesyonel kalitede ürünler. Cilt bakım rutini tamamen değişti."</p>
                <p className="font-bold text-black">- Fatma S., İzmir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Urgency */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-white/20 text-white font-bold px-6 py-2 border-0 animate-pulse">
              <Clock className="mr-2 h-4 w-4" />
              SİNİRLI ZAMAN TEKLİFİ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              CİLDİNİZ İÇİN EN İYİSİNİ SEÇİN
            </h2>
            <p className="text-xl leading-relaxed font-light max-w-3xl mx-auto">
              Uzman danışmanlarımız cildinizi analiz ederek size en uygun kategori ve ürünleri önerir. 
              WhatsApp'tan ücretsiz danışmanlık alın!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100 font-bold py-6 px-12 text-lg" asChild>
                <Link href="https://wa.me/905551234567?text=Merhaba%20phFormula!%20Cildime%20en%20uygun%20ürün%20kategorisini%20öğrenmek%20istiyorum.%20Ücretsiz%20danışmanlık%20alabilir%20miyim%3F%20🌟">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  ÜCRETSIZ DANIŞMANLIK AL
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-6 px-12 text-lg" asChild>
                <Link href="#categories">
                  <Eye className="mr-3 h-5 w-5" />
                  KATEGORİLERİ İNCELE
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4" />
                <span>5 Dakikada Yanıt</span>
              </div>
              <div className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                <span>Ücretsiz Danışmanlık</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 h-4 w-4" />
                <span>Uzman Tavsiyeleri</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}