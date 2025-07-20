"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Star, Heart, Share2, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"

// Mock product data - in real app this would come from database
const products = [
  {
    id: 1,
    name: "AirPods Pro Max",
    price: 549,
    originalPrice: 599,
    emoji: "🎧",
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    rating: 4.8,
    reviews: 2847,
    badge: "Editor's Choice",
    category: "audio",
    inStock: true,
    stockCount: 15,
    description:
      "Experience premium sound quality with our wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium comfort padding",
      "Bluetooth 5.0 connectivity",
      "Quick charge - 5 min for 2 hours playback",
      "Built-in microphone for calls",
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "32 ohms",
      Weight: "250g",
      Connectivity: "Bluetooth 5.0, 3.5mm jack",
      Battery: "30 hours playback",
    },
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2399,
    originalPrice: 2599,
    emoji: "💻",
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    rating: 4.9,
    reviews: 1203,
    badge: "Pro Pick",
    category: "computing",
    inStock: true,
    stockCount: 8,
    description:
      "Powerful laptop for creative professionals with M3 Pro chip, stunning Liquid Retina XDR display, and all-day battery life.",
    features: [
      "M3 Pro chip with 12-core CPU",
      "18-core GPU for graphics performance",
      "36GB unified memory",
      "512GB SSD storage",
      "16.2-inch Liquid Retina XDR display",
      "Up to 22 hours battery life",
    ],
    specifications: {
      Processor: "Apple M3 Pro",
      Memory: "36GB Unified Memory",
      Storage: "512GB SSD",
      Display: "16.2-inch Liquid Retina XDR",
      Graphics: "18-core GPU",
      Battery: "Up to 22 hours",
    },
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 999,
    originalPrice: 1099,
    emoji: "📱",
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    rating: 4.7,
    reviews: 5621,
    badge: "Bestseller",
    category: "smartphones",
    inStock: false,
    stockCount: 0,
    description:
      "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system for professional photography.",
    features: [
      "A17 Pro chip with 6-core GPU",
      "Titanium design",
      "48MP Main camera",
      "5x Telephoto camera",
      "Action Button",
      "USB-C connectivity",
    ],
    specifications: {
      Chip: "A17 Pro",
      Display: "6.1-inch Super Retina XDR",
      Camera: "48MP Main, 12MP Ultra Wide",
      Storage: "128GB, 256GB, 512GB, 1TB",
      Material: "Titanium",
      Connectivity: "USB-C",
    },
  },
]

const reviews = [
  {
    id: 1,
    user: "Sara",
    rating: 5,
    date: "2025-01-15",
    comment: "Amazing sound quality and comfort. The noise cancellation works perfectly!",
    verified: true,
  },
  {
    id: 2,
    user: "Mira",
    rating: 4,
    date: "2025-01-10",
    comment: "Great headphones, battery life is excellent. Only minor issue is they're a bit heavy for long sessions.",
    verified: true,
  },
  {
    id: 3,
    user: "Maitry",
    rating: 5,
    date: "2025-01-05",
    comment: "Best purchase I've made this year. Sound quality is incredible and they're very comfortable.",
    verified: false,
  },
]

export default function ProductPage() {
  const params = useParams()
  const productId = Number(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Find product by ID
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

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
              <Link href="/products" className="hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-9xl">{product.emoji}</div>
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center ${
                    selectedImage === index ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <div className="text-2xl">{product.emoji}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.badge && (
                <Badge className="mb-2" variant="secondary">
                  {product.badge}
                </Badge>
              )}
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {averageRating.toFixed(1)} ({reviews.length} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-green-600">{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
              )}
              {product.originalPrice > product.price && (
                <Badge variant="destructive">Save {(product.originalPrice - product.price).toFixed(2)}</Badge>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium">In Stock ({product.stockCount} available)</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-600 font-medium">Out of Stock</span>
                </>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            {product.inStock && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-medium">Quantity:</label>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(product.stockCount, Number(e.target.value))))}
                      className="w-16 text-center border-0"
                      min="1"
                      max={product.stockCount}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart - {(product.price * quantity).toFixed(2)}
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-medium">2 Year Warranty</p>
                  <p className="text-sm text-gray-600">Full coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-medium">30-Day Returns</p>
                  <p className="text-sm text-gray-600">Easy returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                  <h4 className="font-semibold mb-3">What's in the box:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>{product.name}</li>
                    <li>USB-C Charging Cable</li>
                    <li>3.5mm Audio Cable (if applicable)</li>
                    <li>Carrying Case</li>
                    <li>User Manual</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl font-bold">{averageRating.toFixed(1)}</div>
                    <div>
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">Based on {reviews.length} reviews</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                        <Separator />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
