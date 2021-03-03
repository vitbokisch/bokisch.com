import { element } from '~/components/core'

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
  .variants({
    centered: {
      textAlign: 'center',
    },
  })
