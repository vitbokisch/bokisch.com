import { element } from '~/components/core'

export default element
  .config({ name: 'base/Background' })
  .attrs({
    block: true,
    contentAlignY: 'top',
    contentAlignX: 'block',
  })
  .theme((t) => ({
    margin: t.space.reset,
    padding: t.space.reset,
  }))
  .states((t, m) => ({
    primary: {
      backgroundColor: m(t.color.light.base, t.color.dark.base),
    },
    secondary: {
      backgroundColor: m(t.color.light[100], t.color.dark[100]),
    },
    gradient: {
      background: m(t.gradient.base.light, t.gradient.base.dark),
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
      background: m(t.gradient.triangle.light, t.gradient.triangle.dark),
      clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0 100%)',
      top: '150px',
      left: 0,
      right: 0,
      bottom: 0,
    },
  }))
