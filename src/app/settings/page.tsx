"use client"

import { Typography } from "@/components/typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-12 px-4 bg-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>
      
      <div className="space-y-6 max-w-2xl">
        <Card className="border-slate-800 bg-slate-900 text-white">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription className="text-slate-400">Manage how you receive updates.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-xs text-slate-500">Get emails about activity.</p>
              </div>
              <Button size="sm" variant="outline" className="border-slate-800">Enabled</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900 text-white border-dashed">
          <CardHeader>
            <CardTitle className="text-red-400">Danger Zone</CardTitle>
            <CardDescription className="text-slate-400">Irreversible actions for your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" className="bg-red-900/20 text-red-500 hover:bg-red-900/40 border border-red-900/50">
              Delete Account
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
