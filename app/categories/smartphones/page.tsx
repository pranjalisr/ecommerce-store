"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, ArrowLeft } from "lucide-react"

const smartphoneProducts = [
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 999,
    originalPrice: 1099,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 5621,
    badge: "Bestseller",
    inStock: false,
    description: "Latest iPhone with titanium design and A17 Pro chip",
    brand: "Apple",
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    originalPrice: 1299,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 892,
    badge: "New",
    inStock: true,
    description: "Ultimate Android flagship with S Pen and AI features",
    brand: "Samsung",
  },
  {
    id: 7,
    name: "Google Pixel 8 Pro",
    price: 899,
    originalPrice: 999,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 1234,
    badge: "AI Powered",
    inStock: true,
    description: "Advanced AI photography and pure Android experience",
    brand: "Google",
  },
  {
    id: 8,
    name: "OnePlus 12",
    price: 799,
    originalPrice: 899,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 567,
    badge: "Fast Charging",
    inStock: true,
    description: "Flagship killer with 100W fast charging",
    brand: "OnePlus",
  },
  {
    id: 9,
    name: "iPhone 14",
    price: 699,
    originalPrice: 799,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 3421,
    badge: "Popular",
    inStock: true,
    description: "Reliable iPhone with great camera system",
    brand: "Apple",
  },
  {
    id: 10,
    name: "Samsung Galaxy S23",
    price: 599,
    originalPrice: 699,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
    reviews: 1876,
    badge: "Great Value",
    inStock: true,
    description: "Compact flagship with excellent performance",
    brand: "Samsung",
  },
]

export default function SmartphonesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
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
              <div className="text-6xl">📱</div>
              <h1 className="text-5xl font-bold">Smartphones</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Discover the latest smartphones with cutting-edge technology, amazing cameras, and powerful performance.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">{smartphoneProducts.length} Products</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Free Shipping</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Latest Models</span>
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
            <li className="text-gray-900">Smartphones</li>
          </ol>
        </nav>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smartphoneProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-64 rounded-t-lg flex items-center justify-center">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">📱</div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-indigo-600 hover:bg-indigo-600 text-white">
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
                  <span className="text-sm text-indigo-600 font-medium">{product.brand}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <CardTitle className="text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </CardTitle>

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

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
              </CardContent>
              <CardFooter className="p-6 pt-0 space-y-2">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                  <Link href={`/products/${product.id}`}>View Details</Link>
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
