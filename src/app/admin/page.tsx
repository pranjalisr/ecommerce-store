import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, ShoppingCart, Users, BarChart3, DollarSign, TrendingUp, Eye, Star } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your store and view analytics</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$25,600</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">-0.3% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-blue-600" />
              <CardTitle>Products</CardTitle>
            </div>
            <CardDescription>Manage your product catalog, inventory, and pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-gray-600">Total Products</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-600">+3 this week</p>
              </div>
            </div>
            <div className="space-y-2">
              <Link href="/admin/products">
                <Button className="w-full">Manage Products</Button>
              </Link>
              <Link href="/admin/products/new">
                <Button variant="outline" className="w-full bg-transparent">
                  Add New Product
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-green-600" />
              <CardTitle>Orders</CardTitle>
            </div>
            <CardDescription>View and manage customer orders and fulfillment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">89</p>
                <p className="text-sm text-gray-600">This Month</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-orange-600">5 pending</p>
              </div>
            </div>
            <Link href="/admin/orders">
              <Button className="w-full">View Orders</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-purple-600" />
              <CardTitle>Customers</CardTitle>
            </div>
            <CardDescription>Manage customer accounts and view customer insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">1,234</p>
                <p className="text-sm text-gray-600">Total Customers</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-600">+61 this month</p>
              </div>
            </div>
            <Link href="/admin/customers">
              <Button className="w-full">Manage Customers</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-indigo-600" />
              <CardTitle>Analytics</CardTitle>
            </div>
            <CardDescription>View detailed analytics and performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">12.5K</p>
                <p className="text-sm text-gray-600">Page Views</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-600">+8.2% growth</p>
              </div>
            </div>
            <Link href="/admin/analytics">
              <Button className="w-full">View Analytics</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-teal-600" />
              <CardTitle>Site Performance</CardTitle>
            </div>
            <CardDescription>Monitor website performance and user engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-sm">Bounce Rate</span>
                <span className="text-sm font-medium">32%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Avg. Session</span>
                <span className="text-sm font-medium">4m 23s</span>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              View Details
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-yellow-600" />
              <CardTitle>Reviews & Ratings</CardTitle>
            </div>
            <CardDescription>Manage product reviews and customer feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-600">156 reviews</p>
              </div>
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              Manage Reviews
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates from your store</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New order #1234 received</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Customer Sarah Chen registered</p>
                <p className="text-xs text-gray-500">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Product review added for Gaming Laptop Pro</p>
                <p className="text-xs text-gray-500">12 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Payment of $1,299 received</p>
                <p className="text-xs text-gray-500">18 minutes ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
