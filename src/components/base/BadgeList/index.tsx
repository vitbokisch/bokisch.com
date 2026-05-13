import { list } from '~/components/core'
import Badge from '../Badge'

export { Badge }

export default list.config({ name: 'base/BadgeList' }).attrs({
  component: Badge,
  contentDirection: 'inline',
})
