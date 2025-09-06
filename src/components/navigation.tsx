"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ShoppingCart, User, Instagram, Search, Heart } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/types/product";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = 0; // This would come from your cart context/state

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-3xl font-black text-black tracking-tight group-hover:text-gray-700 transition-colors">
              <span>ph</span><span className="text-gray-600">Formula</span>
            </div>
            <Badge variant="secondary" className="bg-black text-white text-xs font-bold tracking-wider border-0">MAĞAZA</Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold text-black hover:text-gray-700 transition-colors uppercase tracking-wide">ÜRÜNLER</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-0 bg-white border border-gray-200">
                      <div className="grid gap-0 md:grid-cols-2">
                        {PRODUCT_CATEGORIES.map((category) => (
                          <NavigationMenuLink key={category.id} asChild>
                            <Link
                              href={`/products/${category.id}`}
                              className="block select-none space-y-2 p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-black hover:text-white group border-b border-gray-100 last:border-0"
                            >
                              <div className="text-base font-black leading-none tracking-tight uppercase group-hover:text-white">
                                {category.name}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-600 group-hover:text-gray-300 font-light">
                                {category.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="relative hover:bg-black hover:text-white transition-all duration-300 border-0">
                <Search className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-black hover:text-white transition-all duration-300 border-0">
                <Heart className="h-6 w-6" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600 text-white font-bold border-0">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="sm" className="relative hover:bg-black hover:text-white transition-all duration-300 border-0" asChild>
                <Link href="/cart">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-black text-white font-bold border-0">
                      {cartItemCount}
                    </Badge>
                  )}
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-black hover:text-white transition-all duration-300 border-0">
                <User className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-black hover:text-white transition-all duration-300 border-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-black text-lg text-black uppercase tracking-wider">Kategoriler</h3>
                  {PRODUCT_CATEGORIES.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products/${category.id}`}
                      className="block py-3 px-4 text-base font-bold text-gray-700 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide border border-gray-200 hover:border-black"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="hover:bg-black hover:text-white transition-all duration-300 border-0">
                      <Search className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="sm" className="relative hover:bg-black hover:text-white transition-all duration-300 border-0">
                      <Heart className="h-6 w-6" />
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600 text-white font-bold border-0">
                        3
                      </Badge>
                    </Button>
                    <Button variant="ghost" size="sm" className="relative hover:bg-black hover:text-white transition-all duration-300 border-0" asChild>
                      <Link href="/cart">
                        <ShoppingCart className="h-6 w-6" />
                        {cartItemCount > 0 && (
                          <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-black text-white font-bold border-0">
                            {cartItemCount}
                          </Badge>
                        )}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-black hover:text-white transition-all duration-300 border-0">
                      <User className="h-6 w-6" />
                    </Button>
                  </div>
                  
                  <Button variant="ghost" size="sm" asChild className="hover:bg-black hover:text-white transition-all duration-300 border-0">
                    <Link href="https://instagram.com/phformula" target="_blank">
                      <Instagram className="h-6 w-6" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}