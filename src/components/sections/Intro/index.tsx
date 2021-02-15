import React from 'react'
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
  background: `linear-gradient(
      180deg,
      #a5aead 0%,
      #b1bab9 52.08%,
      #b0b8b7 100%
    )`,
})

const ProfileImageWrapper = element.theme({
  position: 'absolute',
  right: -100,
  bottom: 0,
  height: 500,
})

const ProfileImage = image.attrs({
  src: require(`~/assets/images/vit-profile.png`),
})

const component = () => (
  <Section fullScreen>
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
