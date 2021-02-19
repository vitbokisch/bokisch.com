import element from '~/components/core/element'

export default element
  .config({
    name: 'base/skeleton/Footer',
  })
  .attrs({
    tag: 'footer',
    block: true,
    contentAlignX: 'center',
  })
  .theme((t, _, v) => ({
    height: 80,
    lineHeight: t.lineHeight.reset,
    backgroundColor: v(t.color.light[100], t.color.dark[100]),
    color: v(t.color.dark[100], t.color.light[100]),
  }))
