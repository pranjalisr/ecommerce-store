"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ShoppingCart, Star, Search, Filter, Grid, List, Heart, ArrowUpRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "AirPods Pro Max",
    price: 549,
    originalPrice: 599,
    emoji: "🎧",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 2847,
    tag: "Editor's Choice",
    category: "audio",
    inStock: true,
    description: "Premium wireless headphones with spatial audio",
    brand: "Apple",
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2399,
    originalPrice: 2599,
    emoji: "💻",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 1203,
    tag: "Pro Pick",
    category: "computing",
    inStock: true,
    description: "Powerful laptop for creative professionals",
    brand: "Apple",
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 999,
    originalPrice: 1099,
    emoji: "📱",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 5621,
    tag: "Bestseller",
    category: "smartphones",
    inStock: false,
    description: "Latest iPhone with titanium design",
    brand: "Apple",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 399,
    originalPrice: 449,
    emoji: "🎵",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 1834,
    tag: "Great Value",
    category: "audio",
    inStock: true,
    description: "Industry-leading noise canceling headphones",
    brand: "Sony",
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    originalPrice: 1299,
    emoji: "📱",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 892,
    tag: "New",
    category: "smartphones",
    inStock: true,
    description: "Ultimate Android flagship with S Pen",
    brand: "Samsung",
  },
  {
    id: 6,
    name: "Dell XPS 13",
    price: 1299,
    originalPrice: 1499,
    emoji: "💻",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 567,
    tag: "Popular",
    category: "computing",
    inStock: true,
    description: "Ultra-portable laptop with stunning display",
    brand: "Dell",
  },
]

const categories = ["all", "smartphones", "audio", "computing", "gaming"]
const brands = ["all", "Apple", "Samsung", "Sony", "Dell", "Microsoft"]
const priceRanges = [
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "$1000 - $2000", min: 1000, max: 2000 },
  { label: "Over $2000", min: 2000, max: Number.POSITIVE_INFINITY },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand
    const matchesStock = !showInStockOnly || product.inStock

    let matchesPrice = true
    if (selectedPriceRange !== "all") {
      const range = priceRanges.find((r) => r.label === selectedPriceRange)
      if (range) {
        matchesPrice = product.price >= range.min && product.price <= range.max
      }
    }

    return matchesSearch && matchesCategory && matchesBrand && matchesStock && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      case "featured":
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Discover Amazing Products</h1>
            <p className="text-xl text-white/90 mb-8">
              From the latest smartphones to cutting-edge laptops, find everything you need to stay ahead.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">50,000+ Products</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Free Shipping</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-indigo-600" />
                <h2 className="text-lg font-bold">Filters</h2>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Search Products</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by name or brand..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-indigo-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Brand */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger className="bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-indigo-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand === "all" ? "All Brands" : brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Price Range</label>
                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger className="bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-indigo-500">
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.label} value={range.label}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* In Stock Only */}
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="inStock"
                    checked={showInStockOnly}
                    onCheckedChange={setShowInStockOnly}
                    className="data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                  />
                  <label htmlFor="inStock" className="text-sm font-medium">
                    In stock only
                  </label>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-gray-300 hover:bg-gray-50"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                    setSelectedBrand("all")
                    setSelectedPriceRange("all")
                    setShowInStockOnly(false)
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{sortedProducts.length} Products Found</h3>
                  <p className="text-gray-600">Showing results for your search</p>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48 bg-gray-50 border-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border border-gray-200 rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className={viewMode === "list" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}>
              {sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-sm ${
                    viewMode === "list" ? "flex overflow-hidden" : "overflow-hidden"
                  }`}
                >
                  <div className={`relative ${viewMode === "list" ? "w-64 flex-shrink-0" : ""}`}>
                    <div
                      className={`bg-gradient-to-br from-gray-50 to-gray-100 ${viewMode === "list" ? "h-full" : "aspect-square"} p-6 flex items-center justify-center`}
                    >
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {product.emoji}
                      </div>
                    </div>

                    {product.tag && (
                      <Badge className="absolute top-3 left-3 bg-indigo-600 hover:bg-indigo-600 text-white">
                        {product.tag}
                      </Badge>
                    )}

                    {!product.inStock && (
                      <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-500 text-white">
                        Out of Stock
                      </Badge>
                    )}

                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <CardContent className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-indigo-600 font-medium">{product.brand}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                        {product.originalPrice > product.price && (
                          <Badge variant="destructive" className="text-xs">
                            Save ${product.originalPrice - product.price}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>({product.reviews.toLocaleString()} reviews)</span>
                      </div>
                    </div>

                    <div className={`flex gap-2 ${viewMode === "list" ? "mt-auto" : ""}`}>
                      <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700" asChild>
                        <Link href={`/products/${product.id}`}>
                          View Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-transparent border-gray-300 hover:bg-gray-50"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-300 hover:bg-gray-50"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                    setSelectedBrand("all")
                    setSelectedPriceRange("all")
                    setShowInStockOnly(false)
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
