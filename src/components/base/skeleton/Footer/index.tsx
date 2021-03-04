import { element } from '~/components/core'

export default element
  .config({
    name: 'base/skeleton/Footer',
  })
  .attrs({
    tag: 'footer',
    block: true,
    contentAlignX: 'center',
  })
  .theme((t, m) => ({
    height: { xs: 60, md: 80 },
    lineHeight: t.lineHeight.reset,
    backgroundColor: m(t.color.light[100], t.color.dark[100]),
    color: m(t.color.dark[100], t.color.light[100]),
    fontSize: { xs: t.fontSize.small, md: t.fontSize.base },
  }))
