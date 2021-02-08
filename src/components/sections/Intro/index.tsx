import React from 'react'
import { Container } from '~/components/base/grid'
import section from '~/components/base/Section'
import image from '~/components/base/Image'
import element from '~/components/base/Element'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Element = element.theme({ height: 'inherit' })

const Section = section
  .attrs({ contentAlignY: 'top' })
  .theme({
    height: '100vh',
  })
  .styles(
    (css) => css`
      background: linear-gradient(
        180deg,
        #a5aead 0%,
        #b1bab9 52.08%,
        #b0b8b7 100%
      );
    `
  )

const OverlayWrapper = element
  .theme({
    fullScreen: true,
    position: 'absolute',
  })
  .styles(
    (css) => css`
      background: linear-gradient(
        281.95deg,
        rgba(0, 0, 0, 0.5) 1.84%,
        rgba(0, 0, 0, 0.37) 98.24%
      );
    `
  )

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
  <Section>
    <ProfileImageWrapper>
      <ProfileImage />
    </ProfileImageWrapper>
    <OverlayWrapper />
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
