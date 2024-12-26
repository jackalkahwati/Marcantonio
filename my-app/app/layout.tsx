import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientToaster from '@/components/ClientToaster'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a2e44'
}

export const metadata: Metadata = {
  title: 'Marcantonio Global - Defense Technology Innovation',
  description: 'Leading provider of innovative defense technology solutions, specializing in AI, cybersecurity, and strategic defense systems.',
  keywords: 'defense technology, military innovation, cybersecurity, AI defense, quantum computing, defense consulting',
  metadataBase: new URL('https://marcantonioglobal.com'),
  openGraph: {
    title: 'Marcantonio Global - Defense Technology Innovation',
    description: 'Leading provider of innovative defense technology solutions, specializing in AI, cybersecurity, and strategic defense systems.',
    url: 'https://marcantonioglobal.com',
    siteName: 'Marcantonio Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marcantonio Global - Defense Technology Innovation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcantonio Global - Defense Technology Innovation',
    description: 'Leading provider of innovative defense technology solutions, specializing in AI, cybersecurity, and strategic defense systems.',
    images: ['/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ClientToaster />
      </body>
    </html>
  )
}

