import element from '~/components/base/Element'
import image from '~/components/base/Image'
import Text from '../Text'

const Image = image.attrs({
  src: require('~/assets/logo/logo-vit-bokisch.svg'),
})

const Logo = element
  .config({ name: 'base/Logo' })
  .attrs({
    contentAlignX: 'left',
    contentAlignY: 'center',
    content: <Image responsive />,
  })
  .theme((t) => ({
    width: 250,
  }))

const LogoHeading = Text.attrs({
  label: 'Frontend Engineer | Architect | Innovator',
}).theme({
  color: 'rgba(255, 255, 255, 0.6)',
  textTransform: 'uppercase',
  fontSize: 18,
  marginTop: 8,
  fontWeight: 500,
})

export { LogoHeading }

export default Logo
