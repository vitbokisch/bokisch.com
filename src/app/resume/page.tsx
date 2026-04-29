import type { Metadata } from 'next'
import Resume from '~/components/pages/Resume'

export const metadata: Metadata = {
  title: 'Resume',
  openGraph: {
    url: 'https://bokisch.com/resume',
    title: '[Resume] Vit Bokisch',
  },
  twitter: {
    title: '[Resume] Vit Bokisch',
  },
}

export default function Page() {
  return <Resume />
}
