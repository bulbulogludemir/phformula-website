"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Clock, CheckCircle, Zap, Crown, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppOrderProps {
  productName: string;
  productCategory: string;
  className?: string;
  urgent?: boolean;
  premium?: boolean;
}

export function WhatsAppOrder({ 
  productName, 
  productCategory, 
  className,
  urgent = false,
  premium = false 
}: WhatsAppOrderProps) {
  const [isClicked, setIsClicked] = useState(false);
  
  const whatsappNumber = "905551234567"; // Replace with actual number
  
  const createWhatsAppMessage = () => {
    const message = `🌟 Merhaba phFormula Türkiye!

📦 Ürün: ${productName}
📂 Kategori: ${productCategory}

✨ Bu ürün hakkında detaylı bilgi almak ve özel fiyat teklifi için sizinle iletişim kurmak istiyorum.

🎯 İhtiyacım:
• Ürün detayları ve kullanım bilgileri
• Size özel fiyat teklifi
• Teslimat seçenekleri
• Ödeme alternatifleri

📱 En kısa sürede dönüş bekliyorum, teşekkürler!`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    setIsClicked(true);
    const message = createWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Premium Benefits */}
      {premium && (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Crown className="h-5 w-5 text-amber-600" />
            <span className="font-semibold text-amber-800">VIP Müşteri Avantajları</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Özel indirim</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Ücretsiz kargo</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Hızlı teslimat</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Uzman danışmanlık</span>
            </div>
          </div>
        </div>
      )}

      {/* Urgency Banner */}
      {urgent && (
        <div className="bg-red-600 text-white rounded-lg p-3 animate-urgent-pulse">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span className="font-bold">SON FIRSAT!</span>
          </div>
          <p className="text-sm mt-1">Bu özel fiyat sadece bugün geçerli. Hemen sipariş verin!</p>
        </div>
      )}

      {/* Main CTA Button */}
      <Button
        size="lg"
        onClick={handleWhatsAppClick}
        disabled={isClicked}
        className={cn(
          "w-full font-bold py-6 text-lg transition-all duration-300 transform hover:scale-105",
          urgent ? "bg-red-600 hover:bg-red-700 animate-pulse" : "bg-green-600 hover:bg-green-700",
          isClicked && "bg-green-700"
        )}
      >
        <MessageCircle className="mr-3 h-6 w-6" />
        {isClicked ? "WhatsApp Açılıyor..." : "WhatsApp'tan Hemen Sipariş Ver"}
      </Button>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          size="lg"
          onClick={handleWhatsAppClick}
          className="font-semibold py-4 border-2 hover:bg-green-50 hover:border-green-300"
        >
          <Phone className="mr-2 h-5 w-5" />
          Fiyat Sor
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleWhatsAppClick}
          className="font-semibold py-4 border-2 hover:bg-blue-50 hover:border-blue-300"
        >
          <Gift className="mr-2 h-5 w-5" />
          Kampanyalar
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
        <div className="text-center">
          <div className="bg-green-100 rounded-full p-2 w-fit mx-auto mb-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
          </div>
          <p className="text-xs font-medium text-gray-700">Anında Yanıt</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-2 w-fit mx-auto mb-2">
            <CheckCircle className="h-5 w-5 text-blue-600" />
          </div>
          <p className="text-xs font-medium text-gray-700">Güvenli Alışveriş</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 rounded-full p-2 w-fit mx-auto mb-2">
            <Zap className="h-5 w-5 text-purple-600" />
          </div>
          <p className="text-xs font-medium text-gray-700">Hızlı Teslimat</p>
        </div>
      </div>

      {/* Response Time Indicator */}
      <div className="bg-gray-50 rounded-lg p-3 text-center">
        <div className="flex items-center justify-center space-x-2 text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Genellikle 5 dakika içinde yanıt</span>
        </div>
      </div>
    </div>
  );
}

// Quick Contact Sticky Button
export function QuickWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    const message = encodeURIComponent(`Merhaba phFormula! Ürünleriniz hakkında bilgi almak istiyorum. 🌟`);
    const whatsappUrl = `https://wa.me/905551234567?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        style={{ animationIterationCount: '3', animationDelay: '2s' }}
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
      
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-white rounded-lg shadow-lg border animate-slide-up">
          <p className="text-sm font-medium whitespace-nowrap">💬 Hemen WhatsApp'tan yaz!</p>
        </div>
      )}
    </div>
  );
}