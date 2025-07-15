"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, UserPlus, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react'
import Link from "next/link"

// Sample customer data
const customers = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    totalOrders: 12,
    totalSpent: 2450.0,
    status: "active",
    joinDate: "2023-01-15",
    lastOrder: "2024-01-10",
  },
  {
    id: 2,
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    totalOrders: 8,
    totalSpent: 1890.5,
    status: "active",
    joinDate: "2023-03-22",
    lastOrder: "2024-01-08",
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    email: "mike.rodriguez@email.com",
    phone: "+1 (555) 345-6789",
    location: "Austin, TX",
    totalOrders: 15,
    totalSpent: 3200.75,
    status: "vip",
    joinDate: "2022-11-08",
    lastOrder: "2024-01-12",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    totalOrders: 5,
    totalSpent: 890.25,
    status: "active",
    joinDate: "2023-08-14",
    lastOrder: "2023-12-20",
  },
  {
    id: 5,
    name: "David Kim",
    email: "david.kim@email.com",
    phone: "+1 (555) 567-8901",
    location: "Los Angeles, CA",
    totalOrders: 3,
    totalSpent: 450.0,
    status: "inactive",
    joinDate: "2023-10-05",
    lastOrder: "2023-11-15",
  },
  {
    id: 6,
    name: "Lisa Wang",
    email: "lisa.wang@email.com",
    phone: "+1 (555) 678-9012",
    location: "Chicago, IL",
    totalOrders: 20,
    totalSpent: 4500.0,
    status: "vip",
    joinDate: "2022-08-20",
    lastOrder: "2024-01-14",
  },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "vip":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      case "inactive":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Management</h1>
                <p className="text-gray-600">Manage and view customer information</p>
              </div>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{customers.length}</div>
              <p className="text-sm text-green-600 mt-1">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {customers.filter((c) => c.status === "active").length}
              </div>
              <p className="text-sm text-green-600 mt-1">+8% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">VIP Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">
                {customers.filter((c) => c.status === "vip").length}
              </div>
              <p className="text-sm text-purple-600 mt-1">+25% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
              </div>
              <p className="text-sm text-blue-600 mt-1">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-sm mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search customers by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="vip">VIP</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Customer Table */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Customers ({filteredCustomers.length})</CardTitle>
            <CardDescription>A list of all customers and their information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Customer</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Contact</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Orders</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Total Spent</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Status</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Last Order</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-semibold text-gray-900">{customer.name}</div>
                          <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {customer.location}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <div className="text-sm flex items-center gap-2">
                            <Mail className="h-3 w-3 text-gray-400" />
                            <span className="text-gray-700">{customer.email}</span>
                          </div>
                          <div className="text-sm text-gray-500 flex items-center gap-2">
                            <Phone className="h-3 w-3 text-gray-400" />
                            <span>{customer.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">{customer.totalOrders}</div>
                        <div className="text-sm text-gray-500">orders</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">${customer.totalSpent.toLocaleString()}</div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getStatusColor(customer.status)}>
                          {customer.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-700">{customer.lastOrder}</div>
                      </td>
                      <td className="py-4 px-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-100">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Edit Customer</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">View Orders</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-600">Delete Customer</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}