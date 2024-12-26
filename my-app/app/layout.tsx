import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientToaster from '@/components/ClientToaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marcantonio Global - Defense Innovation Solutions',
  description: 'Leading provider of innovative defense technology solutions and strategic consulting services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ClientToaster />
      </body>
    </html>
  )
}

