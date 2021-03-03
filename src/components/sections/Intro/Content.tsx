import { Provider } from '@vitus-labs/rocketstyle'
import Heading from '~/components/base/Heading'
import Link from '~/components/base/Link'
import text from '~/components/base/Text'
import SocialIcons from '~/components/sections/socials/SocialIcons'

const Text = text.theme((t) => ({
  maxWidth: { sm: '80%', lg: '60%' },
  marginBottom: t.space.xLarge,
  fontSize: { xs: t.fontSize.base, md: t.fontSize.xLarge },
}))

const component = () => (
  <Provider inversed>
    <Heading level1 label="Hello" />
    <Text base paragraph>
      I'm a person with{' '}
      <Link href="https://www.16personalities.com/profiles/2d5836f3f4526">
        The Architect
      </Link>{' '}
      personality, analytical mind and passion for discovering the undiscovered.
    </Text>
    <SocialIcons />
  </Provider>
)

export default component
