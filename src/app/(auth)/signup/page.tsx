"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Github, Mail, User, Lock, ArrowRight, ShieldCheck } from "lucide-react"
import { toast } from "react-hot-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import api from "@/lib/api-client"

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
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
      const response = await api.post("/auth/signup", formData)
      
      if (response.data.success) {
        toast.success("Account created successfully!")
        router.push("/login")
      } else {
        toast.error(response.data.message || "Signup failed")
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      
      <Card className="z-10 w-full max-w-md border-slate-800 bg-slate-900/50 backdrop-blur-xl transition-all hover:border-slate-700/50">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 shadow-lg shadow-violet-500/20">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-white">Create Account</CardTitle>
          <CardDescription className="text-slate-400">
            Join AIForge and start building your future
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-300">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="bg-slate-950/50 pl-10 border-slate-800 text-white placeholder:text-slate-600 focus:border-violet-500 focus:ring-violet-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="bg-slate-950/50 pl-10 border-slate-800 text-white placeholder:text-slate-600 focus:border-violet-500 focus:ring-violet-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" title="password" className="text-slate-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-slate-950/50 pl-10 pr-10 border-slate-800 text-white placeholder:text-slate-600 focus:border-violet-500 focus:ring-violet-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 py-2">
              <Checkbox id="terms" required className="border-slate-700 data-[state=checked]:bg-violet-600" />
              <label
                htmlFor="terms"
                className="text-xs font-medium leading-none text-slate-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the <Link href="/terms" className="text-violet-400 hover:text-violet-300">Terms of Service</Link> and <Link href="/privacy" className="text-violet-400 hover:text-violet-300">Privacy Policy</Link>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 transition-all duration-300 py-6 text-base font-semibold shadow-lg shadow-violet-500/20"
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <span className="flex items-center gap-2">
                  Create Account <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0f172a] px-2 text-slate-500">Or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-slate-800 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
              <Mail className="mr-2 h-4 w-4" /> Google
            </Button>
            <Button variant="outline" className="border-slate-800 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center gap-1 border-t border-slate-800 pt-6">
          <span className="text-sm text-slate-400">Already have an account?</span>
          <Link
            href="/login"
            className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300 active:text-violet-500"
          >
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
