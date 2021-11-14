import { VFC } from 'react'
import { Provider } from '~/theme'
import Heading from '~/components/base/Heading'
import Link from '~/components/base/Link'
import text from '~/components/base/Text'
import ContactIconList from '~/components/sections/contacts/ContactIconList'

const Text = text.theme((t) => ({
  maxWidth: { sm: '80%', lg: '60%' },
  marginBottom: t.space.xLarge,
  fontSize: { xs: t.fontSize.base, md: t.fontSize.xLarge },
}))

const component: VFC = () => (
  <Provider inversed>
    <Heading level1 label="Hello" />
    <Text base paragraph>
      I&apos;m a person with{' '}
      <Link href="https://www.16personalities.com/profiles/2d5836f3f4526">
        The Architect
      </Link>{' '}
      personality, analytical mind and passion for discovering the undiscovered.
    </Text>
    <ContactIconList />
  </Provider>
)

export default component
