import { list } from '~/components/core'
import Card from '../Card'

export { Card }

export default list
  .config({ name: 'base/CardList' })
  .attrs({ rootElement: false, component: Card })
