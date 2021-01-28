import element from '~/components/core/element'

export default element
  .config({
    name: 'base/List/Item',
  })
  .attrs({
    block: true,
    tag: 'li',
    contentAlignX: 'center',
  })
  .variants((t) => ({
    centered: {
      textAlign: 'center',
    },
  }))
