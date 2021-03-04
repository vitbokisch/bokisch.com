import { VFC } from 'react'
import Footer from '~/components/base/skeleton/Footer'
import Link from '~/components/base/Link'

const component: VFC = () => (
  <Footer>
    Made with 💜 by &nbsp; <Link href="/">vitbokisch</Link>
  </Footer>
)

component.displayName = 'sections/Footer'
export default component
