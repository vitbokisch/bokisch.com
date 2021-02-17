import React from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import Heading from '~/components/base/Heading'
import text from '~/components/base/Text'
import SocialIcons from '~/components/sections/socials/SocialIcons'

const Text = text.theme((t) => ({
  maxWidth: '60%',
  marginBottom: t.space.xLarge,
}))

const component = () => (
  <Provider inversed>
    <Heading level1 label="Hello" />
    <Text xLarge>
      I'm a person with The Architect personality, analytical mind and passion
      for discovering the undiscovered.
    </Text>
    <SocialIcons />
  </Provider>
)

export default component
