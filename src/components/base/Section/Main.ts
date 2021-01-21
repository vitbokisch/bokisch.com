import element from '~/components/core/element'

export default element
  .config({
    name: 'base/Section',
  })
  .attrs({
    block: true,
    tag: 'section',
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    paddingY: t.space.xxLarge,
  }))
