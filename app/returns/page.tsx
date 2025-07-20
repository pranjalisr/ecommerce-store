import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RotateCcw, Package, Clock, CheckCircle, ArrowRight } from "lucide-react"

const returnSteps = [
  {
    step: 1,
    title: "Initiate Return",
    description: "Start your return online or contact customer service",
    icon: "📝",
    details:
      "Log into your account and select the item you want to return. Fill out the return form with the reason for return.",
  },
  {
    step: 2,
    title: "Print Label",
    description: "Download and print your prepaid return label",
    icon: "🏷️",
    details: "We'll email you a prepaid return shipping label. Print it and attach it to your package.",
  },
  {
    step: 3,
    title: "Package Item",
    description: "Securely package your item with all accessories",
    icon: "📦",
    details: "Include all original packaging, accessories, and documentation. Use a sturdy box to prevent damage.",
  },
  {
    step: 4,
    title: "Ship Back",
    description: "Drop off at any authorized shipping location",
    icon: "🚚",
    details: "Take your package to any UPS, FedEx, or USPS location. Keep your receipt for tracking.",
  },
  {
    step: 5,
    title: "Get Refund",
    description: "Receive your refund within 3-5 business days",
    icon: "💰",
    details: "Once we receive and inspect your return, we'll process your refund to the original payment method.",
  },
]

const returnPolicies = [
  {
    icon: Clock,
    title: "30-Day Return Window",
    description: "You have 30 days from delivery to return most items",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Package,
    title: "Original Condition",
    description: "Items must be in original condition with all packaging",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: RotateCcw,
    title: "Free Returns",
    description: "Return shipping is free for defective or incorrect items",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: CheckCircle,
    title: "Quick Processing",
    description: "Refunds processed within 3-5 business days of receipt",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
]

const returnableItems = [
  { item: "Smartphones & Tablets", returnable: true, note: "Must be in original condition" },
  { item: "Laptops & Computers", returnable: true, note: "Data must be wiped clean" },
  { item: "Headphones & Audio", returnable: true, note: "Covers must be unused" },
  { item: "Smart Watches", returnable: true, note: "Must include all bands and chargers" },
  { item: "Cables & Accessories", returnable: true, note: "Packaging must be unopened" },
  { item: "Software & Digital Products", returnable: false, note: "Non-returnable once activated" },
  { item: "Custom/Personalized Items", returnable: false, note: "Made-to-order items" },
  { item: "Gift Cards", returnable: false, note: "Non-returnable and non-refundable" },
]

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <RotateCcw className="w-8 h-8" />
              <h1 className="text-5xl font-bold">Returns & Exchanges</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Easy returns and exchanges with our hassle-free 30-day return policy. Your satisfaction is guaranteed.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">📅 30-Day Returns</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">🆓 Free Return Shipping</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">⚡ Quick Refunds</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Return Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Return an Item</h2>
            <p className="text-xl text-gray-600">Simple steps to return your purchase</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {returnSteps.map((step) => (
              <Card
                key={step.step}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">{step.step}</span>
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <p className="text-xs text-gray-500">{step.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">Start a Return</Button>
          </div>
        </section>

        {/* Return Policies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Return Policy</h2>
            <p className="text-xl text-gray-600">What you need to know about returns</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnPolicies.map((policy) => (
              <Card key={policy.title} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${policy.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <policy.icon className={`w-6 h-6 ${policy.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{policy.title}</h3>
                  <p className="text-gray-600 text-sm">{policy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What Can Be Returned */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Can Be Returned</h2>
            <p className="text-xl text-gray-600">Check if your item is eligible for return</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {returnableItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.returnable ? "bg-green-500" : "bg-red-500"}`}></div>
                      <span className="font-medium text-gray-900">{item.item}</span>
                    </div>
                    <div className="text-right">
                      <Badge variant={item.returnable ? "default" : "destructive"} className="mb-1">
                        {item.returnable ? "Returnable" : "Non-returnable"}
                      </Badge>
                      <p className="text-xs text-gray-500">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Return Request Form */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Return</h2>
            <p className="text-xl text-gray-600">Fill out the form below to begin your return process</p>
          </div>

          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Return Request Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="orderNumber">Order Number</Label>
                    <Input id="orderNumber" placeholder="ORDER-123456" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="mail@email.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="productName">Product Name</Label>
                  <Input id="productName" placeholder="Enter the product you want to return" />
                </div>

                <div>
                  <Label htmlFor="reason">Reason for Return</Label>
                  <select
                    id="reason"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select a reason</option>
                    <option value="defective">Defective/Damaged</option>
                    <option value="wrong-item">Wrong item received</option>
                    <option value="not-as-described">Not as described</option>
                    <option value="changed-mind">Changed my mind</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description">Additional Details</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide any additional details about your return..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  Submit Return Request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
