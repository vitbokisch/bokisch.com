import element from '~/components/core/element'

export default element
  .config({ name: 'base/Image' })
  .attrs<{ src?: string; alt?: string }>({
    tag: 'img',
    alt: '',
  })
  .variants({
    responsive: {
      width: '100%',
      height: 'auto',
    },
  })
