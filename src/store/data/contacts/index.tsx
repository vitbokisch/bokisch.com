import { types as t } from 'mobx-state-tree'
import mockup from './data'

const Item = t.model('socials/Item', {
  type: t.string,
  username: t.string,
  link: t.maybeNull(t.string),
  label: t.string,
})

const model = t
  .model('socials/Model', {
    data: t.array(Item),
  })
  .views((self) => ({
    pickDataByType(types?: Array<string>) {
      if (!types) return self.data
      return self.data.filter((item) => types.includes(item.type))
    },
  }))

export { mockup }

export default t.snapshotProcessor(model, {
  preProcessor(sn: any) {
    return { data: sn }
  },
})
