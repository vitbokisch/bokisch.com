import text from '~/components/core/text'

export default text
  .config({
    name: 'base/Text',
  })
  .theme((t) => ({
    lineHeight: t.lineHeight.base,
  }))
  .states((t, m) => ({
    base: {
      color: m(t.color.dark.base, t.color.light.base),
    },
    primary: {
      color: t.color.primary.base,
    },
  }))
  .sizes((t) => ({
    normal: {
      fontSize: { xs: t.fontSize.small, md: t.fontSize.base },
    },
    small: {
      fontSize: t.fontSize.small,
    },
    large: {
      fontSize: { xs: t.fontSize.base, md: t.fontSize.medium },
    },
    xLarge: {
      fontSize: { xs: t.fontSize.large, md: t.fontSize.xLarge },
    },
  }))
  .multiple({
    strong: {
      fontWeight: 500,
    },
    uppercase: {
      textTransform: 'uppercase',
    },
    italic: {
      fontStyle: 'italic',
    },
    noWrap: {
      whiteSpace: 'nowrap',
    },
  })
