import { useMemo } from 'react'
import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types as t,
} from 'mobx-state-tree'
import { observer } from 'mobx-react-lite'
import knowledge, { mockup as knowledgeMockup } from './knowledge'
import technologies, { mockup as technologiesMockup } from './technologies'

const initialState = {
  knowledge: knowledgeMockup,
  technologies: technologiesMockup,
}

let store: IStore | undefined

const Store = t.model('Store', {
  knowledge: t.maybeNull(knowledge),
  technologies: t.maybeNull(technologies),
})

export type IStore = Instance<typeof Store>
export type IStoreSnapshotIn = SnapshotIn<typeof Store>
export type IStoreSnapshotOut = SnapshotOut<typeof Store>

function initializeStore(snapshot = null) {
  const _store = store ?? Store.create(initialState)

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
