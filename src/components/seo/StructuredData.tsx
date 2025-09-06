"use client";

import { ProductSEO, LocalBusinessSEO } from "@/lib/seo";
import { Product, ProductCategory } from "@/types/product";

interface StructuredDataProps {
  children?: React.ReactNode;
}

// Organization Schema for phFormula Turkey
export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "phFormula Türkiye",
    "alternateName": ["phFormula Turkey", "phFormula TR"],
    "description": "Türkiye'nin önde gelen profesyonel cilt bakım ürünleri e-ticaret mağazası. İsviçre kalitesinde orijinal phFormula ürünleri.",
    "url": "https://phformula.com.tr",
    "logo": "https://phformula.com.tr/logo.webp",
    "image": "https://phformula.com.tr/og-image.webp",
    "telephone": "+90 555 123 4567",
    "email": "info@phformula.com.tr",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressRegion": "İstanbul",
      "addressLocality": "İstanbul",
      "postalCode": "34000",
      "streetAddress": "Merkez Mahallesi, Güzellik Caddesi No:1"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Turkey",
        "alternateName": "Türkiye"
      }
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Turkey"
    },
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Organization",
        "name": "phFormula International"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50"
    },
    "slogan": "Premium Cilt Bakım Ürünleri - İsviçre Kalitesi",
    "award": ["Türkiye'nin En Güvenilir Online Kozmetik Mağazası"],
    "brand": {
      "@type": "Brand",
      "name": "phFormula",
      "logo": "https://phformula.com.tr/logo.webp",
      "description": "Professional skincare products from Switzerland"
    },
    "sameAs": [
      "https://www.instagram.com/phformula_turkiye",
      "https://www.facebook.com/phformulaturkiye",
      "https://twitter.com/phformula_tr",
      "https://www.youtube.com/@phformulaturkiye"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90 555 123 4567",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"],
        "areaServed": "TR",
        "hoursAvailable": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ]
      },
      {
        "@type": "ContactPoint",
        "url": "https://wa.me/905551234567",
        "contactType": "customer support",
        "availableLanguage": "Turkish",
        "name": "WhatsApp Destek"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "description": "Premium cilt bakım ürünleri özel fiyatlarla",
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "100",
        "maxPrice": "2000",
        "priceCurrency": "TRY"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData).replace(/</g, '\\u003c')
      }}
    />
  );
}

// Website Schema
export function WebsiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "phFormula Türkiye",
    "alternateName": "phFormula Turkey Online Mağaza",
    "description": "Türkiye'nin en güvenilir phFormula distribütörü. Orijinal cilt bakım ürünleri, hızlı teslimat, WhatsApp ile kolay sipariş.",
    "url": "https://phformula.com.tr",
    "inLanguage": "tr-TR",
    "isAccessibleForFree": true,
    "isFamilyFriendly": true,
    "creator": {
      "@type": "Organization",
      "name": "phFormula Türkiye"
    },
    "publisher": {
      "@type": "Organization",
      "name": "phFormula Türkiye",
      "logo": {
        "@type": "ImageObject",
        "url": "https://phformula.com.tr/logo.webp"
      }
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://phformula.com.tr/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "OrderAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://wa.me/905551234567?text={order_message}",
          "actionPlatform": "https://schema.org/MobileWebPlatform"
        },
        "query-input": "required name=order_message"
      }
    ],
    "mainEntity": {
      "@type": "ItemList",
      "name": "phFormula Ürün Kategorileri",
      "description": "Premium cilt bakım ürün kategorilerimiz",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Temizleyiciler",
          "description": "Her cilt tipi için nazik ama etkili temizleyici ürünler"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Tedavi ve İyileştirme",
          "description": "Özel cilt sorunları için hedefli tedavi ürünleri"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Serumlar ve Temel Ürünler",
          "description": "Gelişmiş sonuçlar için yüksek konsantrasyonlu aktif bileşenler"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData).replace(/</g, '\\u003c')
      }}
    />
  );
}

