import { types as t } from 'mobx-state-tree'
import mockup from './data'

const Item = t.model('socials/Item', {
  type: t.string,
  username: t.string,
  link: t.maybeNull(t.string),
})

const model = t.model('socials/Model', {
  data: t.array(Item),
})

export { mockup }

export default t.snapshotProcessor(model, {
  preProcessor(sn) {
    return { data: sn }
  },
})
