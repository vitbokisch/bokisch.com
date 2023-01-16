import { types as t } from 'mobx-state-tree'
import theme from './theme'
import menu from './menu'
import viewport from './viewport'

const model = t.model('Runtime', {
  theme: t.optional(theme, {}),
  menu: t.optional(menu, {}),
  viewport: t.optional(viewport, {}),
})

export default model
