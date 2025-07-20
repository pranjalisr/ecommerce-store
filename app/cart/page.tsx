"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Shield, Truck, RotateCcw } from "lucide-react"

const initialCartItems = [
  {
    id: 1,
    name: "AirPods Pro Max",
    price: 1549,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    brand: "Apple",
    inStock: true,
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 439999,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    brand: "Apple",
    inStock: true,
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 79999,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    brand: "Apple",
    inStock: false,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const discount = promoCode === "SAVE10" ? subtotal * 0.1 : 0
  const total = subtotal + shipping + tax - discount

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600">{cartItems.length} items in your cart</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-24 h-24 bg-white rounded-lg p-2 flex items-center justify-center">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-sm text-indigo-600 font-medium">{item.brand}</p>
                            <h3 className="font-bold text-gray-900">{item.name}</h3>
                            {!item.inStock && (
                              <Badge variant="destructive" className="mt-1">
                                Out of Stock
                              </Badge>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 0)}
                              className="w-16 text-center"
                              min="0"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="font-bold text-gray-900">{(item.price * item.quantity).toFixed(2)}</p>
                            <p className="text-sm text-gray-500">{item.price} each</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Benefits */}
            <Card className="border-0 shadow-sm mt-6">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Why Shop With Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Truck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Free Shipping</p>
                      <p className="text-sm text-gray-600">On orders over $50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Secure Payment</p>
                      <p className="text-sm text-gray-600">256-bit SSL encryption</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <RotateCcw className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Easy Returns</p>
                      <p className="text-sm text-gray-600">30-day return policy</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-0 shadow-sm sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? <span className="text-green-600">Free</span> : `{shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">{tax.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (SAVE10)</span>
                      <span>-{discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Promo Code</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" className="bg-transparent">
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Try "SAVE10" for 10% off</p>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">{total.toFixed(2)}</span>
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg py-3 mb-4" asChild>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>

                <Button variant="outline" className="w-full bg-transparent border-gray-300 hover:bg-gray-50" asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>

                {subtotal < 50 && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">Add {(50 - subtotal).toFixed(2)} more for free shipping!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
