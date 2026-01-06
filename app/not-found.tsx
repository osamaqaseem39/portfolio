import type { Viewport } from 'next'
import NotFoundClient from "@/components/NotFoundClient";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function NotFound() {
  return <NotFoundClient />
} 