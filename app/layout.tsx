import type { Metadata } from 'next'
import { Manrope, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-d',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-b',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-m',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Fabio Mughilan — Software Engineer',
    template: '%s | Fabio Mughilan',
  },
  description:
    'Full-stack engineer specialising in Web3, AI systems, and high-performance distributed applications.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fabiomughilanportfolio.vercel.app',
    siteName: 'Fabio Mughilan',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
