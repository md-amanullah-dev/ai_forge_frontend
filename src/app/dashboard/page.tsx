"use client"

import { useAuthStore } from "@/store/useAuthStore";
import { Typography } from "@/components/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Users, CreditCard, Activity } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="container mx-auto py-12 px-4 space-y-8 bg-slate-950 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-slate-400">Welcome back, {user?.name}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Revenue", value: "$45,231", icon: CreditCard, color: "text-emerald-500" },
          { label: "Active Users", value: "+2350", icon: Users, color: "text-blue-500" },
          { label: "New Signups", value: "+12.5%", icon: Activity, color: "text-violet-500" },
          { label: "Current Plan", value: "Pro", icon: LayoutDashboard, color: "text-amber-500" },
        ].map((stat, i) => (
          <Card key={i} className="border-slate-800 bg-slate-900">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-slate-800 bg-slate-900 p-8 flex flex-col items-center justify-center min-h-[300px] border-dashed">
        <div className="rounded-full bg-slate-800 p-6 mb-4">
          <Activity className="h-12 w-12 text-slate-600" />
        </div>
        <Typography variant="h3" className="text-white">Activity Feed</Typography>
        <Typography variant="p" className="text-slate-500 text-center max-w-sm mt-2">
          Your project activity will appear here once you start building.
        </Typography>
      </Card>
    </div>
  );
}
