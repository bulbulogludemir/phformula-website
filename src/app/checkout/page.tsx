"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  Shield, 
  CheckCircle,
  MapPin,
  User,
  Phone,
  Mail,
  Package,
  MessageCircle,
  Clock,
  Crown,
  Zap,
  Gift
} from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function CheckoutPage() {
  // Sample cart data - this would come from cart context/state
  const [cartItems] = useState<CartItem[]>([
    {
      id: "hydra-serum",
      name: "HYDRA Serum 30ml",
      category: "Serumlar",
      price: 299,
      quantity: 1,
    },
    {
      id: "vita-c-serum",
      name: "VITA C Serum 30ml",
      category: "Serumlar",
      price: 349,
      quantity: 2,
    },
  ]);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Türkiye",
  });

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 250 ? 0 : 29.90;
  const tax = subtotal * 0.18; // KDV %18
  const total = subtotal + shipping + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Siparişiniz başarıyla oluşturuldu! E-posta adresinize onay gönderilecektir.");
    setIsProcessing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setShippingInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" asChild className="mr-4">
            <Link href="/cart">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Sepete Dön
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Ödeme</h1>
        </div>
        
        {/* WhatsApp Alternative */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 mb-8 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Crown className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                DAHA HİZLI VE GÜVENLİ ALİŞVERİŞ!
              </h2>
            </div>
            <p className="text-xl font-light leading-relaxed max-w-2xl mx-auto">
              WhatsApp'tan sipariş vererek özel indirimler kazanın ve uzmanlarımızdan ücretsiz danışmanlık alın!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-green-700 hover:bg-gray-100 font-bold py-4 px-8 text-lg"
                onClick={() => {
                  const items = cartItems.map(item => `• ${item.name} (${item.quantity} adet - ${item.price}₺)`).join('\n');
                  const message = `Merhaba phFormula! Sipariş vermek istiyorum:\n\n🛒 SEPETİM:\n${items}\n\n💰 TOPLAM: ${total.toFixed(2)}₺\n\n🎁 Size özel indirim var mı? Lütfen en iyi fiyatı verin!\n\n🚚 Teslimat: Hızlı kargo istiyorum.`;
                  window.open(`https://wa.me/905551234567?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                WHATSAPP'TAN SİPARİŞ VER
              </Button>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Özel İndirim</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2" />
                    <span>5 Dk Yanıt</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>Güvenli</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">Bu gün WhatsApp'tan siperiş verenlere özel %15 indirim!</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">veya klasik ödeme formunu kullanabilirsiniz:</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Shipping Information */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-black" />
                  Teslimat Bilgileri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ad *</Label>
                    <Input
                      id="firstName"
                      value={shippingInfo.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Soyad *</Label>
                    <Input
                      id="lastName"
                      value={shippingInfo.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={shippingInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={shippingInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adres *</Label>
                  <Textarea
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Şehir *</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Posta Kodu *</Label>
                    <Input
                      id="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-black" />
                  Ödeme Yöntemi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div 
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "credit-card" ? "border-black bg-gray-50" : "border-gray-200"
                    }`}
                    onClick={() => setPaymentMethod("credit-card")}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value="credit-card"
                        checked={paymentMethod === "credit-card"}
                        readOnly
                      />
                      <CreditCard className="h-5 w-5" />
                      <span className="font-medium">Kredi/Banka Kartı</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-8 mt-1">
                      Tüm kredi kartları kabul edilir
                    </p>
                  </div>

                  <div 
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === "bank-transfer" ? "border-black bg-gray-50" : "border-gray-200"
                    }`}
                    onClick={() => setPaymentMethod("bank-transfer")}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="payment"
                        value="bank-transfer"
                        checked={paymentMethod === "bank-transfer"}
                        readOnly
                      />
                      <Package className="h-5 w-5" />
                      <span className="font-medium">Havale/EFT</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-8 mt-1">
                      Banka hesabımıza havale yapabilirsiniz
                    </p>
                  </div>
                </div>

                {paymentMethod === "credit-card" && (
                  <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium">Kart Bilgileri</p>
                    <p className="text-sm text-gray-600">
                      Güvenli ödeme için 3D Secure doğrulaması kullanılmaktadır.
                    </p>
                  </div>
                )}

                {paymentMethod === "bank-transfer" && (
                  <div className="space-y-2 mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium">Banka Hesap Bilgileri:</p>
                    <p className="text-sm text-gray-600">
                      İş Bankası<br />
                      IBAN: TR12 0006 4000 0011 2345 6789 01<br />
                      Hesap Adı: phFormula Turkey Ltd.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Sipariş Özeti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.category}</p>
                      <p className="text-xs text-gray-600">Adet: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium">
                      {(item.price * item.quantity)}₺
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Ara Toplam</span>
                    <span>{subtotal}₺</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Kargo</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">Ücretsiz</span>
                      ) : (
                        `${shipping}₺`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>KDV (%18)</span>
                    <span>{tax.toFixed(2)}₺</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Toplam</span>
                    <span className="text-black">{total.toFixed(2)}₺</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-green-800">SSL Güvenli Ödeme</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-800">%100 Orijinal Ürün Garantisi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-green-600" />
                    <span className="text-green-800">1-3 İş Günü Hızlı Teslimat</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Place Order Button */}
            <Button 
              size="lg" 
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4"
              onClick={handleSubmit}
              disabled={isProcessing}
            >
              {isProcessing ? "İşleniyor..." : `Siparişi Tamamla - ${total.toFixed(2)}₺`}
            </Button>

            <p className="text-xs text-gray-600 text-center">
              Siparişi tamamlayarak{" "}
              <Link href="/terms" className="text-black hover:underline">
                Kullanım Şartlarını
              </Link>{" "}
              kabul etmiş olursunuz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}