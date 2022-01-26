import { VFC } from 'react'
import { element } from '~/components/core'
import section from '~/components/base/Section'
import { Container } from '~/components/base/grid'
import Background from '~/components/base/Background'
import ProfileImage from './ProfileImage'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Element = element.theme({ height: 'inherit' })

const Section = section.theme({
  height: '100vh',
  maxHeight: { xs: 640, md: 800, lg: 1000 },
  // minHeight: { xs: '100vh', md: 600 },
  overflow: 'hidden',
  background: `linear-gradient(
      180deg,
      #a5aead 0%,
      #b1bab9 52.08%,
      #b0b8b7 100%
    )`,
})

const component: VFC = () => (
  <Section>
    <ProfileImage />
    <Background overlay />

    <Container
      css={`
        height: 100%;
      `}
    >
      <Element
        gap={36}
        block
        direction="rows"
        beforeContent={Header}
        beforeContentDirection="rows"
        beforeContentAlignX="block"
        content={Content}
        contentDirection="rows"
        afterContent={Footer}
        afterContentAlignX="center"
      />
    </Container>
  </Section>
)

component.displayName = 'sections/Intro'
export default component
