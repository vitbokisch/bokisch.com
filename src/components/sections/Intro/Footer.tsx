import React from 'react'
import box from '~/components/base/Box'
import SocialList from '~/components/sections/socials/SocialList'

const Box = box
  .attrs({
    contentDirection: 'inline',
    contentAlignX: 'spaceAround',
  })
  .theme((t) => ({
    width: '100%',
    maxWidth: { xs: '80%', md: 600 },
  }))

const component = () => (
  <Box small>
    <SocialList
      rootElement={false}
      contentDirection="inline"
      types={['email', 'home']}
    />
  </Box>
)

export default component
