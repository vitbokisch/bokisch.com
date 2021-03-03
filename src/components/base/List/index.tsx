import { list } from '~/components/core'
import Item from './Item'

export { Item }

export default list
  .config({ name: 'base/List' })
  .attrs({
    tag: 'ul',
    block: true,
    component: Item,
    contentAlignX: 'block',
  })
  .theme({
    fontWeight: 300,
  })
