import list, { component as wrapComponent } from '../List'
import link from '../Link'

const component = link.attrs({
  block: true,
})

export { component }

export default list
  .config({ name: 'base/LinkList' })
  .attrs(({ rootElement }) => ({
    tag: 'ul',
    wrapComponent: rootElement ? wrapComponent : undefined,
    component,
    contentAlignX: 'block',
  }))
