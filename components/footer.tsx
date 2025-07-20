import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Youtube, Facebook, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold">TechStore</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Your trusted partner for cutting-edge technology. We bring you the future, today.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Shop</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center group">
                  All Products
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/smartphones"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  Smartphones
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/categories/audio" className="hover:text-white transition-colors flex items-center group">
                  Audio
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/computing"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  Computing
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/deals" className="hover:text-white transition-colors flex items-center group">
                  Deals
                  <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-white transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get the latest products and exclusive deals.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
              />
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 TechStore. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
