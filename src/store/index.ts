import { useMemo } from 'react'
import { observer } from 'mobx-react'
import {
  applySnapshot,
  type Instance,
  type SnapshotIn,
  type SnapshotOut,
  types as t,
} from 'mobx-state-tree'
import runtime from './runtime'

let store: IStore | undefined

const Store = t.model('Store', {
  runtime: t.optional(runtime, {}),
})

export type IStore = Instance<typeof Store>
export type IStoreSnapshotIn = SnapshotIn<typeof Store>
export type IStoreSnapshotOut = SnapshotOut<typeof Store>

function initializeStore(snapshot: IStoreSnapshotIn | null = null) {
  const _store = store ?? Store.create({})

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

type UseStore = (
  initialState?: IStoreSnapshotIn | null | undefined,
) => ReturnType<typeof initializeStore>
const useStore: UseStore = (initialState) => {
  const store = useMemo(
    () => initializeStore(initialState || null),
    [initialState],
  )
  return store
}

export { observer, initializeStore, useStore }
