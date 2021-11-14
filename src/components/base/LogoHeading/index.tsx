import Text from '../Text'

export default Text.config({ name: 'base/LogoHeading' }).theme((t, m) => ({
  color: m(t.color.light[100], t.color.dark[100]),
  opacity: 0.6,
  textTransform: 'uppercase',
  fontSize: { xs: 10, sm: 12, lg: 18 },
  marginTop: { xs: 2, sm: 4, lg: 8 },
  fontWeight: 500,
}))
