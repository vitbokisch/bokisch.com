import element from '~/components/core/element'

export default element
  .config({ name: 'base/Button' })
  .attrs<{ href?: string; onClick?: MouseEvent }>(({ href, onClick }) => {
    const isLink = !!href
    const isStatic = !!href || !!onClick
    const dynamicTag = isLink ? 'a' : 'button'

    const tag = isStatic ? 'span' : dynamicTag

    return {
      tag,
    }
  })
  .theme((t) => ({
    height: 48,
    fontSize: t.fontSize.base,
    paddingX: t.space.large,
    borderRadius: t.borderRadius.base,
    color: t.color.light.base,
    borderWidth: t.borderWidth.base,
    borderStyle: 'solid',
    backgroundColor: t.color.primary.base,
    borderColor: t.color.primary.base,
    textAlign: 'center',
    outline: 'none',

    hover: {
      backgroundColor: t.color.primary.medium,
      borderColor: t.color.primary.medium,
    },
    active: {
      backgroundColor: t.color.primary.dark,
      borderColor: t.color.primary.dark,
    },
  }))
  .states((t) => ({
    primary: {
      backgroundColor: t.color.primary.base,
      borderColor: t.color.primary.base,

      hover: {
        backgroundColor: t.color.primary.medium,
        borderColor: t.color.primary.medium,
      },
      active: {
        backgroundColor: t.color.primary.dark,
        borderColor: t.color.primary.dark,
      },
    },
    secondary: {
      backgroundColor: t.color.secondary.base,
      borderColor: t.color.secondary.base,

      hover: {
        backgroundColor: t.color.secondary.medium,
        borderColor: t.color.secondary.medium,
      },
      active: {
        backgroundColor: t.color.secondary.dark,
        borderColor: t.color.secondary.dark,
      },
    },
    tertiary: {
      backgroundColor: t.color.tertiary.base,
      borderColor: t.color.tertiary.base,

      hover: {
        backgroundColor: t.color.tertiary.medium,
        borderColor: t.color.tertiary.medium,
      },
      active: {
        backgroundColor: t.color.tertiary.dark,
        borderColor: t.color.tertiary.dark,
      },
    },
    neutral: {
      backgroundColor: t.color.neutral.base,
      borderColor: t.color.neutral.base,

      hover: {
        backgroundColor: t.color.neutral.medium,
        borderColor: t.color.neutral.medium,
      },
      active: {
        backgroundColor: t.color.neutral.dark,
        borderColor: t.color.neutral.dark,
      },
    },
  }))
