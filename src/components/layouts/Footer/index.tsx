import type { FC } from 'react'
import Link from '~/components/base/Link'
import Footer from '~/components/base/skeleton/Footer'

const component: FC = () => (
  <Footer>
    Made with 💙 in Prague by &nbsp;{' '}
    <Link href="https://github.com/vitbokisch">vitbokisch</Link>
  </Footer>
)

component.displayName = 'sections/Footer'
export default component
