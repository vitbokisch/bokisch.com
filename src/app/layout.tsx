import type { Metadata, Viewport } from 'next'
import { Ubuntu } from 'next/font/google'
import type { ReactNode } from 'react'
import config from '~/config'
import Providers from './providers'

const ubuntu = Ubuntu({
  weight: ['300', '500'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
  display: 'swap',
  variable: '--font-ubuntu',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bokisch.com'),
  title: {
    template: '[%s] Vit Bokisch',
    default: 'Vit Bokisch',
  },
  description: config.description,
  keywords: config.keywords,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: '/favicon/dark/favicon.ico', sizes: 'any' },
      { url: '/favicon/dark/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/dark/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
  },
  manifest: '/favicon/dark/manifest.json',
  openGraph: {
    type: 'website',
    url: config.openGraph?.url || config.url,
    title: config.openGraph?.title || config.title,
    description: config.openGraph?.description || config.description,
    images: config.openGraph?.image ? [config.openGraph.image] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: config.twitter?.title || config.title,
    description: config.twitter?.description || config.description,
    images: config.openGraph?.image ? [config.openGraph.image] : undefined,
  },
  other: {
    google: 'nositelinkssearchbox',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${ubuntu.variable} ${ubuntu.className}`}>
      <head>
        <meta name="theme-color" content="#fff" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
