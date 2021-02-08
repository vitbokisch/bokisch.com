import list from '~/components/core/list'
import Box from '~/components/base/Box'

export default list.config({ name: 'base/BoxList' }).attrs({
  component: Box,
  rootElement: false,
  contentDirection: 'inline',
})
