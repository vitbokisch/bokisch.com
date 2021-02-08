import { types as t } from 'mobx-state-tree'

const model = t
  .model('runtime/Menu', {
    isOpen: t.boolean,
  })
  .actions((self) => ({
    openMenu: () => {
      self.isOpen = true
    },
    closeMenu: () => {
      self.isOpen = false
    },
  }))
  .actions((self) => ({
    toggleMenu: () => {
      self.isOpen ? self.closeMenu() : self.openMenu()
    },
  }))

export default model
