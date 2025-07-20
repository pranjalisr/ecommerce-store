import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Phone, Mail, Clock, Search } from "lucide-react"

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7 Available",
    action: "Start Chat",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri 9AM-6PM",
    action: "Call Now",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 2 hours",
    action: "Send Email",
    gradient: "from-purple-500 to-pink-600",
  },
]

const quickHelp = [
  {
    icon: "📦",
    title: "Order Status",
    description: "Track your orders and deliveries",
    href: "/orders",
  },
  {
    icon: "🔄",
    title: "Returns & Exchanges",
    description: "Easy return process",
    href: "/returns",
  },
  {
    icon: "🚚",
    title: "Shipping Info",
    description: "Delivery options and policies",
    href: "/shipping",
  },
  {
    icon: "🛡️",
    title: "Warranty",
    description: "Product protection plans",
    href: "/warranty",
  },
]

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery. Free shipping is included on orders over Rs 50.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all products. Items must be in original condition with packaging. Return shipping is free for defective items.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by location. Customs fees may apply.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also track orders by logging into your account on our website.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and buy now pay later options like Klarna and Afterpay.",
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">How Can We Help You?</h1>
            <p className="text-xl text-white/90 mb-8">
              Our expert support team is here to assist you 24/7. Get the help you need, when you need it.
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
        {/* Support Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600">Choose the best way to reach our support team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option) => (
              <Card
                key={option.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className={`p-8 text-center bg-gradient-to-br ${option.gradient} text-white relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <option.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                    <p className="text-white/90 mb-4">{option.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{option.availability}</span>
                    </div>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">{option.action}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Help */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Help</h2>
            <p className="text-xl text-gray-600">Find answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((item) => (
              <Card key={item.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Link href={item.href}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
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

        {/* Contact Form */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Send us a message and we'll get back to you within 2 hours</p>
          </div>

          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Contact Support</CardTitle>
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
                    <Input type="email" placeholder="yourmail@email.com" />
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
