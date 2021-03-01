import list from '~/components/core/list'
import component from '../Tab'

export { component }

export default list
  .config({
    name: 'base/TabList',
  })
  .attrs({
    block: true,
    contentDirection: 'inline',
    component,
  })
