import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { ClerkProvider } from "@clerk/nextjs";

// import { ClerkProvider } from '@clerk/nextjs'

// Initialize the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AutoNation",
  description: "Your personal AI assistant for seamless automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} font-sans antialiased`}>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </Providers>
        
        </body>
      </html>
    </ClerkProvider>
    
  );
}