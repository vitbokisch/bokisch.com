import { Text } from '@vitus-labs/elements'
import element from './element'

export default element
  .config({
    component: Text,
    name: 'core/Element',
  })
  .theme((t) => ({
    lineHeight: t.lineHeight.base,
    fontFamily: t.fontFamily.base,
    margin: t.space.reset,
    padding: t.space.reset,
    fontWeight: 300,
  }))
  .multiple({
    left: {
      textAlign: 'left',
    },
    centered: {
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
  })
