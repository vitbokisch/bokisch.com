import { element } from '~/components/core'

export default element
  .config({
    name: 'base/skeleton/Root',
  })
  .attrs({
    block: true,
    contentAlignX: 'block',
  })
  .theme({
    width: '100vw',
    overflowX: 'hidden',
  })
