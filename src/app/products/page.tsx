'use client'

import React, { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ArrowRight, MessageCircle, Search, Filter, Grid, List, ShoppingBag, Star, Eye } from 'lucide-react'
import { 
  getAllProducts, 
  getCategories, 
  searchProducts, 
  getProductsByCategory,
  formatPrice,
  getExcerpt,
  getProductImageUrl,
  generateWhatsAppMessage
} from '@/lib/products'
import type { Product } from '@/lib/products'

type ViewMode = 'grid' | 'list'
type SortOption = 'name-asc' | 'name-desc' | 'popular'

// Product Card Component
const ProductCard: React.FC<{ product: Product; viewMode: ViewMode }> = ({ product, viewMode }) => {
  const [imageError, setImageError] = useState(false)
  const mainImageUrl = getProductImageUrl(product.product_id, 0)
  const fallbackImageUrl = `/images/placeholder.svg`
  const excerpt = getExcerpt(product.description, 120)
  const whatsappUrl = `https://wa.me/905358726752?text=${generateWhatsAppMessage(product)}`

  const handleImageError = () => {
    setImageError(true)
  }

  if (viewMode === 'list') {
    return (
      <Link href={`/products/${product.product_id}`} className="block">
        <Card className="flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white">
          <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-gray-50">
            <div className="relative w-full h-full p-4">
              <Image
                src={imageError ? fallbackImageUrl : mainImageUrl}
                alt={product.name}
                fill
                className="object-contain p-2"
                onError={handleImageError}
              />
              {product.size && (
                <Badge className="absolute bottom-2 left-2 bg-white/90 text-gray-900 text-xs border border-gray-900">
                  {product.size}
                </Badge>
              )}
            </div>
          </div>
          <CardContent className="flex-1 p-3 sm:p-4 lg:p-6">
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-lg text-black line-clamp-2 min-h-[3.5rem] flex items-start">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{product.size}</p>
              </div>
              <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">{excerpt}</p>
              <div className="flex flex-col sm:flex-row gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
                <Button size="sm" variant="outline" asChild className="flex-1">
                  <Link href={`/products/${product.product_id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    İncele
                  </Link>
                </Button>
                <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700" asChild>
                  <Link href={whatsappUrl} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/products/${product.product_id}`} className="block">
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-gray-200 hover:border-gray-300 h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 p-3 sm:p-4">
            <Image
              src={imageError ? fallbackImageUrl : mainImageUrl}
              alt={product.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              onError={handleImageError}
            />
          </div>
          {product.size && (
            <Badge className="absolute bottom-2 left-2 bg-white/90 text-gray-900 text-xs z-10 border border-gray-900">
              {product.size}
            </Badge>
          )}
        </div>
        <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
          <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="font-bold text-sm sm:text-base text-black line-clamp-2 leading-tight min-h-[2.8rem] sm:min-h-[3rem]">
                {product.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">{excerpt}</p>
            <div className="flex flex-col gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
              <Button size="sm" variant="outline" className="w-full text-xs sm:text-sm h-8 sm:h-9" asChild>
                <Link href={`/products/${product.product_id}`}>
                  <Eye className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                  İncele
                </Link>
              </Button>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-xs sm:text-sm h-8 sm:h-9" asChild>
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                  WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
}

function ProductsPageContent() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [sortBy, setSortBy] = useState<SortOption>('name-asc')
  const [showFilters, setShowFilters] = useState(false)

  const allProducts = getAllProducts()
  const categories = getCategories()

  // Read URL parameters and set initial filters
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setSelectedCategory(categoryParam)
    }
    
    const searchParam = searchParams.get('search')
    if (searchParam) {
      setSearchQuery(searchParam)
    }
  }, [searchParams, categories])

  // Search and filter products
  const filteredProducts = useMemo(() => {
    let products = allProducts

    // Apply search
    if (searchQuery.trim()) {
      products = searchProducts(searchQuery)
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      products = getProductsByCategory(selectedCategory)
      if (searchQuery.trim()) {
        products = products.filter(p => 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
    }

    // Apply sorting
    products.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name, 'tr')
        case 'name-desc':
          return b.name.localeCompare(a.name, 'tr')
        case 'popular':
          return Math.random() - 0.5 // Random for demo
        default:
          return 0
      }
    })

    return products
  }, [allProducts, searchQuery, selectedCategory, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
  }

  const hasActiveFilters = searchQuery || selectedCategory !== 'all'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-First Hero */}
      <section className="bg-white border-b-2 border-gray-200 py-8 sm:py-12 lg:py-16">
        <div className="px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div>
              <Badge className="bg-green-600 text-white mb-4 px-3 py-1 text-xs font-bold">
                <ShoppingBag className="mr-2 h-3 w-3" />
                TÜM ÜRÜNLER
              </Badge>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-gray-900">
                phFormula Ürünleri
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                İspanya teknolojisi ile üretilen profesyonel cilt bakım ürünlerini keşfedin
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center items-center space-x-8 text-xs sm:text-sm">
              <div className="text-center">
                <div className="font-bold text-lg text-gray-900">{allProducts.length}</div>
                <div className="text-gray-600">Ürün</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-900">{categories.length}</div>
                <div className="text-gray-600">Kategori</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-900">%100</div>
                <div className="text-gray-600">Orijinal</div>
              </div>
            </div>

            {/* Mobile WhatsApp CTA */}
            <div className="pt-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-bold" asChild>
                <Link href="https://wa.me/905358726752?text=Merhaba%20phFormula!%20%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum%20%F0%9F%8C%9F" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ücretsiz Danışmanlık
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-14 sm:top-16 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-2 sm:mb-3">
              <Search className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Ürün ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 sm:pl-10 h-9 sm:h-10 text-sm bg-gray-50 focus:bg-white border-gray-200"
              />
            </div>

            {/* Filters Row */}
            <div className="flex items-center justify-between gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto flex-1 scrollbar-hide">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="text-xs border border-gray-200 rounded px-1.5 sm:px-2 py-1.5 bg-white min-w-0 flex-shrink-0 focus:border-gray-400"
                >
                  <option value="all">Tümü ({allProducts.length})</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="text-xs border border-gray-200 rounded px-1.5 sm:px-2 py-1.5 bg-white min-w-0 flex-shrink-0 focus:border-gray-400"
                >
                  <option value="name-asc">A-Z</option>
                  <option value="name-desc">Z-A</option>
                  <option value="popular">Popüler</option>
                </select>

                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs h-7 px-1.5 sm:px-2 flex-shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    Temizle
                  </Button>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded overflow-hidden flex-shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 text-xs ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'}`}
                  title="Galeri Görünümü"
                >
                  <Grid className="h-3 w-3" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 text-xs ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'}`}
                  title="Liste Görünümü"
                >
                  <List className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="pt-2">
              <p className="text-xs text-gray-600">
                <span className="font-semibold">{filteredProducts.length}</span> ürün listeleniyor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-6 sm:py-8">
        <div className="px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
                  : "space-y-3 sm:space-y-4"
              }>
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.product_id} 
                    product={product} 
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400">
                  <ShoppingBag className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Ürün bulunamadı</h3>
                  <p className="text-sm mb-4">Arama kriterlerinizi değiştirerek tekrar deneyin</p>
                  <Button onClick={clearFilters} variant="outline" size="sm">
                    Filtreleri Temizle
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile CTA Footer */}
      <section className="bg-green-600 text-white py-8">
        <div className="px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-lg sm:text-xl font-bold">
              Hangi Ürün Size Uygun?
            </h2>
            <p className="text-sm text-green-100">
              Uzman danışmanlarımız cildinizi analiz ederek size en uygun ürünleri önerir
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100 font-bold" asChild>
              <Link href="https://wa.me/905358726752?text=Merhaba%20phFormula!%20Cildime%20en%20uygun%20%C3%BCr%C3%BCn%C3%BC%20%C3%B6%C4%9Frenmek%20istiyorum%20%F0%9F%8C%9F" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Ücretsiz Ürün Danışmanlığı
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Ürünler yükleniyor...</p>
        </div>
      </div>
    }>
      <ProductsPageContent />
    </Suspense>
  )
}