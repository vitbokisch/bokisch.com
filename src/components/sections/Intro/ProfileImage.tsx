import { VFC } from 'react'
import { element } from '~/components/core'
import image from '~/components/base/Image'

const ProfileImageWrapper = element.theme({
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
  })
  .theme({
    width: 'auto',
    height: '100%',
  })

const component: VFC = () => (
  <ProfileImageWrapper>
    <ProfileImage />
  </ProfileImageWrapper>
)

component.displayName = 'sections/Intro/ProfileImage'
export default component
