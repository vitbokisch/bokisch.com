import type { Metadata } from 'next'
import Home from '~/components/pages/Home'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
  return <Home />
}
