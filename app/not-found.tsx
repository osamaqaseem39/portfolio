import type { Viewport, Metadata } from 'next'
import NotFoundClient from "@/components/NotFoundClient";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
}

export default function NotFound() {
  return <NotFoundClient />
} 