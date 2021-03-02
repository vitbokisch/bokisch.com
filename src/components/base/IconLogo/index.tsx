import element from '~/components/core/element'
import image from '~/components/base/Image'

const Image = image.attrs<{ name: string }>(({ name }) => ({
  src: name ? require(`~/assets/images/logo-${name}.png`) : undefined,
}))

export default element
  .config({ name: 'base/IconLogo' })
  .attrs<{ name: string }>(({ name = 'strv' }) => ({
    contentAlignX: 'center',
    contentAlignY: 'center',
    content: <Image name={name} responsive />,
  }))
  .theme((t, _, v) => ({
    backgroundColor: v(t.color.light.base, t.color.dark.base),
    borderRadius: t.borderRadius.base,
  }))
  .variants((t, _, v) => ({
    box: {
      height: { xs: 64, md: 100 },
      padding: { xs: t.space.medium },
      backgroundColor: v(t.color.transparent, t.color.light.base),
    },
    circle: {
      width: 72,
      height: 72,
      padding: t.space.xSmall,
      backgroundColor: t.color.light[100],
      borderRadius: t.borderRadius.extra,
    },
  }))
