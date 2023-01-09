import { element } from '~/components/core'
import withPlaceholder from './withPlaceholder'

type Props = {
  src?: string
  alt?: string
  placeholder?: boolean
  loading?: 'eager' | 'lazy'
}

export default element
  .config({ name: 'base/Image', component: 'img' })
  .compose({ withPlaceholder })
  .attrs<Props>({ loading: 'lazy' })
  .variants({
    responsive: {
      width: '100%',
      height: '100%',
      objectFit: 'scale-down',
    },
  })
