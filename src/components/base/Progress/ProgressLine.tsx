import element from '~/components/core/element'

export default element
  .config({ name: 'base/Progress/ProgressLine' })
  .attrs({ block: true, tag: 'span' })
  .theme((t) => ({
    width: '100%',
    height: 2,
    backgroundColor: t.isDark ? t.color.dark[200] : t.color.light[200],
  }))
  .states((t) => ({
    primary: {
      backgroundColor: t.color.primary.base,
    },
    secondary: {
      backgroundColor: t.color.secondary.base,
    },
    tertiary: {
      backgroundColor: t.color.tertiary.base,
    },
    neutral: {
      backgroundColor: t.color.neutral.base,
    },
  }))
  .sizes({
    level0: {
      width: 0,
    },
    level1: {
      width: '10%',
    },
    level2: {
      width: '20%',
    },
    level3: {
      width: '30%',
    },
    level4: {
      width: '40%',
    },
    level5: {
      width: '50%',
    },
    level6: {
      width: '60%',
    },
    level7: {
      width: '70%',
    },
    level8: {
      width: '80%',
    },
    level9: {
      width: '90%',
    },
    level10: {
      width: '100%',
    },
  })
