import list, { component as wrapComponent } from '../List'
import link from '../Link'

const component = link.attrs({
  block: true,
})

export { component }

export default list
  .config({ name: 'base/LinkList' })
  .attrs(({ rootElement }) => ({
    block: true,
    tag: 'ul',
    wrapComponent: rootElement === false ? undefined : wrapComponent,
    component,
    contentAlignX: 'block',
  }))
