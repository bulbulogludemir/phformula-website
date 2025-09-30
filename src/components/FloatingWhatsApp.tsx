"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/905358726752?text=Merhaba%20phFormula!%20%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum%20%F0%9F%8C%9F";

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse lg:hidden"
      aria-label="WhatsApp ile İletişim"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
