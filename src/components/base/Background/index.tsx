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
      backgroundColor: t.isDark ? t.color.dark.base : t.color.light.base,
    },
    secondary: {
      backgroundColor: t.isDark ? t.color.dark[100] : t.color.light[100],
    },
    triangle: {
      position: 'absolute',
      extendCss: t.isDark
        ? css`
            background: linear-gradient(
              143.05deg,
              #313d44 22.41%,
              #273034 158.6%
            );
            clip-path: polygon(0 0, 100% 15%, 100% 85%, 0% 100%);
            inset: 150px 0px 0px;
          `
        : css`
            background: linear-gradient(
              143.05deg,
              #f7fcff 22.41%,
              #d6f1ff 158.6%
            );
            clip-path: polygon(0 0, 100% 15%, 100% 85%, 0% 100%);
            inset: 150px 0px 0px;
          `,
    },
  }))
