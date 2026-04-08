"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 rounded-full border border-white/10 bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-white"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] opacity-100 transition-all dark:opacity-100" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] opacity-100 transition-all dark:opacity-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
