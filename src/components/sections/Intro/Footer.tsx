import box from '~/components/base/Box'
import ContactList from '~/components/sections/contacts/ContactList'

const Box = box.config({ name: 'sections/Intro/Footer' }).theme({
  width: '100%',
  maxWidth: { xs: '80%', md: 600 },
})

const Component= () => (
  <Box>
    <ContactList
      contentDirection={{ xs: 'rows', sm: 'inline' }}
      contentAlignX={{ xs: 'left', sm: 'spaceAround' }}
      indent="xLarge"
      gap={undefined}
      types={['email', 'home']}
      wrapProps={{ block: { xs: true, sm: false } }}
      itemProps={{ block: { xs: true, sm: false } }}
    />
  </Box>
)

Component.displayName = 'sections/Intro/Content'

export default Component
