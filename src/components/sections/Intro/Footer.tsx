import React from 'react'
import box from '~/components/base/Box'
import Link from '~/components/base/Link'

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
    <Link label="bokisch.com" icon="home" href="/" />
    <Link label="vit@bokisch.cz" icon="email" href="mailto: vit@bokisch.cz" />
  </Box>
)

export default component
