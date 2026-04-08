"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Github, Mail, Lock, ArrowRight, Sparkles } from "lucide-react"
import { toast } from "react-hot-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import api from "@/lib/api-client"
import { useAuthStore } from "@/store/useAuthStore"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await api.post("/auth/login", formData)
      
      if (response.data.success) {
        toast.success("Welcome back!")
        login(response.data.data.user, response.data.data.token)
        router.push("/")
      } else {
        toast.error(response.data.message || "Login failed")
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-4 py-12">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(14,165,233,0.05)_0%,_transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(6,182,212,0.05)_0%,_transparent_50%)]" />
      
      <Card className="z-10 w-full max-w-[420px] border-white/5 bg-slate-900/60 backdrop-blur-2xl transition-all hover:border-cyan-500/20 shadow-2xl rounded-[2rem] overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600" />
        
        <CardHeader className="space-y-2 text-center pt-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
            <Sparkles className="h-7 w-7 text-white" />
          </div>
          <CardTitle className="text-3xl font-black tracking-tight text-white">Sign In</CardTitle>
          <CardDescription className="text-slate-400 font-medium">
            Continue your journey with AIForge
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 px-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300 text-sm font-semibold ml-1">Email Address</Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 h-4 w-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="bg-slate-950/40 h-12 pl-12 border-white/5 text-white placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <Label htmlFor="password" title="password" className="text-slate-300 text-sm font-semibold">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-bold text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-3.5 h-4 w-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-slate-950/40 h-12 pl-12 pr-12 border-white/5 text-white placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl transition-all"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 h-12 text-base font-bold rounded-xl shadow-[0_5px_15px_rgba(14,165,233,0.3)] hover:shadow-cyan-500/40 mt-2"
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <span className="flex items-center gap-2">
                  Sign In <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-black text-slate-500">
              <span className="bg-slate-900 px-3">Quick Connect</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-11 border-white/5 bg-slate-950/40 text-slate-300 hover:bg-slate-900 hover:text-white transition-all rounded-xl font-bold">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
            <Button variant="outline" className="h-11 border-white/5 bg-slate-950/40 text-slate-300 hover:bg-slate-900 hover:text-white transition-all rounded-xl font-bold">
              <Mail className="mr-2 h-4 w-4" /> Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-3 border-t border-white/5 pt-6 pb-10 mt-6">
          <p className="text-sm text-slate-500">
            New to AIForge?{" "}
            <Link
              href="/signup"
              className="font-black text-cyan-400 transition-colors hover:text-cyan-300 ring-offset-2 focus:ring-2 focus:ring-cyan-500 rounded-lg px-1"
            >
              Create Account
            </Link>
          </p>
        </CardFooter>
      </Card>
      
      {/* Decorative Blur and Noise (Optional feel) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")'}}></div>
    </div>
  )
}
