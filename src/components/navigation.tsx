"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, MessageCircle, ShoppingBag, Search, Phone, MapPin, Mail } from "lucide-react";
import { getCategories } from "@/lib/products";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const productCategories = getCategories();
    setCategories(productCategories);
  }, []);

  const whatsappUrl = "https://wa.me/905358726752?text=Merhaba%20phFormula!%20%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum%20%F0%9F%8C%9F";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo - Ultra Minimal */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="text-xl sm:text-2xl font-black text-black tracking-tight group-hover:text-gray-700 transition-colors">
              <span>ph</span><span className="text-gray-600">Formula</span>
            </div>
            {/* Ultra thin vertical separator */}
            <div className="w-px h-6 sm:h-8 bg-gray-300"></div>
            {/* NK Beauty Logo - Visible on all screens */}
            <img
              src="/nk-beauty-logo.png"
              alt="NK Beauty"
              className="h-8 sm:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation - Only Products */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/products"
              className="flex items-center space-x-2 text-sm font-bold text-black hover:text-gray-700 transition-colors uppercase tracking-wide"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Ürünler</span>
            </Link>

            {/* Bize Ulaşın - Desktop */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-sm font-bold text-black hover:text-gray-700 transition-colors uppercase tracking-wide">
                <Phone className="h-4 w-4" />
                <span>Bize Ulaşın</span>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-sm text-black uppercase tracking-wide border-b pb-2">İletişim Bilgileri</h3>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-4 w-4 mt-1 text-gray-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Telefon</p>
                      <a href="tel:+905358726752" className="text-sm text-black hover:text-gray-700">
                        +90 535 872 67 52
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">WhatsApp</p>
                      <a href={whatsappUrl} target="_blank" className="text-sm text-black hover:text-gray-700">
                        +90 535 872 67 52
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 mt-1 text-gray-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">E-posta</p>
                      <a href="mailto:info@nkbeauty.com.tr" className="text-sm text-black hover:text-gray-700">
                        info@nkbeauty.com.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 mt-1 text-gray-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Adres</p>
                      <p className="text-sm text-gray-700">
                        İstanbul, Türkiye
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2 h-8 transition-all duration-300"
              asChild
            >
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-3 w-3" />
                WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation - Ultra Minimal */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4">
              <div className="space-y-4">
                {/* All Products Link */}
                <Link
                  href="/products"
                  className="flex items-center space-x-3 py-3 px-4 bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 font-bold text-sm uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Tüm Ürünler</span>
                  <Badge className="ml-auto bg-black text-white text-xs">
                    {categories.reduce((total, cat) => total + cat.count, 0)}
                  </Badge>
                </Link>

                {/* Categories */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wide px-4">Kategoriler</h3>
                  {categories.slice(0, 6).map((category) => (
                    <Link
                      key={category.id}
                      href={`/products?category=${category.id}`}
                      className="flex items-center justify-between py-2 px-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </div>
                
                {/* Mobile WhatsApp CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 transition-all duration-300"
                    asChild
                  >
                    <Link href={whatsappUrl} target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp ile İletişim
                    </Link>
                  </Button>
                </div>

                {/* Search */}
                <div className="pt-2">
                  <Link
                    href="/products?search=true"
                    className="flex items-center space-x-3 py-2 px-4 text-sm text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Search className="h-4 w-4" />
                    <span>Ürün Ara</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}