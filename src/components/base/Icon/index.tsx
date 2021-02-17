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
  .theme((t, _, v) => ({
    backgroundColor: t.color.transparent,
    color: v(t.color.dark.base, t.color.light.base),
    hover: {
      color: v(t.color.tertiary.base, t.color.tertiary.base),
    },
    active: {
      color: v(t.color.tertiary.medium, t.color.tertiary.medium),
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
  .variants((t, _, v) => ({
    circle: {
      backgroundColor: v(t.color.dark.base, t.color.light[200]),
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
