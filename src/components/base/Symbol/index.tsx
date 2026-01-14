import { element } from '~/components/core'

const Component = element
  .config({ name: 'base/Symbol' })
  .attrs<{ large?: boolean }>(({ large }) => ({
    tag: 'span',
    contentAlignX: 'center',
    content: large ? <Component medium /> : undefined,
  }))
  .theme((t) => ({
    size: 12,
    borderRadius: t.borderRadius.extra,
    transition: t.transition.base,
  }))
  .states((t) => ({
    primary: {
      backgroundColor: t.color.primary.base,

      hover: {
        backgroundColor: t.color.primary.medium,
      },
      active: {
        backgroundColor: t.color.primary.dark,
      },
    },
  }))
  .sizes((t, m) => ({
    small: {
      size: 12,
    },
    medium: {
      size: 36,
      borderWidth: 4,
      borderColor: m(t.color.light.base, t.color.dark.base),
      borderStyle: 'solid',
    },
    large: {
      size: 44,
    },
  }))

export default Component
