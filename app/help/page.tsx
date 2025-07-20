import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Phone, Mail, Search, HelpCircle, FileText } from "lucide-react"

const helpCategories = [
  {
    icon: "📦",
    title: "Orders & Shipping",
    description: "Track orders, shipping info, and delivery questions",
    articles: 12,
    href: "/help/orders",
  },
  {
    icon: "🔄",
    title: "Returns & Refunds",
    description: "Return policy, refund process, and exchanges",
    articles: 8,
    href: "/help/returns",
  },
  {
    icon: "💳",
    title: "Payment & Billing",
    description: "Payment methods, billing issues, and invoices",
    articles: 6,
    href: "/help/payment",
  },
  {
    icon: "👤",
    title: "Account & Profile",
    description: "Account settings, password reset, and profile management",
    articles: 10,
    href: "/help/account",
  },
  {
    icon: "🛡️",
    title: "Warranty & Support",
    description: "Product warranties, technical support, and repairs",
    articles: 15,
    href: "/help/warranty",
  },
  {
    icon: "🔧",
    title: "Technical Issues",
    description: "Website problems, app issues, and troubleshooting",
    articles: 9,
    href: "/help/technical",
  },
]

const popularArticles = [
  {
    title: "How to track my order?",
    category: "Orders & Shipping",
    views: "12.5K views",
    href: "/help/track-order",
  },
  {
    title: "What is your return policy?",
    category: "Returns & Refunds",
    views: "8.9K views",
    href: "/help/return-policy",
  },
  {
    title: "How to reset my password?",
    category: "Account & Profile",
    views: "7.2K views",
    href: "/help/reset-password",
  },
  {
    title: "Payment methods accepted",
    category: "Payment & Billing",
    views: "6.8K views",
    href: "/help/payment-methods",
  },
  {
    title: "How to contact customer support?",
    category: "General",
    views: "5.4K views",
    href: "/help/contact-support",
  },
]

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery. Free shipping is included on orders over 500.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "You can modify or cancel your order within 1 hour of placing it. After that, please contact customer service for assistance.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by location.",
  },
  {
    question: "How do I return a product?",
    answer:
      "You can initiate a return through your account or by contacting customer service. We offer a 30-day return policy for most items.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details.",
  },
]

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <HelpCircle className="w-8 h-8" />
              <h1 className="text-5xl font-bold">Help Center</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Find answers to your questions, get support, and learn how to make the most of your TechStore experience.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search for help articles, guides, or FAQs..."
                className="pl-12 pr-4 py-4 w-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 rounded-2xl focus:bg-white/20 focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Help Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find help articles organized by topic</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => (
              <Card
                key={category.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={category.href}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{category.articles} articles</span>
                          <span className="text-indigo-600 text-sm font-medium group-hover:underline">View all →</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Articles</h2>
            <p className="text-xl text-gray-600">Most viewed help articles</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Link key={index} href={article.href}>
                    <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-500">{article.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">{article.views}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Contact Support */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Get in touch with our support team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <Button className="bg-green-600 hover:bg-green-700">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                <Button variant="outline" className="bg-transparent border-gray-300 hover:bg-gray-50">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <Button variant="outline" className="bg-transparent border-gray-300 hover:bg-gray-50" asChild>
                  <Link href="/contact">Send Email</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Please describe your issue or question in detail..." rows={6} />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
