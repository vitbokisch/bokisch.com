import list, { Item as wrapComponent } from '../List'
import Link from './Item'

export { Link }

export default list
  .config({ name: 'base/LinkList' })
  .attrs(({ rootElement }) => ({
    block: true,
    tag: 'ul' as const,
    component: Link,
    wrapComponent: rootElement === false ? undefined : wrapComponent,
    contentAlignX: 'block' as const,
  }))
