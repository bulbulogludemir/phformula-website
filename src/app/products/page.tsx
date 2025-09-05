import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/types/product";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0170B9] to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-blue-100 text-[#0170B9]">
              Premium Cilt Bakım Ürünleri
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              phFormula Ürün Koleksiyonu
            </h1>
            <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              İsviçre kalitesinde formüllerle üretilen phFormula ürünleri, 
              her cilt tipi ve problemi için özel olarak tasarlanmıştır. 
              Uzman estetisyenler tarafından önerilen profesyonel cilt bakım çözümlerimizi keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ürün Kategorilerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cildinizin ihtiyaçlarına özel olarak geliştirilmiş ürün kategorilerimizi inceleyin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0170B9] via-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-[#0170B9] transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600 mt-3">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-[#0170B9] font-medium">
                      {index === 0 && "Günlük temizlik ve koruma"}
                      {index === 1 && "Hedefli problemlere çözüm"}
                      {index === 2 && "Kapsamlı tedavi sistemleri"}
                      {index === 3 && "Yoğun aktif bileşenler"}
                      {index === 4 && "Özel bakım ve vitamin desteği"}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-[#0170B9] group-hover:text-white group-hover:border-[#0170B9] transition-all duration-300 font-semibold text-base py-6" 
                    asChild
                  >
                    <Link href={`/products/${category.id}`}>
                      Ürünleri İncele
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Neden phFormula?
              </h2>
              <p className="text-xl text-gray-600">
                Cilt bakımında güvenilir ve etkili çözümler sunuyoruz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">İsviçre Kalitesi</h3>
                <p className="text-gray-600">
                  İsviçre'de geliştirilen formüller ve uluslararası kalite standartları
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-[#0170B9] rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Uzman Desteği</h3>
                <p className="text-gray-600">
                  Profesyonel estetisyenler tarafından önerilen ve uygulanan sistemler
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Kanıtlanmış Sonuçlar</h3>
                <p className="text-gray-600">
                  Klinik testlerle kanıtlanmış etkili ve güvenli formüller
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0170B9] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Cildiniz için Doğru Ürünü Seçelim
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Uzman estetisyenlerimiz cildinizi analiz ederek en uygun ürünleri önerir. 
              Ücretsiz konsültasyon için hemen iletişime geçin.
            </p>
            <Button size="lg" variant="secondary" className="font-semibold" asChild>
              <Link href="/appointment">
                Ücretsiz Konsültasyon Al
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}