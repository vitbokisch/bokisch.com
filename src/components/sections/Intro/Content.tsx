import React from 'react'
import { Provider } from '@vitus-labs/rocketstyle'
import Heading from '~/components/base/Heading'
import text from '~/components/base/Text'
import SocialIcons from '~/components/sections/socials/SocialIcons'

const Text = text.theme((t) => ({
  maxWidth: { sm: '80%', lg: '60%' },
  marginBottom: t.space.xLarge,
  // textAlign: { xs: 'center', sm: 'left' },
  fontSize: { xs: t.fontSize.base, md: t.fontSize.xLarge },
}))

const component = () => (
  <Provider inversed>
    <Heading level1 label="Hello" />
    <Text paragraph>
      I'm a person with The Architect personality, analytical mind and passion
      for discovering the undiscovered.
    </Text>
    <SocialIcons />
  </Provider>
)

export default component
