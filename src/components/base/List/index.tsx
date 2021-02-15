import list from '~/components/core/list'
import component from './Item'

export { component }

export default list.config({ name: 'base/List' }).attrs({
  tag: 'ul',
  block: true,
  component,
  contentAlignX: 'block',
})
