import box from '~/components/base/Box'
import image from '~/components/base/Image'

const Image = image.attrs<{ name: string }>(({ name }) => ({
  src: require(`~/assets/images/logo-${name}-light.png`),
}))
// .theme({
//   maxHeight: '60%',
//   maxWidth: '70%',
// })

export default box
  .config({ name: 'fragments/Logo' })
  .attrs<{ name: string }>(({ name = 'strv' }) => ({
    contentAlignX: 'center',
    contentAlignY: 'center',
    noShadow: true,
    content: <Image name={name} responsive />,
  }))
  .theme((t) => ({
    padding: t.space.large,
    width: 320,
    height: 100,
  }))
