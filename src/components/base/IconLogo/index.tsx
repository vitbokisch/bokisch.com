import element from '~/components/core/element'
import image from '~/components/base/Image'

const Image = image.attrs<{ name: string }>(({ name }) => ({
  src: require(`~/assets/images/logo-${name}-light.png`),
}))

export default element
  .config({ name: 'base/IconLogo' })
  .attrs<{ name: string }>(({ name = 'strv' }) => ({
    contentAlignX: 'center',
    contentAlignY: 'center',
    content: <Image name={name} responsive />,
  }))
  .theme((t) => ({
    backgroundColor: t.isDark ? t.color.dark.base : t.color.light.base,
    borderRadius: t.borderRadius.base,
  }))
  .variants((t) => ({
    box: {
      padding: t.space.large,
      width: 320,
      height: 100,
    },
    circle: {
      width: 72,
      height: 72,
      padding: t.space.xSmall,
      backgroundColor: t.color.light[100],
      borderRadius: t.borderRadius.extra,
    },
  }))
