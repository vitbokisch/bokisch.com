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
      size: { xs: 64, md: 80, lg: 96 },
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
