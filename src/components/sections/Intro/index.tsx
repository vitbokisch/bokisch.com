import React from 'react'
import { Container } from '~/components/base/grid'
import section from '~/components/base/Section'
import box from '~/components/base/Box'
import Link from '~/components/base/Link'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import IconList from '~/components/base/IconList'

const Box = box
  .attrs({
    contentDirection: 'inline',
    contentAlignX: 'spaceAround',
  })
  .theme((t) => ({
    width: '60%',
  }))

const Section = section.styles(
  (css) => css`
    background: linear-gradient(
      180deg,
      #a5aead 0%,
      #b1bab9 52.08%,
      #b0b8b7 100%
    );
  `
)

const data = [
  {
    name: 'github',
    href: 'https://github.com',
  },
  {
    name: 'linkedin',
    link: 'https://github.com',
  },
  {
    name: 'medium',
    link: 'https://github.com',
  },
  {
    name: 'twitter',
    link: 'https://github.com',
  },
  {
    name: 'stackoverflow',
    link: 'https://github.com',
  },
]

const component = () => (
  <Section>
    <Container>
      <Heading level1 label="Hello" />
      <Text xLarge>
        I'm a person with The Architect personality, analytical mind and passion
        for discovering the undiscovered.
      </Text>
      <IconList data={data} gap="large" itemProps={{ size: 'medium' }} />

      <Box small>
        <Link
          label="vit@bokisch.cz"
          icon="github"
          href="mailto: vit@bokisch.cz"
        />
        <Link
          label="vit@bokisch.cz"
          icon="github"
          href="mailto: vit@bokisch.cz"
        />
      </Box>
    </Container>
  </Section>
)

component.displayName = 'sections/Intro'
export default component
