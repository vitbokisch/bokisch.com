import { useMemo } from 'react'
import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types as t,
} from 'mobx-state-tree'
import { observer } from 'mobx-react'
import runtime from './runtime'
import knowledge, { mockup as knowledgeMockup } from './data/knowledge'
import technologies, { mockup as technologiesMockup } from './data/technologies'
import contacts, { mockup as contactsMockup } from './data/contacts'
import career, { mockup as careerMockup } from './data/career'

const initialState = {
  runtime: { theme: { variant: 'light' }, menu: { isOpen: false } },
  knowledge: knowledgeMockup,
  technologies: technologiesMockup,
  career: careerMockup,
  contacts: contactsMockup,
}

let store: IStore | undefined

const Store = t.model('Store', {
  runtime,
  knowledge: t.maybeNull(knowledge),
  technologies: t.maybeNull(technologies),
  career: t.maybeNull(career),
  contacts: t.maybeNull(contacts),
})

export type IStore = Instance<typeof Store>
export type IStoreSnapshotIn = SnapshotIn<typeof Store>
export type IStoreSnapshotOut = SnapshotOut<typeof Store>

function initializeStore(snapshot = null) {
  const _store = store ?? Store.create(initialState as any)

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot)
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return store
}

function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export { observer, initializeStore, useStore }
