import { types as t } from 'mobx-state-tree'

type Sizes = {
  width: number
  height: number
}

const model = t
  .model('runtime/Viewport', {
    height: t.optional(t.number, 0),
    width: t.optional(t.number, 0),
  })
  .actions((self) => ({
    setSizes: ({ height, width }: Sizes) => {
      self.height = height
      self.width = width
    },
  }))

export default model
