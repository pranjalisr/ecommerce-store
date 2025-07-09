import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Users, Package, DollarSign, TrendingUp, Plus, ArrowUpRight, BarChart3 } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    title: "Total Revenue",
    value: "$124,350",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "+8.2%",
    icon: ShoppingCart,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Products",
    value: "456",
    change: "+3.1%",
    icon: Package,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Customers",
    value: "2,345",
    change: "+15.3%",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "AirPods Pro Max",
    amount: "$549.00",
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: 'MacBook Pro 16"',
    amount: "$2,399.00",
    status: "Processing",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    product: "iPhone 15 Pro",
    amount: "$999.00",
    status: "Shipped",
    date: "2024-01-13",
  },
  {
    id: "ORD-004",
    customer: "Sarah Wilson",
    product: "Sony WH-1000XM5",
    amount: "$399.00",
    status: "Pending",
    date: "2024-01-12",
  },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your store today.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-transparent border-gray-300 hover:bg-gray-50" asChild>
                <Link href="/admin/analytics">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Link>
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/admin/products/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                      <span className="text-sm text-gray-500 ml-1">from last month</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Recent Orders</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/admin/orders" className="text-indigo-600 hover:text-indigo-700">
                      View All
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-medium text-gray-900">{order.id}</span>
                          <Badge
                            variant={
                              order.status === "Completed"
                                ? "default"
                                : order.status === "Processing"
                                  ? "secondary"
                                  : order.status === "Shipped"
                                    ? "outline"
                                    : "destructive"
                            }
                            className={
                              order.status === "Completed"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : order.status === "Processing"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : order.status === "Shipped"
                                    ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                    : ""
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {order.customer} • {order.product}
                        </p>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{order.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-0"
                  asChild
                >
                  <Link href="/admin/products">
                    <Package className="w-4 h-4 mr-3" />
                    Manage Products
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
                <Button className="w-full justify-start bg-blue-50 text-blue-700 hover:bg-blue-100 border-0" asChild>
                  <Link href="/admin/orders">
                    <ShoppingCart className="w-4 h-4 mr-3" />
                    View All Orders
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
                <Button className="w-full justify-start bg-green-50 text-green-700 hover:bg-green-100 border-0" asChild>
                  <Link href="/admin/customers">
                    <Users className="w-4 h-4 mr-3" />
                    Customer Management
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  className="w-full justify-start bg-purple-50 text-purple-700 hover:bg-purple-100 border-0"
                  asChild
                >
                  <Link href="/admin/analytics">
                    <TrendingUp className="w-4 h-4 mr-3" />
                    View Analytics
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card className="border-0 shadow-sm mt-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sales Target</span>
                  <span className="font-bold text-gray-900">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-bold text-green-600">4.9/5</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Return Rate</span>
                  <span className="font-bold text-gray-900">2.1%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
