// lib/products.ts - Real product data integration
import productsData from '@/data/products_data.json'

export interface Product {
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

export interface ProductCategory {
  id: string
  name: string
  description: string
  count: number
}

// Get all products
export const getAllProducts = (): Product[] => {
  return productsData.products as Product[]
}

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return productsData.products.find(p => p.product_id === id) as Product | undefined
}

// Get products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') {
    return getAllProducts()
  }
  
  return productsData.products.filter(p => {
    const name = p.name?.toLowerCase() || ''
    const description = p.description?.toLowerCase() || ''
    
    // Map category IDs to their filtering logic (same as in getCategories)
    switch (category) {
      case 'temizleyiciler':
        return name.includes('cleanse') || name.includes('temizley') || name.includes('exfo')
      
      case 'serumlar':
        return name.includes('serum') || name.includes('vita') || name.includes('age')
      
      case 'kremler':
        return name.includes('cream') || name.includes('krem') || name.includes('recovery') || name.includes('post')
      
      case 'maskeler':
        return name.includes('mask') || name.includes('maske') || name.includes('clay')
      
      case 'güneş-koruma':
        return name.includes('spf') || name.includes('protect') || name.includes('sun') || name.includes('uv')
      
      case 'bakım-kitleri':
        return name.includes('kit') || name.includes('set') || description.includes('kit')
      
      case 'özel-çözümler':
        return name.includes('solution') || name.includes('çözüm') || name.includes('active')
      
      case 'leke-tedavisi':
        return name.includes('mela') || description.includes('pigment') || description.includes('leke')
      
      case 'akne-tedavisi':
        return name.includes('ac.') || name.includes('akne') || description.includes('akne') || description.includes('sebum')
      
      case 'kızarıklık-tedavisi':
        return name.includes('cr.') || description.includes('kızarıklık') || description.includes('hassas')
      
      default:
        // Fallback to original logic for any unknown categories
        const categoryLower = category.toLowerCase().replace(/-/g, ' ')
        return name.includes(categoryLower) || description.includes(categoryLower)
    }
  }) as Product[]
}

// Search products
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase().trim()
  if (!searchTerm) return getAllProducts()
  
  return productsData.products.filter(p => 
    p.name?.toLowerCase().includes(searchTerm) ||
    p.description?.toLowerCase().includes(searchTerm) ||
    p.size?.toLowerCase().includes(searchTerm)
  ) as Product[]
}

// Generate product image URL
export const getProductImageUrl = (productId: string, imageIndex: number = 0): string => {
  // Use main.jpg format from NKGuzellik project
  if (imageIndex === 0) {
    return `/images/${productId}-main.jpg`
  }
  
  // Additional images (if needed)
  return `/images/${productId}-${imageIndex}.jpg`
}

// Get all available images for a product
export const getProductImages = (productId: string): string[] => {
  const images: string[] = []
  const extensions = ['png', 'jpg', 'jpeg', 'webp']
  
  // Try main image first
  for (const ext of extensions) {
    images.push(`/images/${productId}-main.${ext}`)
  }
  
  // Additional images (1-5)
  for (let i = 1; i <= 5; i++) {
    for (const ext of extensions) {
      images.push(`/images/${productId}-${i}.${ext}`)
    }
  }
  
  return images
}

