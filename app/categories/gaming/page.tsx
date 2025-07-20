import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Gamepad2, Headphones, Monitor, Zap } from "lucide-react"

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
    icon: "⌨️",
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
    icon: "🖱️",
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
    icon: "🎧",
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
    icon: "🎮",
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
    icon: "🖥️",
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
    icon: "🪑",
  },
]

export default function GamingCategoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/categories" className="hover:text-indigo-600 transition-colors">
              Categories
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-indigo-600 font-medium">Gaming</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Gamepad2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Gaming Gear
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100 leading-relaxed">
            Level up your gaming experience with professional-grade peripherals and accessories designed for champions
          </p>
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span>High Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Monitor className="h-5 w-5 text-green-300" />
              <span>Pro Gaming</span>
            </div>
            <div className="flex items-center space-x-2">
              <Headphones className="h-5 w-5 text-purple-300" />
              <span>Immersive Audio</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Stats */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Gaming Products</h2>
              <p className="text-gray-600">Discover {gamingProducts.length} premium gaming products</p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamingProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-t-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-6xl filter drop-shadow-lg">{product.icon}</div>
                  </div>
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border-white/50 hover:bg-white hover:scale-110 transition-all duration-200"
                  >
                    <Heart className="h-4 w-4 text-gray-600" />
                  </Button>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center rounded-t-xl">
                      <Badge variant="destructive" className="text-lg px-6 py-3 bg-red-500/90 backdrop-blur-sm">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200">
                    {product.category}
                  </Badge>
                  <span className="text-xs text-gray-500 font-medium">{product.brand}</span>
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-indigo-600 transition-colors leading-tight">
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </CardTitle>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 2 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        +{product.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
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
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="text-indigo-100 mb-6">Browse our complete gaming collection or contact our gaming experts</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-indigo-600"
              >
                View All Products
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-indigo-600"
              >
                Contact Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
