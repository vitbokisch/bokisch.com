import React from 'react'
import Heading from '~/components/base/Heading'
import text from '~/components/base/Text'
import SocialIcons from '~/components/sections/socials/SocialIcons'

const Text = text.theme((t) => ({
  maxWidth: '60%',
  marginBottom: t.space.xLarge,
}))

const component = () => (
  <>
    <Heading level1 label="Hello" />
    <Text xLarge>
      I'm a person with The Architect personality, analytical mind and passion
      for discovering the undiscovered.
    </Text>
    <SocialIcons />
  </>
)

export default component
