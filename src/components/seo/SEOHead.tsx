"use client";

import Head from "next/head";
import { SEOMetadata, CORE_WEB_VITALS_HINTS } from "@/lib/seo";

interface SEOHeadProps {
  metadata: SEOMetadata;
  children?: React.ReactNode;
}

export function SEOHead({ metadata, children }: SEOHeadProps) {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterCard = 'summary_large_image',
    locale = 'tr-TR',
    alternateLocales = [],
    jsonLd,
    robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    author,
    publisher,
    datePublished,
    dateModified,
    category,
    tags = []
  } = metadata;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={robots} />
      <meta name="author" content={author || "phFormula Türkiye"} />
      <meta name="publisher" content={publisher || "phFormula Türkiye"} />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="tr" />
      <meta name="language" content="Turkish" />
      <meta name="geo.region" content="TR" />
      <meta name="geo.country" content="Turkey" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Alternate Language Links */}
      {alternateLocales.map((alt, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={alt.hrefLang}
          href={alt.href}
        />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="phFormula Türkiye" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/webp" />
          <meta property="og:image:alt" content={ogTitle || title} />
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@phformula_tr" />
      <meta name="twitter:creator" content="@phformula_tr" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      {(twitterImage || ogImage) && (
        <meta name="twitter:image" content={twitterImage || ogImage} />
      )}
      
      {/* Article/Content Specific Meta Tags */}
      {datePublished && <meta property="article:published_time" content={datePublished} />}
      {dateModified && <meta property="article:modified_time" content={dateModified} />}
      {category && <meta property="article:section" content={category} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Turkish Market Specific Meta Tags */}
      <meta name="geo.placename" content="Turkey" />
      <meta name="DC.language" content="tr" />
      <meta name="content-language" content="tr" />
      
      {/* E-commerce Specific Meta Tags */}
      <meta name="price" content="Özel Fiyat" />
      <meta name="availability" content="InStock" />
      <meta name="condition" content="New" />
      <meta name="currency" content="TRY" />
      
      {/* Core Web Vitals Optimization - Resource Hints */}
      {CORE_WEB_VITALS_HINTS.preconnect.map((url, index) => (
        <link key={`preconnect-${index}`} rel="preconnect" href={url} />
      ))}
      
      {CORE_WEB_VITALS_HINTS.dnsPrefetch.map((url, index) => (
        <link key={`dns-prefetch-${index}`} rel="dns-prefetch" href={url} />
      ))}
      
      {CORE_WEB_VITALS_HINTS.preload.map((resource, index) => (
        <link
          key={`preload-${index}`}
          rel="preload"
          href={resource.href}
          as={resource.as}
          type={resource.type}
        />
      ))}
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#000000" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
          }}
        />
      )}
      
      {/* Additional custom head elements */}
      {children}
    </Head>
  );
}

// Separate component for Next.js App Router metadata
export function generateSEOMetadata(metadata: SEOMetadata) {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    alternateLocales = [],
    robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    author,
    category,
    datePublished,
    dateModified
  } = metadata;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author || 'phFormula Türkiye' }],
    creator: 'phFormula Türkiye',
    publisher: 'phFormula Türkiye',
    category,
    robots,
    
    // Open Graph
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: canonicalUrl,
      siteName: 'phFormula Türkiye',
      images: ogImage ? [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: ogTitle || title,
        type: 'image/webp'
      }] : [],
      locale: 'tr_TR',
      type: ogType,
      publishedTime: datePublished,
      modifiedTime: dateModified,
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description: ogDescription || description,
      site: '@phformula_tr',
      creator: '@phformula_tr',
      images: ogImage ? [ogImage] : [],
    },
    
    // Canonical and alternates
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLocales.reduce((acc, alt) => {
        acc[alt.hrefLang] = alt.href;
        return acc;
      }, {} as Record<string, string>)
    },
    
    // Additional metadata
    other: {
      'geo.region': 'TR',
      'geo.country': 'Turkey',
      'geo.placename': 'Turkey',
      'content-language': 'tr',
      'DC.language': 'tr',
      'price': 'Özel Fiyat',
      'availability': 'InStock',
      'condition': 'New',
      'currency': 'TRY'
    }
  };
}