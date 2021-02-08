import React from 'react'
import Heading from '~/components/base/Heading'
import text from '~/components/base/Text'
import IconList from '~/components/base/IconList'
import { socials } from './data'

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
    <IconList
      data={socials}
      gap="large"
      itemProps={{ size: 'medium', base: true, external: true }}
    />
  </>
)

export default component