// Get phFormula categories based on product names and descriptions
export const getCategories = (): ProductCategory[] => {
  const categoryMap = new Map<string, number>()
  
  productsData.products.forEach(product => {
    const name = product.name?.toLowerCase() || ''
    const description = product.description?.toLowerCase() || ''
    
    // Categorize based on phFormula product lines and types
    if (name.includes('cleanse') || name.includes('temizley') || name.includes('exfo')) {
      categoryMap.set('temizleyiciler', (categoryMap.get('temizleyiciler') || 0) + 1)
    }
    
    if (name.includes('serum') || name.includes('vita') || name.includes('age')) {
      categoryMap.set('serumlar', (categoryMap.get('serumlar') || 0) + 1)
    }
    
    if (name.includes('cream') || name.includes('krem') || name.includes('recovery') || name.includes('post')) {
      categoryMap.set('kremler', (categoryMap.get('kremler') || 0) + 1)
    }
    
    if (name.includes('mask') || name.includes('maske') || name.includes('clay')) {
      categoryMap.set('maskeler', (categoryMap.get('maskeler') || 0) + 1)
    }
    
    if (name.includes('spf') || name.includes('protect') || name.includes('sun') || name.includes('uv')) {
      categoryMap.set('güneş koruma', (categoryMap.get('güneş koruma') || 0) + 1)
    }
    
    if (name.includes('kit') || name.includes('set') || description.includes('kit')) {
      categoryMap.set('bakım kitleri', (categoryMap.get('bakım kitleri') || 0) + 1)
    }
    
    if (name.includes('solution') || name.includes('çözüm') || name.includes('active')) {
      categoryMap.set('özel çözümler', (categoryMap.get('özel çözümler') || 0) + 1)
    }
    
    if (name.includes('mela') || description.includes('pigment') || description.includes('leke')) {
      categoryMap.set('leke tedavisi', (categoryMap.get('leke tedavisi') || 0) + 1)
    }
    
    if (name.includes('ac.') || name.includes('akne') || description.includes('akne') || description.includes('sebum')) {
      categoryMap.set('akne tedavisi', (categoryMap.get('akne tedavisi') || 0) + 1)
    }
    
    if (name.includes('cr.') || description.includes('kızarıklık') || description.includes('hassas')) {
      categoryMap.set('kızarıklık tedavisi', (categoryMap.get('kızarıklık tedavisi') || 0) + 1)
    }
  })
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    id: name.replace(/\s+/g, '-').toLowerCase(),
    name: name ? name.charAt(0).toUpperCase() + name.slice(1) : '',
    description: getCategoryDescription(name || ''),
    count
  })).sort((a, b) => b.count - a.count) // Sort by count descending
}

// Get category description
const getCategoryDescription = (categoryName: string): string => {
  const descriptions: { [key: string]: string } = {
    'temizleyiciler': 'Cildi nazikçe temizleyen, yenileyici etkili ürünler',
    'serumlar': 'Yoğun aktif içerikli, hedefli etkili serum formülleri',
    'kremler': 'Nemlendirici, onarıcı ve koruyucu krem formülleri',
    'maskeler': 'Derinlemesine temizlik ve bakım sağlayan maskeler',
    'güneş koruma': 'Geniş spektrumlu UV koruması sağlayan ürünler',
    'bakım kitleri': 'Komple tedavi sistemleri ve ev bakım programları',
    'özel çözümler': 'Spesifik cilt problemlerine özel aktif formüller',
    'leke tedavisi': 'Pigmentasyon ve leke problemlerine özel çözümler',
    'akne tedavisi': 'Akne ve sebum kontrolü için profesyonel ürünler',
    'kızarıklık tedavisi': 'Hassas ve kızarıklığa eğilimli ciltler için özel bakım'
  }
  
  return descriptions[categoryName] || 'Profesyonel cilt bakım ürünleri'
}

// Get product sizes
export const getSizes = (): string[] => {
  const sizes = new Set<string>()
  
  productsData.products.forEach(product => {
    if (product.size) {
      sizes.add(product.size)
    }
    
    // Extract size from product name
    const sizeMatch = product.name?.match(/(\d+(?:[.,]\d+)?\s*(?:ml|gr|g|mg))/i)
    if (sizeMatch) {
      sizes.add(sizeMatch[1])
    }
  })
  
  return Array.from(sizes).sort()
}

// Format price for Turkish market
export const formatPrice = (price: string | number): string => {
  if (!price) return 'Fiyat bilgisi için WhatsApp'
  
  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  if (isNaN(numPrice) || numPrice === 0) return 'Fiyat bilgisi için WhatsApp'
  
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY'
  }).format(numPrice)
}

// Create excerpt from description
export const getExcerpt = (description: string, maxLength: number = 150): string => {
  if (!description) return ''
  
  if (description.length <= maxLength) {
    return description
  }
  
  const sentences = description.split(/[.!?]+/)
  const excerpt = sentences[0]
  
  if (excerpt.length > maxLength) {
    return description.substring(0, maxLength) + '...'
  }
  
  return excerpt + '.'
}

// Create URL-friendly slug
export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g') 
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

// Generate WhatsApp message for product inquiry
export const generateWhatsAppMessage = (product: Product): string => {
  return encodeURIComponent(
    `Merhaba phFormula! "${product.name}" ürünü hakkında bilgi almak istiyorum. Fiyat ve stok durumunu öğrenebilir miyim? 🌟`
  )
}

// Get featured/popular products (first 8 products)
export const getFeaturedProducts = (): Product[] => {
  return getAllProducts().slice(0, 8)
}

// Get recently added products (last 6 products)
export const getRecentProducts = (): Product[] => {
  const products = getAllProducts()
  return products.slice(-6).reverse()
}