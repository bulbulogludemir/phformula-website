import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Shield, Sparkles, MessageCircle, Instagram, Phone } from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/types/product";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-[#0170B9] bg-blue-50">
                  Profesyonel Cilt Bakımı
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                  <span className="text-[#0170B9]">phFormula</span> ile
                  <br />
                  Cildinizi Yenileyin
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  İsviçre'den gelen yenilikçi formüllerle cilt problemlerinize köklü çözümler.
                  Profesyonel estetik ürünleri ve uzman danışmanlığı ile güzelliğinizi keşfedin.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-[#0170B9] hover:bg-[#015a9a]">
                  <Link href="/appointment">
                    <Phone className="mr-2 h-5 w-5" />
                    Ücretsiz Konsültasyon
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products">
                    Ürünleri İnceleyin
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-green-600" />
                  FDA Onaylı
                </div>
                <div className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-yellow-500" />
                  %98 Müşteri Memnuniyeti
                </div>
                <div className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-purple-600" />
                  İsviçre Kalitesi
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-[#0170B9] rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Kişisel Cilt Analizi</h3>
                  <p className="text-gray-600">
                    Uzman estetisyenlerimiz cildinizi analiz ederek size özel tedavi programı hazırlar.
                  </p>
                  <Button className="w-full bg-[#0170B9] hover:bg-[#015a9a]">
                    Hemen Başlayın
                  </Button>
                </div>
              </div>
            </div>
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
              Her cilt tipi ve problemi için özel olarak formüle edilmiş ürünlerimizi keşfedin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0170B9] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group-hover:bg-[#0170B9] group-hover:text-white" asChild>
                    <Link href={`/products/${category.id}`}>
                      Ürünleri Görüntüle
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popüler Ürünler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En çok tercih edilen phFormula ürünlerimizi inceleyin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="mb-2">
                      {product.category.name}
                    </Badge>
                    {product.inStock && (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Stokta
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-bold line-clamp-2">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 text-base leading-relaxed mb-4">
                    {product.description}
                  </CardDescription>
                  {product.benefits && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-900">Faydaları:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-[#0170B9] rounded-full mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href={`/products/${product.category.id}/${product.id}`}>
                      Detaylar
                    </Link>
                  </Button>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700" asChild>
                    <Link href={`https://wa.me/905551234567?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.`} target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Bilgi Al
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">
                Tüm Ürünleri Görüntüle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0170B9] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Cilt Bakımında Yeni Bir Dönem Başlıyor
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Uzman estetisyenlerimizle randevu alın, cildiniz için en doğru ürünleri keşfedin.
              Instagram'dan güncel paylaşımlarımızı takip edin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                +90 555 123 45 67
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#0170B9]" asChild>
                <Link href="https://instagram.com/phformula" target="_blank">
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram'da Takip Edin
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
