import link from '../../Link'
import filterProps from './hoc'

export default link
  .attrs({
    block: true,
  })
  .compose({
    filterProps,
  })
