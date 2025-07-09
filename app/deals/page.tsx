import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, ArrowUpRight, Zap, FlameIcon as Fire, Gift } from "lucide-react"

const flashDeals = [
  {
    id: 1,
    name: "AirPods Pro Max",
    price: 449,
    originalPrice: 599,
    emoji: "🎧",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 2847,
    discount: 25,
    timeLeft: "2h 15m",
    stock: 12,
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 899,
    originalPrice: 1099,
    emoji: "📱",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 5621,
    discount: 18,
    timeLeft: "5h 42m",
    stock: 8,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 999,
    originalPrice: 1299,
    emoji: "💻",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 1203,
    discount: 23,
    timeLeft: "1h 33m",
    stock: 5,
  },
]

const weeklyDeals = [
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 299,
    originalPrice: 399,
    emoji: "🎵",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 1834,
    discount: 25,
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    price: 699,
    originalPrice: 899,
    emoji: "📱",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 892,
    discount: 22,
  },
  {
    id: 6,
    name: "iPad Pro 12.9",
    price: 899,
    originalPrice: 1199,
    emoji: "📱",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 1456,
    discount: 25,
  },
]

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Fire className="w-8 h-8 text-yellow-300" />
              <h1 className="text-5xl lg:text-6xl font-bold">Hot Deals</h1>
              <Fire className="w-8 h-8 text-yellow-300" />
            </div>
            <p className="text-xl text-white/90 mb-8">
              Unbeatable prices on premium tech. Limited time offers you don't want to miss!
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">Up to 50% Off</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">Free Shipping</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">Limited Stock</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Flash Deals */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Flash Deals</h2>
              <p className="text-gray-600">Limited time offers - grab them before they're gone!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashDeals.map((deal) => (
              <Card
                key={deal.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 aspect-square p-6 flex items-center justify-center">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">{deal.emoji}</div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-600 text-white">
                    {deal.discount}% OFF
                  </Badge>
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {deal.timeLeft}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{deal.name}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(deal.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({deal.reviews.toLocaleString()})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-red-600">${deal.price}</span>
                    <span className="text-lg text-gray-500 line-through">${deal.originalPrice}</span>
                    <Badge variant="destructive" className="text-xs">
                      Save ${deal.originalPrice - deal.price}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Only {deal.stock} left!</span>
                      <span className="text-sm font-medium text-red-600">
                        {Math.round((deal.stock / 20) * 100)}% claimed
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.round((deal.stock / 20) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link href={`/products/${deal.id}`}>
                      Grab This Deal
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Weekly Deals */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Weekly Specials</h2>
              <p className="text-gray-600">Great deals that last all week long</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyDeals.map((deal) => (
              <Card
                key={deal.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 aspect-square p-6 flex items-center justify-center">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-300">{deal.emoji}</div>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-purple-600 hover:bg-purple-600 text-white">
                    {deal.discount}% OFF
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{deal.name}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(deal.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({deal.reviews.toLocaleString()})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-bold text-purple-600">${deal.price}</span>
                    <span className="text-lg text-gray-500 line-through">${deal.originalPrice}</span>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 text-xs">
                      Save ${deal.originalPrice - deal.price}
                    </Badge>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href={`/products/${deal.id}`}>
                      View Deal
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
