import { ReactNode } from "react";

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: ReactNode }) {
  // Add more providers here as needed
  return (
    <>
      <Toaster position="top-center" />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
