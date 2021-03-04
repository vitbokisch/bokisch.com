import { link } from '~/components/core'

export default link
  .config({ name: 'base/Button' })
  .theme((t) => ({
    height: 48,
    fontSize: t.fontSize.base,
    paddingX: t.space.large,
    borderRadius: t.borderRadius.base,
    borderWidth: t.borderWidth.base,
    borderStyle: t.borderStyle.base,
    textAlign: 'center',
  }))
  .states((t) => ({
    primary: {
      color: t.color.light.base,
      backgroundColor: t.color.primary.base,
      borderColor: t.color.primary.base,

      hover: {
        color: t.color.light.base,
        backgroundColor: t.color.primary.medium,
        borderColor: t.color.primary.medium,
      },
      active: {
        color: t.color.light.base,
        backgroundColor: t.color.primary.dark,
        borderColor: t.color.primary.dark,
      },
    },
    secondary: {
      color: t.color.light.base,
      backgroundColor: t.color.secondary.base,
      borderColor: t.color.secondary.base,

      hover: {
        color: t.color.light.base,
        backgroundColor: t.color.secondary.medium,
        borderColor: t.color.secondary.medium,
      },
      active: {
        color: t.color.light.base,
        backgroundColor: t.color.secondary.dark,
        borderColor: t.color.secondary.dark,
      },
    },
    tertiary: {
      color: t.color.light.base,
      backgroundColor: t.color.tertiary.base,
      borderColor: t.color.tertiary.base,

      hover: {
        color: t.color.light.base,
        backgroundColor: t.color.tertiary.medium,
        borderColor: t.color.tertiary.medium,
      },
      active: {
        color: t.color.light.base,
        backgroundColor: t.color.tertiary.dark,
        borderColor: t.color.tertiary.dark,
      },
    },
    neutral: {
      color: t.color.light.base,
      backgroundColor: t.color.neutral.base,
      borderColor: t.color.neutral.base,

      hover: {
        color: t.color.light.base,
        backgroundColor: t.color.neutral.medium,
        borderColor: t.color.neutral.medium,
      },
      active: {
        color: t.color.light.base,
        backgroundColor: t.color.neutral.dark,
        borderColor: t.color.neutral.dark,
      },
    },
  }))
