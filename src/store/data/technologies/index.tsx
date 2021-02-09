import { types as t } from 'mobx-state-tree'
import mockup from './data'

const Item = t.model('technologies/Item', {
  title: t.string,
  level: t.number,
  link: t.maybeNull(t.string),
})

export { mockup }

const model = t
  .model('technologies/Model', {
    data: t.array(Item),
    filter: t.maybeNull(t.number),
  })
  .views((self) => ({
    // get allLevels() {
    //   return self.data.map((item) => item.level === self.filter)
    // },
    get dataByLevel() {
      if (!self.filter) return self.data
      return self.data.filter((item) => item.level === self.filter)
    },
  }))
  .actions((self) => ({
    setFilter: (level: number) => {
      if (level === self.filter) self.filter = null
      else self.filter = level
    },
  }))

export default t.snapshotProcessor(model, {
  preProcessor(sn) {
    return { data: sn }
  },
})
