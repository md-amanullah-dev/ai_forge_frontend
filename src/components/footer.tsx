import Link from "next/link";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold text-white">
              AIForge
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Building the next generation of SaaS applications with speed and security. AIForge is your partner in modern development.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API Docs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} AIForge. Empowering developers worldwide.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={18} /></Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={18} /></Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={18} /></Link>
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> by Antigravity
          </p>
        </div>
      </div>
    </footer>
  );
}
