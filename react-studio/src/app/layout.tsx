import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider"; // Import ThemeProvider

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
    <html lang="en" className="h-100" suppressHydrationWarning> {/* suppressHydrationWarning is recommended by next-themes */}
      <body className={`${geistSans.variable} ${geistMono.variable} d-flex flex-column h-100`}>
        <ThemeProvider
          attribute="data-bs-theme" // Use data-bs-theme for Bootstrap theming
          defaultTheme="system"
          enableSystem
        >
          <AppNavbar />
          <div style={{ flex: "1 0 auto" }}>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}