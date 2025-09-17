import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { RecentActivity } from "@/components/recent-activity"
import { TopProducts } from "@/components/top-products"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-balance">Dashboard Overview</h1>
            <p className="text-muted-foreground text-pretty">
              Welcome back! Here's what's happening with your business today.
            </p>
          </div>

          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <RecentActivity />
          </div>

          <TopProducts />
        </main>
      </div>
    </div>
  )
}
