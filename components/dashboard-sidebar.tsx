import { BarChart3, Home, Package, ShoppingCart, Users, Settings, TrendingUp, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "#", icon: Home, current: true },
  { name: "Analytics", href: "#", icon: BarChart3, current: false },
  { name: "Orders", href: "#", icon: ShoppingCart, current: false },
  { name: "Products", href: "#", icon: Package, current: false },
  { name: "Customers", href: "#", icon: Users, current: false },
  { name: "Reports", href: "#", icon: FileText, current: false },
  { name: "Growth", href: "#", icon: TrendingUp, current: false },
]

export function DashboardSidebar() {
  return (
    <div className="flex flex-col w-64 bg-sidebar border-r border-sidebar-border">
      <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src="/logo-dark.svg" alt="MatDash Logo" className="h-8 w-auto" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">MatDash</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.name}
              variant={item.current ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10",
                item.current
                  ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-10 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Button>
      </div>
    </div>
  )
}
