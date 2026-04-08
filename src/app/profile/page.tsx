"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { User, Mail, Shield, Calendar, Edit2, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react"
import { toast } from "react-hot-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuthStore } from "@/store/useAuthStore"
import api from "@/lib/api-client"

export default function ProfilePage() {
  const { user, updateUser, isAuthenticated, isLoading } = useAuthStore()
  const router = useRouter()
  const [isEditing, setIsEditing] = React.useState(false)
  const [isSaving, setIsSaving] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  })

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
      })
    }
  }, [user, isAuthenticated, isLoading, router])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      const response = await api.put("/users/profile", formData)
      if (response.data.success) {
        updateUser(formData)
        toast.success("Profile updated")
        setIsEditing(false)
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Update failed")
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020617]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-[#020617] px-6 py-20">
      <div className="container mx-auto max-w-5xl space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/5 pb-10">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Avatar className="h-28 w-28 border-4 border-slate-900 shadow-2xl ring-2 ring-cyan-500/20">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-slate-900 text-3xl font-black text-cyan-400">
                  {user.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 p-2 bg-cyan-500 rounded-full text-white shadow-lg hover:bg-cyan-600 transition-all">
                <Edit2 size={16} />
              </button>
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white mb-1">{user.name}</h1>
              <p className="text-slate-500 font-bold flex items-center gap-2">
                <Mail size={14} className="text-cyan-500/50" /> {user.email}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-[10px] font-black tracking-widest text-cyan-400 uppercase">
                <Shield className="h-3 w-3" />
                {user.role} tier
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button
              variant={isEditing ? "outline" : "default"}
              onClick={() => setIsEditing(!isEditing)}
              className={isEditing ? "border-white/10 text-slate-300 hover:bg-white/5" : "bg-white text-slate-950 hover:bg-cyan-400 px-8 font-black rounded-xl"}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <Card className="border-white/5 bg-slate-900/40 backdrop-blur-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-white/5 px-8 py-6">
                <CardTitle className="text-white text-xl font-black">Personal Details</CardTitle>
                <CardDescription className="text-slate-500 font-medium">Update your identity across AIForge</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="p-name" className="text-slate-400 font-bold text-xs uppercase tracking-wider ml-1">Display Name</Label>
                    <div className="relative group">
                      <User className="absolute left-4 top-3.5 h-4 w-4 text-slate-600 group-focus-within:text-cyan-400 transition-colors" />
                      <Input
                        id="p-name"
                        disabled={!isEditing}
                        className="bg-slate-950/60 h-12 pl-12 border-white/5 text-white font-bold focus:border-cyan-500/50 rounded-xl"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="p-email" className="text-slate-400 font-bold text-xs uppercase tracking-wider ml-1">Email (ReadOnly)</Label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-3.5 h-4 w-4 text-slate-600" />
                      <Input
                        id="p-email"
                        disabled={true}
                        className="bg-slate-950/30 h-12 pl-12 border-white/5 text-slate-500 font-bold cursor-not-allowed rounded-xl"
                        value={formData.email}
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="md:col-span-2 pt-4">
                      <Button 
                        type="submit" 
                        disabled={isSaving}
                        className="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white font-black rounded-xl shadow-lg shadow-cyan-500/20"
                      >
                        {isSaving ? "Syncing..." : "Apply Changes"}
                      </Button>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            <Card className="border-white/5 border-dashed bg-transparent rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:bg-white/5 group">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white capitalize">{user.role} Member</h4>
                  <p className="text-slate-500 font-medium">Your account is fully secured and verified.</p>
                </div>
              </div>
              <Button variant="outline" className="h-12 border-white/10 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 px-8 rounded-xl font-black transition-all">
                Manage Access
              </Button>
            </Card>
          </div>

          <div className="space-y-6">
             <Card className="border-white/5 bg-slate-900/40 backdrop-blur-xl rounded-3xl p-6">
                <h4 className="text-white font-black mb-4">Account Stats</h4>
                <div className="space-y-4">
                  {[
                    { label: "Stability", value: "99.9%", color: "bg-emerald-500/20 text-emerald-400" },
                    { label: "Trust Score", value: "High", color: "bg-cyan-500/20 text-cyan-400" },
                    { label: "Latency", value: "24ms", color: "bg-blue-500/20 text-blue-400" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/50 border border-white/5">
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                      <span className={`px-3 py-1 rounded-lg text-xs font-black ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
             </Card>

             <Card className="border-cyan-500/20 bg-cyan-500/5 rounded-3xl p-6 border-2 group hover:bg-cyan-500/10 transition-all cursor-pointer">
                <div className="flex flex-col gap-4">
                  <p className="text-white font-black text-lg">Integrate Enterprise API</p>
                  <p className="text-xs text-slate-400 font-medium italic">Generate your first secret key to start automating with our SDK.</p>
                  <div className="flex items-center gap-2 text-cyan-400 font-black text-sm">
                    Generate Key <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
             </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
