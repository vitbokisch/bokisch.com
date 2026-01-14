import type { FC } from 'react'
import { Provider } from '~/theme'
import Heading from '~/components/base/Heading'
import text from '~/components/base/Text'
import ContactIconList from '~/components/sections/contacts/ContactIconList'

const Text = text.theme((t) => ({
  maxWidth: { sm: '80%', lg: '60%' },
  marginBottom: t.space.xLarge,
  fontSize: { xs: t.fontSize.base, md: t.fontSize.xLarge },
}))

type Props = {
  heading?: string
}

const Component: FC<Props> = ({ heading }) => (
  <Provider inversed>
    <Heading level1 label={heading} />
    <Text base paragraph>
      I build and deliver products that actually ship. Efficiently and smartly.
    </Text>
    <ContactIconList />
  </Provider>
)

export default Component
