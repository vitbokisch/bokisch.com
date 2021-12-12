import { types as t } from 'mobx-state-tree'
import mockup from './data'

const Item = t.model('career/Item', {
  company: t.string,
  date: t.string,
  type: t.number,
  position: t.string,
  responsibilities: t.array(t.string),
})

export { mockup }

const model = t
  .model('career/Model', {
    data: t.array(Item),
    filter: t.maybeNull(t.number),
  })
  .views((self) => ({
    get dataByType() {
      if (!self.filter) return self.data
      return self.data.filter((item) => item.type === self.filter)
    },
  }))
  .actions((self) => ({
    setFilter: (level: number) => {
      if (level === self.filter) self.filter = null
      else self.filter = level
    },
  }))

export default t.snapshotProcessor(model, {
  preProcessor(sn: any) {
    return { data: sn }
  },
})
