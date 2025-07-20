import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Users } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Store",
    details: ["123 ChurchStreet", "Bangalore, KA 94105", "India"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 5551234567", "Toll-free: 1-800-TECH-STORE", "International: +1 (555) 987-6543"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["support@techstore.com", "sales@techstore.com", "partnerships@techstore.com"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday: 10:00 AM - 6:00 PM", "Sunday: 12:00 PM - 5:00 PM"],
    gradient: "from-orange-500 to-red-600",
  },
]

const departments = [
  {
    icon: "🛒",
    title: "Sales",
    description: "Product inquiries and purchasing help",
    email: "sales@techstore.com",
    phone: "+91 5551234567",
  },
  {
    icon: "🔧",
    title: "Technical Support",
    description: "Product setup and troubleshooting",
    email: "support@techstore.com",
    phone: "+91 5552345678",
  },
  {
    icon: "📦",
    title: "Orders & Shipping",
    description: "Order status and delivery questions",
    email: "orders@techstore.com",
    phone: "+91 5553456789",
  },
  {
    icon: "🤝",
    title: "Partnerships",
    description: "Business partnerships and wholesale",
    email: "partnerships@techstore.com",
    phone: "+91 5554567890",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 mb-8">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">📍 Bangalore, KA</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">📞 24/7 Support</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">✉️ Quick Response</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Contact Information */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className={`p-6 text-center bg-gradient-to-br ${info.gradient} text-white relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-sm text-white/90">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact by Department</h2>
            <p className="text-xl text-gray-600">Reach the right team for your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <Card key={dept.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{dept.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.title}</h3>
                      <p className="text-gray-600 mb-4">{dept.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-indigo-600" />
                          <a href={`mailto:${dept.email}`} className="text-indigo-600 hover:underline">
                            {dept.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-green-600" />
                          <a href={`tel:${dept.phone}`} className="text-green-600 hover:underline">
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a question or need assistance? Fill out the form below and our team will get back to you within 24
                hours. We're here to help make your tech experience exceptional.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Quick Response</h4>
                    <p className="text-sm text-gray-600">We typically respond within 2-4 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Expert Team</h4>
                    <p className="text-sm text-gray-600">Our specialists are here to help</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="First Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Last Name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="name@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone (Optional)</label>
                    <Input type="tel" placeholder="" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Please tell us more about your inquiry..." rows={6} />
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
