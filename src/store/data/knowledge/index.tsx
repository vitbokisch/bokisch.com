import { types as t } from 'mobx-state-tree'
import mockup from './data'

const DataItem = t.model('knowledge/DataItem', {
  label: t.string,
  level: t.number,
})

const Item = t.model('knowledge/Item', {
  title: t.string,
  state: t.enumeration(['primary', 'secondary', 'tertiary', 'neutral']),
  data: t.array(DataItem),
})

export { mockup }

const model = t.model('knowledge/Model', {
  data: t.array(Item),
})

export default t.snapshotProcessor(model, {
  preProcessor(sn) {
    return { data: sn }
  },
})
