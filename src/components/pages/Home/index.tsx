import Root from '~/components/base/skeleton/Root'
import MainMenu from '~/components/sections/menu/MainMenu'
import Intro from '~/components/sections/Intro'

const data = [
  { label: 'Home', href: '/' },
  { label: 'Resume', href: '/resume' },
]

const component = () => (
  <Root>
    <Intro />
    <MainMenu menu={data} />
  </Root>
)

component.displayName = 'components/pages/Home'
export default component
