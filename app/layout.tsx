import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Full Stack Developer',
  description: 'Professional portfolio showcasing my work as a full stack developer',
  keywords: ['portfolio', 'developer', 'full stack', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Your Name' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 