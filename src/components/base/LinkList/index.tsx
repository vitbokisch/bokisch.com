import type { ComponentProps, ComponentType } from 'react'
import type { ListProps } from '@vitus-labs/elements'
import { list, Item as wrapComponent } from '../List'
import Link from './Item'

export { Link }

const LinkList = list
  .config({ name: 'base/LinkList' })
  .attrs(({ rootElement }) => ({
    block: true,
    tag: 'ul',
    component: Link,
    wrapComponent: rootElement === false ? undefined : wrapComponent,
    contentAlignX: 'block',
  }))

type Props = Omit<ComponentProps<typeof LinkList>, 'component'> & {
  component?: ListProps['component']
}

export default LinkList as unknown as ComponentType<Props>
