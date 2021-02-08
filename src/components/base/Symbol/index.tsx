import element from '~/components/core/element'

const Component = element
  .config({ name: 'base/Symbol' })
  .attrs(({ large }) => ({
    tag: 'span',
    contentAlignX: 'center',
    content: large ? <Component medium /> : undefined,
  }))
  .theme((t) => ({
    borderRadius: t.borderRadius.extra,
    size: 12,
  }))
  .states((t) => ({
    primary: {
      backgroundColor: t.color.primary.base,

      hover: {
        backgroundColor: t.color.primary.hover,
      },
      pressed: {
        backgroundColor: t.color.primary.pressed,
      },
    },
    secondary: {
      backgroundColor: t.color.secondary.base,

      hover: {
        backgroundColor: t.color.secondary.hover,
      },
      pressed: {
        backgroundColor: t.color.secondary.pressed,
      },
    },
    tertiary: {
      backgroundColor: t.color.tertiary.base,

      hover: {
        backgroundColor: t.color.tertiary.hover,
      },
      pressed: {
        backgroundColor: t.color.tertiary.pressed,
      },
    },
    neutral: {
      backgroundColor: t.color.neutral.base,

      hover: {
        backgroundColor: t.color.neutral.hover,
      },
      pressed: {
        backgroundColor: t.color.neutral.pressed,
      },
    },
  }))
  .sizes((t) => ({
    small: {
      size: 12,
    },
    medium: {
      size: 36,
      borderWidth: 4,
      borderColor: '#fff',
      borderStyle: 'solid',
    },
    large: {
      size: 44,
    },
  }))

export default Component
