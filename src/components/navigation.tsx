"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Phone, Instagram, ShoppingBag } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/types/product";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#0170B9]">phFormula</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Ürünler</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <div className="grid gap-3 md:grid-cols-2">
                        {PRODUCT_CATEGORIES.map((category) => (
                          <NavigationMenuLink key={category.id} asChild>
                            <Link
                              href={`/products/${category.id}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {category.name}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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

            <Link href="/about" className="text-sm font-medium hover:text-[#0170B9]">
              Hakkımızda
            </Link>
            <Link href="/treatments" className="text-sm font-medium hover:text-[#0170B9]">
              Tedaviler
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[#0170B9]">
              İletişim
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
              <Link href="https://instagram.com/phformula" target="_blank">
                <Instagram className="h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="default" size="sm" asChild className="bg-[#0170B9] hover:bg-[#015a9a]">
              <Link href="/appointment">
                <Phone className="h-4 w-4 mr-2" />
                Randevu Al
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              <div className="px-2 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Ürün Kategorileri</div>
                {PRODUCT_CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    href={`/products/${category.id}`}
                    className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              
              <Link
                href="/about"
                className="block px-2 py-2 text-sm font-medium hover:text-[#0170B9]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/treatments"
                className="block px-2 py-2 text-sm font-medium hover:text-[#0170B9]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tedaviler
              </Link>
              <Link
                href="/contact"
                className="block px-2 py-2 text-sm font-medium hover:text-[#0170B9]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İletişim
              </Link>
              
              <div className="flex space-x-2 px-2 pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="https://instagram.com/phformula" target="_blank">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}