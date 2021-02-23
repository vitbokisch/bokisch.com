import { VFC } from 'react'
import { Container } from '~/components/base/grid'
import section from '~/components/base/Section'
import image from '~/components/base/Image'
import element from '~/components/base/Element'
import Background from '~/components/base/Background'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Element = element.theme({ height: 'inherit' })

const Section = section.theme({
  height: '100vh',
  maxHeight: { xs: 520, md: 800 },
  minHeight: { md: 600 },
  background: `linear-gradient(
      180deg,
      #a5aead 0%,
      #b1bab9 52.08%,
      #b0b8b7 100%
    )`,
})

const ProfileImageWrapper = element.theme({
  position: 'absolute',
  right: { xs: -350, sm: -260, lg: -100 },
  bottom: { xs: -70, md: 0 },
  height: { xs: 460, md: 500 },
})

const ProfileImage = image
  .attrs({
    src: require(`~/assets/images/vit-profile.png`),
  })
  .theme({
    width: 'auto',
    height: '100%',
  })

const component: VFC = () => (
  <Section>
    <ProfileImageWrapper>
      <ProfileImage />
    </ProfileImageWrapper>
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
        // contentAlignX={{ xs: 'center', sm: 'left' }}
        afterContent={Footer}
        afterContentAlignX="center"
      />
    </Container>
  </Section>
)

component.displayName = 'sections/Intro'
export default component
