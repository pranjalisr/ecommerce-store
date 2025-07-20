"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, ArrowLeft } from "lucide-react"

const computingProducts = [
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2399,
    originalPrice: 2599,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 1203,
    badge: "Pro Pick",
    inStock: true,
    description: "Powerful laptop for creative professionals with M3 Pro chip",
    brand: "Apple",
  },
  {
    id: 6,
    name: "Dell XPS 13",
    price: 1299,
    originalPrice: 1499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 567,
    badge: "Popular",
    inStock: true,
    description: "Ultra-portable laptop with stunning InfinityEdge display",
    brand: "Dell",
  },
  {
    id: 11,
    name: "MacBook Air M3",
    price: 1099,
    originalPrice: 1199,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 2341,
    badge: "Bestseller",
    inStock: true,
    description: "Lightweight laptop with incredible battery life",
    brand: "Apple",
  },
  {
    id: 12,
    name: "HP Spectre x360",
    price: 1399,
    originalPrice: 1599,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    reviews: 789,
    badge: "2-in-1",
    inStock: true,
    description: "Versatile 2-in-1 laptop with premium design",
    brand: "HP",
  },
  {
    id: 13,
    name: "Lenovo ThinkPad X1",
    price: 1799,
    originalPrice: 1999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 1456,
    badge: "Business",
    inStock: true,
    description: "Professional laptop built for business productivity",
    brand: "Lenovo",
  },
  {
    id: 14,
    name: "ASUS ROG Zephyrus",
    price: 2199,
    originalPrice: 2499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 892,
    badge: "Gaming",
    inStock: false,
    description: "High-performance gaming laptop with RTX graphics",
    brand: "ASUS",
  },
]

export default function ComputingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" asChild>
              <Link href="/categories">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Categories
              </Link>
            </Button>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">💻</div>
              <h1 className="text-5xl font-bold">Computing</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Explore our range of laptops, desktops, and computing accessories designed for work, creativity, and
              gaming.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">{computingProducts.length} Products</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Professional Grade</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Latest Processors</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/categories" className="hover:text-blue-600">
                Categories
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">Computing</li>
          </ol>
        </nav>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {computingProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-64 rounded-t-lg flex items-center justify-center">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">💻</div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-600 text-white">
                    {product.badge}
                  </Badge>
                  {!product.inStock && (
                    <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-500 text-white">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-600 font-medium">{product.brand}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <CardTitle className="text-lg mb-2 group-hover:text-green-600 transition-colors">
                  {product.name}
                </CardTitle>

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge variant="destructive" className="text-xs">
                      Save {product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>({product.reviews.toLocaleString()} reviews)</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href={`/products/{product.id}`}>View Details</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-gray-300 hover:bg-gray-50"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
