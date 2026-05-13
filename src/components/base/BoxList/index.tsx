import { list } from '~/components/core'
import Box from '../Box'

export { Box }

export default list.config({ name: 'base/BoxList', component: Box }).attrs({
  rootElement: false,
  contentDirection: 'inline',
})
