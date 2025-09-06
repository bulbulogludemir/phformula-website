"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft,
  Truck,
  Shield,
  CreditCard,
  Tag,
  Gift,
  MessageCircle,
  Clock,
  CheckCircle,
  Crown,
  Zap
} from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image?: string;
  inStock: boolean;
}

export default function CartPage() {
  // Sample cart data - in real app this would come from context/state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "hydra-serum",
      name: "HYDRA Serum 30ml",
      category: "Serumlar",
      price: 299,
      quantity: 1,
      inStock: true
    },
    {
      id: "vita-c-serum",
      name: "VITA C Serum 30ml",
      category: "Serumlar",
      price: 349,
      quantity: 2,
      inStock: true
    },
    {
      id: "age-recovery",
      name: "AGE Recovery 30ml",
      category: "Tedavi Ürünleri",
      price: 399,
      quantity: 1,
      inStock: true
    }
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "welcome10") {
      setAppliedCoupon("WELCOME10 - %10 İndirim");
      setCouponCode("");
    } else {
      alert("Geçersiz kupon kodu");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? subtotal * 0.1 : 0;
  const shippingCost = subtotal >= 250 ? 0 : 29.90;
  const total = subtotal - discount + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Sepetiniz Boş
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Alışverişe başlamak için ürünlerimizi keşfedin
              </p>
              <div className="space-y-4">
                <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white font-bold">
                  <Link href="https://wa.me/905551234567?text=Merhaba%20phFormula!%20Ürünleriniz%20hakkında%20bilgi%20almak%20ve%20alışveriş%20yapmak%20istiyorum%20🛒">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WhatsApp'tan Alışveriş Yap
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-black text-black hover:bg-black hover:text-white font-bold">
                  <Link href="/products">
                    Ürünleri Keşfet
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" asChild className="mr-4">
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Alışverişe Devam
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">
            Alışveriş Sepeti ({cartItems.length} ürün)
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-sm bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-xs text-gray-500 text-center">
                        Ürün<br />Görseli
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.category}</p>
                          <Badge variant={item.inStock ? "default" : "destructive"} className="mt-2">
                            {item.inStock ? "Stokta" : "Stok Tükendi"}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            {item.price}₺
                          </p>
                          <p className="text-sm text-gray-600">
                            Toplam: {(item.price * item.quantity)}₺
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="hover:bg-black hover:text-white"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input 
                            value={item.quantity} 
                            className="w-16 text-center"
                            readOnly
                          />
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="hover:bg-black hover:text-white"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Kaldır
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon */}
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Tag className="h-5 w-5 mr-2 text-green-600" />
                  İndirim Kuponu
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!appliedCoupon ? (
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Kupon kodunu girin"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button onClick={applyCoupon} variant="outline" className="hover:bg-black hover:text-white">
                      Uygula
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-medium">{appliedCoupon}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setAppliedCoupon(null)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Sipariş Özeti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ara Toplam</span>
                  <span className="font-medium">{subtotal}₺</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>İndirim</span>
                    <span>-{discount.toFixed(2)}₺</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Ücretsiz</span>
                    ) : (
                      `${shippingCost}₺`
                    )}
                  </span>
                </div>

                {subtotal < 250 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-sm text-yellow-800">
                      <Gift className="h-4 w-4 inline mr-1" />
                      {(250 - subtotal).toFixed(2)}₺ daha alışveriş yaparak ücretsiz kargo kazanın!
                    </p>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Toplam</span>
                    <span className="text-black">{total.toFixed(2)}₺</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-3 pt-6">
                {/* WhatsApp CTA */}
                <div className="w-full bg-green-600 text-white rounded-lg p-4 mb-4">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Crown className="h-5 w-5" />
                      <span className="font-bold">ÖZEL FİYAT TEKLİFİ!</span>
                    </div>
                    <p className="text-sm opacity-90">WhatsApp'tan sipariş verin, size özel indirimli fiyat alın!</p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold animate-pulse"
                  onClick={() => {
                    const items = cartItems.map(item => `• ${item.name} (${item.quantity} adet)`).join('\n');
                    const message = `Merhaba phFormula! Sepetimde şu ürünler var ve sipariş vermek istiyorum:\n\n${items}\n\nToplam: ${total.toFixed(2)}₺\n\nSize özel indirimli fiyat alabilir miyim? 🛒✨`;
                    window.open(`https://wa.me/905551234567?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WHATSAPP'TAN SİPARİŞ VER
                </Button>
                
                <div className="w-full text-center">
                  <p className="text-xs text-gray-600 mb-2">veya</p>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-black text-black hover:bg-black hover:text-white font-bold"
                    asChild
                  >
                    <Link href="/checkout">
                      Ödeme Sayfasına Git
                    </Link>
                  </Button>
                </div>
                
                {/* Urgency indicator */}
                <div className="w-full bg-red-600 text-white rounded-lg p-3 animate-pulse">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span className="font-bold">STOKLAR SINIRLI - HEMEN SİPARİŞ VER!</span>
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Trust Badges */}
            <Card className="border-0 shadow-sm bg-blue-50">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-800">256-bit SSL Güvenli Ödeme</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span className="text-green-800">1-3 İş Günü Hızlı Kargo</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CreditCard className="h-4 w-4 text-purple-600" />
                  <span className="text-purple-800">6 Taksit İmkanı</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}