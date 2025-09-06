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

// Dynamic categories are now generated from lib/products.ts