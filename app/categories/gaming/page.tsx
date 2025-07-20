import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart } from "lucide-react"

const gamingProducts = [
  {
    id: 1,
    name: "Gaming Mechanical Keyboard",
    brand: "SteelSeries",
    price: 1499,
    originalPrice: 1799,
    rating: 4.8,
    reviews: 324,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Keyboard",
    inStock: true,
    features: ["RGB Backlit", "Cherry MX Switches", "Anti-Ghosting"],
    category: "Keyboards",
  },
  {
    id: 2,
    name: "Wireless Gaming Mouse",
    brand: "Logitech G",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 567,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Mouse",
    inStock: true,
    features: ["25K DPI", "Wireless", "RGB Lighting"],
    category: "Mice",
  },
  {
    id: 3,
    name: "Gaming Headset Pro",
    brand: "HyperX",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 892,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Headset",
    inStock: true,
    features: ["7.1 Surround", "Noise Cancelling", "Detachable Mic"],
    category: "Audio",
  },
  {
    id: 4,
    name: "Gaming Controller Elite",
    brand: "Xbox",
    price: 1799,
    originalPrice: 1999,
    rating: 4.6,
    reviews: 445,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Controller",
    inStock: true,
    features: ["Customizable", "Hair Triggers", "Paddles"],
    category: "Controllers",
  },
  {
    id: 5,
    name: 'Gaming Monitor 27"',
    brand: "ASUS ROG",
    price: 3999,
    originalPrice: 4499,
    rating: 4.8,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Monitor",
    inStock: false,
    features: ["144Hz", "1ms Response", "G-Sync"],
    category: "Monitors",
  },
  {
    id: 6,
    name: "Gaming Chair Pro",
    brand: "Secretlab",
    price: 4599,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 678,
    image: "/placeholder.svg?height=300&width=300&text=Gaming+Chair",
    inStock: true,
    features: ["Ergonomic", "Memory Foam", "4D Armrests"],
    category: "Furniture",
  },
]

export default function GamingCategoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-gray-900">
              Categories
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Gaming</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h1 className="text-4xl font-bold mb-4">Gaming Gear</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Level up your gaming experience with professional-grade peripherals and accessories
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Gaming Products ({gamingProducts.length})</h2>
            <div className="flex items-center space-x-4">
              <select className="border rounded-lg px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamingProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
                    <div className="text-6xl">🎮</div>
                  </div>
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-4 left-4 bg-red-500">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                  <Button size="sm" variant="outline" className="absolute top-4 right-4 bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                      <Badge variant="destructive" className="text-lg px-4 py-2">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </CardTitle>
                <p className="text-sm text-gray-600 mb-3">{product.brand}</p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{product.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-purple-600 hover:bg-purple-700" disabled={!product.inStock}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
