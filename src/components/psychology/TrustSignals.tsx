"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Award, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Truck,
  Crown,
  Globe,
  Heart,
  Zap,
  PhoneCall
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustSignalsProps {
  className?: string;
  variant?: "compact" | "full" | "minimal";
  showStats?: boolean;
  showCertifications?: boolean;
  showGuarantees?: boolean;
}

export function TrustSignals({ 
  className,
  variant = "compact",
  showStats = true,
  showCertifications = true,
  showGuarantees = true
}: TrustSignalsProps) {
  const [currentStat, setCurrentStat] = useState(0);
  
  const liveStats = [
    { label: "Bugün sipariş", value: "73+", icon: Users, color: "text-green-600" },
    { label: "Online müşteri", value: "12", icon: Globe, color: "text-blue-600" },
    { label: "Son 1 saatte", value: "5 sipariş", icon: Clock, color: "text-orange-600" },
    { label: "Bu ay satış", value: "847+", icon: Crown, color: "text-purple-600" }
  ];

  const certifications = [
    { name: "İspanya Kalitesi", icon: Award, color: "bg-blue-100 text-blue-800" },
    { name: "SSL Güvenlik", icon: Shield, color: "bg-green-100 text-green-800" },
    { name: "Orijinal Ürün", icon: CheckCircle, color: "bg-purple-100 text-purple-800" },
    { name: "7/24 Destek", icon: PhoneCall, color: "bg-orange-100 text-orange-800" }
  ];

  const guarantees = [
    { 
      title: "%100 Orijinal", 
      description: "Tüm ürünlerimiz orijinaldir", 
      icon: Award,
      color: "bg-yellow-50 border-yellow-200 text-yellow-800"
    },
    { 
      title: "Hızlı Kargo", 
      description: "1-3 iş günü teslimat", 
      icon: Truck,
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    { 
      title: "Güvenli Ödeme", 
      description: "256-bit SSL şifreleme", 
      icon: Shield,
      color: "bg-green-50 border-green-200 text-green-800"
    },
    { 
      title: "Uzman Desteği", 
      description: "WhatsApp ile anında destek", 
      icon: Heart,
      color: "bg-purple-50 border-purple-200 text-purple-800"
    }
  ];

  useEffect(() => {
    if (showStats) {
      const interval = setInterval(() => {
        setCurrentStat((prev) => (prev + 1) % liveStats.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showStats, liveStats.length]);

  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center justify-center space-x-6", className)}>
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">Güvenli</span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-700">Orijinal</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-orange-600" />
          <span className="text-sm font-medium text-gray-700">Hızlı</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Live Statistics */}
      {showStats && (
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {React.createElement(liveStats[currentStat].icon, {
                  className: `h-6 w-6 ${liveStats[currentStat].color}`
                })}
                <div>
                  <p className="text-sm text-gray-600">{liveStats[currentStat].label}</p>
                  <p className={`text-2xl font-bold ${liveStats[currentStat].color}`}>
                    {liveStats[currentStat].value}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Canlı</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Certifications */}
      {showCertifications && variant !== "compact" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {certifications.map((cert, index) => (
            <Badge key={index} className={cn("justify-center py-2", cert.color)}>
              {React.createElement(cert.icon, { className: "h-4 w-4 mr-1" })}
              {cert.name}
            </Badge>
          ))}
        </div>
      )}

      {/* Customer Reviews Summary */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <div>
                <p className="text-lg font-bold text-yellow-800">4.9/5</p>
                <p className="text-sm text-yellow-700">2.847 değerlendirme</p>
              </div>
            </div>
            <Badge className="bg-yellow-200 text-yellow-800">
              <Crown className="h-4 w-4 mr-1" />
              En Çok Tercih Edilen
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Guarantees */}
      {showGuarantees && variant === "full" && (
        <div className="grid md:grid-cols-2 gap-4">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className={cn("border", guarantee.color)}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  {React.createElement(guarantee.icon, { 
                    className: "h-6 w-6 flex-shrink-0" 
                  })}
                  <div>
                    <p className="font-semibold text-sm">{guarantee.title}</p>
                    <p className="text-xs opacity-90">{guarantee.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Customer Testimonial Ticker */}
      <div className="bg-gray-50 rounded-lg p-4 overflow-hidden">
        <div className="flex items-center space-x-4 animate-pulse">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">A.K.</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-700 font-medium">
              "phFormula ürünleri gerçekten etkili! Cildimde büyük değişim gördüm. ⭐⭐⭐⭐⭐"
            </p>
            <p className="text-xs text-gray-500 mt-1">Ayşe K. - İstanbul (2 gün önce)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Security Badges Component
export function SecurityBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center space-x-4 py-4", className)}>
      <div className="flex items-center space-x-2">
        <Shield className="h-5 w-5 text-green-600" />
        <span className="text-sm font-medium">SSL Güvenlik</span>
      </div>
      <div className="flex items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-blue-600" />
        <span className="text-sm font-medium">Güvenli Ödeme</span>
      </div>
      <div className="flex items-center space-x-2">
        <Award className="h-5 w-5 text-purple-600" />
        <span className="text-sm font-medium">Orijinal Ürün</span>
      </div>
    </div>
  );
}

// Mobile Trust Indicators
export function MobileTrustBar({ className }: { className?: string }) {
  return (
    <div className={cn("bg-green-50 border-t border-green-200 p-3", className)}>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-700 font-medium">Güvenli Bağlantı</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-gray-600">4.9 (2,847)</span>
        </div>
      </div>
    </div>
  );
}