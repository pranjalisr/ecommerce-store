import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    description: "Latest smartphones, tablets, and electronic gadgets",
    count: 45,
    image: "/placeholder.svg?height=300&width=300",
    icon: "📱",
    featured: true,
  },
  {
    name: "Audio",
    slug: "audio",
    description: "Headphones, speakers, and audio equipment",
    count: 32,
    image: "/placeholder.svg?height=300&width=300",
    icon: "🎧",
    featured: true,
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Cases, stands, cables, and other accessories",
    count: 28,
    image: "/placeholder.svg?height=300&width=300",
    icon: "🔌",
    featured: false,
  },
  {
    name: "Computing",
    slug: "computing",
    description: "Laptops, keyboards, mice, and computing accessories",
    count: 19,
    image: "/placeholder.svg?height=300&width=300",
    icon: "💻",
    featured: false,
  },
  {
    name: "Gaming",
    slug: "gaming",
    description: "Gaming peripherals and accessories",
    count: 15,
    image: "/placeholder.svg?height=300&width=300",
    icon: "🎮",
    featured: false,
  },
  {
    name: "Smart Home",
    slug: "smart-home",
    description: "Smart devices for your connected home",
    count: 12,
    image: "/placeholder.svg?height=300&width=300",
    icon: "🏠",
    featured: false,
  },
  {
    name: "Smartphones",
    slug: "smartphones",
    description: "Latest smartphones from top brands",
    count: 24,
    image: "/placeholder.svg?height=300&width=300",
    icon: "📱",
    featured: true,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of tech products organized by category to find exactly what you need
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.slug} className="group hover:shadow-lg transition-shadow cursor-pointer" asChild>
              <Link href={`/categories/${category.slug}`}>
                <CardHeader className="p-0">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                      <div className="text-8xl">{category.icon}</div>
                    </div>
                    {category.featured && (
                      <Badge className="absolute top-4 left-4" variant="secondary">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white">
                        {category.count} products
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
