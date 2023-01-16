import { types as t } from 'mobx-state-tree'

const model = t
  .model('runtime/Menu', {
    isOpen: t.optional(t.boolean, false),
  })
  .actions((self) => ({
    openMenu: () => {
      self.isOpen = true
    },
    closeMenu: () => {
      self.isOpen = false
    },
    toggleMenu: () => {
      self.isOpen = !self.isOpen
    },
  }))

export default model
