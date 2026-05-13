import type { ComponentProps, ComponentType } from 'react'
import type { ListProps } from '@vitus-labs/elements'
import { list } from '~/components/core'
import Card from '../Card'

export { Card }

const CardList = list
  .config({ name: 'base/CardList' })
  .attrs({ component: Card, rootElement: false })

type Props = Omit<ComponentProps<typeof CardList>, 'component'> & {
  component?: ListProps['component']
}

export default CardList as unknown as ComponentType<Props>
