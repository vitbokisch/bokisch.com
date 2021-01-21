import text from '~/components/core/text'

export default text
  .config({
    name: 'base/Text',
  })
  .theme((t) => ({
    fontSize: t.fontSize.base,
    lineHeight: t.lineHeight.base,
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
