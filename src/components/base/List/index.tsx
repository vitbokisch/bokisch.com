import type { ComponentProps, ComponentType } from 'react'
import type { ListProps } from '@vitus-labs/elements'
import { list as listChain } from '~/components/core'
import Item from './Item'

export { Item }

export const list = listChain
  .config({ name: 'base/List' })
  .attrs({
    tag: 'ul',
    block: true,
    component: Item,
    contentAlignX: 'block',
  })
  .theme({
    fontWeight: 300,
  })

type Props = Omit<ComponentProps<typeof list>, 'component'> & {
  component?: ListProps['component']
}

export default list as unknown as ComponentType<Props>
