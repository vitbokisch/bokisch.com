import { types as t } from 'mobx-state-tree'

const model = t
  .model('runtime/Viewport', {
    height: t.optional(t.number, 0),
    width: t.optional(t.number, 0),
  })
  .actions((self) => ({
    setSizes: ({ height, width }: any) => {
      self.height = height
      self.width = width
    },
  }))

export default model
