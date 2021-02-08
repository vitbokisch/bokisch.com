import element from '~/components/core/element'

export default element
  .config({
    name: 'base/skeleton/Root',
  })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
  })
  .theme({
    overflowX: 'hidden',
  })
