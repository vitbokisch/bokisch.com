import list from '~/components/core/list'
import component from '../Link'

export { component }

export default list.config({ name: 'base/LinkList' }).attrs({
  tag: 'ul',
  component,
  contentAlignX: 'block',
})
