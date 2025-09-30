import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ThemeProvider } from "next-themes";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateTurkishSEOTitle, generateTurkishSEODescription, generateTurkishKeywords } from "@/lib/seo";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// Ultra-optimized SEO metadata for Turkish market
export const metadata: Metadata = {
  title: generateTurkishSEOTitle("phFormula Türkiye", undefined, true),
  description: generateTurkishSEODescription(
    "Türkiye'nin #1 phFormula distribütörü. İspanya kalitesinde orijinal cilt bakım ürünleri, profesyonel dermokozmetik çözümler.",
    "Premium cilt bakım",
    true
  ),
  keywords: generateTurkishKeywords("phformula cilt bakım", "dermokozmetik", true).join(", "),
  authors: [{ name: "phFormula Türkiye", url: "https://phformula.com.tr" }],
  creator: "phFormula Türkiye",
  publisher: "phFormula Türkiye",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  
  // Open Graph optimization
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "phFormula Türkiye - Premium Cilt Bakım Ürünleri | #1 Online Mağaza",
    description: "✓ %100 Orijinal ✓ Hızlı Teslimat ✓ WhatsApp Sipariş ✓ Özel Fiyat - Türkiye'nin en güvenilir phFormula distribütörü!",
    url: "https://phformula.com.tr",
    siteName: "phFormula Türkiye",
    images: [
      {
        url: "https://phformula.com.tr/og-image.webp",
        width: 1200,
        height: 630,
        alt: "phFormula Türkiye - Premium Cilt Bakım Ürünleri",
        type: "image/webp"
      }
    ]
  },
  
  // Twitter optimization
  twitter: {
    card: "summary_large_image",
    site: "@phformula_tr",
    creator: "@phformula_tr",
    title: "phFormula Türkiye - Premium Cilt Bakım Ürünleri",
    description: "✓ %100 Orijinal ✓ Hızlı Teslimat ✓ WhatsApp Sipariş - Türkiye'nin #1 phFormula mağazası!",
    images: ["https://phformula.com.tr/twitter-image.webp"]
  },
  
  // Verification and ownership
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  },
  
  // Additional metadata for Turkish market
  other: {
    "geo.region": "TR",
    "geo.country": "Turkey",
    "geo.placename": "Turkey",
    "ICBM": "41.0082, 28.9784",
    "DC.title": "phFormula Türkiye - Premium Cilt Bakım Ürünleri",
    "DC.creator": "phFormula Türkiye",
    "DC.subject": "cilt bakım ürünleri, dermokozmetik, phformula",
    "DC.description": "Türkiye'nin en güvenilir phFormula distribütörü",
    "DC.language": "tr",
    "DC.coverage": "Turkey",
    "content-language": "tr",
    "distribution": "Global",
    "rating": "general",
    "revisit-after": "1 day",
    "classification": "e-commerce, beauty, skincare",
    "category": "E-commerce",
    "target": "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
    "apple-mobile-web-app-title": "phFormula TR",
    "application-name": "phFormula Türkiye",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000"
  }
};

// Optimized viewport for Core Web Vitals
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="tr-TR" 
      dir="ltr"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        {/* Core Web Vitals Optimization - Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <StructuredData />
      </head>
      <body
        className={`${roboto.variable} ${robotoMono.variable} font-sans antialiased min-h-screen bg-white text-gray-900`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
