import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const products = [
  {
    id: 1,
    name: "Premium Dashboard Template",
    category: "Templates",
    sales: 1234,
    revenue: "$24,680",
    growth: 85,
    status: "trending",
  },
  {
    id: 2,
    name: "Analytics Pro Package",
    category: "Software",
    sales: 856,
    revenue: "$17,120",
    growth: 72,
    status: "hot",
  },
  {
    id: 3,
    name: "UI Component Library",
    category: "Components",
    sales: 642,
    revenue: "$12,840",
    growth: 58,
    status: "stable",
  },
  {
    id: 4,
    name: "Mobile App Template",
    category: "Templates",
    sales: 423,
    revenue: "$8,460",
    growth: 41,
    status: "growing",
  },
  {
    id: 5,
    name: "E-commerce Starter Kit",
    category: "Kits",
    sales: 312,
    revenue: "$6,240",
    growth: 28,
    status: "stable",
  },
]

const statusColors = {
  trending: "bg-green-100 text-green-800 border-green-200",
  hot: "bg-red-100 text-red-800 border-red-200",
  stable: "bg-blue-100 text-blue-800 border-blue-200",
  growing: "bg-yellow-100 text-yellow-800 border-yellow-200",
}

export function TopProducts() {
  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-card-foreground">Top Products</CardTitle>
        <CardDescription>Best performing products this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium text-card-foreground">{product.name}</h4>
                    <Badge variant="outline" className={statusColors[product.status as keyof typeof statusColors]}>
                      {product.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {product.category} • {product.sales} sales
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-card-foreground">{product.revenue}</p>
                  <p className="text-xs text-muted-foreground">{product.growth}% of target</p>
                </div>
              </div>
              <Progress value={product.growth} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
