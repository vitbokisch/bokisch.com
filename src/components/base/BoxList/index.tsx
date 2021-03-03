import { list } from '~/components/core'
import Box from '../Box'

export { Box }

export default list.config({ name: 'base/BoxList' }).attrs({
  component: Box,
  rootElement: false,
  contentDirection: 'inline',
})
