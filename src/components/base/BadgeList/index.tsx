import { list } from '~/components/core'
import Badge from '../Badge'

export { Badge }

export default list.config({ name: 'base/BadgeList', component: Badge }).attrs({
  contentDirection: 'inline',
})
