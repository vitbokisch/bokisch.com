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
  maxHeight: { xs: 520, md: 800, lg: 1000 },
  minHeight: { xs: '100vh', md: 600 },
  overflow: 'hidden',
  background: `linear-gradient(
      180deg,
      #a5aead 0%,
      #b1bab9 52.08%,
      #b0b8b7 100%
    )`,
})

const ProfileImageWrapper = element.theme({
  position: 'absolute',
  right: { xs: -350, sm: -260, lg: -100, xxl: 'initial' },
  bottom: { xs: -70, md: 0 },
  height: { xs: 460, md: 500 },
  left: { xxl: '55%' },
})

const ProfileImage = image
  .attrs({
    src: require(`~/assets/images/vit-profile.png`),
  })
  .theme({
    width: 'auto',
    height: '100%',
  })

type Props = {
  fullScreen?: boolean
}

const component: VFC<Props> = ({ fullScreen }) => (
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
        afterContent={Footer}
        afterContentAlignX="center"
      />
    </Container>
  </Section>
)

component.displayName = 'sections/Intro'
export default component
