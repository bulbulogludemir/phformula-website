# phFormula Turkey - Professional Skincare E-commerce Website

Professional phFormula cosmetics e-commerce website built with Next.js, TypeScript, and Tailwind CSS. Features Turkish localization, WhatsApp integration, and mobile-first responsive design.

## 🌟 Features

### Core Functionality
- ✅ **Complete Product Catalog** - 25+ phFormula products across 5 categories
- ✅ **WhatsApp Integration** - Direct product inquiries and appointment booking
- ✅ **Appointment Booking System** - Professional consultation scheduling
- ✅ **Mobile-First Design** - Optimized for Turkish mobile users
- ✅ **SEO Optimized** - Turkish metadata and structured data
- ✅ **Professional Branding** - phFormula brand colors and Spanish positioning

### Product Categories
1. **Cleansers** - Daily skincare essentials (UV Protect, EXFO Cleanse, GEL Cleanse, etc.)
2. **Recovery & Treatment** - Targeted solutions (AGE Recovery, MELA Recovery, AC Recovery, etc.)
3. **Specialized Kits** - Complete treatment systems (Resurfacing Kits, Spot On Kit)
4. **Serums & Essentials** - High-concentration actives (HYDRA Serum, VITA C Serum, etc.)
5. **Masks & Additional** - Vitamin masks and specialty treatments

### User Experience
- 🇹🇷 **Full Turkish Localization** - Content, navigation, and forms
- 📱 **WhatsApp Integration** - One-click customer communication
- 🎯 **Professional Design** - Clean, medical-grade aesthetic
- ⚡ **Fast Loading** - Next.js 15 with Turbopack optimization
- 🔍 **Easy Navigation** - Intuitive product discovery

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Fonts**: Roboto (matching phFormula brand)
- **Deployment**: Vercel
- **Version Control**: GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/bulbulogludemir/phformula-website.git
cd phformula-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
src/
├── app/                        # App Router pages
│   ├── layout.tsx             # Root layout with navigation
│   ├── page.tsx               # Homepage
│   ├── products/              # Product catalog pages
│   │   ├── page.tsx           # Products overview
│   │   ├── [category]/        # Dynamic category pages
│   │   │   ├── page.tsx       # Category listing
│   │   │   └── [product]/     # Dynamic product pages
│   │   │       └── page.tsx   # Individual product details
│   └── appointment/           # Appointment booking
│       └── page.tsx
├── components/                # Reusable components
│   ├── navigation.tsx         # Main navigation
│   ├── footer.tsx            # Site footer
│   └── ui/                   # Shadcn/ui components
├── types/                    # TypeScript definitions
│   └── product.ts           # Product data types and catalog
└── lib/                     # Utilities
    └── utils.ts            # Tailwind utilities
```

## 🎨 Design System

### Brand Colors
- **Primary Blue**: #0170B9 (phFormula brand color)
- **Success Green**: #22c55e (WhatsApp integration)
- **Neutral Grays**: For text and backgrounds

### Typography
- **Primary Font**: Roboto (matching phFormula brand)
- **Font Weights**: 300, 400, 500, 700

### Components
- All UI components built with Shadcn/ui
- Consistent spacing and styling
- Mobile-first responsive design
- Accessible color contrasts

## 📱 Mobile Optimization

The website is designed mobile-first for the Turkish market:
- Responsive navigation with hamburger menu
- Touch-friendly buttons and forms
- Optimized WhatsApp integration
- Fast loading on mobile networks
- Turkish language support

## 🔧 Configuration

### WhatsApp Integration
Update the phone number in:
- `src/app/page.tsx` (homepage product cards)
- `src/app/products/[category]/page.tsx` (category pages)
- `src/app/products/[category]/[product]/page.tsx` (product details)
- `src/app/appointment/page.tsx` (appointment booking)
- `src/components/navigation.tsx` and `src/components/footer.tsx`

### Product Data
Edit product information in `src/types/product.ts`:
- Add/remove products
- Update categories
- Modify product descriptions and benefits
- Add product images

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Connect GitHub Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Import Project"
   - Connect your GitHub account
   - Select the `phformula-website` repository

2. **Configure Deployment**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Alternative Deployment Options
- **Netlify**: Connect GitHub repo and deploy
- **Digital Ocean**: Use App Platform
- **AWS**: Use Amplify for easy deployment

## 📞 Contact Integration

The website includes multiple contact methods:
- **WhatsApp**: Direct messaging for product inquiries
- **Phone**: Click-to-call functionality  
- **Appointment Form**: Structured booking system
- **Instagram**: Social media integration

## 🔄 Updates and Maintenance

### Adding New Products
1. Edit `src/types/product.ts`
2. Add product to appropriate category
3. Include description, benefits, usage instructions
4. Deploy changes to Vercel

### Content Updates
- Homepage content: `src/app/page.tsx`
- Navigation items: `src/components/navigation.tsx`
- Footer information: `src/components/footer.tsx`
- Contact details: Update across all components

## 🎯 SEO Features

- Turkish language metadata
- Structured page titles and descriptions
- Open Graph tags for social sharing
- Mobile-friendly meta tags
- Semantic HTML structure

## 📈 Performance

- Next.js 15 with Turbopack for fast builds
- Optimized fonts with `next/font`
- Image optimization ready
- Code splitting and lazy loading
- Minimal bundle size with tree shaking

## 🤖 Generated with Claude Code

This project was built using Claude Code, Anthropic's official CLI for Claude, with complete automation and zero manual coding required.

---

**Repository**: https://github.com/bulbulogludemir/phformula-website  
**Live Demo**: Deploy to Vercel to get your live URL

For support or questions, please open an issue in the GitHub repository.
