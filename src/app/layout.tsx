import type { Metadata } from "next";
import { Geist, Geist_Mono, Recursive } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"
import Providers from "@/components/Providers";

const recursive = Recursive({subsets:["latin"]})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixelle",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
