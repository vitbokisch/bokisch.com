import { FC } from 'react'
import box from '~/components/base/Box'
import ContactList from '~/components/sections/contacts/ContactList'

const Box = box.theme({
  width: '100%',
  maxWidth: { xs: '80%', md: 600 },
})

const component: FC = () => (
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

export default component
