import text from '~/components/core/text'

const getTag = ({ level1, level2, level3, level4, level5 }) => {
  if (level1) return 'h1'
  if (level2) return 'h2'
  if (level3) return 'h3'
  if (level4) return 'h4'
  if (level5) return 'h5'

  return 'span'
}

export default text
  .config({
    name: 'base/Heading',
  })
  .attrs((props) => {
    return {
      tag: getTag(props),
    }
  })
  .theme((t) => ({
    fontSize: t.fontSize.base,
    lineHeight: t.lineHeight.reset,
  }))
  .sizes((t) => ({
    level1: {
      fontSize: t.fontSize.jumbo,
    },
    level2: {
      fontSize: t.fontSize.xxLarge,
    },
    level3: {
      fontSize: t.fontSize.large,
    },
    level4: {
      fontSize: t.fontSize.medium,
    },
    level5: {
      fontSize: t.fontSize.base,
    },
  }))
  .variants((t) => ({
    indentLarge: {
      marginBottom: t.space.large,
    },
    indentMedium: {
      marginBottom: t.space.medium,
    },
    indentReset: {
      marginBottom: t.space.reset,
    },
  }))
