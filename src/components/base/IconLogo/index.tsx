import { element } from '~/components/core'
import image from '~/components/base/Image'

const Image = image
  .attrs<{ name: string }>(({ name }) => ({
    src: name ? require(`~/assets/images/logo-${name}.png`) : undefined,
  }))
  .theme({
    maxHeight: {
      xs: 30,
      md: 40,
    },
  })

export default element
  .config({ name: 'base/IconLogo' })
  .attrs<{ name: string }>(({ name = 'strv' }) => ({
    contentAlignX: 'center',
    contentAlignY: 'center',
    content: <Image name={name} responsive />,
  }))
  .theme((t, m) => ({
    backgroundColor: m(t.color.light.base, t.color.dark.base),
    borderRadius: t.borderRadius.base,
  }))
  .variants((t, m) => ({
    box: {
      height: { xs: 64, md: 100 },
      padding: { xs: t.space.medium },
      backgroundColor: m(t.color.transparent, t.color.light.base),
    },
    circle: {
      width: 72,
      height: 72,
      padding: t.space.xSmall,
      backgroundColor: t.color.light[100],
      borderRadius: t.borderRadius.extra,
    },
  }))
