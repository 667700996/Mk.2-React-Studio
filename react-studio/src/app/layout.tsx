import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss"; // Changed from .css
// The bootstrap css import is now removed
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Studio",
  description: "A website and blog built with Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-100">
      <body className={`${geistSans.variable} ${geistMono.variable} d-flex flex-column h-100`}>
        <AppNavbar />
        <div style={{ flex: "1 0 auto" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
