import { FC } from 'react'
import { element } from '~/components/core'
import image from '~/components/base/Image'

const ProfileImageWrapper = element
  .config({
    name: 'Intro/ProfileImage',
  })
  .theme({
    position: 'absolute',
    right: { xs: -350, sm: -260, lg: -100, xxl: 'initial' },
    bottom: { xs: -70, md: 0 },
    height: { xs: 460, md: 500 },
    left: { xxl: '55%' },
  })

const ProfileImage = image
  .attrs({
    src: 'vit-profile.png',
    placeholder: true,
    loading: 'eager',
    alt: 'Vit Bokisch',
  })
  .theme({
    width: 'auto',
    height: '100%',
  })

const component: FC = () => (
  <ProfileImageWrapper>
    <ProfileImage />
  </ProfileImageWrapper>
)

component.displayName = 'sections/Intro/ProfileImage'
export default component
