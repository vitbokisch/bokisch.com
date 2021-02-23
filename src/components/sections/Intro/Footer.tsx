import React from 'react'
import box from '~/components/base/Box'
import SocialList from '~/components/sections/socials/SocialList'

const Box = box.theme((t) => ({
  width: '100%',
  maxWidth: { xs: '80%', md: 600 },
}))

const component = () => (
  <Box small>
    <SocialList
      contentDirection={{ xs: 'rows', sm: 'inline' }}
      contentAlignX={{ xs: 'left', sm: 'spaceAround' }}
      indent="xLarge"
      gap={undefined}
      types={['email', 'home']}
    />
  </Box>
)

export default component
