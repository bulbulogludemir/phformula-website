import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, ShoppingCart, Truck, CreditCard, Shield, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="bg-gray-50 text-black border-t border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-black text-black tracking-tight">
                <span>ph</span><span className="text-gray-600">Formula</span>
              </div>
              <Badge variant="secondary" className="bg-black text-white text-xs font-bold tracking-wider border-0">MAĞAZA</Badge>
            </div>
            <p className="text-base text-gray-700 max-w-xs font-light leading-relaxed">
              Türkiye'nin en güvendiği online cilt bakım mağazası. İspanya kalitesinde ürünler, hızlı teslimat.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/nkguzellik"
                target="_blank"
                className="w-12 h-12 bg-black text-white flex items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:scale-110 group"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://facebook.com/phformula"
                target="_blank"
                className="w-12 h-12 bg-black text-white flex items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:scale-110 group"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-black uppercase tracking-wider">Alışveriş</h4>
            <div className="space-y-3">
              <Link href="/products" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Tüm Ürünler
              </Link>
              <Link href="/cart" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Sepet
              </Link>
              <Link href="/checkout" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Sipariş
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-black uppercase tracking-wider">Kategoriler</h4>
            <div className="space-y-3">
              <Link href="/products?category=temizleyiciler" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Temizleyiciler
              </Link>
              <Link href="/products?category=kremler" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Kremler ve Tedavi
              </Link>
              <Link href="/products?category=bakım-kitleri" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Bakım Kitleri
              </Link>
              <Link href="/products?category=serumlar" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Serumlar
              </Link>
              <Link href="/products?category=maskeler" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Maskeler
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-black uppercase tracking-wider">Destek</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <a href="tel:+905358726752" className="font-light hover:font-medium transition-all">
                  +90 535 872 67 52
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors group">
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <a href="https://wa.me/905358726752?text=Merhaba%20phFormula!%20Destek%20almak%20istiyorum%20%F0%9F%93%9E" target="_blank" className="font-light hover:font-medium transition-all">
                  WhatsApp Destek
                </a>
              </div>
              <div className="text-gray-700">
                <p className="font-bold text-black uppercase tracking-wide text-sm">Destek Saatleri:</p>
                <p className="text-sm font-light">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="text-sm font-light">Cumartesi: 10:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-300 mt-12 sm:mt-16 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="flex items-center space-x-3 sm:space-x-4 text-gray-700 group hover:text-black transition-colors cursor-pointer">
              <Truck className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-light group-hover:font-medium transition-all uppercase tracking-wide">Ücretsiz Kargo (3000₺+)</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 text-gray-700 group hover:text-black transition-colors cursor-pointer">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-light group-hover:font-medium transition-all uppercase tracking-wide">Güvenli Alışveriş</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 text-gray-700 group hover:text-black transition-colors cursor-pointer">
              <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-light group-hover:font-medium transition-all uppercase tracking-wide">Taksit İmkanları</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 text-gray-700 group hover:text-black transition-colors cursor-pointer">
              <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-light group-hover:font-medium transition-all uppercase tracking-wide">Kolay İade</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 border-t border-gray-300 pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-gray-600 font-light text-center lg:text-left order-2 lg:order-1">
              © 2024 phFormula Türkiye. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2">
              <a href="https://wa.me/905358726752?text=Merhaba!%20Kargo%20ve%20iade%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" className="text-xs sm:text-sm text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium uppercase tracking-wide whitespace-nowrap">
                Kargo & İade
              </a>
              <a href="https://wa.me/905358726752?text=Merhaba!%20Gizlilik%20politikan%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" className="text-xs sm:text-sm text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium uppercase tracking-wide whitespace-nowrap">
                Gizlilik
              </a>
              <a href="https://wa.me/905358726752?text=Merhaba!%20Kullan%C4%B1m%20%C5%9Fartlar%C4%B1n%C4%B1z%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" className="text-xs sm:text-sm text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium uppercase tracking-wide whitespace-nowrap">
                Şartlar
              </a>
              <a href="https://wa.me/905358726752?text=Merhaba!%20phFormula%20Türkiye%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum" target="_blank" className="text-xs sm:text-sm text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium uppercase tracking-wide whitespace-nowrap">
                Hakkımızda
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}