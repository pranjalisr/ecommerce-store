"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

// Mock data
const categoryData = {
  electronics: {
    name: "Electronics",
    description: "Latest smartphones, tablets, and electronic gadgets",
    products: [
      {
        id: 2,
        name: "Smart Watch",
        price: 29199.99,
        originalPrice: 31249.99,
        emoji: "⌚",
        image: "/placeholder.svg?height=300&width=300",
        rating: 4.8,
        reviews: 89,
        badge: "New",
      },
    ],
  },
  audio: {
    name: "Audio",
    description: "Headphones, speakers, and audio equipment",
    products: [
      {
        id: 1,
        name: "AirPods Pro Max",
        price: 1549,
        originalPrice: 1599,
        emoji: "🎧",
        image: "/placeholder.svg?height=300&width=300",
        rating: 4.8,
        reviews: 2847,
        badge: "Editor's Choice",
      },
      {
        id: 4,
        name: "Sony WH-1000XM5",
        price: 1399,
        originalPrice: 1449,
        emoji: "🎵",
        image: "/placeholder.svg?height=300&width=300",
        rating: 4.6,
        reviews: 1834,
        badge: "Great Value",
      },
    ],
  },
  accessories: {
    name: "Accessories",
    description: "Cases, stands, cables, and other accessories",
    products: [
      {
        id: 3,
        name: "Laptop Stand",
        price: 149.99,
        originalPrice: 169.99,
        emoji: "🖥️",
        image: "/placeholder.svg?height=300&width=300",
        rating: 4.3,
        reviews: 56,
        badge: "Sale",
      },
    ],
  },
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const category = categoryData[slug as keyof typeof categoryData]

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button asChild>
            <Link href="/categories">Back to Categories</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
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
            <li className="text-gray-900">{category.name}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
          <p className="text-sm text-gray-500 mt-2">{category.products.length} products available</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full h-48 rounded-t-lg flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {product.emoji}
                    </div>
                  </div>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    {product.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 line-clamp-2">{product.name}</CardTitle>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 space-y-2">
                <Button className="w-full" asChild>
                  <Link href={`/products/{product.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {category.products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products available in this category yet.</p>
            <Button variant="outline" className="mt-4 bg-transparent" asChild>
              <Link href="/categories">Browse Other Categories</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
