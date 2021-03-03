import list from '~/components/core/list'
import Icon from '../Icon'

export { Icon }

export default list.config({ name: 'base/IconList' }).attrs({
  component: Icon,
  contentDirection: 'inline',
})
