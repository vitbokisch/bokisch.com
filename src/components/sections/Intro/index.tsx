import type { FC } from 'react'
import Background from '~/components/base/Background'
import { Container } from '~/components/base/grid'
import section from '~/components/base/Section'
import { element } from '~/components/core'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import ProfileImage from './ProfileImage'

const Element = element.theme({ height: 'inherit' })

const Section = section.theme({
  height: '100vh',
  minHeight: { xl: 640 },
  maxHeight: { xs: 640, md: 800 },
  overflow: 'hidden',
  background: 'linear-gradient(180deg, #a5aead 0%, #b1bab9 52%, #b0b8b7 100%)',
})
.variants(() => ({
  fullScreen: {
    height: '100vh',
    minHeight: { xl: 640 },
    maxHeight: { xs: 640, md: 800, lg: 1400 },
  },
}))


type Props = {
  heading?: string
  variant?: typeof Section['$$types']['variant']
}

const Component: FC<Props> = ({ variant, heading }) => (
  <Section variant={variant}>
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
