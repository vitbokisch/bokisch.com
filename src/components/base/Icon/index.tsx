import link from '~/components/core/link'

export default link
  .config({ name: 'base/Icon' })
  .attrs<{ name: string }>(({ name }) => ({
    block: true,
    dangerouslySetInnerHTML: name
      ? {
          __html: require(`~/assets/icons/${name}.svg?include`),
        }
      : undefined,
  }))
  .theme((t) => ({
    backgroundColor: t.color.transparent,
    color: t.isDark ? t.color.light.base : t.color.dark.base,
    hover: {
      color: t.isDark ? t.color.tertiary.base : t.color.tertiary.base,
    },
    active: {
      color: t.isDark ? t.color.tertiary.medium : t.color.tertiary.medium,
    },
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
