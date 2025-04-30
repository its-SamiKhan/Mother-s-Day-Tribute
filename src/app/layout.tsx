import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mother's Day Tribute",
  description: "A tribute to all the mothers out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8fafc] text-[#22223b] font-sans`}>
        <header className="w-full py-6 px-4 flex items-center justify-between" style={{ backgroundColor: '#6A89A7' }}>
          <span className="text-2xl font-bold tracking-tight">Mother's Day Tribute Blog</span>
          <nav className="space-x-6 ml-auto">
            <a href="/" className="hover:text-[#000000] font-medium">Home</a>
            <a href="/categories" className="hover:text-[#000000] font-medium">Categories</a>
            <a href="/about" className="hover:text-[#000000] font-medium">About</a>
            <a href="/contact" className="hover:text-[#000000] font-medium">Contact</a>
          </nav>
        </header>
        <main className="min-h-[80vh]">{children}</main>
        <footer className="w-full py-6 px-4 bg-white border-t text-center text-sm text-[#f8fafc]" style={{ backgroundColor: '#384959' }}>&copy; {new Date().getFullYear()} Mother's Day Tribute Blog. All rights reserved.</footer>
      </body>
    </html>
  );
}
