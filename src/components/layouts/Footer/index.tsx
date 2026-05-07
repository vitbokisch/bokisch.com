import Link from '~/components/base/Link'
import Footer from '~/components/base/skeleton/Footer'

const component= () => (
  <Footer>
    Made with 💙 in Prague by &nbsp;{' '}
    <Link href="https://github.com/vitbokisch">vitbokisch</Link>
  </Footer>
)

component.displayName = 'sections/Footer'
export default component
