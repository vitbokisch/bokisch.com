import type { ComponentProps, ComponentType } from 'react'
import type { ListProps } from '@vitus-labs/elements'
import { list } from '~/components/core'
import Icon from '../Icon'

export { Icon }

const IconList = list.config({ name: 'base/IconList' }).attrs({
  component: Icon,
  contentDirection: 'inline',
})

type Props = Omit<ComponentProps<typeof IconList>, 'component'> & {
  component?: ListProps['component']
}

export default IconList as unknown as ComponentType<Props>
