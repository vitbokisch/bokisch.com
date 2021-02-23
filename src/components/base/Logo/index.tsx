import element from '~/components/base/Element'
import Text from '../Text'

const Logo = element
  .config({ name: 'base/Logo' })
  .attrs({
    contentAlignX: 'left',
    contentAlignY: 'center',
    dangerouslySetInnerHTML: {
      __html: require(`~/assets/logo/logo-vit-bokisch.svg?include`),
    },
  })
  .theme((t, _, v) => ({
    width: { xs: 120, md: 250 },
    color: v(t.color.light.base, t.color.dark.base),
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

const LogoHeading = Text.attrs({
  label: 'Frontend Engineer | Architect | Innovator',
}).theme((t, _, v) => ({
  color: v(t.color.light[100], t.color.dark[100]),
  opacity: 0.6,
  textTransform: 'uppercase',
  fontSize: { xs: 10, sm: 12, md: 18 },
  marginTop: { xs: 2, sm: 4, md: 8 },
  fontWeight: 500,
}))

export { LogoHeading }

export default Logo
