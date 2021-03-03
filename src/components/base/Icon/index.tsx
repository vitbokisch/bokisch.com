import { link } from '~/components/core'

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
      size: { xs: 16, md: 20 },
    },
    medium: {
      size: { xs: 24, md: 32 },
    },
    large: {
      size: 72,
    },
    xLarge: {
      size: { xs: 64, md: 80, lg: 96 },
    },
  })
  .variants((t, m) => ({
    circle: {
      backgroundColor: m(t.color.dark.base, t.color.light[200]),
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
