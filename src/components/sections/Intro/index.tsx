import { FC } from 'react'
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
  minHeight: { xl: 640 },
  maxHeight: { xs: 640, md: 800, lg: 1000 },
  overflow: 'hidden',
  background: 'linear-gradient(180deg, #a5aead 0%, #b1bab9 52%, #b0b8b7 100%)',
})

type Props = {
  heading?: string
}

const Component: FC<Props> = ({ heading }) => (
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
        content={<Content heading={heading} />}
        contentDirection="rows"
        afterContent={Footer}
        afterContentAlignX="center"
      />
    </Container>
  </Section>
)

Component.displayName = 'sections/Intro'
export default Component
