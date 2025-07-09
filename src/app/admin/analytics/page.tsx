"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package, Eye, Star } from "lucide-react"

// Sample analytics data
const salesData = [
  { month: "Jan", revenue: 12500, orders: 45, customers: 32 },
  { month: "Feb", revenue: 15200, orders: 52, customers: 38 },
  { month: "Mar", revenue: 18900, orders: 67, customers: 45 },
  { month: "Apr", revenue: 22100, orders: 78, customers: 52 },
  { month: "May", revenue: 19800, orders: 71, customers: 48 },
  { month: "Jun", revenue: 25600, orders: 89, customers: 61 },
]

const topProducts = [
  { name: "🎧 Premium Wireless Headphones", sales: 156, revenue: 23400, trend: "up" },
  { name: "💻 Gaming Laptop Pro", sales: 89, revenue: 133500, trend: "up" },
  { name: "📱 Smartphone X", sales: 134, revenue: 80400, trend: "down" },
  { name: "⌚ Smart Watch Elite", sales: 78, revenue: 31200, trend: "up" },
  { name: "🖥️ 4K Monitor", sales: 45, revenue: 22500, trend: "up" },
]

const recentActivity = [
  { action: "New order #1234", time: "2 minutes ago", type: "order" },
  { action: "Customer registered", time: "5 minutes ago", type: "customer" },
  { action: "Product review added", time: "12 minutes ago", type: "review" },
  { action: "Payment received", time: "18 minutes ago", type: "payment" },
  { action: "New order #1233", time: "25 minutes ago", type: "order" },
]

export default function AnalyticsPage() {
  const currentMonth = salesData[salesData.length - 1]
  const previousMonth = salesData[salesData.length - 2]

  const revenueGrowth = (((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue) * 100).toFixed(1)
  const orderGrowth = (((currentMonth.orders - previousMonth.orders) / previousMonth.orders) * 100).toFixed(1)
  const customerGrowth = (((currentMonth.customers - previousMonth.customers) / previousMonth.customers) * 100).toFixed(
    1,
  )

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-gray-600">Track your store's performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentMonth.revenue.toLocaleString()}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{revenueGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMonth.orders}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{orderGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentMonth.customers}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />+{customerGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
              -0.3% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salesData.map((data, index) => (
                <div key={data.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 text-sm font-medium">{data.month}</div>
                    <div className="flex-1">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{
                          width: `${(data.revenue / Math.max(...salesData.map((d) => d.revenue))) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-sm font-medium">${data.revenue.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Best performing products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.sales} sales</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">${product.revenue.toLocaleString()}</div>
                    <div className="flex items-center text-xs">
                      {product.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                      )}
                      <span className={product.trend === "up" ? "text-green-500" : "text-red-500"}>
                        {product.trend === "up" ? "↑" : "↓"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest activities in your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    {activity.type === "order" && <ShoppingCart className="h-4 w-4" />}
                    {activity.type === "customer" && <Users className="h-4 w-4" />}
                    {activity.type === "review" && <Star className="h-4 w-4" />}
                    {activity.type === "payment" && <DollarSign className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{activity.action}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Products</span>
              </div>
              <Badge variant="secondary">24</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-green-500" />
                <span className="text-sm">Page Views</span>
              </div>
              <Badge variant="secondary">12.5K</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-purple-500" />
                <span className="text-sm">Total Customers</span>
              </div>
              <Badge variant="secondary">1,234</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Avg Rating</span>
              </div>
              <Badge variant="secondary">4.8</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-4 w-4 text-orange-500" />
                <span className="text-sm">Cart Abandonment</span>
              </div>
              <Badge variant="destructive">23%</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
