import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, Wifi, Shield, Zap } from "lucide-react"

const smartHomeProducts = [
  {
    id: 1,
    name: "Smart Thermostat Pro",
    brand: "Nest",
    price: 2499,
    originalPrice: 2799,
    rating: 4.8,
    reviews: 1234,
    image: "/placeholder.svg?height=300&width=300&text=Smart+Thermostat",
    inStock: true,
    features: ["WiFi Enabled", "Energy Saving", "Voice Control"],
    category: "Climate Control",
    connectivity: "WiFi",
  },
  {
    id: 2,
    name: "Smart Security Camera",
    brand: "Ring",
    price: 1999,
    originalPrice: 2299,
    rating: 4.6,
    reviews: 892,
    image: "/placeholder.svg?height=300&width=300&text=Security+Camera",
    inStock: true,
    features: ["1080p HD", "Night Vision", "Motion Detection"],
    category: "Security",
    connectivity: "WiFi",
  },
  {
    id: 3,
    name: "Smart Light Bulbs (4-Pack)",
    brand: "Philips Hue",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 567,
    image: "/placeholder.svg?height=300&width=300&text=Smart+Bulbs",
    inStock: true,
    features: ["16M Colors", "Dimming", "Schedule Control"],
    category: "Lighting",
    connectivity: "Zigbee",
  },
  {
    id: 4,
    name: "Smart Door Lock",
    brand: "August",
    price: 2799,
    originalPrice: 3199,
    rating: 4.5,
    reviews: 445,
    image: "/placeholder.svg?height=300&width=300&text=Smart+Lock",
    inStock: true,
    features: ["Keyless Entry", "Remote Access", "Auto-Lock"],
    category: "Security",
    connectivity: "WiFi + Bluetooth",
  },
  {
    id: 5,
    name: "Smart Speaker Hub",
    brand: "Amazon Echo",
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 2341,
    image: "/placeholder.svg?height=300&width=300&text=Smart+Speaker",
    inStock: false,
    features: ["Alexa Built-in", "Smart Hub", "Premium Sound"],
    category: "Audio",
    connectivity: "WiFi",
  },
  {
    id: 6,
    name: "Smart Smoke Detector",
    brand: "Nest Protect",
    price: 1199,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 678,
    image: "/placeholder.svg?height=300&width=300&text=Smoke+Detector",
    inStock: true,
    features: ["Smoke & CO Detection", "Phone Alerts", "Self-Testing"],
    category: "Safety",
    connectivity: "WiFi",
  },
]

export default function SmartHomeCategoryPage() {
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
            <span className="text-gray-900 font-medium">Smart Home</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-4xl font-bold mb-4">Smart Home Devices</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transform your home into a connected, intelligent living space with cutting-edge IoT devices
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Smart Home Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6">
            <Wifi className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Connected Living</h3>
            <p className="text-sm text-gray-600">Control everything from your smartphone</p>
          </Card>
          <Card className="text-center p-6">
            <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Energy Efficient</h3>
            <p className="text-sm text-gray-600">Save money with intelligent automation</p>
          </Card>
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Enhanced Security</h3>
            <p className="text-sm text-gray-600">Monitor and protect your home 24/7</p>
          </Card>
        </div>

        {/* Category Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Smart Home Products ({smartHomeProducts.length})</h2>
            <div className="flex items-center space-x-4">
              <select className="border rounded-lg px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Category</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smartHomeProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-teal-50 rounded-t-lg flex items-center justify-center">
                    <div className="text-6xl">🏠</div>
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
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Wifi className="h-3 w-3 mr-1" />
                    {product.connectivity}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
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
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled={!product.inStock}>
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
