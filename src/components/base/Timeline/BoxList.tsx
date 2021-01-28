import list from '~/components/core/list'
import Wrapper from './Wrapper'
import Box from './Box'

export default list
  .config({ name: 'base/Timeline/BoxList' })
  .attrs({ component: Box, wrapComponent: Wrapper })
