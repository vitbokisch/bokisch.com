import { link } from '~/components/core'

export default link.config({ name: 'base/Badge' }).theme((t) => ({
  height: { xs: 32, md: 40 },
  borderRadius: t.borderRadius.extra,
  fontSize: { xs: t.fontSize.small, md: t.fontSize.base },
  paddingX: { xs: t.space.xSmall, md: t.space.small },
  borderWidth: t.borderWidth.base,
  borderStyle: t.borderStyle.base,
  fontWeight: 500,
  borderColor: 'currentColor',
}))