// Product Schema for individual products
export function ProductSchema({ product, category }: { product: Product; category: ProductCategory }) {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "phFormula",
      "logo": "https://phformula.com.tr/logo.webp",
      "manufacturer": {
        "@type": "Organization",
        "name": "phFormula",
        "url": "https://phformula.com"
      }
    },
    "category": category.name,
    "productID": product.product_id,
    "sku": product.product_id,
    "gtin": `phf${product.product_id}`,
    "mpn": product.product_id.toUpperCase(),
    "image": [
      `https://phformula.com.tr/images/${product.product_id}-1.png`,
      `https://phformula.com.tr/images/${product.product_id}-2.png`,
      `https://phformula.com.tr/images/${product.product_id}-3.png`
    ],
    "url": `https://phformula.com.tr/products/${category.id}/${product.product_id}`,
    "mainEntityOfPage": `https://phformula.com.tr/products/${category.id}/${product.product_id}`,
    "manufacturer": {
      "@type": "Organization",
      "name": "phFormula",
      "url": "https://phformula.com"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://phformula.com.tr/products/${category.id}/${product.product_id}`,
      "priceCurrency": "TRY",
      "price": "Özel Fiyat", // Hidden pricing strategy
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "phFormula Türkiye",
        "url": "https://phformula.com.tr"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "TRY"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          }
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "TR"
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/ReturnFeesCustomerResponsibility"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating || 4.8,
      "reviewCount": product.reviewCount || 124,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ayşe K."
        },
        "datePublished": "2024-01-15",
        "description": "Muhteşem bir ürün! Cildimdeki değişimi 2 haftada gördüm. kesinlikle tavsiye ederim.",
        "name": "Harika sonuç!",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": 5,
          "ratingValue": 5,
          "worstRating": 1
        }
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Mehmet B."
        },
        "datePublished": "2024-01-10",
        "description": "Orijinal ürün, hızlı teslimat. phFormula kalitesi gerçekten farklı.",
        "name": "Mükemmel hizmet",
        "reviewRating": {
          "@type": "Rating",
          "bestRating": 5,
          "ratingValue": 5,
          "worstRating": 1
        }
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Menşei",
        "value": "İsviçre"
      },
      {
        "@type": "PropertyValue", 
        "name": "Cilt Tipi",
        "value": "Tüm cilt tipleri"
      },
      {
        "@type": "PropertyValue",
        "name": "Kullanım",
        "value": product.usage || "Günlük kullanım için uygundur"
      }
    ]
  };

  // Add ingredients if available
  if (product.ingredients && product.ingredients.length > 0) {
    productData.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Aktif Bileşenler",
      "value": product.ingredients.join(", ")
    });
  }

  // Add benefits if available
  if (product.benefits && product.benefits.length > 0) {
    productData.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Faydaları",
      "value": product.benefits.join(", ")
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productData).replace(/</g, '\\u003c')
      }}
    />
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({ breadcrumbs }: { 
  breadcrumbs: Array<{ name: string; url: string }> 
}) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": {
        "@type": "WebPage",
        "url": crumb.url,
        "name": crumb.name
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData).replace(/</g, '\\u003c')
      }}
    />
  );
}

// FAQ Schema for better SERP features
export function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "phFormula ürünleri orijinal mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, satışını yaptığımız tüm phFormula ürünleri %100 orijinaldir ve direkt olarak resmi distribütörden temin edilmektedir. Her ürünün orijinallik belgesi mevcuttur."
        }
      },
      {
        "@type": "Question",
        "name": "Teslimat süresi ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Siparişleriniz 1-3 iş günü içerisinde kargolanır ve adresinize teslim edilir. İstanbul ve Ankara için aynı gün teslimat seçeneği de mevcuttur."
        }
      },
      {
        "@type": "Question",
        "name": "WhatsApp ile nasıl sipariş verebilirim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ürün sayfalarındaki 'WhatsApp ile Sipariş Ver' butonuna tıklayarak direkt olarak uzmanlarımızla iletişime geçebilir, ürün hakkında detaylı bilgi alabilir ve siparişinizi verebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "İade ve değişim koşulları neler?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ürünlerinizi teslim aldıktan sonra 14 gün içerisinde, açılmamış ve orijinal ambalajında olmak koşuluyla iade edebilirsiniz. Değişim işlemleri için WhatsApp üzerinden iletişime geçebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WhatsApp üzerinden sipariş verdikten sonra, kredi kartı, banka havalesi, EFT ve kapıda ödeme seçenekleri ile ödemenizi gerçekleştirebilirsiniz. Taksit imkanları mevcuttur."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData).replace(/</g, '\\u003c')
      }}
    />
  );
}

// Main Structured Data Component
export function StructuredData({ children }: StructuredDataProps) {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <FAQSchema />
      {children}
    </>
  );
}