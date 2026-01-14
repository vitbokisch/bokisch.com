import type { FC } from 'react'
import background from '~/components/base/Background'
import Layout from '~/components/layouts/Base'
import Seo from '~/components/meta/Seo'
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

const component: FC = () => (
  <>
    <Seo title="Home" />
    <Layout>
      <Background>
        <Intro heading="Hello" variant='fullScreen' />
      </Background>
    </Layout>
  </>
)

component.displayName = 'components/pages/Home'
export default component
