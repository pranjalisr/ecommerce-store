import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, MapPin, Package, Shield } from "lucide-react"

const shippingOptions = [
  {
    icon: "🚚",
    name: "Standard Shipping",
    price: "Free",
    time: "3-5 Business Days",
    description: "Free shipping on orders over Rs 50",
    features: ["Order tracking", "Signature confirmation", "Insurance included"],
  },
  {
    icon: "⚡",
    name: "Express Shipping",
    price: "999",
    time: "1-2 Business Days",
    description: "Fast delivery for urgent orders",
    features: ["Priority handling", "Real-time tracking", "SMS notifications"],
  },
  {
    icon: "🌟",
    name: "Overnight Shipping",
    price: "1999",
    time: "Next Business Day",
    description: "Get your order tomorrow",
    features: ["Guaranteed delivery", "Morning delivery", "Premium packaging"],
  },
  {
    icon: "🌍",
    name: "International Shipping",
    price: "Varies",
    time: "5-15 Business Days",
    description: "Worldwide delivery available",
    features: ["Customs handling", "Duty calculator", "Global tracking"],
  },
]

const policies = [
  {
    icon: Package,
    title: "Processing Time",
    description: "Orders are processed within 1-2 business days. Custom orders may take 3-5 business days.",
  },
  {
    icon: Clock,
    title: "Cutoff Times",
    description: "Orders placed before 2 PM IST ship the same day. Weekend orders ship on Monday.",
  },
  {
    icon: MapPin,
    title: "Delivery Areas",
    description: "We ship to all 50 US states, Canada, and over 100 countries worldwide.",
  },
  {
    icon: Shield,
    title: "Package Protection",
    description: "All shipments include insurance and signature confirmation for orders over Rs 100.",
  },
]

const faqs = [
  {
    question: "How much does shipping cost?",
    answer:
      "Standard shipping is free on orders over Rs 50. Express shipping is Rs 99 and overnight is Rs 199. International shipping costs vary by destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You'll receive a tracking number via email once your order ships. You can track your package on our website or the carrier's website.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 100 countries. International shipping costs and delivery times vary by destination. Customs fees may apply.",
  },
  {
    question: "What if my package is damaged?",
    answer:
      "All packages are insured. If your item arrives damaged, contact us within 48 hours with photos and we'll arrange a replacement or refund.",
  },
  {
    question: "Can I change my shipping address?",
    answer:
      "You can change your shipping address within 1 hour of placing your order. After that, contact customer service for assistance.",
  },
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Truck className="w-8 h-8" />
              <h1 className="text-5xl font-bold">Shipping Information</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Fast, reliable shipping options to get your tech delivered safely and on time.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">🚚 Free Shipping $50+</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">📦 Secure Packaging</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">🌍 Worldwide Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Shipping Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping Options</h2>
            <p className="text-xl text-gray-600">Choose the delivery speed that works for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option) => (
              <Card key={option.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{option.icon}</div>
                  <CardTitle className="text-lg">{option.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="outline" className="text-lg font-bold px-3 py-1">
                      {option.price}
                    </Badge>
                    <span className="text-sm text-gray-600">{option.time}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-center mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Shipping Policies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping Policies</h2>
            <p className="text-xl text-gray-600">Important information about our shipping process</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {policies.map((policy) => (
              <Card key={policy.title} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <policy.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{policy.title}</h3>
                      <p className="text-gray-600">{policy.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Shipping Zones */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping Zones</h2>
            <p className="text-xl text-gray-600">Delivery times and costs by region</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">🇮🇳</div>
                <CardTitle>India</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Standard (3-5 days)</span>
                    <span className="font-semibold">Free over Rs 50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express (1-2 days)</span>
                    <span className="font-semibold">Rs 99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Overnight</span>
                    <span className="font-semibold">Rs 99</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">🇺🇸</div>
                <CardTitle>USA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Standard (15-17 days)</span>
                    <span className="font-semibold">$12.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express (12-13 days)</span>
                    <span className="font-semibold">$24.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duties & Taxes</span>
                    <span className="font-semibold">May apply</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <CardTitle>International</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Standard (17-25 days)</span>
                    <span className="font-semibold">$19.99+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express (13-17 days)</span>
                    <span className="font-semibold">$39.99+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customs & Duties</span>
                    <span className="font-semibold">Customer pays</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping FAQ</h2>
            <p className="text-xl text-gray-600">Common questions about shipping</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    {index < faqs.length - 1 && <hr className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
