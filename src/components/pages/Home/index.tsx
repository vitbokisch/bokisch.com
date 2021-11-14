import { VFC } from 'react'
import Seo from '~/components/meta/Seo'
import Layout from '~/components/layouts/Base'
import background from '~/components/base/Background'
import Intro from '~/components/sections/Intro'
import MainMenu from '~/components/sections/menu/MainMenu'

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

const component: VFC = () => (
  <>
    <Seo title="Home" />
    <Layout>
      <Background>
        <Intro />
        <MainMenu menu={data} />
      </Background>
    </Layout>
  </>
)

component.displayName = 'components/pages/Home'
export default component
