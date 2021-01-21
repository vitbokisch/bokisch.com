import box from '~/components/base/Box'
import image from '~/components/base/Image'

const Image = image.attrs({
  src: require('~/assets/images/logo-cinnamon-light.png'),
})

export default box.config({ name: 'fragments/Logo' }).attrs({
  noShadow: true,
  content: Image,
})
