import { link } from '~/components/core'

export default link
  .config({ name: 'base/Button' })
  .theme((t) => ({
    height: 48,
    fontSize: t.fontSize.base,
    paddingX: t.space.large,
    borderRadius: t.borderRadius.base,
    borderWidth: t.borderWidth.base,
    borderStyle: t.borderStyle.base,
    textAlign: 'center',
  }))
  .states((t) => ({
    primary: {
      color: t.color.light.base,
      backgroundColor: t.color.primary.base,
      borderColor: t.color.primary.base,

      hover: {
        color: t.color.light.base,
        backgroundColor: t.color.primary.medium,
        borderColor: t.color.primary.medium,
      },
      active: {
        color: t.color.light.base,
        backgroundColor: t.color.primary.dark,
        borderColor: t.color.primary.dark,
      },
    },
  }))
