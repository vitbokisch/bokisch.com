import { list } from '~/components/core'
import Tab from '../Tab'

export { Tab }

export default list
  .config({
    name: 'base/TabList',
  })
  .attrs({
    block: true,
    contentDirection: 'inline',
    component: Tab,
  })
