import element from '~/components/core/element'

export default element
  .config({ name: 'base/Symbol' })
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
  .theme({
    size: 12,
  })
  .sizes((t) => ({
    large: {
      size: 44,
    },
  }))
