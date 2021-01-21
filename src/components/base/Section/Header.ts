import element from '~/components/core/element'

export default element
  .config({
    name: 'base/Section/Header',
  })
  .attrs({
    tag: 'header',
    contentDirection: 'rows',
    contentAlignX: 'center',
  })
  .theme((t) => ({
    marginBottom: t.space.xLarge,
  }))
