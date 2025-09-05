"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle,
  User,
  Mail
} from "lucide-react";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    notes: ""
  });

  const services = [
    { id: "skin-analysis", name: "Cilt Analizi", duration: "30 dk", price: "Ücretsiz" },
    { id: "consultation", name: "Ürün Danışmanlığı", duration: "20 dk", price: "Ücretsiz" },
    { id: "peel-treatment", name: "Peeling Tedavisi", duration: "60 dk", price: "Fiyat Bilgisi İçin Arayın" },
    { id: "skincare-routine", name: "Kişisel Cilt Bakım Programı", duration: "45 dk", price: "Fiyat Bilgisi İçin Arayın" },
    { id: "acne-treatment", name: "Akne Tedavi Planı", duration: "60 dk", price: "Fiyat Bilgisi İçin Arayın" },
    { id: "anti-aging", name: "Yaşlanma Karşıtı Program", duration: "60 dk", price: "Fiyat Bilgisi İçin Arayın" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppBooking = () => {
    const selectedService = services.find(s => s.id === formData.service);
    const serviceName = selectedService ? selectedService.name : "Genel Danışmanlık";
    
    const message = `🎯 RANDEVU TALEBİ

👤 Ad Soyad: ${formData.name}
📱 Telefon: ${formData.phone}
📧 E-posta: ${formData.email}
🔬 Hizmet: ${serviceName}
📅 Tercih Edilen Tarih: ${formData.preferredDate}
📝 Notlar: ${formData.notes}

Merhaba! phFormula cilt bakım merkezi için randevu almak istiyorum. Yukarıda bilgilerimi paylaştım. En uygun tarih ve saati ayarlayabilir misiniz?

Teşekkürler! 🌟`;

    const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDirectCall = () => {
    window.open('tel:+905551234567');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#0170B9] to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-blue-100 text-[#0170B9]">
              Ücretsiz Konsültasyon
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Randevunuzu Alın
            </h1>
            <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Uzman estetisyenlerimizle cildinizi analiz edin ve size özel phFormula 
              ürünlerini keşfedin. İlk konsültasyonunuz tamamen ücretsizdir.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calendar className="mr-3 h-6 w-6 text-[#0170B9]" />
                  Randevu Bilgileri
                </CardTitle>
                <CardDescription>
                  Bilgilerinizi doldurun, size en kısa sürede dönüş yapalım
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Ad Soyad *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Adınız ve soyadınız"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Telefon Numarası *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+90 5XX XXX XX XX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    E-posta
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-medium">
                    Hizmet Seçimi *
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#0170B9] focus:border-transparent"
                    required
                  >
                    <option value="">Hizmet seçiniz</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} ({service.duration}) - {service.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="text-sm font-medium">
                    Tercih Edilen Tarih/Saat
                  </Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="text"
                    placeholder="Örn: 15 Mart Cuma, öğleden sonra"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm font-medium">
                    Ek Notlar
                  </Label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Cilt problemleriniz, özel istekleriniz veya sorularınız..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-[#0170B9] focus:border-transparent"
                    rows={4}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    onClick={handleWhatsAppBooking}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white h-12 font-semibold"
                    disabled={!formData.name || !formData.phone}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp ile Gönder
                  </Button>
                  <Button
                    onClick={handleDirectCall}
                    variant="outline"
                    className="flex-1 h-12 font-semibold"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Hemen Ara
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">İletişim Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#0170B9]" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href="tel:+905551234567" className="text-[#0170B9] hover:underline">
                      +90 555 123 45 67
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a 
                      href="https://wa.me/905551234567" 
                      target="_blank"
                      className="text-green-600 hover:underline"
                    >
                      Hemen Mesaj Gönder
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-sm text-gray-600">
                      Ataşehir, İstanbul<br />
                      Türkiye
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-[#0170B9]" />
                  Çalışma Saatleri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Pazartesi - Cuma</span>
                  <span className="text-sm font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Cumartesi</span>
                  <span className="text-sm font-medium">10:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pazar</span>
                  <span className="text-sm font-medium text-red-500">Kapalı</span>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Star className="mr-2 h-5 w-5 text-yellow-500" />
                  Randevu Avantajları
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Ücretsiz cilt analizi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Kişisel ürün önerileri</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Uzman estetisyen danışmanlığı</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Özel indirim fırsatları</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}