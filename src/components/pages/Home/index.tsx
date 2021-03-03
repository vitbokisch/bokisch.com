import Root from '~/components/base/skeleton/Root'
import background from '~/components/base/Background'
import MainMenu from '~/components/sections/menu/MainMenu'
import Intro from '~/components/sections/Intro'

const Background = background.theme({
  minHeight: '100vh',
  background: `linear-gradient(
      180deg,
      #a5aead 0%,
      #b1bab9 52.08%,
      #b0b8b7 100%
    )`,
})

const data = [
  { label: 'Home', href: '/' },
  { label: 'Resume', href: '/resume' },
]

const component = () => (
  <Root>
    <Background>
      <Intro />
      <MainMenu menu={data} />
    </Background>
  </Root>
)

component.displayName = 'components/pages/Home'
export default component
