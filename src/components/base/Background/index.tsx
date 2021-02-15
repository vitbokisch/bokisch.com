import element from '~/components/core/element'

export default element
  .config({ name: 'base/Background' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
  })
  .theme((t) => ({
    margin: t.space.reset,
    padding: t.space.reset,
  }))
  .states((t) => ({
    primary: {
      backgroundColor: t.isDark ? t.color.dark.base : t.color.light.base,
    },
    secondary: {
      backgroundColor: t.isDark ? t.color.dark[100] : t.color.light[100],
    },
    gradient: {
      background: t.isDark ? t.gradient.base.dark : t.gradient.base.light,
    },
    overlay: {
      fullScreen: true,
      position: 'absolute',
      background: `linear-gradient(
        281.95deg,
        rgba(0, 0, 0, 0.5) 1.84%,
        rgba(0, 0, 0, 0.37) 98.24%
      )`,
    },
    triangle: {
      position: 'absolute',
      background: t.isDark
        ? t.gradient.triangle.dark
        : t.gradient.triangle.light,
      clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)',
      inset: '150px 0px 0px',
    },
  }))
