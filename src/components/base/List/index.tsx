import { list } from '~/components/core'
import Item from './Item'

export { Item }

export default list
  .config({ name: 'base/List', component: Item })
  .attrs({
    tag: 'ul',
    block: true,
    contentAlignX: 'block',
  })
  .theme({
    fontWeight: 300,
  })
