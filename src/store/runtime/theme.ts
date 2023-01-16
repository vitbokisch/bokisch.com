import { types as t } from 'mobx-state-tree'
import { STORAGE } from '~/config/constants'

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
      window.localStorage.setItem(STORAGE.THEME, theme)
    },
  }))
  .actions((self) => ({
    toggleTheme: () => {
      if (self.variant === 'light') self.setTheme('dark')
      else self.setTheme('light')
    },
  }))

export default model
