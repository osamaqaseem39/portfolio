import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Osama Qaseem - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and Web3 technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

