import element from './element'
import { Text } from '@vitus-labs/elements'

export default element
  .config({
    component: Text,
    name: 'core/Element',
  })
  .theme((t, _, v) => ({
    lineHeight: t.lineHeight.base,
    color: v(t.color.dark.base, t.color.light.base),
    fontFamily: t.fontFamily.base,
    margin: t.space.reset,
    padding: t.space.reset,
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
