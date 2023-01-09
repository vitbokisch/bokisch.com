/* eslint-disable global-require */
import { element } from '~/components/core'

export default element
  .config({ name: 'base/Logo' })
  .attrs({
    contentAlignX: 'left',
    contentAlignY: 'center',
    dangerouslySetInnerHTML: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      __html: require(`~/assets/logo/logo-vit-bokisch.svg?include`).default,
    },
  })
  .theme((t, m) => ({
    width: { xs: 120, sm: 180, lg: 250 },
    color: m(t.color.light.base, t.color.dark.base),
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
