import element from './element'
import { Text } from '@vitus-labs/elements'

export default element
  .config({
    component: Text,
    name: 'core/Element',
  })
  .theme((t) => ({
    lineHeight: t.lineHeight.base,
    color: t.isDark ? t.color.light.base : t.color.dark.base,
    fontFamily: t.fontFamily.base,
    margin: t.space.reset,
    padding: t.space.reset,
  }))
  .multiple((t) => ({
    left: {
      textAlign: 'left',
    },
    centered: {
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
  }))
