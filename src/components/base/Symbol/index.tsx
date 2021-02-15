import element from '~/components/core/element'

const Component = element
  .config({ name: 'base/Symbol' })
  .attrs<{ large?: boolean }>(({ large }) => ({
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
        backgroundColor: t.color.primary.medium,
      },
      active: {
        backgroundColor: t.color.primary.dark,
      },
    },
    secondary: {
      backgroundColor: t.color.secondary.base,

      hover: {
        backgroundColor: t.color.secondary.medium,
      },
      active: {
        backgroundColor: t.color.secondary.dark,
      },
    },
    tertiary: {
      backgroundColor: t.color.tertiary.base,

      hover: {
        backgroundColor: t.color.tertiary.medium,
      },
      active: {
        backgroundColor: t.color.tertiary.dark,
      },
    },
    neutral: {
      backgroundColor: t.color.neutral.base,

      hover: {
        backgroundColor: t.color.neutral.medium,
      },
      active: {
        backgroundColor: t.color.neutral.dark,
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
      borderColor: t.isDark ? '#000' : '#fff',
      borderStyle: 'solid',
    },
    large: {
      size: 44,
    },
  }))

export default Component
