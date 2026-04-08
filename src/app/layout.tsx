import { ReactNode } from "react";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Providers } from "../components/providers";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
