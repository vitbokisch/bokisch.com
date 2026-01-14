import { types as t } from 'mobx-state-tree'
import theme from './theme'

const model = t.model('Runtime', {
  theme: t.optional(theme, {}),
})

export default model
