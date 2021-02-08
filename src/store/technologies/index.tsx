import { types as t } from 'mobx-state-tree'
import mockup from './data'

const Item = t.model('technologies/Item', {
  title: t.string,
  level: t.number,
  link: t.maybeNull(t.string),
})

export { mockup }

const model = t.model('technologies/Model', {
  data: t.array(Item),
})

export default t.snapshotProcessor(model, {
  preProcessor(sn) {
    return { data: sn }
  },
})
