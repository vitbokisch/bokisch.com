import React from 'react'
import { Container } from '~/components/base/grid'
import section from '~/components/base/Section'
import element from '~/components/base/Element'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Element = element.theme({ height: 'inherit' })

const Section = section
  .attrs({ contentAlignY: 'top' })
  .theme({
    height: '95vh',
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

const component = () => (
  <Section>
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
