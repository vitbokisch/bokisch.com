import { types as t } from 'mobx-state-tree'

const model = t
  .model('runtime/Theme', {
    variant: t.enumeration(['light', 'dark']),
  })
  .views((self) => ({
    get isDark() {
      return self.variant === 'dark'
    },
  }))
  .actions((self) => ({
    setTheme: (theme: string) => {
      self.variant = theme
    },
    toggleTheme: () => {
      if (self.variant === 'light') self.variant = 'dark'
      else self.variant = 'light'
    },
  }))

export default model
