import text from '~/components/core/text'

export default text
  .config({
    name: 'base/Text',
  })
  .theme((t) => ({
    fontSize: t.fontSize.base,
    lineHeight: t.lineHeight.base,
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary.base,
    },
    secondary: {
      color: t.color.secondary.base,
    },
    tertiary: {
      color: t.color.tertiary.base,
    },
    neutral: {
      color: t.color.neutral.base,
    },
  }))
  .sizes((t) => ({
    small: {
      fontSize: t.fontSize.small,
    },
    large: {
      fontSize: t.fontSize.medium,
    },
    xLarge: {
      fontSize: t.fontSize.xLarge,
    },
  }))
