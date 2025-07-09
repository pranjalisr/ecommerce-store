"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Play, ArrowUpRight, Zap, Users, Award, Sparkles, TrendingUp } from "lucide-react"

const featuredProducts = [
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
    category: "Audio",
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
    category: "Computing",
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
    category: "Mobile",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Premium Status Bar */}
        <div className="relative border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Inventory</span>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm text-white/80">
                  <Sparkles className="w-4 h-4" />
                  <span>Premium Tech Destination</span>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-sm text-white/80">
                  <TrendingUp className="w-4 h-4" />
                  <span>Trusted by 50,000+ customers</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Link href="/support" className="text-white/80 hover:text-white transition-colors">
                  24/7 Support
                </Link>
                <Link href="/shipping" className="text-white/80 hover:text-white transition-colors">
                  Free Shipping
                </Link>
                <Link
                  href="/deals"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full font-medium hover:from-yellow-300 hover:to-orange-300 transition-all"
                >
                  Hot Deals
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Now</span>
              </div>
              <span className="text-sm text-white/70">Over 50,000 products in stock</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              The Future
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                is Here
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed">
              Discover tomorrow's technology today. From cutting-edge smartphones to revolutionary gadgets that will
              change how you live, work, and play.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 font-semibold group"
                asChild
              >
                <Link href="/products">
                  Explore Products
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 font-semibold bg-transparent group"
                asChild
              >
                <Link href="#video">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">4.9</div>
                <div className="text-sm text-white/60">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-sm text-white/60">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-white/60">Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-50 to-transparent"></div>
      </section>

      {/* Featured Products */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Staff Picks</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Handpicked by our tech experts. These are the products we actually use and love.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="group relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-6">
                      <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 px-3 py-1 font-medium">
                        {product.tag}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">${product.price}</div>
                        <div className="text-sm text-gray-500 line-through">${product.originalPrice}</div>
                      </div>
                    </div>

                    <div className="aspect-square bg-white rounded-xl mb-6 p-6 flex items-center justify-center">
                      <div className="text-8xl group-hover:scale-105 transition-transform duration-300">
                        {product.emoji}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.category}</p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white" asChild>
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Are You Looking For?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Browse by category to find exactly what you need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Smartphones", icon: "📱", count: "120+ products", color: "from-blue-500 to-cyan-500" },
              { name: "Audio", icon: "🎧", count: "85+ products", color: "from-purple-500 to-pink-500" },
              { name: "Computing", icon: "💻", count: "95+ products", color: "from-green-500 to-emerald-500" },
              { name: "Gaming", icon: "🎮", count: "60+ products", color: "from-red-500 to-orange-500" },
            ].map((category, index) => (
              <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  ></div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{category.count}</p>
                    <div className="flex items-center text-white group-hover:text-yellow-400 transition-colors">
                      <span className="font-medium">Explore</span>
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why 50,000+ People Choose Us</h2>
              <p className="text-xl text-gray-600">
                We're not just another tech store. Here's what makes us different.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Same-day delivery in major cities. Free shipping on orders over $50. Your tech arrives when you need
                  it.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real humans who know tech inside and out. 24/7 support via chat, phone, or email. We're here when you
                  need us.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Prices</h3>
                <p className="text-gray-600 leading-relaxed">
                  Price match guarantee. If you find it cheaper elsewhere, we'll beat it by 5%. Plus exclusive member
                  discounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay in the Loop</h2>
            <p className="text-xl mb-8 text-white/90">
              Get early access to new products, exclusive deals, and tech insights from our team of experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 font-semibold">Subscribe</Button>
            </div>

            <p className="text-sm text-white/70">Join 25,000+ subscribers. No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
