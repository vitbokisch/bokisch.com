import { link } from '~/components/core'
import loadIcon, { type Props } from './loadIcon'

export default link
  .config({ name: 'base/Icon' })
  .compose({ loadIcon })
  .attrs<Props & { role?: string }>({
    role: 'img',
  })
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
