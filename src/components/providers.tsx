"use client";

import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "@/store/useAuthStore";

export function Providers({ children }: { children: ReactNode }) {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid #1e293b',
          },
        }}
      />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
