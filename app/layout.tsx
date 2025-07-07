
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The CIO Project - Confessions; Real Talk; Real Tech',
  description: 'Join veteran IT strategist Howie L Lyke and Boston Red Sox CIO Brian Shield for unfiltered conversations with global CIOs, CTOs, and CISOs. Real insights, real stories, real leadership.',
  keywords: 'CIO, CTO, CISO, IT leadership, technology strategy, podcast, executive insights',
  authors: [{ name: 'The CIO Project' }],
  openGraph: {
    title: 'The CIO Project - Confessions; Real Talk; Real Tech',
    description: 'Unfiltered conversations with global technology leaders',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
