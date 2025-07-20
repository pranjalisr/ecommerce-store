"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Upload, X, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

const categories = [
  { value: "electronics", label: "Electronics" },
  { value: "audio", label: "Audio" },
  { value: "accessories", label: "Accessories" },
  { value: "computing", label: "Computing" },
  { value: "gaming", label: "Gaming" },
  { value: "smart-home", label: "Smart Home" },
]

export default function NewProductPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    category: "",
    stock: "",
    sku: "",
    weight: "",
    dimensions: "",
    features: [] as string[],
    images: [] as string[],
    isActive: true,
    isFeatured: false,
  })
  const [newFeature, setNewFeature] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }))
      setNewFeature("")
    }
  }

  const removeFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((f) => f !== feature),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // make an API call to create the product
    console.log("Creating product:", formData)

    setIsSubmitting(false)
    router.push("/admin/products")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Add New Product</h1>
            <p className="text-gray-600">Create a new product for your store</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter product name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Enter product description"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sku">SKU</Label>
                      <Input
                        id="sku"
                        value={formData.sku}
                        onChange={(e) => handleInputChange("sku", e.target.value)}
                        placeholder="Product SKU"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing & Inventory */}
              <Card>
                <CardHeader>
                  <CardTitle>Pricing & Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="price">Price *</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        placeholder="0.00"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="originalPrice">Original Price</Label>
                      <Input
                        id="originalPrice"
                        type="number"
                        step="0.01"
                        value={formData.originalPrice}
                        onChange={(e) => handleInputChange("originalPrice", e.target.value)}
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="stock">Stock Quantity </Label>
                    <Input
                      id="stock"
                      type="number"
                      value={formData.stock}
                      onChange={(e) => handleInputChange("stock", e.target.value)}
                      placeholder="0"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Product Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      placeholder="Add a product feature"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                    />
                    <Button type="button" onClick={addFeature}>
                      Add
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {formData.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {feature}
                        <X
                          className="w-3 h-3 cursor-pointer hover:text-red-500"
                          onClick={() => removeFeature(feature)}
                        />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weight">Weight (lbs)</Label>
                      <Input
                        id="weight"
                        type="number"
                        step="0.1"
                        value={formData.weight}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                        placeholder="0.0"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dimensions">Dimensions (L x W x H)</Label>
                      <Input
                        id="dimensions"
                        value={formData.dimensions}
                        onChange={(e) => handleInputChange("dimensions", e.target.value)}
                        placeholder="10 x 5 x 3 inches"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Product Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isActive"
                      checked={formData.isActive}
                      onCheckedChange={(checked) => handleInputChange("isActive", checked)}
                    />
                    <Label htmlFor="isActive">Active (visible to customers)</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isFeatured"
                      checked={formData.isFeatured}
                      onCheckedChange={(checked) => handleInputChange("isFeatured", checked)}
                    />
                    <Label htmlFor="isFeatured">Featured product</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Product Images */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600 mb-2">Drag and drop images here, or click to select</p>
                    <Button type="button" variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Recommended: 1000x1000px, JPG or PNG, max 5MB each</p>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Save className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Creating Product..." : "Create Product"}
                  </Button>
                  <Button type="button" variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/admin/products">Cancel</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
