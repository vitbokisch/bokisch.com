import list from '~/components/core/list'
import Item from './Item'

export default list.config({ name: 'base/List' }).attrs({
  tag: 'ul',
  component: Item,
  contentAlignX: 'block',
  itemProps: () => ({ centered: true }),
})
