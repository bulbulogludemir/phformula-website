"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Phone, 
  Clock, 
  CheckCircle, 
  Zap, 
  Crown, 
  Gift,
  Users,
  Star,
  ArrowRight,
  Shield,
  Truck,
  Heart,
  ChevronRight,
  Play,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileWhatsAppOrderProps {
  productName: string;
  productCategory: string;
  className?: string;
  urgent?: boolean;
  premium?: boolean;
  inStock?: boolean;
}

export function MobileWhatsAppOrder({ 
  productName, 
  productCategory, 
  className,
  urgent = false,
  premium = false,
  inStock = true
}: MobileWhatsAppOrderProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [showTrustDetails, setShowTrustDetails] = useState(false);
  
  const whatsappNumber = "905551234567";
  
  // Mobile-optimized offers with psychological triggers
  const mobileOffers = [
    { icon: Gift, text: "Size Özel İndirim", color: "bg-purple-500", pulse: true },
    { icon: Zap, text: "5 Dk İçinde Yanıt", color: "bg-orange-500", pulse: false },
    { icon: Crown, text: "VIP Müşteri Avantajları", color: "bg-gold-500", pulse: true },
    { icon: Heart, text: "Ücretsiz Kargo", color: "bg-red-500", pulse: false },
  ];

  // Trust indicators specifically optimized for mobile psychology
  const mobileTrustElements = [
    { icon: Shield, label: "256-bit SSL", description: "Güvenli Bağlantı" },
    { icon: Star, label: "4.9/5 Puan", description: "2.847 Değerlendirme" },
    { icon: Users, label: "10K+ Müşteri", description: "Mutlu Alıcılar" },
    { icon: Truck, label: "1-3 Gün", description: "Hızlı Teslimat" },
  ];

  useEffect(() => {
    // Cycle through offers for mobile attention optimization
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % mobileOffers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const createMobileOptimizedMessage = () => {
    const message = `🌟 Merhaba phFormula Türkiye!

📱 HIZLI SİPARİŞ
📦 Ürün: ${productName}
📂 Kategori: ${productCategory}

💎 Size özel avantajlar:
✅ Özel indirim fiyatı
✅ Ücretsiz hızlı kargo
✅ %100 orijinallik garantisi
✅ WhatsApp ile kolay iletişim

🎯 Hemen bilgi almak ve sipariş vermek istiyorum!

📞 Size en uygun ödeme ve teslimat seçeneklerini öğrenmek için bekliyorum.

⚡ Teşekkürler!`;
    
    return encodeURIComponent(message);
  };

  const handleMobileWhatsAppClick = () => {
    setIsClicked(true);
    const message = createMobileOptimizedMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Mobile haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate([50, 30, 50]);
    }
    
    window.open(whatsappUrl, '_blank');
    
    setTimeout(() => setIsClicked(false), 3000);
  };

  const handleQuickAction = (action: string) => {
    const messages = {
      price: `Merhaba! ${productName} için özel fiyat bilgisi almak istiyorum. Size özel indirimli fiyat var mı? 💰`,
      campaign: `Merhaba! Güncel kampanyalarınızı öğrenmek istiyorum. ${productName} için özel teklifleriniz var mı? 🎁`,
      info: `Merhaba! ${productName} hakkında detaylı bilgi alabilir miyim? Kullanım şekli, faydaları ve özelliklerini öğrenmek istiyorum. ℹ️`
    };
    
    const selectedMessage = messages[action as keyof typeof messages];
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(selectedMessage)}`;
    
    if (navigator.vibrate) {
      navigator.vibrate([30]);
    }
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={cn("space-y-4 pb-6", className)}>
      {/* Mobile-Optimized Urgency Banner */}
      {urgent && (
        <Card className="bg-gradient-to-r from-red-500 to-red-600 border-0 shadow-lg animate-pulse">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 animate-spin" />
                <div>
                  <p className="font-bold text-sm">SON FIRSAT!</p>
                  <p className="text-xs opacity-90">Bugün sadece</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black">%30</p>
                <p className="text-xs">İNDİRİM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Premium Mobile Benefits */}
      {premium && (
        <Card className="bg-gradient-to-r from-purple-50 to-amber-50 border border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-gold-600 rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-purple-900 text-sm">VIP MÜŞTERİ AYRICALIKLARI</p>
                <p className="text-xs text-purple-700">Özel fiyat + Ücretsiz kargo + Hızlı teslimat</p>
              </div>
              <ChevronRight className="h-5 w-5 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mobile-Optimized Main CTA - Touch-friendly 48px+ height */}
      <Button
        size="lg"
        onClick={handleMobileWhatsAppClick}
        disabled={isClicked || !inStock}
        className={cn(
          "w-full font-bold py-6 px-6 text-lg transition-all duration-300 transform active:scale-95",
          "min-h-[48px] touch-manipulation", // 48px minimum for mobile touch
          "shadow-lg hover:shadow-xl",
          urgent 
            ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800" 
            : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
          !inStock && "bg-gray-400 cursor-not-allowed",
          isClicked && "bg-green-800"
        )}
        style={{ 
          borderRadius: '12px',
          fontSize: '18px',
          fontWeight: '700'
        }}
      >
        <div className="flex items-center justify-center space-x-3">
          <MessageCircle className="h-7 w-7" />
          <div className="text-center">
            <p className="leading-tight">
              {isClicked 
                ? "WhatsApp Açılıyor..." 
                : !inStock 
                  ? "Stokta Yok - Bilgi Al"
                  : "WhatsApp'tan Hemen Sipariş Ver"
              }
            </p>
            {!isClicked && inStock && (
              <p className="text-xs opacity-90 font-normal">5 saniye içinde yanıt</p>
            )}
          </div>
        </div>
      </Button>

      {/* Mobile Quick Actions - Progressive Disclosure */}
      <div className="grid grid-cols-3 gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuickAction('price')}
          className="h-14 flex-col space-y-1 border-2 hover:bg-green-50 hover:border-green-300 active:scale-95 transition-all touch-manipulation"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-semibold">Fiyat Sor</span>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuickAction('campaign')}
          className="h-14 flex-col space-y-1 border-2 hover:bg-purple-50 hover:border-purple-300 active:scale-95 transition-all touch-manipulation"
        >
          <Gift className="h-5 w-5" />
          <span className="text-xs font-semibold">Kampanya</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handleQuickAction('info')}
          className="h-14 flex-col space-y-1 border-2 hover:bg-blue-50 hover:border-blue-300 active:scale-95 transition-all touch-manipulation"
        >
          <Sparkles className="h-5 w-5" />
          <span className="text-xs font-semibold">Detay Al</span>
        </Button>
      </div>

      {/* Rotating Mobile Offers */}
      <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                mobileOffers[currentOffer].color,
                mobileOffers[currentOffer].pulse && "animate-pulse"
              )}>
                {React.createElement(mobileOffers[currentOffer].icon, { 
                  className: "h-5 w-5 text-white" 
                })}
              </div>
              <div>
                <p className="font-bold text-sm text-gray-800">
                  {mobileOffers[currentOffer].text}
                </p>
                <p className="text-xs text-gray-600">WhatsApp ile öğren</p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400" />
          </div>
        </CardContent>
      </Card>

      {/* Mobile Trust Indicators with Progressive Disclosure */}
      <Card className="border border-green-200 bg-green-50">
        <CardContent className="p-4">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowTrustDetails(!showTrustDetails)}
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-800">
                Güvenlik ve Kalite Garantisi
              </span>
            </div>
            <ChevronRight className={cn(
              "h-4 w-4 text-green-600 transition-transform duration-200",
              showTrustDetails && "transform rotate-90"
            )} />
          </div>
          
          {showTrustDetails && (
            <div className="grid grid-cols-2 gap-3 mt-4 animate-slide-down">
              {mobileTrustElements.map((trust, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 bg-white rounded-lg">
                  <trust.icon className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{trust.label}</p>
                    <p className="text-xs text-gray-600">{trust.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Mobile-Optimized Response Time */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-bold text-gray-800">Canlı Destek</span>
        </div>
        <p className="text-xs text-gray-600">
          Ortalama yanıt süresi: <span className="font-semibold text-green-600">2-5 dakika</span>
        </p>
        <div className="flex justify-center mt-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile-Optimized Sticky WhatsApp Button
export function MobileStickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    // Show tooltip after 3 seconds for first-time users
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(`Merhaba phFormula! Ürünleriniz hakkında bilgi almak istiyorum. 🌟`);
    const whatsappUrl = `https://wa.me/905551234567?text=${message}`;
    
    if (navigator.vibrate) {
      navigator.vibrate([50, 30, 50]);
    }
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={cn(
      "fixed bottom-6 right-4 z-50 transition-all duration-300",
      isVisible ? "translate-y-0" : "translate-y-20"
    )}>
      {/* Mobile-optimized tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg animate-slide-up">
          <p className="whitespace-nowrap">💬 Hemen yaz!</p>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      )}
      
      <Button
        size="lg"
        onClick={handleClick}
        className={cn(
          "w-14 h-14 rounded-full p-0 shadow-2xl border-4 border-white",
          "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
          "transform hover:scale-110 active:scale-95 transition-all duration-300",
          "animate-bounce"
        )}
        style={{ 
          animationIterationCount: '3', 
          animationDelay: '2s',
          minWidth: '56px',
          minHeight: '56px'
        }}
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></div>
    </div>
  );
}