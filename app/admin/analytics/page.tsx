"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package, Eye, Star, ArrowLeft, Download, Calendar } from 'lucide-react'
import Link from "next/link"

// Sample analytics data
const salesData = [
  { month: "Jan", revenue: 12500, orders: 45, customers: 32, conversion: 2.8 },
  { month: "Feb", revenue: 15200, orders: 52, customers: 38, conversion: 3.1 },
  { month: "Mar", revenue: 18900, orders: 67, customers: 45, conversion: 3.4 },
  { month: "Apr", revenue: 22100, orders: 78, customers: 52, conversion: 3.7 },
  { month: "May", revenue: 19800, orders: 71, customers: 48, conversion: 3.2 },
  { month: "Jun", revenue: 25600, orders: 89, customers: 61, conversion: 4.1 },
]

const topProducts = [
  { name: "🎧 Premium Wireless Headphones", sales: 156, revenue: 23400, trend: "up", growth: 12.5 },
  { name: "💻 Gaming Laptop Pro", sales: 89, revenue: 133500, trend: "up", growth: 8.3 },
  { name: "📱 Smartphone X", sales: 134, revenue: 80400, trend: "down", growth: -3.2 },
  { name: "⌚ Smart Watch Elite", sales: 78, revenue: 31200, trend: "up", growth: 15.7 },
  { name: "🖥️ 4K Monitor", sales: 45, revenue: 22500, trend: "up", growth: 6.8 },
]

const recentActivity = [
  { action: "New order #1234", time: "2 minutes ago", type: "order", amount: "$299.99" },
  { action: "Customer registered", time: "5 minutes ago", type: "customer", amount: null },
  { action: "Product review added", time: "12 minutes ago", type: "review", amount: "5 stars" },
  { action: "Payment received", time: "18 minutes ago", type: "payment", amount: "$1,299.00" },
  { action: "New order #1233", time: "25 minutes ago", type: "order", amount: "$549.99" },
  { action: "Refund processed", time: "32 minutes ago", type: "refund", amount: "$199.99" },
]

const trafficSources = [
  { source: "Direct", visitors: 3420, percentage: 45.2, color: "bg-blue-500" },
  { source: "Google Search", visitors: 2180, percentage: 28.8, color: "bg-green-500" },
  { source: "Social Media", visitors: 1240, percentage: 16.4, color: "bg-purple-500" },
  { source: "Email", visitors: 720, percentage: 9.6, color: "bg-orange-500" },
]

export default function AnalyticsPage() {
  const currentMonth = salesData[salesData.length - 1]
  const previousMonth = salesData[salesData.length - 2]

  const revenueGrowth = (((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue) * 100).toFixed(1)
  const orderGrowth = (((currentMonth.orders - previousMonth.orders) / previousMonth.orders) * 100).toFixed(1)
  const customerGrowth = (((currentMonth.customers - previousMonth.customers) / previousMonth.customers) * 100).toFixed(1)
  const conversionGrowth = (((currentMonth.conversion - previousMonth.conversion) / previousMonth.conversion) * 100).toFixed(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600">Track your store's performance and insights</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-transparent border-gray-300 hover:bg-gray-50">
                <Calendar className="w-4 h-4 mr-2" />
                Last 30 Days
              </Button>
              <Button variant="outline" className="bg-transparent border-gray-300 hover:bg-gray-50">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">${currentMonth.revenue.toLocaleString()}</div>
              <div className="flex items-center text-sm mt-2">
                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                <span className="text-green-600 font-medium">+{revenueGrowth}%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{currentMonth.orders}</div>
              <div className="flex items-center text-sm mt-2">
                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                <span className="text-green-600 font-medium">+{orderGrowth}%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">New Customers</CardTitle>
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{currentMonth.customers}</div>
              <div className="flex items-center text-sm mt-2">
                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                <span className="text-green-600 font-medium">+{customerGrowth}%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{currentMonth.conversion}%</div>
              <div className="flex items-center text-sm mt-2">
                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                <span className="text-green-600 font-medium">+{conversionGrowth}%</span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue for the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.map((data, index) => (
                  <div key={data.month} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                      <div className="flex-1 w-48">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                            style={{
                              width: `${(data.revenue / Math.max(...salesData.map((d) => d.revenue))) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900 min-w-[80px] text-right">
                      ${data.revenue.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Top Selling Products</CardTitle>
              <CardDescription>Best performing products this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-700">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.sales} sales</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm text-gray-900">${product.revenue.toLocaleString()}</div>
                      <div className="flex items-center text-xs">
                        {product.trend === "up" ? (
                          <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                        )}
                        <span className={product.trend === "up" ? "text-green-600" : "text-red-600"}>
                          {product.growth > 0 ? "+" : ""}{product.growth}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
              <CardDescription>Latest activities in your store</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === "order" ? "bg-blue-100" :
                        activity.type === "customer" ? "bg-green-100" :
                        activity.type === "review" ? "bg-yellow-100" :
                        activity.type === "payment" ? "bg-purple-100" :
                        "bg-red-100"
                      }`}>
                        {activity.type === "order" && <ShoppingCart className="h-4 w-4 text-blue-600" />}
                        {activity.type === "customer" && <Users className="h-4 w-4 text-green-600" />}
                        {activity.type === "review" && <Star className="h-4 w-4 text-yellow-600" />}
                        {activity.type === "payment" && <DollarSign className="h-4 w-4 text-purple-600" />}
                        {activity.type === "refund" && <TrendingDown className="h-4 w-4 text-red-600" />}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    </div>
                    {activity.amount && (
                      <div className="text-sm font-semibold text-gray-900">
                        {activity.amount}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traffic Sources & Quick Stats */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trafficSources.map((source) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{source.source}</span>
                      <span className="text-sm text-gray-500">{source.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${source.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">{source.visitors.toLocaleString()} visitors</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Quick Stats</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-700">Total Products</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">156</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Page Views</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-50 text-green-700">45.2K</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span className="text-sm text-gray-700">Total Customers</span>
                  </div>
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">2,847</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Avg Rating</span>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-50 text-yellow-700">4.8/5</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-700">Cart Abandonment</span>
                  </div>
                  <Badge variant="destructive" className="bg-red-50 text-red-700">18.5%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}