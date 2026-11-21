import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
