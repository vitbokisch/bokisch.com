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
  .states((t, css) => ({
    primary: {
      backgroundColor: t.color.light[100],
    },
    secondary: {
      backgroundColor: t.color.light[200],
    },
    triangle: {
      position: 'absolute',
      extendCss: css`
        background: linear-gradient(143.05deg, #f7fcff 22.41%, #d6f1ff 158.6%);
        clip-path: polygon(0 0, 100% 15%, 100% 85%, 0% 100%);
        inset: 150px 0px 0px;
        z-index: -1;
      `,
    },
  }))
