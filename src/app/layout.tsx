import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Gateway - The Ultimate AI Gateway for Modern Apps',
  description: 'Seamlessly integrate, manage, and scale your AI models with our powerful gateway. Built for developers who demand reliability, security, and performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}