import { PyreonUI } from '@pyreon/ui-core'
import Heading from '~/components/base/Heading'
import text from '~/components/base/Text'
import ContactIconList from '~/components/sections/contacts/ContactIconList'
import theme from '~/theme/theme'

const Text = text.theme((t) => ({
  maxWidth: { sm: '80%', lg: '60%' },
  marginBottom: t.space.xLarge,
  fontSize: {
    xs: t.fontSize.base,
    md: t.fontSize.large,
    lg: t.fontSize.xLarge,
  },
}))

type Props = {
  heading?: string
}

const Component = (props: Props) => (
  <PyreonUI theme={theme} inversed>
    <Heading size="level1" label={props.heading} />
    <Text state="base">
      I build and deliver products that actually ship.
      <br />
      Efficiently and smartly.
    </Text>
    <ContactIconList />
  </PyreonUI>
)

export default Component
