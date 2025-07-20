import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

const warrantyTiers = [
  {
    name: "Standard Warranty",
    duration: "1 Year",
    coverage: "Manufacturing defects and hardware failures",
    included: ["Free repairs", "Replacement parts", "Technical support"],
    color: "bg-blue-100 text-blue-600",
    price: "Included",
  },
  {
    name: "Extended Warranty",
    duration: "2 Years",
    coverage: "Manufacturing defects, hardware failures, and accidental damage",
    included: ["Free repairs", "Replacement parts", "Technical support", "Accidental damage coverage"],
    color: "bg-purple-100 text-purple-600",
    price: "Available for purchase",
  },
  {
    name: "Premium Care",
    duration: "3 Years",
    coverage: "Comprehensive coverage including wear and tear",
    included: ["Free repairs", "Replacement parts", "Priority support", "Accidental damage", "Annual maintenance"],
    color: "bg-gold-100 text-gold-600",
    price: "Premium option",
  },
]

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="w-12 h-12" />
              <h1 className="text-5xl lg:text-6xl font-bold">Warranty Protection</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive warranty coverage to protect your investment and give you peace of mind.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">Up to 3 Years Coverage</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">Free Repairs</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Warranty Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warranty Options</h2>
            <p className="text-xl text-gray-600">Choose the level of protection that's right for you</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {warrantyTiers.map((tier, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${index === 1 ? "ring-2 ring-purple-200" : ""}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Shield className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-indigo-600">{tier.duration}</div>
                  <Badge variant="outline">{tier.price}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">{tier.coverage}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    {tier.included.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 mt-6">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What's Covered */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Covered</h2>
            <p className="text-xl text-gray-600">Comprehensive protection for your devices</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Covered Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Manufacturing Defects</h4>
                      <p className="text-gray-600 text-sm">Issues present from the factory</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Hardware Failures</h4>
                      <p className="text-gray-600 text-sm">Components that stop working normally</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Battery Issues</h4>
                      <p className="text-gray-600 text-sm">Battery degradation beyond normal wear</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Software Problems</h4>
                      <p className="text-gray-600 text-sm">Pre-installed software issues</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Additional Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Accidental Damage</h4>
                      <p className="text-gray-600 text-sm">Drops, spills, and other accidents (Extended+)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Power Surge Protection</h4>
                      <p className="text-gray-600 text-sm">Damage from electrical surges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Liquid Damage</h4>
                      <p className="text-gray-600 text-sm">Spills and liquid exposure (Premium Care)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Wear and Tear</h4>
                      <p className="text-gray-600 text-sm">Normal usage wear (Premium Care)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Warranty Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Warranty Claims Work</h2>
            <p className="text-xl text-gray-600">Simple process to get your device repaired or replaced</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Support</h3>
              <p className="text-gray-600 text-sm">Reach out via phone, email, or chat to report the issue</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600 text-sm">Our technicians will diagnose the issue remotely or in-person</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Repair/Replace</h3>
              <p className="text-gray-600 text-sm">We'll repair your device or provide a replacement</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Return</h3>
              <p className="text-gray-600 text-sm">Get your device back, good as new</p>
            </div>
          </div>
        </section>

        {/* Contact for Warranty */}
        <section>
          <Card className="border-0 shadow-lg max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Need Warranty Support?</CardTitle>
              <p className="text-gray-600">Our warranty team is here to help with any issues</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Speak directly with a warranty specialist</p>
                  <p className="font-semibold text-gray-900 mb-2">1-800-TECH-HELP</p>
                  <Badge variant="outline">Mon-Fri 8AM-8PM IST</Badge>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us details about your warranty claim</p>
                  <p className="font-semibold text-gray-900 mb-2">warranty@techstore.com</p>
                  <Badge variant="outline">Response within 4 hours</Badge>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3" asChild>
                  <Link href="/warranty/claim">Start Warranty Claim</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
