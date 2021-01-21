import element from '~/components/core/element'

export default element
  .config({ name: 'base/Badge' })
  .theme((t) => ({
    height: 40,
    borderRadius: t.borderRadius.extra,
    fontSize: t.fontSize.base,
    paddingX: 12,
    backgroundColor: t.color.transparent,
    borderWidth: t.borderWidth.base,
    borderStyle: t.borderStyle.base,
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary.base,
      borderColor: t.color.primary.base,

      hover: {
        color: t.color.light.base,
        borderColor: t.color.primary.hover,
      },

      pressed: {
        color: t.color.light.base,
        borderColor: t.color.primary.pressed,
      },
    },
    secondary: {
      color: t.color.secondary.base,
      borderColor: t.color.secondary.base,

      hover: {
        color: t.color.light.base,
        borderColor: t.color.secondary.hover,
      },

      pressed: {
        color: t.color.light.base,
        borderColor: t.color.secondary.pressed,
      },
    },
    tertiary: {
      color: t.color.tertiary.base,
      borderColor: t.color.tertiary.base,

      hover: {
        color: t.color.light.base,
        borderColor: t.color.tertiary.hover,
      },

      pressed: {
        color: t.color.light.base,
        borderColor: t.color.tertiary.pressed,
      },
    },
    neutral: {
      color: t.color.neutral.base,
      borderColor: t.color.neutral.base,

      hover: {
        color: t.color.light.base,
        borderColor: t.color.neutral.hover,
      },

      pressed: {
        color: t.color.light.base,
        borderColor: t.color.neutral.pressed,
      },
    },
  }))
