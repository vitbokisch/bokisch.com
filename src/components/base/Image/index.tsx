import { element } from '~/components/core'
import NextImageComponent from './withPlaceholder'

type Props = {
  src?: string
  alt?: string
  placeholder?: boolean
  loading?: 'eager' | 'lazy'
}

export default element
  .config({ name: 'base/Image', component: NextImageComponent })
  .attrs<Props>({ loading: 'lazy' })
  .variants({
    responsive: {
      width: '100%',
      height: '100%',
      objectFit: 'scale-down',
    },
  })
