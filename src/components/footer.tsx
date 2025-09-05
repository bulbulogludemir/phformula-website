import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-[#0170B9]">phFormula</div>
            <p className="text-sm text-gray-600 max-w-xs">
              Profesyonel cilt bakım ürünleri ve uzman estetik hizmetleri ile güzelliğinizi keşfedin.
            </p>
            <div className="flex space-x-2">
              <Link
                href="https://instagram.com/phformula"
                target="_blank"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Instagram className="h-4 w-4 text-gray-600 hover:text-[#0170B9]" />
              </Link>
              <Link
                href="https://facebook.com/phformula"
                target="_blank"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Facebook className="h-4 w-4 text-gray-600 hover:text-[#0170B9]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Hızlı Erişim</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                Hakkımızda
              </Link>
              <Link href="/treatments" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                Tedaviler
              </Link>
              <Link href="/appointment" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                Randevu Al
              </Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                İletişim
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Ürün Kategorileri</h4>
            <div className="space-y-2">
              <Link href="/products/cleansers" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                Temizleyiciler
              </Link>
              <Link href="/products/recovery" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                Tedavi Ürünleri
              </Link>
              <Link href="/products/kits" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                Özel Kitler
              </Link>
              <Link href="/products/serums" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                Serumlar
              </Link>
              <Link href="/products/masks" className="block text-sm text-gray-600 hover:text-[#0170B9]">
                Maskeler
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <a href="tel:+905551234567" className="hover:text-[#0170B9]">
                  +90 555 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@phformula.com.tr" className="hover:text-[#0170B9]">
                  info@phformula.com.tr
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p>Ataşehir, İstanbul</p>
                  <p>Türkiye</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 phFormula Turkey. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#0170B9]">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-[#0170B9]">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}