import { list } from '~/components/core'
import Icon from '../Icon'

export { Icon }

export default list.config({ name: 'base/IconList', component: Icon }).attrs({
  contentDirection: 'inline',
})
