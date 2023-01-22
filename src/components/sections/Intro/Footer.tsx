import { FC } from 'react'
import box from '~/components/base/Box'
import ContactList from '~/components/sections/contacts/ContactList'

const Box = box.config({ name: 'sections/Intro/Footer' }).theme({
  width: '100%',
  maxWidth: { xs: '80%', md: 600 },
})

const Component: FC = () => (
  <Box>
    <ContactList
      contentDirection={{ xs: 'rows', sm: 'inline' }}
      contentAlignX={{ xs: 'left', sm: 'spaceAround' }}
      indent="xLarge"
      gap={undefined}
      types={['email', 'home']}
    />
  </Box>
)

Component.displayName = 'sections/Intro/Content'

export default Component
