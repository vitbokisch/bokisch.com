import Root from '~/components/base/skeleton/Root'
import MainMenu from '~/components/sections/menu/MainMenu'
import Intro from '~/components/sections/Intro'

const component = () => (
  <Root>
    <Intro />
    <MainMenu />
  </Root>
)

component.displayName = 'components/pages/Home'
export default component
