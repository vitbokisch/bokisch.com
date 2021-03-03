import { element } from '~/components/core'

export default element
  .config({ name: 'base/Image' })
  .attrs<{ src?: string; alt?: string }>({
    tag: 'img',
    alt: '',
  })
  .variants({
    responsive: {
      width: '100%',
      height: '100%',
      objectFit: 'scale-down',
    },
  })
