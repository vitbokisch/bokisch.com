import element from '~/components/core/element'

export default element
  .config({
    name: 'base/List/Item',
  })
  .attrs({
    block: true,
    tag: 'li',
    contentAlignX: 'block',
    contentDirection: 'rows',
  })
  .theme({
    listStyleType: 'none',
  })
  .variants((t) => ({
    centered: {
      textAlign: 'center',
    },
  }))
