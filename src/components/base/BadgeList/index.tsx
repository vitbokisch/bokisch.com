import list from '~/components/core/list'
import Badge from '~/components/base/Badge'

export default list.config({ name: 'base/BadgeList' }).attrs({
  component: Badge,
  contentDirection: 'inline',
})
