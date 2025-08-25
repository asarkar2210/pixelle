import type { Metadata } from "next";
import { Geist, Geist_Mono, Recursive } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";


export const metadata = constructMetadata()
export const dynamic = 'force-dynamic'

const recursive = Recursive({subsets:["latin"]})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Render layout dynamically so auth-dependent UI (NavBar) is not statically cached
  // Next 15: also supported to use export const dynamic = 'force-dynamic' at file scope
  // but we'll instruct via noStore() in NavBar and here by using metadata+server components
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any"/>
      </head>
      <body
        className={recursive.className}
      >
        <NavBar />
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light">
          <div className="flex-1 flex flex-col h-full">
            <Providers> {children} </Providers>                
          </div>
          <Footer />
        </main> 
        <Toaster position="bottom-center" richColors/>
      </body>
    </html>
  );
}
