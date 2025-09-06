import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, ShoppingCart, Truck, CreditCard, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="bg-gray-50 text-black border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
                href="https://instagram.com/phformula"
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
                Alışveriş Sepeti
              </Link>
              <Link href="/wishlist" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Favorilerim
              </Link>
              <Link href="/account" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Hesabım
              </Link>
              <Link href="/orders" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Siparişlerim
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-black uppercase tracking-wider">Kategoriler</h4>
            <div className="space-y-3">
              <Link href="/products/cleansers" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Temizleyiciler
              </Link>
              <Link href="/products/recovery" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Tedavi ve İyileştirme
              </Link>
              <Link href="/products/kits" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Özel Kitler
              </Link>
              <Link href="/products/serums" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Serumlar ve Temel Ürünler
              </Link>
              <Link href="/products/masks" className="block text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium">
                Maskeler ve Ek Ürünler
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="font-black text-xl text-black uppercase tracking-wider">Destek</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors group">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <a href="tel:+905551234567" className="font-light hover:font-medium transition-all">
                  +90 555 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 hover:text-black transition-colors group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <a href="mailto:destek@phformula.com.tr" className="font-light hover:font-medium transition-all">
                  destek@phformula.com.tr
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
        <div className="border-t border-gray-300 mt-16 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="flex items-center space-x-4 text-gray-700 group hover:text-black transition-colors cursor-pointer">
              <Truck className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <span className="text-base font-light group-hover:font-medium transition-all uppercase tracking-wide">Ücretsiz Kargo (250₺+)</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700 group hover:text-black transition-colors cursor-pointer">
              <Shield className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <span className="text-base font-light group-hover:font-medium transition-all uppercase tracking-wide">Güvenli Alışveriş</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700 group hover:text-black transition-colors cursor-pointer">
              <CreditCard className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <span className="text-base font-light group-hover:font-medium transition-all uppercase tracking-wide">Taksit İmkanları</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700 group hover:text-black transition-colors cursor-pointer">
              <ShoppingCart className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <span className="text-base font-light group-hover:font-medium transition-all uppercase tracking-wide">Kolay İade</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-8">
            <p className="text-base text-gray-600 font-light">
              © 2024 phFormula Türkiye Online Mağaza. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link href="/shipping" className="text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium uppercase tracking-wide">
                Kargo ve İade
              </Link>
              <Link href="/privacy" className="text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium uppercase tracking-wide">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium uppercase tracking-wide">
                Kullanım Şartları
              </Link>
              <Link href="/about" className="text-base text-gray-700 hover:text-black font-light transition-colors duration-300 hover:font-medium uppercase tracking-wide">
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}