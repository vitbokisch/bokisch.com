import list, { Item as wrapComponent } from '../List'
import link from '../Link'

const Link = link.attrs({
  block: true,
})

export { Link }

export default list
  .config({ name: 'base/LinkList' })
  .attrs(({ rootElement }) => ({
    block: true,
    tag: 'ul',
    wrapComponent: rootElement === false ? undefined : wrapComponent,
    component: Link,
    contentAlignX: 'block',
  }))
