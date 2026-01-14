import { element } from '~/components/core'
import image from '~/components/base/Image'

const ProfileImage = image
  .config({
    name: 'sections/Intro/ProfileImage',
  })
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

export default element
  .config({
    name: 'sections/Intro/ProfileImageWrapper',
  })
  .attrs({ content: ProfileImage })
  .theme({
    position: 'absolute',
    right: { xs: -200, sm: -180, lg: -100, xxl: 'initial' },
    bottom: { xs: -70, md: 0 },
    height: { xs: 460, md: 640 },
    left: { xxl: '55%' },
  })
