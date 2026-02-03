import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SYNA - Fixed Income Trading for Wealth Platforms',
  description: 'Industry-leading fixed income APIs designed for retail wealth platforms. Deploy trading infrastructure trusted by firms representing $3T+ in assets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
