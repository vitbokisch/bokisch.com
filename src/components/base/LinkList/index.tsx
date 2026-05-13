import list, { Item as wrapComponent } from '../List'
import Link from './Item'

export { Link }

export default list
  .config({ name: 'base/LinkList', component: Link })
  .attrs(({ rootElement }) => ({
    block: true,
    tag: 'ul',
    wrapComponent: rootElement === false ? undefined : wrapComponent,
    contentAlignX: 'block',
  }))
