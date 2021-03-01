import { types as t } from 'mobx-state-tree'
import mockup from './data'

const Item = t.model('career/Item', {
  company: t.string,
  date: t.string,
  position: t.string,
  responsibilities: t.array(t.string),
})

export { mockup }

const model = t.model('career/Model', {
  data: t.array(Item),
})

export default t.snapshotProcessor(model, {
  preProcessor(sn: any) {
    return { data: sn }
  },
})
