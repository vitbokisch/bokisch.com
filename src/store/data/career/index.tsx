import { types as t } from 'mobx-state-tree'
import mockup from './data'

type Writeable<T> = { -readonly [P in keyof T]: T[P] }

const TYPES = ['work', 'sideProject', 'internship', 'education'] as const

const STATES = {
  work: 'primary',
  sideProject: 'secondary',
  internship: 'tertiary',
  education: 'neutral',
} as const

const Item = t
  .model('career/Item', {
    company: t.string,
    date: t.string,
    type: t.enumeration('type', TYPES as Writeable<typeof TYPES>),
    position: t.string,
    responsibilities: t.array(t.string),
  })
  .views((self) => ({
    get state() {
      return STATES[self.type]
    },
  }))

export { mockup }

const model = t
  .model('career/Model', {
    data: t.array(Item),
    filter: t.maybeNull(
      t.enumeration('filter', TYPES as Writeable<typeof TYPES>)
    ),
  })
  .views((self) => ({
    get dataByType() {
      if (!self.filter) return self.data
      return self.data.filter((item) => item.type === self.filter)
    },
  }))
  .actions((self) => ({
    setFilter: (level: (typeof TYPES)[number]) => {
      if (level === self.filter) self.filter = null
      else self.filter = level
    },
  }))

export default t.snapshotProcessor(model, {
  preProcessor(sn: any) {
    return { data: sn }
  },
})
