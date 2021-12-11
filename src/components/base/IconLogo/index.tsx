import { element } from '~/components/core'
import image from '~/components/base/Image'
import loadIconLogo, { Props } from './loadIconLogo'
import withLink from './withLink'

const Image = image
  .compose({ loadIconLogo })
  .attrs<{ name?: string }>({})
  .theme({
    maxHeight: {
      xs: 30,
      md: 40,
    },
  })

export default element
  .config({ name: 'base/IconLogo' })
  .compose({ withLink })
  .attrs<Props>(({ name }) => ({
    contentAlignX: 'center',
    contentAlignY: 'center',
    content: name ? <Image name={name} responsive /> : undefined,
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
