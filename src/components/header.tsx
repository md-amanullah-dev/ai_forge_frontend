"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, User, Settings, LayoutDashboard, Menu, X, Sparkles, Zap } from "lucide-react";

import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useAuthStore } from "@/store/useAuthStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-2xl font-black tracking-tighter text-white group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Zap className="h-6 w-6 text-white fill-white/20" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-cyan-400 transition-all">AIForge</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-slate-400 transition-all hover:text-cyan-400">Home</Link>
            <Link href="/blog" className="text-sm font-bold text-slate-400 transition-all hover:text-cyan-400">Resources</Link>
            {isAuthenticated && (
              <Link href="/dashboard" className="text-sm font-bold text-slate-400 transition-all hover:text-cyan-400">Console</Link>
            )}
            <Link href="#" className="text-sm font-bold text-slate-400 transition-all hover:text-cyan-400 italic opacity-50">Docs</Link>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-11 w-11 rounded-2xl ring-offset-[#020617] focus-visible:ring-2 focus-visible:ring-cyan-500 overflow-hidden group">
                  <Avatar className="h-11 w-11 border-2 border-white/5 transition-all group-hover:border-cyan-500/50">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-slate-900 font-black text-xs text-cyan-400">
                      {user?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 border-white/5 bg-slate-950/95 backdrop-blur-2xl text-slate-200 mt-2 p-2 rounded-2xl" align="end" forceMount>
                <DropdownMenuLabel className="font-normal p-3">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-black text-white leading-none">{user?.name}</p>
                    <p className="text-xs font-medium leading-none text-slate-500">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/5 mx-2" />
                <div className="p-1">
                  <DropdownMenuItem asChild className="focus:bg-cyan-500/10 focus:text-cyan-400 cursor-pointer rounded-xl h-10 transition-colors">
                    <Link href="/profile" className="flex w-full items-center font-bold">
                      <User className="mr-3 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:bg-cyan-500/10 focus:text-cyan-400 cursor-pointer rounded-xl h-10 transition-colors">
                    <Link href="/settings" className="flex w-full items-center font-bold">
                      <Settings className="mr-3 h-4 w-4" />
                      <span>Preferences</span>
                    </Link>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator className="bg-white/5 mx-2" />
                <div className="p-1">
                  <DropdownMenuItem onClick={handleLogout} className="focus:bg-red-500/10 focus:text-red-400 cursor-pointer text-red-400/80 rounded-xl h-10 font-black transition-colors">
                    <LogOut className="mr-3 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden items-center gap-6 md:flex">
              <Link href="/login" className="text-sm font-bold text-slate-400 transition-colors hover:text-white">
                Login
              </Link>
              <Button asChild className="bg-white text-slate-950 hover:bg-cyan-400 hover:text-slate-950 font-black px-6 rounded-xl transition-all shadow-[0_5px_15px_rgba(255,255,255,0.1)] active:scale-95">
                <Link href="/signup">Join AIForge</Link>
              </Button>
            </div>
          )}

          <button className="lg:hidden text-slate-400 hover:text-white transition-colors p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Premium Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-50 bg-[#020617]/95 backdrop-blur-3xl px-8 py-10 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-6">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-white hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-white hover:text-cyan-400 transition-colors">Resources</Link>
            {isAuthenticated && (
              <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black text-white hover:text-cyan-400 transition-colors">Dashboard</Link>
            )}
          </nav>
          
          <div className="h-px bg-white/5 w-full" />
          
          {!isAuthenticated && (
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/login" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-slate-400">Already a member? Login</Link>
              <Button asChild onClick={() => setIsMenuOpen(false)} className="h-16 text-xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl">
                <Link href="/signup">Create Account</Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
