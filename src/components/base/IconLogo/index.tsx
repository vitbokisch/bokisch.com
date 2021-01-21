import box from '~/components/base/Box'
import image from '~/components/base/Image'

const Image = image.attrs<{ name: string }>(({ name }) => ({
  src: require(`~/assets/images/logo-${name}-light.png`),
}))

export default box
  .config({ name: 'fragments/Logo' })
  .attrs<{ name: string }>(({ name = 'strv' }) => ({
    noShadow: true,
    content: <Image name={name} responsive />,
  }))
  .theme({
    width: 318,
    height: 102,
  })
