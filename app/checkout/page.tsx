"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Truck, Shield } from "lucide-react"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  const orderItems = [
    { name: "Wireless Headphones", price: 99.99, quantity: 1 },
    { name: "Smart Watch", price: 199.99, quantity: 2 },
    { name: "Bluetooth Speaker", price: 79.99, quantity: 1 },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="mail@example.com" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Colony" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New Delhi" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" placeholder="10001" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="RIYA" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)}</span>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions
                    </Label>
                  </div>

                  <Button className="w-full" size="lg">
                    <Shield className="w-4 h-4 mr-2" />
                    Place Order - {total.toFixed(2)}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">Your payment information is secure and encrypted</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
