import element from '~/components/core/element'

export default element
  .config({ name: 'base/Icon' })
  .attrs<{ name: string }>(({ name = 'analytics' }) => ({
    block: true,
    tag: 'span',
    dangerouslySetInnerHTML: {
      __html: require(`~/assets/icons/${name}.svg?include`),
    },
  }))
  .theme((t) => ({
    backgroundColor: t.color.transparent,
    color: t.color.dark.base,
  }))
  .sizes({
    small: {
      size: 20,
    },
    medium: {
      size: 32,
    },
    large: {
      size: 72,
    },
    xLarge: {
      size: 96,
    },
  })
  .variants((t) => ({
    circle: {
      backgroundColor: t.isDark ? t.color.light[200] : t.color.dark.base,
    },
  }))
  .styles(
    (css) => css`
      & > svg {
        width: 100%;
        height: auto;

        & * {
          fill: currentColor;
        }
      }
    `
  )