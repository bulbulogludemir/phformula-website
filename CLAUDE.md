# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

phFormula Turkey e-commerce website - A mobile-first Turkish skincare e-commerce site built with Next.js 15, featuring WhatsApp-based ordering, comprehensive SEO optimization for the Turkish market, and professional product catalog management.

## Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build for production (with Turbopack)
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Dev server runs on http://localhost:3000

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript (strict mode enabled, but build errors ignored in next.config.ts)
- **Styling**: Tailwind CSS v4 with Shadcn/ui components
- **Fonts**: Google Fonts (Roboto, Roboto Mono)
- **State**: React hooks, no global state library

### Key Architectural Patterns

1. **Product Data Architecture**
   - Products are stored in `/src/data/products_data.json` (194KB JSON file with ~25 products)
   - Product logic centralized in `/src/lib/products.ts`
   - Dynamic category generation based on product metadata
   - TypeScript interface defined in both `/src/types/product.ts` and `/src/lib/products.ts`

2. **Routing Structure**
   - `/` - Homepage with featured products
   - `/products` - All products overview (list/grid toggle, mobile-optimized)
   - `/products/[product]` - Individual product pages (client-side rendered)
   - `/cart` - Shopping cart page
   - `/checkout` - Checkout flow
   - `/appointment` - Appointment booking

3. **Turkish Market Focus**
   - All content in Turkish (`lang="tr-TR"`)
   - WhatsApp integration for ordering (+905358726752)
   - SEO utilities in `/src/lib/seo.ts` generate Turkish-optimized metadata
   - Currency: TRY (Turkish Lira)
   - Mobile-first design targeting Turkish mobile users

4. **Component Organization**
   - `/src/components/ui/` - Shadcn/ui primitives (button, card, form, etc.)
   - `/src/components/psychology/` - Conversion-focused components (WhatsAppOrder, ScarcityIndicator, TrustSignals)
   - `/src/components/mobile/` - Mobile-specific components
   - `/src/components/seo/` - SEO components (SEOHead, StructuredData)
   - `/src/components/navigation.tsx` & `footer.tsx` - Layout components

5. **SEO Strategy**
   - Extensive metadata in `layout.tsx` with Turkish keywords
   - Structured data (JSON-LD) via `StructuredData` component
   - Open Graph and Twitter cards configured
   - Multiple search engine verifications (Google, Yandex, Bing)
   - Geo-targeting for Turkey

## Important Development Notes

### Product Management
- **Adding/editing products**: Modify `/src/data/products_data.json`
- **Product images**: Store in `/public/images/` with format `{product_id}-main.{ext}`
- Categories are auto-generated from product names/descriptions based on keywords in `getCategories()` function
- WhatsApp messages auto-generated per product using `generateWhatsAppMessage()`

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Styling Approach
- Tailwind CSS v4 with PostCSS
- Shadcn/ui components use `class-variance-authority` for variants
- `tw-animate-css` for animations
- Mobile-first breakpoints (default → sm → md → lg)

### WhatsApp Integration
- Phone number hardcoded in multiple locations:
  - `navigation.tsx` and `footer.tsx`
  - Product pages
  - Homepage
  - Global config in `layout.tsx` script: `window.phFormula.whatsapp`
- When updating phone number, search codebase for `905358726752`

### Build Configuration
- **Important**: TypeScript and ESLint errors are ignored during builds (see `next.config.ts`)
- This allows rapid iteration but means type safety is not enforced in production
- Turbopack enabled for faster builds

### Image Handling
- No Next.js Image optimization currently implemented
- Images expected in `/public/images/` directory
- Multiple extension support: png, jpg, jpeg, webp
- Product images use `{productId}-main.{ext}` naming convention

## Common Tasks

### Adding a New Product
1. Add product entry to `/src/data/products_data.json`
2. Add product images to `/public/images/{product_id}-main.jpg`
3. Category will be auto-assigned based on product name/description keywords

### Updating WhatsApp Number
Search and replace `905358726752` across:
- `/src/components/navigation.tsx`
- `/src/components/footer.tsx`
- `/src/app/layout.tsx`
- Product pages

### Adding New Category
Modify category logic in `/src/lib/products.ts`:
- Update `getCategories()` function with new keyword matching
- Update `getProductsByCategory()` switch statement
- Add description in `getCategoryDescription()`

### SEO Optimization
- Metadata utils: `/src/lib/seo.ts`
- Root metadata: `/src/app/layout.tsx`
- Structured data: `/src/components/seo/StructuredData.tsx`
- Product-specific SEO: Each product has `meta_title` and `meta_description` in JSON

## Data Model

### Product Interface
```typescript
interface Product {
  url: string
  product_id: string
  name: string
  description: string
  price: string
  currency: string
  category: string
  brand: string
  size: string
  ingredients: string[]
  usage_instructions: string
  features: string[]
  benefits: string[]
  images: string[]
  image_paths: string[]
  meta_title: string
  meta_description: string
  scraped_at: string
  images_downloaded?: number
}
```

## Browser Support & Performance
- Service worker registration in layout (though `/sw.js` may not exist)
- Preconnect to critical origins (Google Fonts, WhatsApp)
- Mobile-optimized viewport settings
- Core Web Vitals optimization with preconnect/dns-prefetch
