"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="ml-4 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="ml-2 hidden sm:inline">
        {isDark ? "Light" : "Dark"} Mode
      </span>
    </button>
  );
}
