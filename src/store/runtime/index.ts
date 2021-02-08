import { types as t } from 'mobx-state-tree'
import theme from './theme'
import menu from './menu'

const model = t.model('Runtime', {
  theme,
  menu,
})

export default model
