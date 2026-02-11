import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import config from '~/config'
import Providers from './providers'
import StylerRegistry from './registry'

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
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#fff" />
      </head>
      <body>
        <StylerRegistry>
          <Providers>{children}</Providers>
        </StylerRegistry>
      </body>
    </html>
  )
}
