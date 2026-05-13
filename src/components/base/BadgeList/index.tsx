import type { ComponentProps, ComponentType } from 'react'
import type { ListProps } from '@vitus-labs/elements'
import { list } from '~/components/core'
import Badge from '../Badge'

export { Badge }

const BadgeList = list.config({ name: 'base/BadgeList' }).attrs({
  component: Badge,
  contentDirection: 'inline',
})

type Props = Omit<ComponentProps<typeof BadgeList>, 'component'> & {
  component?: ListProps['component']
}

export default BadgeList as unknown as ComponentType<Props>
