"use client"

import Link from "next/link";
import { Sparkles, ArrowRight, Shield, Zap, Globe, Github } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <div className="relative isolate min-h-screen bg-[#020617] px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
      {/* Background decoration - Advanced animated-like blobs */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      {/* Secondary glow */}
      <div className="absolute top-1/4 -right-20 -z-10 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="mx-auto max-w-4xl text-center relative">
        <div className="mb-10 flex justify-center">
          <div className="group relative rounded-full px-4 py-1.5 text-sm leading-6 text-slate-300 ring-1 ring-white/10 hover:ring-white/20 transition-all bg-slate-900/50 backdrop-blur-md cursor-default">
            🚀 The next evolution of SaaS is here.{" "}
            <Link href="/blog" className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        
        <h1 className="text-5xl font-black tracking-tight text-white sm:text-8xl">
          Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600">Faster</span> <br /> 
          Build <span className="italic underline decoration-cyan-500/30">Smarter</span>
        </h1>
        
        <p className="mt-8 text-xl leading-8 text-slate-400 max-w-2xl mx-auto font-medium">
          The ultimate TypeScript boilerplate for high-performance applications. 
          Authentication, database, and premium UI components in one sleek package.
        </p>

        <div className="mt-12 flex items-center justify-center gap-x-8">
          {isAuthenticated ? (
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white min-w-[180px] h-14 text-lg font-bold rounded-2xl shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/profile">
                Go to Profile <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <>
              <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-100 min-w-[180px] h-14 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Link href="/login" className="text-sm font-bold leading-6 text-white hover:text-cyan-400 transition-all flex items-center gap-2 group">
                Sign In <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Feature Section with Premium Cards */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {[
            { 
              title: "Enterprise Auth", 
              desc: "Pro-grade JWT auth with multi-role support and secure session handling.", 
              icon: Shield, 
              color: "from-cyan-500 to-blue-500",
              light: "bg-cyan-500/10 text-cyan-400"
            },
            { 
              title: "Rapid Deployment", 
              desc: "Optimized Next.js 14 architecture for sub-second page loads and SEO mastery.", 
              icon: Zap, 
              color: "from-blue-500 to-indigo-500",
              light: "bg-blue-500/10 text-blue-400"
            },
            { 
              title: "Global Scale", 
              desc: "Database-ready with MySQL and drizzle-like efficiency for massive datasets.", 
              icon: Globe, 
              color: "from-indigo-500 to-cyan-500",
              light: "bg-indigo-500/10 text-indigo-400"
            }
          ].map((feature, i) => (
            <div key={i} className="group relative flex flex-col gap-5 p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className={`h-14 w-14 rounded-2xl ${feature.light} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              
              {/* Subtle hover background highlight */}
              <div className={`absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
}
