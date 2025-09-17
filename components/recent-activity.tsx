import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: "Sarah Johnson",
    action: "completed a purchase",
    amount: "$299.00",
    time: "2 minutes ago",
    avatar: "/professional-woman.png",
    initials: "SJ",
  },
  {
    id: 2,
    user: "Michael Chen",
    action: "signed up for premium",
    amount: "$49.99",
    time: "5 minutes ago",
    avatar: "/professional-man.png",
    initials: "MC",
  },
  {
    id: 3,
    user: "Emily Davis",
    action: "left a 5-star review",
    amount: "",
    time: "10 minutes ago",
    avatar: "/diverse-woman-smiling.png",
    initials: "ED",
  },
  {
    id: 4,
    user: "David Wilson",
    action: "completed a purchase",
    amount: "$159.00",
    time: "15 minutes ago",
    avatar: "/business-man.png",
    initials: "DW",
  },
  {
    id: 5,
    user: "Lisa Anderson",
    action: "updated profile",
    amount: "",
    time: "20 minutes ago",
    avatar: "/casual-woman.png",
    initials: "LA",
  },
]

export function RecentActivity() {
  return (
    <Card className="bg-card border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
        <CardDescription>Latest user interactions and transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback className="bg-muted text-muted-foreground">{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-card-foreground">{activity.user}</p>
                <p className="text-xs text-muted-foreground">
                  {activity.action}
                  {activity.amount && <span className="ml-1 font-medium text-primary">{activity.amount}</span>}
                </p>
              </div>
              <div className="text-xs text-muted-foreground">{activity.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
