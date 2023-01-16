import { types as t } from 'mobx-state-tree'
import { getDefaultTheme } from '~/utils/theme'

type Variant = ['light', 'dark'][number]

const model = t
  .model('runtime/Theme', {
    variant: t.optional(t.enumeration<Variant>(['light', 'dark']), 'light'),
  })
  .views((self) => ({
    get isDark() {
      return self.variant === 'dark'
    },
  }))
  .actions((self) => ({
    setTheme: (theme: Variant) => {
      self.variant = theme
    },
    toggleTheme: () => {
      if (self.variant === 'light') self.variant = 'dark'
      else self.variant = 'light'
    },
  }))
  .actions((self) => ({
    afterCreate() {
      self.setTheme(getDefaultTheme())
    },
  }))

export default model
