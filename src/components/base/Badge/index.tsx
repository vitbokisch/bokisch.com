import element from '~/components/core/element'

export default element
  .config({ name: 'base/Badge' })
  .theme((t) => ({
    height: 40,
    borderRadius: t.borderRadius.extra,
    fontSize: t.fontSize.base,
    paddingX: t.space.small,
    backgroundColor: t.color.transparent,
    borderWidth: t.borderWidth.base,
    borderStyle: t.borderStyle.base,
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary.base,
      borderColor: t.color.primary.base,

      hover: {
        color: t.color.primary.medium,
        borderColor: t.color.primary.medium,
      },

      pressed: {
        color: t.color.primary.dark,
        borderColor: t.color.primary.dark,
      },
    },
    secondary: {
      color: t.color.secondary.base,
      borderColor: t.color.secondary.base,

      hover: {
        color: t.color.secondary.medium,
        borderColor: t.color.secondary.medium,
      },

      pressed: {
        color: t.color.secondary.dark,
        borderColor: t.color.secondary.dark,
      },
    },
    tertiary: {
      color: t.color.tertiary.base,
      borderColor: t.color.tertiary.base,

      hover: {
        color: t.color.tertiary.medium,
        borderColor: t.color.tertiary.medium,
      },

      pressed: {
        color: t.color.tertiary.dark,
        borderColor: t.color.tertiary.dark,
      },
    },
    neutral: {
      color: t.color.neutral.base,
      borderColor: t.color.neutral.base,

      hover: {
        color: t.color.neutral.medium,
        borderColor: t.color.neutral.medium,
      },

      pressed: {
        color: t.color.neutral.dark,
        borderColor: t.color.neutral.dark,
      },
    },
  }))
